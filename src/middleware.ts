import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const IV_LENGTH = 12;

async function decrypt(data: string, keyHex: string) {
  // Конвертируем ключ из hex в Uint8Array
  const keyBytes = new Uint8Array(
    keyHex.match(/.{2}/g)!.map((byte) => parseInt(byte, 16))
  );

  // Декодируем base64 в Uint8Array
  const rawData = Uint8Array.from(atob(data), (c) => c.charCodeAt(0));

  const iv = rawData.slice(0, IV_LENGTH);
  const tag = rawData.slice(IV_LENGTH, IV_LENGTH + 16);
  const encrypted = rawData.slice(IV_LENGTH + 16);

  // Web Crypto API ожидает тег аутентификации в конце зашифрованных данных
  const encryptedWithTag = new Uint8Array(encrypted.length + tag.length);
  encryptedWithTag.set(encrypted);
  encryptedWithTag.set(tag, encrypted.length);

  const cryptoKey = await crypto.subtle.importKey(
    "raw",
    keyBytes.buffer,
    "AES-GCM",
    false,
    ["decrypt"]
  );

  const decryptedBuffer = await crypto.subtle.decrypt(
    {
      name: "AES-GCM",
      iv: iv,
    },
    cryptoKey,
    encryptedWithTag
  );

  return new TextDecoder().decode(decryptedBuffer);
}

export async function middleware(req: NextRequest) {
  const encodedAuth = req.cookies.get("auth")?.value;
  if (req.nextUrl.pathname.startsWith("/admin/panel")) {
    if (!encodedAuth) {
      (await cookies()).delete("auth");
      return NextResponse.redirect(new URL("/admin", req.url));
    }

    try {
      const auth = await decrypt(encodedAuth, process.env.CRYPTO_SECRET_KEY!);
      if (auth !== "true") {
        return NextResponse.redirect(new URL("/admin", req.url));
      }
    } catch {
      (await cookies()).delete("auth");
      return NextResponse.redirect(new URL("/admin", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};

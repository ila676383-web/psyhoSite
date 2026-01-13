"use server";

import { cookies } from "next/headers";
import crypto from "crypto";

const KEY = Buffer.from(process.env.CRYPTO_SECRET_KEY!, "hex");
const ALGORITHM = "aes-256-gcm";
const IV_LENGTH = 12;

function encrypt(text: string) {
  const iv = crypto.randomBytes(IV_LENGTH);
  const cipher = crypto.createCipheriv(ALGORITHM, KEY, iv);
  const encrypted = Buffer.concat([
    cipher.update(text, "utf8"),
    cipher.final(),
  ]);
  const tag = cipher.getAuthTag();
  return Buffer.concat([iv, tag, encrypted]).toString("base64");
}

export const checkAdmin = async (FormData: FormData) => {
  const isUsername = process.env.LOGIN_ADMIN;
  const isPassword = process.env.PASSWORD_ADMIN;
  const username = FormData.get("username");
  const password = FormData.get("password");

  if (
    isUsername === username &&
    isPassword === password &&
    typeof username === "string" &&
    typeof password === "string"
  ) {


    const authValue = encrypt("true");
    const cookieStore = cookies();
    (await cookieStore).set({
      name: "auth",
      value: authValue,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60,
    });
    return true
    


  }
  (await cookies()).delete("auth");
  return false
};

import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  const { username, password } = await req.json();
  console.log("LOGIN FROM FORM:", username);
console.log("PASSWORD FROM FORM:", password);
console.log("ENV LOGIN:", process.env.LOGIN_ADMIN);
console.log("ENV PASSWORD:", process.env.PASSWORD_ADMIN);

  if (
    username !== process.env.LOGIN_ADMIN ||
    password !== process.env.PASSWORD_ADMIN
  ) {
    return NextResponse.json(
      { error: "Invalid credentials" },
      { status: 401 }
    );
  }

  const token = jwt.sign(
    { role: "admin" },
    process.env.JWT_SECRET!,
    { expiresIn: "1h" }
  );

  const res = NextResponse.json({ ok: true });

  res.cookies.set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
  });

  return res;
}

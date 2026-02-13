"use server";

import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { redirect } from "next/navigation";

const isProd = process.env.NODE_ENV === "production";

console.log("CHECK ADMIN CALLED");
export const checkAdmin = async (FormData: FormData) => {
  const login = FormData.get("username");
  const password = FormData.get("password");

  if (
    login !== process.env.LOGIN_ADMIN ||
    password !== process.env.PASSWORD_ADMIN
  ) {
  return 
  }

  const token = jwt.sign({ role: "admin" }, process.env.JWT_SECRET!, {
    expiresIn: "1h",
  });

  const cookieStore = await cookies();

  cookieStore.set("token", token, {
    httpOnly: true,
    path: "/",
    secure: isProd,
    sameSite: "lax",
  });

  redirect("/admin/panel");
};

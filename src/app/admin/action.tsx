"use server";

import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { redirect } from "next/navigation";

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
    secure: true,
    sameSite: "lax",
  });

  redirect("/admin/panel");
};

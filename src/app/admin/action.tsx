"use server";

import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { redirect } from "next/navigation";

const isProd = process.env.NODE_ENV === "production";

export const checkAdmin = async (FormData: FormData) => {
  const login = FormData.get("username");
  const password = FormData.get("password");
  console.log("CHECK ADMIN CALLED");
  if (
    login !== process.env.LOGIN_ADMIN ||
    password !== process.env.PASSWORD_ADMIN
  ) {
    console.log("Invalid credentials:", { login, password });
    console.log("Expected credentials:", {
      login: process.env.LOGIN_ADMIN,
      password: process.env.PASSWORD_ADMIN,
    });
    console.log("FormData entries:", Array.from(FormData.entries()));
    return;
  }

  const token = jwt.sign({ role: "admin" }, process.env.JWT_SECRET!, {
    expiresIn: "1h",
  });

  const cookieStore = cookies();

  cookieStore.set("token", token, {
    httpOnly: true,
    path: "/",
    secure: isProd,
    sameSite: "lax",
  });

  redirect("/admin/panel");
};

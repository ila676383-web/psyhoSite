"use server";

import { cookies } from "next/headers";

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
    (await cookies()).set("auth", "true", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60,
    });

    return true;
  }
  (await cookies()).delete("auth");
  return false;
};

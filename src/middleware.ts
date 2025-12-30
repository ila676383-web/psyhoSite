import { NextRequest, NextResponse } from "next/server";

export const middleware = async (req: NextRequest) => {
  const auth = req.cookies.get("auth")?.value;

  if (req.nextUrl.pathname.startsWith("/admin/panel") && auth !== "true") {
    return NextResponse.redirect(new URL("/admin", req.url));
  }
  return NextResponse.next();
};

export const config = {
  matcher: ["/admin/:path*"],
};

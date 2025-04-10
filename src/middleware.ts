import { NextRequest, NextResponse  } from "next/server";
import { getUrl } from "./app/_lib/get-url";


export function middleware(request: NextRequest) {
    const token = request.cookies.get(process.env.SESSION_COOKIE_NAME || "next-auth.session-token");
    const pathName = request.nextUrl.pathname;
    if (pathName === "/auth/sign-in" && token) {
        
        const redirectUrl = getUrl("/workspace")
        console.log(redirectUrl);
        return  NextResponse.redirect( new URL(getUrl("/workspace")) );
    }
    if (pathName.includes("/workspace") && !token){
        const redirectUrl = getUrl("/auth/sign-in")
        console.log(redirectUrl);
        return  NextResponse.redirect( new URL(getUrl("/auth/sign-in")) );
        
    }


}


export const config = {
    matcher: [
        "/((?!api|_next/static|_next/image|favicon.ico).*)",
    ]
}
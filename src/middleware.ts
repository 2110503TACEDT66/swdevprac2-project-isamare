import { withAuth } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";

export default withAuth(function middleware(req: NextRequest) {
    const sessionCookies = req.cookies.get('session')
    return sessionCookies?NextResponse.next():NextResponse.redirect(new URL('/login', req.url))
},
{
    callbacks: {
        async authorized({token}) {
            return token?false:true
        },
    },
})

export const config = { 
    api: { 
        bodyParser: false,
    },
    matcher: ["/booking", "/profile"]
};
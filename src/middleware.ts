// middleware.js
import { cookieManager } from "@/helper/manage-cookie";
import {
	withMiddlewareAuthRequired,
	getSession,
	getAccessToken,
	AccessTokenError,
} from "@auth0/nextjs-auth0/edge";
import { NextResponse } from "next/server";

export default withMiddlewareAuthRequired(async function middleware(req) {
	try {
		const res = NextResponse.next();
		const user = await getSession(req, res);
		const userAccessTokenData = await getAccessToken(req, res);

		if (!userAccessTokenData || !user) {
			return NextResponse.redirect("/api/auth/login");
		}

		if (!cookieManager().has("token")) {
			const data = {
				name: "token",
				value: userAccessTokenData.accessToken as string,
				// expires: user.accessTokenExpiresAt,
				// maxAge: 180,
			};
			res.cookies.set(data);
		}

		return res;
	} catch (error) {
		if (error instanceof AccessTokenError) {
			return NextResponse.redirect(new URL("/api/auth/login", req.url));
		}
	}
});

export const config = {
	matcher: "/profile",
};

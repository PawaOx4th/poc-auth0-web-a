// app/api/auth/[auth0]/route.js
import { handleAuth, handleLogin } from "@auth0/nextjs-auth0";

export const GET = handleAuth({
	login: handleLogin({
		// NOTE: กำหนด callback path ที่จะ redirect กลับหลังจาก login สำเร็จ
		returnTo: "/profile",
		authorizationParams: {
			audience: "https://kpc-poc.au.auth0.com/api/v2/",
		},
	}),
});

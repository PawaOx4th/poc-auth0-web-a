import { cookieManager } from "@/helper/manage-cookie";
import { handleAuth, handleLogin, handleLogout } from "@auth0/nextjs-auth0";

const AUDIENCE = process.env.NEXT_PUBLIC_AUDIENCE;

export const GET = handleAuth({
	signUp: handleLogin(() => {
		return {
			returnTo: "/profile",
			authorizationParams: {
				screen_hint: "signup",
				audience: AUDIENCE,
			},
		};
	}),
	login: handleLogin({
		// NOTE: กำหนด callback path ที่จะ redirect กลับหลังจาก login สำเร็จ
		returnTo: "/profile",
		authorizationParams: {
			audience: AUDIENCE,
		},
	}),
	logout: handleLogout(() => {
		// NOTE: Clear all cookies
		cookieManager().clear();
		return { returnTo: "/" };
	}),
});

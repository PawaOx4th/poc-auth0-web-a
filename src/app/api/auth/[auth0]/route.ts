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
	login: handleLogin(() => {
		console.log(`[LOG] 🟣  login :`);
		return {
			// NOTE: กำหนด callback path ที่จะ redirect กลับหลังจาก login สำเร็จ
			returnTo: "/profile",
			authorizationParams: {
				audience: AUDIENCE,
			},
		};
	}),
	loginAboutPage: handleLogin((req) => {
		// NOTE: ดึงค่า query string ที่ส่งมาจากหน้าเว็บ [A] โดยใช้ URLSearchParams ค้นหา query param name "to"
		const urlData = new URL(req.url!);
		const returnToUrl = urlData.searchParams.get("to") ?? "/";

		console.log(`[LOG] 🟣  loginAboutPage  :`, urlData.searchParams.get("to"));

		return {
			returnTo: `${returnToUrl}`,
			authorizationParams: {
				audience: AUDIENCE,
			},
		};
	}),
	logout: handleLogout,
	// logout: handleLogout(() => {
	// 	// NOTE: Clear all cookies
	// 	cookieManager().clear();
	// 	return { returnTo: "/" };
	// }),
});

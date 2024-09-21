import { cookieManager } from "@/helper/manage-cookie";
import * as jose from "jose";

export async function validateKey() {
	try {
		const token = cookieManager().get("token");
		if (!token) {
			throw new Error("Token not found");
		}
		const JWKS = await jose.createRemoteJWKSet(
			new URL(process.env.NEXT_PUBLIC_AUTH0_JWK_URI!),
		);
		const response = await jose.jwtVerify(token, JWKS, {
			algorithms: ["RS256"],
		});

		return {
			success: true,
			data: response,
		};
	} catch (error) {
		return {
			success: false,
			error: (error as Error).message,
		};
	}
}

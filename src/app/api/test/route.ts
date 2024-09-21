import { cookieManager } from "@/helper/manage-cookie";
import { validateKey } from "@/helper/validate-token";
import { NextApiRequest, NextApiResponse } from "next";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export const GET = async (req: NextApiRequest) => {
	// Solution 1.
	// const token = cookieManager().get("token");
	// console.log(`[LOG] 🟡  token :`, token);

	const headersList = headers();
	const result = await validateKey(headersList.get("token") ?? undefined);
	if (result.success) {
		return NextResponse.json({ message: "Hello World" });
	} else {
		return NextResponse.json({ message: result.error }, { status: 401 });
	}
};

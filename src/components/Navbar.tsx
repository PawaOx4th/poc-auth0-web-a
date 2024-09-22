"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import React from "react";
import { useRouter } from "next/navigation";
import { appConfig } from "@/constants/app-config";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";

function Navbar() {
	const { user } = useUser();
	const router = useRouter();

	function handleGotoLogin() {
		router.push(`/api/auth/login`);
	}
	function handleGotoWebB() {
		router.push(`/api/auth/loginAboutPage?to=${appConfig.redirectUrl}`);
	}

	return (
		<div className="w-full py-4 sticky">
			<Container className="px-2 py-3  flex justify-between">
				<ul className="flex gap-3 flex-[3]">
					<li>
						<Button
							variant="outlined"
							onClick={() => {
								handleGotoWebB();
							}}
						>
							<Typography
								sx={{
									marginRight: "8px",
								}}
							>
								Go to web:
							</Typography>
							<Chip
								label="[B]/profile"
								variant="filled"
								color="primary"
								size="small"
							/>
						</Button>
					</li>
					{user ? (
						<li>
							<Button
								color="warning"
								variant="contained"
								onClick={() => {
									router.push("/api/auth/logout");
								}}
							>
								Go to Logout
							</Button>
						</li>
					) : (
						<></>
					)}
				</ul>

				<div className="flex-1 flex items-center gap-4 justify-end">
					{user ? (
						<>
							<Typography>{user?.email}</Typography>
							<Avatar src={user?.picture!} />
						</>
					) : (
						<Button
							color="warning"
							variant="outlined"
							onClick={() => {
								handleGotoLogin();
							}}
						>
							Go to Login
						</Button>
					)}
				</div>
			</Container>
		</div>
	);
}

export default Navbar;

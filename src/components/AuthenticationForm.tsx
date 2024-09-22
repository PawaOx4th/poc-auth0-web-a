import { appConfig } from "@/constants/app-config";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/navigation";
import React from "react";

const AuthenticationForm = () => {
	const router = useRouter();

	// NOTE: Go to login.
	const handleLoginProfilePage = () => {
		router.replace("/api/auth/login");
	};

	// NOTE: Go to web [B].
	const handleLoginAboutPage = () => {
		router.push(`/api/auth/loginAboutPage?to=${appConfig.redirectUrl}`);
	};

	// NOTE: Go to sign up page.
	const handleSignUp = () => {
		router.replace("/api/auth/signUp");
	};
	return (
		<Card
			sx={{
				padding: "2rem",
			}}
		>
			<Stack
				spacing={2}
				direction="column"
				className="w-[400px] mx-auto my-auto "
			>
				<Typography variant="h4" textAlign={"center"} fontWeight={600}>
					Welcome
				</Typography>

				<Button
					size="large"
					variant="outlined"
					onClick={() => handleLoginProfilePage()}
				>
					Sign in (go to profile page)
				</Button>
				<Button
					size="large"
					variant="outlined"
					onClick={() => handleLoginAboutPage()}
				>
					Go to web B
				</Button>
				<Button size="large" variant="contained" onClick={() => handleSignUp()}>
					Sign up
				</Button>
			</Stack>
		</Card>
	);
};

export default AuthenticationForm;

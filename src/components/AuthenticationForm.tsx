import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/navigation";
import React from "react";

const AuthenticationForm = () => {
	const router = useRouter();
	const handleLogin = () => {
		router.replace("/api/auth/login");
	};
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

				<Button size="large" variant="outlined" onClick={() => handleLogin()}>
					Sign in
				</Button>
				<Button size="large" variant="contained" onClick={() => handleSignUp()}>
					Sign up
				</Button>
			</Stack>
		</Card>
	);
};

export default AuthenticationForm;

"use client";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/navigation";
import React from "react";

function Wrapper() {
	const onSubmit = (e: FormData) => {
		// console.log(`[LOG] 🟡  	e.get("email") :`, e.get("email"));
	};

	const router = useRouter();
	const handleLogin = () => {
		router.push("/api/auth/login");
	};
	return (
		<Container
			className="min-h-screen flex items-center justify-center"
			maxWidth={false}
			sx={(theme) => ({
				backgroundColor: theme.palette.primary["100"],
			})}
		>
			<Card
				sx={{
					padding: "2rem",
				}}
			>
				<form action={onSubmit}>
					<Stack
						spacing={2}
						direction="column"
						className="w-[400px] mx-auto my-auto "
					>
						<Typography variant="h4" textAlign={"center"} fontWeight={600}>
							Welcome
						</Typography>

						<TextField
							id="email"
							name="email"
							label="Email"
							variant="outlined"
							type="email"
							required
						/>
						<TextField
							id="password"
							name="password"
							label="Password"
							variant="outlined"
							type="password"
							required
						/>

						<Button size="large" variant="contained" type="submit">
							Sign in
						</Button>
						<Button size="large" variant="text" onClick={() => handleLogin()}>
							Sign up
						</Button>
					</Stack>
				</form>
			</Card>
		</Container>
	);
}

export default Wrapper;

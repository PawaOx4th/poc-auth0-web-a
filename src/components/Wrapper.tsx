"use client";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import React from "react";
import Typography from "@mui/material/Typography";
import Input from "@mui/material/Input";
import TextField from "@mui/material/TextField";

type Props = {};

function Wrapper({}: Props) {
	const onSubmit = (e: FormData) => {
		console.log(`[LOG] 🟡  	e.get("email") :`, e.get("email"));
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
						<Button size="large" variant="text">
							Sign up
						</Button>
					</Stack>
				</form>
			</Card>
		</Container>
	);
}

export default Wrapper;

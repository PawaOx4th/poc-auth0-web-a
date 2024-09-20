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
				<form>
					<Stack
						spacing={2}
						direction="column"
						className="w-[400px] mx-auto my-auto "
					>
						<Typography variant="h4" textAlign={"center"} fontWeight={600}>
							Welcome
						</Typography>

						<TextField
							id="outlined-basic"
							label="Outlined"
							variant="outlined"
						/>

						<Button variant="contained">Sign in</Button>
					</Stack>
				</form>
			</Card>
		</Container>
	);
}

export default Wrapper;

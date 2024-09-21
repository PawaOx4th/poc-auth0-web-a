"use client";
import AuthenticationForm from "@/components/AuthenticationForm";
import Container from "@mui/material/Container";

function Wrapper() {
	return (
		<Container
			className="min-h-screen flex items-center justify-center"
			maxWidth={false}
			sx={(theme) => ({
				backgroundColor: theme.palette.primary["100"],
			})}
		>
			<AuthenticationForm />
		</Container>
	);
}

export default Wrapper;

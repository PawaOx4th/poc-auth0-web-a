"use client";
import AuthenticationForm from "@/components/AuthenticationForm";
import Container from "@mui/material/Container";

function Wrapper() {
	return (
		<Container
			className="min-h-screen flex items-center justify-center"
			maxWidth={false}
		>
			<AuthenticationForm />
		</Container>
	);
}

export default Wrapper;

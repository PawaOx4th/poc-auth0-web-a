"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { toast } from "sonner";

import { validateKey } from "@/helper/validate-token";
import Button from "@mui/material/Button";

export default function AboutPage() {
	const { user, error, isLoading } = useUser();

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>{error.message}</div>;

	return (
		user && (
			<Container>
				<h1>About Page</h1>
				{/* <img src={user.picture} alt={user.name} /> */}
				<h2>{user.name}</h2>
				<hr />
				<Paper>
					<pre>
						<code>{JSON.stringify(user, null, 2)}</code>
					</pre>
				</Paper>
				<hr />
				<a href="/api/auth/logout">Logout</a>

				<hr />
				<Button
					variant="contained"
					onClick={async () => {
						const response = await validateKey();

						if (response.success) {
							toast.success("Token is valid", { richColors: true });
						} else {
							console.error(response);
							toast.error("Token is invalid", { richColors: true });
						}
					}}
				>
					Validate
				</Button>
			</Container>
		)
	);
}

"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { toast } from "sonner";

import { validateKey } from "@/helper/validate-token";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
	const router = useRouter();

	const { user, error, isLoading } = useUser();

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>{error.message}</div>;

	return (
		user && (
			<Container
				sx={{
					padding: "2rem",
					display: "flex",
					flexDirection: "column",
					gap: "1rem",
				}}
			>
				<h1>Profile Page</h1>
				<img src={user.picture!} alt={user.name!} className="size-44" />
				<h2>{user.name}</h2>
				<hr />
				<Paper>
					<pre>
						<code>{JSON.stringify(user, null, 2)}</code>
					</pre>
				</Paper>

				<Button
					variant="contained"
					color="primary"
					size="large"
					onClick={() => {
						router.push("/");
					}}
				>
					Home
				</Button>

				<a href="/api/auth/logout" className="w-full">
					<Button variant="contained" color="error" size="large" className="w-full">
						Logout
					</Button>
				</a>

				<Button
					variant="contained"
					color="info"
					size="large"
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

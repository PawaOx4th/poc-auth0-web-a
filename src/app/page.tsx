import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";

export default function Home() {
	return (
		<Container className="min-h-screen flex items-center justify-center">
			<Card
				sx={{
					padding: "2rem",
				}}
			>
				<Stack
					spacing={2}
					direction="column"
					className="w-[500px] mx-auto my-auto "
				>
					<Button variant="text">Text</Button>
					<Button variant="contained">Contained</Button>
					<Button variant="outlined">Outlined</Button>
				</Stack>
			</Card>
		</Container>
	);
}

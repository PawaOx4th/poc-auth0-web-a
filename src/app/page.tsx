import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import { Link } from "@mui/material";

export default function Home() {
	return (
		<div className="min-h-screen w-screen flex justify-center items-center">
			<Card className="p-8 flex flex-col justify-center items-center gap-4">
				<Typography variant="h4" display={"block"} fontWeight={600}>
					Welcome
				</Typography>
				<Link href="/profile" underline={"none"} color={"textPrimary"}>
					Go to my profile
				</Link>
			</Card>
		</div>
	);
}

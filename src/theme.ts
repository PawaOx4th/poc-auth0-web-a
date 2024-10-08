"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	typography: {
		fontFamily: "var(--font-montserrat)",
	},
	palette: {
		primary: {
			main: "#18181b",
			"50": "#ffffff",
			"100": "#efefef",
			"200": "#dcdcdc",
			"300": "#bdbdbd",
			"400": "#989898",
			"500": "#7c7c7c",
			"600": "#656565",
			"700": "#525252",
			"800": "#464646",
			"900": "#3d3d3d",
		},
	},
	shape: {
		borderRadius: 8,
	},
});

export default theme;

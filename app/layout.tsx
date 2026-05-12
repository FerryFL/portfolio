import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	metadataBase: new URL("https://ferryfebrian.com"),
	alternates: {
		canonical: "/",
	},
	title: "Ferry Febrian | Portfolio",
	description:
		"a Fresh Graduate in Computer Science from Bina Nusantara University and a Software Engineer specialized in Web Development.",
	icons: {
		icon: "/logo_porto_ff.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
				<Toaster />
			</body>
			<GoogleAnalytics gaId="G-R9YD32C53Y" />
		</html>
	);
}

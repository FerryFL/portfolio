"use client";

import { useEffect } from "react";
import { Background } from "../components/dashboard/Background";
import Aos from "aos";
import About from "../components/dashboard/About";
import LandingPages from "@/components/dashboard/LandingPages";
import Projects from "@/components/dashboard/Projects";
import Contact from "@/components/dashboard/Contact";

export default function Home() {
	useEffect(() => {
		Aos.init({
			duration: 800,
		});
	}, []);

	return (
		<>
			<Background />
			<LandingPages />
			<About />
			<Projects />
			<Contact />
			<Footer />
		</>
	);
}

const Footer = () => {
	return (
		<div>
			<hr className="text-gray-500 opacity-50" />
			<p className="py-3 text-center text-sm text-gray-500">
				©2026 Ferry Febrian. All Rights Reserved.
			</p>
		</div>
	);
};

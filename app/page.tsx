'use client'

import { useEffect } from "react";
import AnimatedBackground from "../components/dashboard/AnimatedBackground";
import Aos from "aos";
import About from "../components/dashboard/About";
import LandingPages from "@/components/dashboard/LandingPages";
import Projects from "@/components/dashboard/Projects";
import Contact from "@/components/dashboard/Contact";

export default function Home() {

    useEffect(() => {
        Aos.init({
            once: false,
            duration: 800,
            easing: "ease-out-cubic",
        })
    }, [])

    return (
        <>
            <AnimatedBackground />
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
            <p className="py-3 text-center text-sm text-gray-500">©2026 Ferry Febrian. All Rights Reserved.</p>
        </div>
    )
}

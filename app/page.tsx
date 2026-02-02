'use client'

import { useEffect, useState } from "react";
import AnimatedBackground from "../components/dashboard/AnimatedBackground";
import WelcomeScreen from "../components/WelcomeScreen";
import Aos from "aos";
import About from "../components/dashboard/About";
import LandingPages from "@/components/dashboard/LandingPages";
import Projects from "@/components/dashboard/Projects";
import Contact from "@/components/dashboard/Contact";

interface LandingPageProps {
    showWelcome: boolean
    setShowWelcome: (value: boolean) => void
}

const LandingPage = (props: LandingPageProps) => {
    const { showWelcome, setShowWelcome } = props

    useEffect(() => {
        const init = () => {
            Aos.init({
                once: false,
            })
        }

        init()
    }, [])


    return (
        <>
            {showWelcome && (
                <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
            )}

            {!showWelcome && (
                <>
                    <AnimatedBackground />
                    <LandingPages />
                    <About />
                    <Projects />
                    <Contact />

                    <Footer />
                </>
            )}
        </>
    )
}

export default function Home() {
    const [showWelcome, setShowWelcome] = useState(true)

    return (
        <LandingPage showWelcome={showWelcome} setShowWelcome={setShowWelcome} />
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
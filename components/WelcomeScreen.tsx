'use client'

import { motion, type Variants, AnimatePresence } from "motion/react"
import { useEffect, useState } from "react"
import AOS from 'aos'
import 'aos/dist/aos.css';
import { Code2, Settings, UsersRound } from "lucide-react";

interface WelcomeScreenProps {
    onLoadingComplete?: () => void
}

interface TypeWritingProps {
    text: string
}

const TypeWriting = (props: TypeWritingProps) => {
    const { text } = props
    const [displayText, setDisplayText] = useState('')

    useEffect(() => {
        let index = 0
        const timer = setInterval(() => {
            if (index <= text.length) {
                setDisplayText(text.slice(0, index))
                index++
            } else {
                clearInterval(timer)
            }
        }, 120)

        return () => clearInterval(timer)
    }, [text])

    return (
        <div data-aos="fade-up" data-aos-delay="1000" className="relative">
            <span className="absolute -inset-4 -z-10 bg-linear-to-r from-cyan-500 to-cyan-700 blur-3xl opacity-40"></span>
            <span className="inline-block bg-custom-linear-indigo bg-clip-text text-transparent">{displayText}</span>
            <span className="animate-pulse">|</span>
        </div>
    )
}

const WelcomeScreen = (props: WelcomeScreenProps) => {
    const [isLoading, setIsLoading] = useState(true)
    const { onLoadingComplete } = props

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });

        const timer = setTimeout(() => {
            setIsLoading(false);
            setTimeout(() => {
                onLoadingComplete?.();
            }, 1000);
        }, 4000);

        return () => clearTimeout(timer);
    }, [onLoadingComplete]);

    const containerVariants: Variants = {
        exit: {
            opacity: 0,
            scale: 1.2,
            filter: "blur(10px)",
            transition: {
                duration: 0.8,
                ease: "easeInOut",
                when: "beforeChildren",
                staggerChildren: 0.1
            }
        }
    }

    const childVariants: Variants = {
        exit: {
            y: -20,
            opacity: 0,
            transition: {
                duration: 0.4,
                ease: "easeInOut"
            }
        },
    };

    return (
        <AnimatePresence>
            {
                isLoading && (
                    <motion.div
                        className="fixed inset-0 bg-[#030014]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit="exit"
                        variants={containerVariants}
                    >
                        <div className="absolute inset-0 bg-linear-to-r from-indigo-600/20 to-cyan-600/20  animate-pulse" />

                        <div className="relative min-h-screen flex items-center justify-center px-4">
                            <div className="w-full max-w-4xl mx-auto">
                                <motion.div
                                    className="text-center mb-6 sm:mb-8 md:mb-12 flex flex-col items-center justify-center"
                                    variants={childVariants}
                                >
                                    <div className="flex gap-8 mb-6">
                                        <div data-aos="fade-down" data-aos-delay="200" className="relative">
                                            <span className="absolute inset-0 -z-10 bg-custom-linear-indigo blur-lg opacity-80"></span>
                                            <div className="flex justify-center items-center rounded-xl px-2 py-2 bg-linear-to-tr from-cyan-500/60 to-indigo-500/60 border border-white/10 group hover:scale-105 duration-300">
                                                <Code2 className="text-white/70 size-6 group-hover:rotate-12" />
                                            </div>
                                        </div>

                                        <div data-aos="fade-down" data-aos-delay="400" className="relative">
                                            <span className="absolute inset-0 -z-10 bg-custom-linear-indigo blur-lg opacity-80"></span>
                                            <div className="flex justify-center items-center rounded-xl px-2 py-2 bg-linear-to-tr from-cyan-500/60 to-indigo-500/60 border border-white/10 group hover:scale-105 duration-300">
                                                <UsersRound className="text-white/70 size-6 group-hover:rotate-12" />
                                            </div>
                                        </div>

                                        <div data-aos="fade-down" data-aos-delay="600" className="relative">
                                            <span className="absolute inset-0 -z-10 bg-custom-linear-indigo blur-lg opacity-80"></span>
                                            <div className="flex justify-center items-center rounded-xl px-2 py-2 bg-linear-to-tr from-cyan-500/60 to-indigo-500/60 border border-white/10 group hover:scale-105 duration-300">
                                                <Settings className="text-white/70 size-6 group-hover:rotate-12" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative mb-2 text-2xl text-white md:text-4xl font-bold">
                                        {/* <span className="absolute -inset-4 -z-10 bg-linear-to-r from-cyan-500 to-cyan-700 blur-3xl opacity-40"></span> */}
                                        <span data-aos="fade-down" data-aos-delay="200" className="inline-block bg-linear-to-tr from-cyan-100 to-cyan-200 bg-clip-text text-transparent">Welcome</span>{' '}
                                        <span data-aos="fade-down" data-aos-delay="400" className="inline-block bg-linear-to-tr from-cyan-100 to-cyan-200 bg-clip-text text-transparent">To</span>{' '}
                                        <span data-aos="fade-down" data-aos-delay="600" className="inline-block bg-linear-to-tr from-cyan-100 to-cyan-200 bg-clip-text text-transparent">My</span>
                                    </div>
                                    <div className="relative text-5xl md:text-6xl font-bold">
                                        <span className="absolute -inset-4 -z-10 bg-linear-to-r from-cyan-500 to-cyan-700 blur-3xl opacity-40"></span>
                                        <span data-aos="fade-up" data-aos-delay="800" className="inline-block bg-custom-linear-indigo bg-clip-text text-transparent">Portfolio</span>{' '}
                                        <span data-aos="fade-up" data-aos-delay="1000" className="inline-block bg-custom-linear-cyan bg-clip-text text-transparent">Website</span>
                                    </div>

                                    <div className="text-center text-md md:text-lg font-bold mt-6">
                                        <TypeWriting text="www.ferryfebrian.com" />
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                    </motion.div>
                )
            }
        </AnimatePresence>
    )
}

export default WelcomeScreen
'use client'

import { motion, type Variants, AnimatePresence } from "motion/react"
import { useEffect, useState } from "react"
import AOS from 'aos'
import 'aos/dist/aos.css';

interface WelcomeScreenProps {
    onLoadingComplete?: () => void
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
                                    className="text-center mb-6 sm:mb-8 md:mb-12"
                                    variants={childVariants}
                                >
                                    <div className="mb-2 text-2xl text-white md:text-4xl font-bold">
                                        <span data-aos="fade-down" data-aos-delay="200" className="inline-block">Welcome</span>{' '}
                                        <span data-aos="fade-down" data-aos-delay="400" className="inline-block">To</span>{' '}
                                        <span data-aos="fade-down" data-aos-delay="600" className="inline-block">My</span>
                                    </div>
                                    <div className="text-5xl md:text-6xl font-bold">
                                        <span data-aos="fade-up" data-aos-delay="800" className="inline-block bg-custom-linear-indigo bg-clip-text text-transparent">Portfolio</span>{' '}
                                        <span data-aos="fade-up" data-aos-delay="1000" className="inline-block bg-custom-linear-cyan bg-clip-text text-transparent">Website</span>
                                    </div>

                                    <div className="relative text-md md:text-lg font-bold mt-6">
                                        <span className="absolute -inset-2 bg-linear-to-r from-cyan-500 to-cyan-700 blur-3xl opacity-20"></span>
                                        <span data-aos="fade-up" data-aos-delay="1000" className="inline-block bg-custom-linear-indigo bg-clip-text text-transparent">www.ferryfebrian.com</span>
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
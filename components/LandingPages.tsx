import { TECH_STACK } from "@/constants/tech"
import { Button } from "./ui/button"
import { Code } from "lucide-react";
import { animate } from "motion";

const LandingPages = () => {
    return (
        <div className="w-full px-[5%] lg:px-[10%]">
            <div className="flex justify-center items-center flex-col min-h-screen">
                <div className="flex justify-center items-center gap-5">
                    <div className="relative inline-block text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl font-bold">
                        <span className="absolute -inset-5 -z-10 bg-custom-linear-indigo blur-2xl opacity-20"></span>
                        <span data-aos="fade-down" data-aos-delay="200" className="pb-3 inline-block bg-custom-linear-cyan bg-clip-text text-transparent">Software Engineer</span>
                    </div>
                </div>

                <p data-aos="fade-up" data-aos-delay="400" className="text-gray-400 mt-2 text-lg">Specializing in Modern Web Ecosystems</p>

                <div className="relative">
                    <span className="absolute -inset-5 -z-10 bg-linear-to-r from-cyan-500 to-cyan-700 blur-2xl opacity-20"></span>
                    <div className="flex gap-2 mt-10 flex-wrap justify-center">
                        {TECH_STACK.map((tech, index) => (
                            <div data-aos="fade-up" data-aos-delay="600" key={index} className="px-4 py-2 inline-block rounded-full bg-white/5 hover:bg-white/10 hover:scale-105 border border-white/10 text-gray-300 transition-all duration-300 hover:shadow">
                                <span className="text-sm">{tech}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex mt-6">
                    <Button
                        data-aos="fade-up"
                        data-aos-delay="600"
                        variant="gradient"
                        size="lg"
                        className="group"
                        onClick={(e) => {
                            e.preventDefault()
                            const element = document.getElementById('Projects')
                            if (element) {
                                animate(window.scrollY, element.offsetTop, {
                                    duration: 1,
                                    ease: "easeInOut",
                                    onUpdate(latest) {
                                        window.scrollTo(0, latest)
                                    },
                                })
                            }
                        }}
                    >
                        <Code className="group-hover:rotate-12" />
                        View Projects
                    </Button>
                </div>

            </div>
        </div>
    )
}

export default LandingPages
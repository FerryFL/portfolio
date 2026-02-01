import { TECH_STACK } from "@/constants/tech"
import { Button } from "./ui/button"
import { Code, Code2, Settings, UsersRound } from "lucide-react";
import { animate } from "motion";

const LandingPages = () => {
    return (
        <div className="w-full px-[5%] lg:px-[10%]">
            <div className="flex justify-center items-center flex-col min-h-screen">
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

                <div className="flex justify-center items-center gap-5">
                    <div className="relative flex gap-4 text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl font-bold">
                        <span className="absolute inset-1 -z-10 bg-custom-linear-indigo blur-xl opacity-30 rounded-lg"></span>
                        <span data-aos="fade-right" data-aos-delay="200" className="pb-3 text-center inline-block bg-linear-to-tr from-cyan-500 to-cyan-600 bg-clip-text text-transparent">Software</span>
                        <span data-aos="fade-left" data-aos-delay="200" className="pb-3 text-center inline-block bg-custom-linear-cyan bg-clip-text text-transparent">Engineer</span>
                    </div>
                </div>

                <p data-aos="fade-up" data-aos-delay="400" className="text-center text-gray-400 mt-2 text-lg">Specializing in Modern Web Ecosystems</p>

                <div className="relative">
                    <div className="flex gap-2 mt-10 flex-wrap justify-center items-center">
                        <span className="absolute inset-0 -z-10 bg-linear-to-r from-cyan-500 to-cyan-700 blur-2xl opacity-30"></span>
                        {TECH_STACK.map((tech, index) => (
                            <div data-aos="fade-up" data-aos-delay="600" key={index} className="px-4 py-2 inline-block rounded-full bg-white/5 hover:bg-white/10 hover:scale-105 border border-white/10 text-gray-300 transition-all duration-300 hover:shadow">
                                <span className="text-sm">{tech}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div data-aos="fade-up" data-aos-delay="600" className="flex mt-6 relative">
                    <span className="absolute inset-0 -z-10 bg-linear-to-r from-cyan-500 to-cyan-700 blur-xl opacity-60"></span>
                    <Button
                        variant="gradient"
                        size="lg"
                        className="group duration-300 text-white/70"
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
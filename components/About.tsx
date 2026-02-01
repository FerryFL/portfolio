import { Code, FileText, Quote } from "lucide-react"
import { Button } from "./ui/button"
import { animate } from "motion"

const About = () => {
    return (
        <div id="About" className="w-full min-h-screen flex flex-col px-[5%] lg:px-[10%] py-10">
            <div className=" flex gap-2 font-bold text-4xl md:text-5xl justify-center">
                <span data-aos="fade-up" data-aos-delay="200" className="relative pb-2 inline-block bg-custom-linear-cyan bg-clip-text text-transparent">
                    About Me
                </span>
            </div>

            <div className="flex flex-1 flex-col md:flex-row w-full items-center justify-center gap-10 py-5">
                <div className="flex flex-col flex-1 gap-6 order-2 md:order-1">
                    <div className="flex flex-col text-center md:text-left" data-aos="fade-right" data-aos-delay="200">
                        <p className="text-2xl sm:text-3xl lg:text-4xl font-bold inline-block bg-custom-linear-cyan bg-clip-text text-transparent">{`Hello, I'm`}</p>
                        <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white/70">Ferry Febrian</p>
                    </div>
                    <p data-aos="fade-right" data-aos-delay="200" className="text-gray-400 block text-justify">
                        {`I'm a Fresh Graduate (Awaiting Graduation) majoring in Computer Science at Bina Nusantara University, with the insightful experience as a part-time System Analyst at IT Division, and currently serving as intern Software Engineer at Kawan Lama Group`}
                    </p>
                    <div data-aos="fade-up" data-aos-delay="200" className="flex gap-2 px-6 py-4 w-full border border-white/10 rounded-full">
                        <Quote className="text-gray-700" /><span className="italic">{`"Motivation gets you going, but discipline keeps you growing"`}</span>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="200" className="flex gap-4 justify-center md:justify-start">
                        <Button variant="gradient" size="lg" className="text-white/70 group hover:scale-105 duration-300">
                            <FileText className="group-hover:rotate-12" />
                            <span >Download CV</span>
                        </Button>
                        <Button
                            variant="outlineGradient"
                            size="lg"
                            className="group hover:scale-105 duration-300"
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
                            <span>View Projects</span>
                        </Button>
                    </div>
                </div>
                <div className="flex flex-1 justify-center items-center order-1 md:order-2">
                    <div className="relative">
                        <div className="absolute -inset-4 bg-linear-to-tr from-indigo-500/20 to-cyan-500/20 blur-2xl rounded-full"></div>
                        <div className="relative w-64 h-64 md:w-80 md:h-80 bg-zinc-200 rounded-2xl overflow-hidden border border-white/10 shadow-2xl"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
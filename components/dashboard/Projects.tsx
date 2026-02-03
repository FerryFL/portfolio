import { ArrowRight, Code, Cpu, ExternalLink } from "lucide-react"
import { Card } from "../ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import { project, techStack } from "@/constants/projects"
import { toast } from "sonner"

const Projects = () => {
    const handleClick = () => {
        toast.warning("Under Development")
    }

    return (
        <div id="Projects" className="w-full min-h-screen flex flex-col px-[5%] lg:px-[10%] py-10">
            <div className="flex gap-2 font-bold text-4xl md:text-5xl justify-center">
                <p data-aos="fade-up" data-aos-delay="200" className="pb-3 inline-block bg-custom-linear-cyan bg-clip-text text-transparent">Projects</p>
            </div>
            <Tabs data-aos="fade-up" data-aos-delay="200" defaultValue="project" className="mt-4">
                <TabsList className="bg-transparent border border-cyan-700/60 w-full py-8 px-2">
                    <TabsTrigger value="project" className="py-6">
                        <Code />
                        <span className="font-bold text-base text-white/70">Projects</span>
                    </TabsTrigger>
                    <TabsTrigger value="tech-stack" className="py-6">
                        <Cpu />
                        <span className="font-bold text-base text-white/70">Tech Stack</span>
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="project">
                    <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                        {project.map((item, i) => (
                            <Card key={i} className="w-full px-5 h-96 group bg-transparent border-cyan-700/60 border shadow-2xl p-6">
                                <div className="relative w-full h-52 overflow-hidden rounded-lg ">
                                    <Image src={item.image} alt={item.name} fill className="object-cover group-hover:scale-105 duration-500" />
                                    <div className="absolute bg-black/40 z-10 inset-0"></div>
                                </div>
                                <h1 className="text-lg text-white/90 font-bold">{item.name}</h1>
                                <p className="text-gray-300 flex-wrap line-clamp-2">{item.description}</p>
                                <div className="flex justify-between mt-2">
                                    <Link href={item.link ?? ''} className="text-blue-400 hover:underline flex gap-1 justify-center items-center">
                                        <ExternalLink className="size-5" />
                                        Live App
                                    </Link>
                                    <Button className="text-white/70 hover:cursor-pointer hover:scale-105" variant="gradient" onClick={handleClick}>
                                        {/* <Link href={`/project/${item.id}`}>
                                            <span className="font-bold">
                                                Detail
                                            </span>
                                            <ArrowRight />
                                        </Link> */}

                                        <span className="font-bold">
                                            Detail
                                        </span>
                                        <ArrowRight />
                                    </Button>
                                </div>
                            </Card>
                        ))}
                    </div>
                </TabsContent>
                <TabsContent value="tech-stack">
                    <div data-aos="fade-up" className="flex gap-4 justify-center flex-wrap">
                        {techStack.map((item, i) => (
                            <Card key={i} className="w-40 h-48 p-8 group bg-transparent border border-cyan-700/60 hover:scale-105 duration-300 transition-all">
                                <div className="relative w-full h-full flex justify-center items-center">
                                    <Image src={item.image} alt={item.name} width={16} height={16} className="w-16 h-16" />
                                    <div className="absolute -inset-1 bg-linear-to-r from-cyan-500 to-indigo-500 rounded-full opacity-0 group-hover:opacity-20 blur-lg transition duration-300"></div>
                                </div>
                                <p className="font-bold text-center text-lg text-white/70">{item.name}</p>
                            </Card>
                        ))}
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default Projects
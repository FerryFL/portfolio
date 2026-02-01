import { ArrowRight, Code, Cpu, ExternalLink } from "lucide-react"
import { Card } from "./ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"

const Projects = () => {
    return (
        <div id="Projects" className="w-full min-h-screen flex flex-col px-[5%] lg:px-[10%] py-10">
            <div className="flex gap-2 font-bold text-4xl md:text-5xl justify-center">
                <p data-aos="fade-up" data-aos-delay="200" className="pb-3 inline-block bg-custom-linear-cyan bg-clip-text text-transparent">Projects</p>
            </div>
            <Tabs data-aos="fade-up" data-aos-delay="200" defaultValue="project" className="mt-4">
                <TabsList className="bg-transparent border border-indigo-500/40 w-full py-8 px-2">
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
                        {[...Array(3)].map((_, i) => (
                            <Card key={i} className="w-full px-5 h-96 group bg-transparent bg-linear-to-tr from-cyan-500/60 to-indigo-500/60">
                                <div className="relative w-full h-52 overflow-hidden rounded-lg">
                                    <Image src="/img/erec.png" alt="Erecruitment" fill className="object-cover group-hover:scale-105 duration-500" />
                                </div>
                                <h1 className="text-lg text-white/90 font-bold">Kawan Lama E-Recruitment</h1>
                                <p className="text-gray-300 flex-wrap line-clamp-2">Kawan Lama E-Recruitment merupakan website rekrutmen sebagai media untuk kandidat dapat mendaftar menjadi bagian</p>
                                <div className="flex justify-between mt-2">
                                    <Link href="https://karir.kawanlamagroup.com/" className="text-blue-400 hover:underline flex gap-1 justify-center items-center">
                                        <ExternalLink className="size-5" />
                                        Live App
                                    </Link>
                                    <Button className="text-black bg-white/80 hover:cursor-pointer hover:scale-105">
                                        <span className="font-bold bg-linear-to-tr from-cyan-500 to-indigo-500 bg-clip-text text-transparent">
                                            Detail
                                        </span>
                                        <ArrowRight className="text-cyan-800/40" />
                                    </Button>
                                </div>
                            </Card>
                        ))}
                    </div>
                </TabsContent>
                <TabsContent value="tech-stack">
                    <div data-aos="fade-up" className="flex gap-4 justify-center flex-wrap">
                        {[...Array(10)].map((_, i) => (
                            <Card key={i} className="w-40 h-48 p-4 group bg-transparent bg-linear-to-tr from-cyan-500/60 to-indigo-500/60 hover:scale-105 duration-300 transition-all">
                                <div className="relative w-full h-full flex justify-center items-center">
                                    <Image src="/img/nextjs.png" alt="next" width={100} height={100} />
                                </div>
                                <p className="font-bold text-center text-lg text-white/70">Next JS</p>
                            </Card>
                        ))}
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default Projects
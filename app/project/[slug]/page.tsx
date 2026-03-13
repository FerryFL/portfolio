'use client'

import AnimatedBackground from "@/components/dashboard/AnimatedBackground"
import { Button } from "@/components/ui/button"
import { project } from "@/constants/projects"
import { ArrowLeft, Code2, Layers, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { redirect, useParams } from "next/navigation"

const Project = () => {
    const params = useParams()
    const slug = params.slug as string

    const currentProject = project.find(item => item.id == slug)
    if (!currentProject) {
        redirect('/')
    }

    return (
        <div className="flex flex-col p-6 md:p-10 w-full min-h-screen">
            <AnimatedBackground />
            <div className="w-full">
                <Button variant="gradient" asChild>
                    <Link href="/#Projects">
                        <ArrowLeft />
                        <span className="text-white/70">Back</span>
                    </Link>
                </Button>
            </div>

            <div className="flex flex-col lg:flex-row my-10 gap-8">

                <div className="flex-1 gap-6 flex flex-col order-1 lg:order-2 lg:px-10">
                    <p className="bg-custom-linear-cyan bg-clip-text text-transparent text-3xl md:text-5xl pb-1 font-bold">
                        {currentProject.name}
                    </p>
                    <p className="text-gray-400">{currentProject.description}</p>

                    <div className="grid grid-cols-2 gap-3 md:gap-4 p-3 md:p-4 bg-[#0a0a1a] rounded-xl overflow-hidden relative">
                        <div className="absolute inset-0 bg-linear-to-br from-blue-900/20 to-purple-900/20 opacity-50 blur-2xl z-0" />

                        <div className="relative z-10 flex items-center space-x-2 md:space-x-3 bg-white/5 p-2 md:p-3 rounded-lg border border-cyan-500/20 hover:border-cyan-500/30 transition-all duration-300 hover:scale-105">
                            <div className="bg-blue-500/20 p-1.5 md:p-2 rounded-full">
                                <Code2 className="text-blue-300 w-4 h-4 md:w-6 md:h-6" strokeWidth={1.5} />
                            </div>
                            <div className="grow">
                                <div className="text-lg md:text-xl font-semibold text-blue-200">{currentProject.tech?.length ?? 0}</div>
                                <div className="text-[10px] md:text-xs text-gray-400">Technologies</div>
                            </div>
                        </div>

                        <div className="relative z-10 flex items-center space-x-2 md:space-x-3 bg-white/5 p-2 md:p-3 rounded-lg border border-purple-500/20 transition-all duration-300 hover:scale-105 hover:border-purple-500/50 hover:shadow-lg">
                            <div className="bg-purple-500/20 p-1.5 md:p-2 rounded-full">
                                <Layers className="text-purple-300 w-4 h-4 md:w-6 md:h-6" strokeWidth={1.5} />
                            </div>
                            <div className="grow">
                                <div className="text-lg md:text-xl font-semibold text-purple-200">{currentProject.feature?.length ?? 0}+</div>
                                <div className="text-[10px] md:text-xs text-gray-400">Key Features</div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-transparent border-cyan-700/60 border p-6 space-y-4 rounded-2xl">
                        <div className="flex gap-2">
                            <Code2 className="text-cyan-800" />
                            <h1 className="text-white/70">Technology Used</h1>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {currentProject.tech?.map((item, index) => (
                                <div className="p-2 px-4 bg-black/30 text-white/70 rounded-xl text-sm hover:scale-105 duration-200" key={index}>{item}</div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex-1 order-2 lg:order-1">
                    <div className="relative group w-full h-56 md:h-96 overflow-hidden rounded-xl mb-6">
                        <Image src={currentProject.image} alt={currentProject.name} fill className="object-cover group-hover:scale-105 duration-500" />
                        <div className="absolute bg-black/40 z-10 inset-0"></div>
                    </div>
                    <div className="bg-transparent border-cyan-700/60 border p-6 space-y-4 rounded-2xl">
                        <div className="flex gap-2">
                            <Star className="text-cyan-800" />
                            <h1 className="text-white/70">Key Features</h1>
                        </div>
                        <div className="flex flex-col gap-1 ps-6">
                            {currentProject.feature?.map((item, index) => (
                                <div key={index} className="text-white/70">- {item}</div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Project
'use client'

import AnimatedBackground from "@/components/dashboard/AnimatedBackground"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { project } from "@/constants/projects"
import { ArrowLeft, BrushCleaning, Code2, Layers } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { redirect, useParams } from "next/navigation"

const Projectasdasd = () => {
    const params = useParams()
    const slug = params.slug as string

    const currentProject = project.find(item => item.id == slug)
    if (!currentProject) {
        redirect('/')
    }

    return (
        <div className="flex flex-col p-10 w-full min-h-screen">
            <AnimatedBackground />
            <div className="w-full">
                <Button variant="gradient" asChild>
                    <Link href="/">
                        <ArrowLeft />
                        Back
                    </Link>
                </Button>
            </div>
            <div className="flex my-10">
                <div className="flex-1">
                    <div className="relative w-full h-96 overflow-hidden rounded-xl mb-10">
                        <Image src={currentProject.image} alt={currentProject.name} fill className="object-cover group-hover:scale-105 duration-500" />
                        <div className="absolute bg-black/40 z-10 inset-0"></div>
                    </div>
                    <Card className="bg-transparent border border-cyan-900/20 bg-linear-to-tr from-cyan-100 to-cyan-200 bg-clip-text text-transparent">
                        <div className="flex gap-2">
                            <BrushCleaning className="text-cyan-800" />
                            <h1>Key Features</h1>
                        </div>
                        <p>- asdasd</p>
                    </Card>
                </div>
                <div className="flex-1 px-10">
                    <p className="bg-custom-linear-cyan bg-clip-text text-transparent text-5xl font-bold">{currentProject.name}</p>
                    <p className="text-gray-400 my-6">{currentProject.description}</p>
                    <div className="grid grid-cols-2 gap-3 md:gap-4 p-3 md:p-4 bg-[#0a0a1a] rounded-xl overflow-hidden relative">
                        <div className="absolute inset-0 bg-linear-to-br from-blue-900/20 to-purple-900/20 opacity-50 blur-2xl z-0" />

                        <div className="relative z-10 flex items-center space-x-2 md:space-x-3 bg-white/5 p-2 md:p-3 rounded-lg border border-cyan-500/20 hover:border-cyan-500/30 transition-all duration-300 hover:scale-105">
                            <div className="bg-blue-500/20 p-1.5 md:p-2 rounded-full">
                                <Code2 className="text-blue-300 w-4 h-4 md:w-6 md:h-6" strokeWidth={1.5} />
                            </div>
                            <div className="grow">
                                <div className="text-lg md:text-xl font-semibold text-blue-200">2</div>
                                <div className="text-[10px] md:text-xs text-gray-400">Total Teknologi</div>
                            </div>
                        </div>

                        <div className="relative z-10 flex items-center space-x-2 md:space-x-3 bg-white/5 p-2 md:p-3 rounded-lg border border-purple-500/20 transition-all duration-300 hover:scale-105 hover:border-purple-500/50 hover:shadow-lg">
                            <div className="bg-purple-500/20 p-1.5 md:p-2 rounded-full">
                                <Layers className="text-purple-300 w-4 h-4 md:w-6 md:h-6" strokeWidth={1.5} />
                            </div>
                            <div className="grow">
                                <div className="text-lg md:text-xl font-semibold text-purple-200">1</div>
                                <div className="text-[10px] md:text-xs text-gray-400">Fitur Utama</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projectasdasd
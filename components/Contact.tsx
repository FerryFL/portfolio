import { Mail, Phone, Share2 } from "lucide-react"
import { Card } from "./ui/card"

const Contact = () => {
    return (
        <div id="Contact" className="w-full min-h-96 flex flex-col px-[5%] lg:px-[10%] py-10">
            <div className="flex gap-2 font-bold text-4xl md:text-5xl justify-center">
                <p data-aos="fade-up" data-aos-delay="200" className="pb-3 inline-block bg-custom-linear-cyan bg-clip-text text-transparent">Contact</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="400" className="w-full flex flex-wrap gap-4 justify-center pt-5">
                <Card className="w-80 group bg-transparent bg-linear-to-tr from-cyan-500/70 to-indigo-500/70 hover:scale-105 duration-300">
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-fit p-4 bg-custom-linear-cyan rounded-lg text-white">
                            <Mail className="group-hover:rotate-12" />
                        </div>
                        <p className="text-white/80 font-bold text-lg">Email</p>
                        <span className="text-white/80">ferryfebrian.lim@gmail.com</span>
                    </div>
                </Card>
                <Card className="w-80 bg-transparent bg-linear-to-tr from-cyan-500/70 to-indigo-500/70 hover:scale-105 duration-300">
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-fit p-4 bg-custom-linear-cyan rounded-lg text-white">
                            <Phone />
                        </div>
                        <p className="text-white/80 font-bold text-lg">Whatsapp</p>
                        <span className="text-white/80">+62 898 8433 850</span>
                    </div>
                </Card>
                <Card className="w-80 bg-transparent bg-linear-to-tr from-cyan-500/70 to-indigo-500/70 hover:scale-105 duration-300">
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-fit p-4 bg-custom-linear-cyan rounded-lg text-white">
                            <Share2 />
                        </div>
                        <p className="text-white/80 font-bold text-lg">Linkedin</p>
                        <span className="text-white/80">www.linkedin.com/in/ferry-febrian-it/</span>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default Contact
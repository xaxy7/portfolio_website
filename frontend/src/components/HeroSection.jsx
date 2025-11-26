import {ArrowDown} from "lucide-react";


export const HeroSection = () =>{
    return <section id="hero" className={"relative min-h-screen flex flex-col items-center justify-center px-4"}>

        <div className="container max-width-4xl mx-auto text-center z-10">
            <div className="space-y-6 ">
                <div className="flex lg:flex-row flex-column gap-20px lg:flex-nowrap flex-wrap " >
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-left ">
                        <span className="opacity-0 animate-fade-in">My name is </span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1">Ksawery </span>
                        <span className=" opacity-0 animate-fade-in-delay-2">Kochanowicz </span>
                    </h1>
                    <div className="flex flex-col ">
                        <p className="text-lg md:text-xl text-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3 text-right">
                            Second-year <span className="text-primary "> Creative Computing </span> student with a focus on full‑stack web development using modern <span className="text-primary "> JavaScript </span> technologies. Enjoys turning ideas into functional, user-friendly web experiences while steadily building real-world skills through coursework and personal projects.
                        </p>
                        <div className="opacity-0 pt-4 animate-fade-in-delay-4 text-right">
                            <a href="#projects" className="cosmic-button">
                                View My Work
                            </a>
                        </div>
                    </div>


                </div>


            </div>

        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-sm text-muted-foreground mb-2">Scroll</span>
            <ArrowDown className="h-5 w-5 text-primary"/>
        </div>
    </section>
}
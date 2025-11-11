import {Github, Linkedin, Mail} from "lucide-react";


export const ContactSection = () =>{
    return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto ">
            <h2  className="text3xl md:text-4xl font-bold mb-4 text-center">
                Get In <span className="text-primary"> Touch</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Want to contact me? Feel free to reach out!
            </p>
            <div className="flex flex-row flex-wrap  gap-15 justify-center">
                <div className="space-y-6 ">
                    <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Mail className="h-6 w-6 text-primary"/>
                        </div>
                        <div>
                            <h4 className="font-medium text-left">Email:</h4>
                            <a href="mailto:kochanowicz.ksawery@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                kochanowicz.ksawery@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
                <div className="space-y-6 ">
                    <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Github className="h-6 w-6 text-primary"/>
                        </div>
                        <div>
                            <h4 className="font-medium text-left">Github:</h4>
                            <a href="https://github.com/xaxy7" className="text-muted-foreground hover:text-primary transition-colors">
                                https://github.com/xaxy7
                            </a>
                        </div>
                    </div>
                </div>
                <div className="space-y-6 ">
                    <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Linkedin className="h-6 w-6 text-primary"/>
                        </div>
                        <div>
                            <h4 className="font-medium text-left">LinkedIn:</h4>
                            <a href="https://www.linkedin.com/in/ksawery-kochanowicz/" className="text-muted-foreground hover:text-primary transition-colors">
                                https://www.linkedin.com/in/ksawery-kochanowicz/
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </section>
    )
}
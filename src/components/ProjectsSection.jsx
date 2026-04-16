import {useEffect, useState} from "react";
import {ExternalLink, Github} from "lucide-react";
import {Link} from "react-router-dom";

import {projects} from "@/components/ProjectsData.jsx";

export const ProjectsSection = ({limit}) => {
    const visibleProjects = typeof limit === "number" ? projects.slice(0, limit) : projects;

    function ImageRotator({images, delay =3000}) {
        const [index, setIndex] = useState(0);

        useEffect(() =>{
            const interval = setInterval(()=>{
                setIndex(prev => (prev+1) % images.length)
            }, delay)

            return () => clearInterval(interval)
        }, [images, delay])
        return (
            <img
                src={images[index]}
                className="w-full h-full object-contain "
            />
        );
    }

    return  (
    <section id="projects" className="py-20 px-4 relative ">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Featured <span className="text-primary">Projects</span></h2>
        </div>

        <p className= "text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Here are some of my projects from the past year. Each of them shows my different capabilities
        </p>

        <div className="grid grid-cols-1 gap-16 lg:px-25 md:px-10 sm:px-4 ">
            {visibleProjects.map((project, index) => (
                <div key={project.id} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover grid md:grid-cols-2 sm:grid-cols-1">
                        {index % 2 === 0 ? (
                            <>
                                <Link to={`/projects/${project.id}`} className="block">
                                    <div className="aspect-video overflow-hidden max-h-150">
                                        <ImageRotator images={project.images} delay={3000} />
                                    </div>
                                </Link>

                                <div className={"px-8 py-4"} >
                                    <Link to={`/projects/${project.id}`} className="block">
                                        <h3 className={"font-semibold text-2xl pb-4 mb-1"}>{project.title}</h3>
                                        <p className={"text-left text-muted-foreground text-lg mb-4"}>{project.description}</p>
                                        <div className={"p-4"}>
                                            <div className="flex flex-wrap gap-2 mb-4 justify-center">
                                                {project.tags.map((tag) => (
                                                    <span key={tag} className="px-2 py-1  border font-medium rounded-full bg-primary/20 text-secondary-foreground">{tag}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </Link>
                                    <div className="flex justify-between items-center">
                                        <div className="flex space-x-3">
                                             <a href={project.demoUrl} target="_blank" rel="noreferrer" className="text-foreground/80 hover:text-primary transition-colors duration-300"><ExternalLink/></a>
                                            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-foreground/80 hover:text-primary transition-colors duration-300"><Github/></a>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className={"px-4 py-4"} >
                                    <Link to={`/projects/${project.id}`} className="block">
                                        <h3 className={"font-semibold text-2xl pb-4 mb-1"}>{project.title}</h3>
                                        <p className={"text-left text-muted-foreground text-lg mb-4"}>{project.description}</p>
                                        <div className={"p-4"}>
                                            <div className="flex flex-wrap gap-2 mb-4 justify-center">
                                                {project.tags.map((tag) => (
                                                    <span key={tag} className="px-2 py-1  border font-medium rounded-full bg-primary/20 text-secondary-foreground">{tag}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </Link>
                                    <div className="flex justify-between items-center">
                                        <div className="flex space-x-3">
                                            <a href={project.demoUrl} target="_blank" rel="noreferrer" className="text-foreground/80 hover:text-primary transition-colors duration-300"><ExternalLink/></a>
                                            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-foreground/80 hover:text-primary transition-colors duration-300"><Github/></a>
                                        </div>
                                    </div>
                                </div>

                                <Link to={`/projects/${project.id}`} className="block">
                                    <div className="aspect-video overflow-hidden max-h-150">
                                        <ImageRotator images={project.images} delay={3000} />
                                    </div>
                                </Link>
                            </>
                        )}

                </div>
            ))}
        </div>
    </section>
    )
}
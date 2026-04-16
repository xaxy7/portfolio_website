import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {ExternalLink, Github} from "lucide-react";

import {getProjectById} from "@/components/ProjectsData.jsx";
import {Background} from "@/components/Background.jsx";
import {NavBar} from "@/components/NavBar.jsx";
import {Footer} from "@/components/Footer.jsx";

export const ProjectDetail = () => {
    const {projectId} = useParams();
    const project = getProjectById(projectId);

    function ImageRotator({images, delay = 3000}) {
        const [index, setIndex] = useState(0);

        useEffect(() => {
            const interval = setInterval(() => {
                setIndex((prev) => (prev + 1) % images.length);
            }, delay);

            return () => clearInterval(interval);
        }, [images, delay]);

        return <img src={images[index]} className="w-full h-full object-contain" />;
    }

    if (!project) {
        return (
            <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
                <Background/>
                <NavBar/>

                <main>
                    <section className="py-16 px-4">
                        <div className="container mx-auto max-w-3xl">
                            <h1 className="text-3xl font-bold mb-4">Project not found</h1>
                            <Link to="/projects" className="text-primary hover:underline">
                                Back to projects
                            </Link>
                        </div>
                    </section>
                </main>

                <Footer/>
            </div>
        );
    }

    return (
        <div className=" bg-background text-foreground overflow-x-hidden relative">
            <Background/>
            <NavBar/>

            <main>
                <section className="py-20 px-10 relative">
                    <div className="p">
                        <div className="mb-6">
                            <Link to="/projects" className="text-primary hover:underline">
                                Back to projects
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                            <div className="bg-card rounded-lg overflow-hidden shadow-xs aspect-video min-h-100">
                                {project.images?.length ? (
                                    <ImageRotator images={project.images} delay={3000} />
                                ) : project.image ? (
                                    <img src={project.image} className="w-full h-full object-contain" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                                        No preview available
                                    </div>
                                )}
                            </div>

                            <div>
                                <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
                                <div className="text-left text-muted-foreground text-lg mb-6 min-w-200">
                                    {project.description}
                                </div>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 py-1 border font-medium rounded-full bg-primary/20 text-secondary-foreground"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex flex-wrap items-center gap-3">
                                    <a
                                        href={project.demoUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    >
                                        <ExternalLink />
                                    </a>
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    >
                                        <Github />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer/>
        </div>
    );
};


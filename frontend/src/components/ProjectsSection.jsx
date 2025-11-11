import {useEffect, useState} from "react";
import {ExternalLink, Github} from "lucide-react";


const projects = [
    {
        id: 1,
        title: "SideQuest",
        description: (  <> <span className="font-bold text-primary">SideQuest </span> is a full-stack web platform designed to help university dorm residents connect in real
            life through collaborative activities inspired by RPG and adventure-game conventions.
            Built with a <span className="font-bold text-primary">Node.js</span> backend <span className="font-bold text-primary">(Express, MySQL, WebSockets)</span> and a <span className="font-bold text-primary">React + Vite </span> frontend, the site lets users create, join,
            and complete “Side Quests”—ranging from simple favors to spontaneous group adventures.
            Each completed quest generates a post with photos, comments, and shared memories, all organized in a personalized QuestLog
            that showcases every user’s journey. With features like real-time messaging, Socket.IO-driven interactions, and a distinctive paper-RPG visual style,
            SideQuest transforms everyday dorm life into a fun, social, and immersive experience.", </>),
        image: "/projects/SideQuest_1.png",
        images: ["/projects/SideQuest_1.png", "/projects/SideQuest_2.png", "/projects/SideQuest_3.png"],
        tags: ["JavaScript", "React", "Node.js", "Express", 'HTML/CSS',"Git"],
        demoUrl: "https://cc241042-10679.node.fhstp.cc",
        githubUrl: "https://github.com/xaxy7/SideQuest",
    },
    {
        id: 2,
        title: "Peck of Rage",
        description: (<> <span className="font-bold text-primary">Peck of Rage</span> is a small 2D platformer inspired by classic retro games, where you control a pigeon making its way through a chaotic city, to reach his spaceship.
            Built using <span className="font-bold text-primary"> JavaScript, HTML, </span>  and <span className="font-bold text-primary"> CSS,</span> the project features hand-drawn art and simple animations, all created from scratch.
            As one of my first game projects, it showcases the basics of platformer mechanics, level building, and visual design in a fun, lightweight package.</>),
        image: "/projects/PeckOFRage_3.png",
        images: ["/projects/PeckOFRage_1.png", "/projects/PeckOFRage_2.png", "/projects/PeckOFRage_3.png"],
        tags: ["JavaScript","HTML/CSS", "Git"],
        demoUrl: "https://xaxy7.github.io/cc241042_CCL_1/",
        githubUrl: "https://github.com/xaxy7/cc241042_CCL_1",
    },
    {
        id: 3,
        title: "Map Website",
        description: (<>This project is a web platform that allows users to mark the countries they’ve visited on an <span className="font-bold text-primary">interactive map </span> and browse travel maps created by others.
        It also includes additional features such as chat rooms and basic statistics.
        Developed in a team of five using <span className="font-bold text-primary"> JavaScript, Node.js, Express,</span> and <span className="font-bold text-primary">Git</span>,
        the project offered solid experience in collaborative development and task coordination.
        The map functionality—covering data handling, state updates, and user interaction—was primarily overseen and implemented by me,
        forming a central technical element of the application.</>),
        image: "",
        // images: ["/projects/Map_Website_1.png", "/projects/Map_Website_2.png", "/projects/Map_Website_3.png"],
        images: ["/projects/PeckOFRage_1.png", "/projects/PeckOFRage_2.png", "/projects/PeckOFRage_3.png"],
        tags: ["JavaScript", "Node.js", "Express", "HTML/CSS", "Git"],
        demoUrl: "#",
        githubUrl: "",
    }
]

export const ProjectsSection = () => {

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
    <section id="projects" className="py-4 px-4 relative ">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Featured <span className="text-primary">Projects</span></h2>
        </div>

        <p className= "text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Here are some of my projects from the past year. Each of them shows my different capablities
        </p>

        <div className="grid grid-cols-1 gap-16 lg:px-25 md:px-10 sm:px-4">
            {projects.map((project,key) => (
                <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover grid grid-cols-2">
                        {key % 2 === 0 ? (
                            <>
                                <div className="h-full  overflow-hidden">
                                    <ImageRotator images={project.images} delay={3000} />
                                </div>

                                <div className={"px-8 py-4"} >
                                    <h3 className={"font-semibold text-2xl pb-4 mb-1"}>{project.title}</h3>
                                    <p className={"text-left text-muted-foreground text-lg mb-4"}>{project.description}</p>
                                    <div className={"p-4"}>
                                        <div className="flex flex-wrap gap-2 mb-4 justify-center">
                                            {project.tags.map((tag)=>(
                                                <span className="px-2 py-1  border font-medium rounded-full bg-primary/20 text-secondary-foreground">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div className="flex space-x-3">
                                            <a href={project.demoUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300"><ExternalLink/></a>
                                            <a href={project.githubUrl} target='_blank' className="text-foreground/80 hover:text-primary transition-colors duration-300"><Github/></a>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className={"px-4 py-4"} >
                                    <h3 className={"font-semibold text-2xl pb-4 mb-1"}>{project.title}</h3>
                                    <p className={"text-left text-muted-foreground text-lg mb-4"}>{project.description}</p>
                                    <div className={"p-4"}>
                                        <div className="flex flex-wrap gap-2 mb-4 justify-center">
                                            {project.tags.map((tag)=>(
                                                <span className="px-2 py-1  border font-medium rounded-full bg-primary/20 text-secondary-foreground">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div className="flex space-x-3">
                                            <a href={project.demoUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300"><ExternalLink/></a>
                                            <a href={project.githubUrl} target='_blank' className="text-foreground/80 hover:text-primary transition-colors duration-300"><Github/></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="h-full overflow-hidden">
                                    <ImageRotator images={project.images} delay={3000} />
                                </div>
                            </>
                        )}

                </div>
            ))}
        </div>
    </section>
    )
}
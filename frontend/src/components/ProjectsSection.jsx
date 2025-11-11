import {useEffect, useState} from "react";


const projects = [
    {
        id: 1,
        title: "SideQuest",
        description: "Full Stack website made with Node.js and React",
        image: "/projects/SideQuest_1.png",
        images: ["/projects/SideQuest_1.png", "/projects/SideQuest_2.png", "/projects/SideQuest_3.png"],
        tags: ["JavaScript, React, Node.js, Express, HTML/CSS, Git"],
        demoUrl: "#",
        githubUrl: "https://github.com/xaxy7/SideQuest",
    },
    {
        id: 2,
        title: "Peck of Rage",
        description: "2d Web platformer made with JavaScript",
        image: "/projects/PeckOFRage_3.png",
        images: ["/projects/PeckOFRage_1.png", "/projects/PeckOFRage_2.png", "/projects/PeckOFRage_3.png"],
        tags: ["JavaScript,HTML/CSS, Git"],
        demoUrl: "https://xaxy7.github.io/cc241042_CCL_1/",
        githubUrl: "https://github.com/xaxy7/cc241042_CCL_1",
    },
    {
        id: 3,
        title: "Map Website",
        description: "Full Stack website made in a team of 5",
        image: "",
        // images: ["/projects/Map_Website_1.png", "/projects/Map_Website_2.png", "/projects/Map_Website_3.png"],
        images: ["/projects/PeckOFRage_1.png", "/projects/PeckOFRage_2.png", "/projects/PeckOFRage_3.png"],
        tags: ["JavaScript, Node.js, Express, HTML/CSS, Git"],
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
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
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

                                <div className={"px-4 py-4"} >
                                    <h3 className={"font-semibold text-2xl pb-4"}>{project.title}</h3>
                                    <p className={"text-left"}>{project.description}</p>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className={"px-4 py-4"}>
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
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
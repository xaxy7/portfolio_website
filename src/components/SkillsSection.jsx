import {useState} from "react";
import {cn} from "@/lib/utils.js";
import {DiHtml5, DiMysql, DiNodejsSmall, DiPython, DiReact} from "react-icons/di";
import {HiCodeBracket} from "react-icons/hi2";
import {TbBrandCpp} from "react-icons/tb";
import {SiKotlin} from "react-icons/si";
import {IoLogoJavascript} from "react-icons/io";
import {FaFigma, FaGitAlt} from "react-icons/fa";
import {IconContext} from "react-icons";



const skills = [
    //Frontend
    {name: "HTML/CSS", level: 80, category: "frontend", icon: <DiHtml5/>},
    {name: "React", level: 60, category: "frontend", icon: <DiReact />},

    //Backend
    {name: "Node.js", level: 60, category: "backend", icon: <DiNodejsSmall />},
    {name: "Express", level: 60, category: "backend", icon: <HiCodeBracket />},
    {name: "MySQL", level: 60, category: "backend", icon: <DiMysql />},

    //Languages
    {name: "Python", level: 60, category: "languages",icon: <DiPython /> },
    {name: "C++", level: 60, category: "languages", icon:<TbBrandCpp />},
    {name: "Kotlin", level: 60, category: "languages", icon: <SiKotlin /> },
    {name: "JavaScript", level: 60, category: "languages", icon: <IoLogoJavascript />},

    //Tools
    {name: "Figma", level: 60, category: "tools", icon: <FaFigma />},
    {name: "Git", level: 60, category: "tools", icon: <FaGitAlt />}
]

const categories = ["all", "frontend", "backend", "tools", "languages"]


export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory)

    return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4l font-bold mb-12 text-center">
                    <span className="text-primary"> Skills</span>
                </h2>
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key)=>(
                        <button
                            key={key}
                            onClick={() => setActiveCategory(category)}
                            className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                <IconContext.Provider value={{size: "2rem"}}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill,key) =>(
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="text-left mb-4 flex flex-row justify-between">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                                <h3 className="text-foreground/80"> {skill.icon}</h3>
                            </div>
                            {/*<div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">*/}
                            {/*    <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease_out"*/}
                            {/*         style={{width: skill.level + "%"}}*/}
                            {/*    />*/}
                            {/*</div>*/}
                            {/*<div className="text-right mt-1">*/}
                            {/*    <span className="text-sm text-muted-foreground">{skill.level}%</span>*/}
                            {/*</div>*/}


                        </div>
                    ))}
                </div>
                </IconContext.Provider>
            </div>
    </section>
    )
}
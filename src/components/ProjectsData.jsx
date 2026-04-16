// Central place to keep the projects list.
// To add a new project, append a new object to `projects` following the same structure.
// For preview images (public folder), use `withBaseUrl("projects/<file>.png")`.
// Vite's `base` may or may not end with `/`, so we normalize it here.
const baseUrlRaw = import.meta.env.BASE_URL;
const baseUrl = (!baseUrlRaw ? "/" : baseUrlRaw).endsWith("/")
    ? (!baseUrlRaw ? "/" : baseUrlRaw)
    : `${!baseUrlRaw ? "/" : baseUrlRaw}/`;
const withBaseUrl = (publicPath) => `${baseUrl}${publicPath.replace(/^\/+/, "")}`;

export const projects = [
    {
        id: 0,
        title: "GeoQuest",
        description: (
            <>
                <span className="font-bold text-primary">GeoQuest </span> is and Android quiz app devloped using Kotlin and Jetpack Compose, which enables users to learn and recognize world country flags and geographic shapes through interactive gameplay.
                As part of the project, I have conducted iterative Usability Evaluation of two versions of the application: user testing (A/B) involving formative and sumamtive tests. The gathered data was evaluated and the feedback was incorporated into the final design of the app.
            </>
        ),
        image: withBaseUrl("projects/GeoQuest_1.jpg"),
        images: [
            withBaseUrl("projects/GeoQuest_1.jpg"),
            withBaseUrl("projects/GeoQuest_2.jpg"),
            withBaseUrl("projects/GeoQuest_3.jpg"),
        ],
        tags: ["Kotlin", "Jetpack Compose", "Mapbox", "OpenStreetMap"],
        demoUrl: "https://xaxy7.github.io/CCL3-WS2025/",
        githubUrl: "https://github.com/xaxy7/CCL3-WS2025",
    },
    {
        id: 5,
        title: "Recreation of an original U-Net architecture",
        description: (
            <>
                This project is a recreation of an <span className="font-bold text-primary"> original architecture of a U-Net for biomedical image segmentation,</span> completed as a semester project for one of my university courses. This model was developed in Python, trained on ultrasound images and comapared to other baseline CNNs. The findings where documented an combined into a research paper. In the end the paper Not only received the highest possible score, but it was also distinguished for going substantially beyond expectations of the curriculum and for excellent quality of background research.  
            </>
        ),
        image: withBaseUrl("projects/U-net.png"),
        images: [
            withBaseUrl("projects/U-net.png"),

        ],
        tags: ["Python", "Machine Learning"],
        demoUrl: "projects/u-net.pdf",
        githubUrl: "",        
    },
    {
        id: 1,
        title: "SideQuest",
        description: (
            <>
                <span className="font-bold text-primary">SideQuest </span> is a full-stack web platform designed to help
                university dorm residents connect in real life through collaborative activities inspired by RPG and
                adventure-game conventions.
                Built with a <span className="font-bold text-primary">Node.js</span> backend{" "}
                <span className="font-bold text-primary">(Express, MySQL, WebSockets)</span> and a{" "}
                <span className="font-bold text-primary">React + Vite </span> frontend, the site lets users create,
                join, and complete “Side Quests”—ranging from simple favors to spontaneous group adventures.
                Each completed quest generates a post with photos, comments, and shared memories, all organized in a
                personalized QuestLog that showcases every user’s journey. With features like real-time messaging,
                Socket.IO-driven interactions, and a distinctive paper-RPG visual style, SideQuest transforms everyday
                dorm life into a fun, social, and immersive experience.
            </>
        ),
        image: withBaseUrl("projects/SideQuest_1.png"),
        images: [
            withBaseUrl("projects/SideQuest_1.png"),
            withBaseUrl("projects/SideQuest_2.png"),
            withBaseUrl("projects/SideQuest_3.png"),
        ],
        tags: ["JavaScript", "React", "Node.js", "Express", "HTML/CSS", "Git"],
        demoUrl: "https://cc241042-10679.node.fhstp.cc",
        githubUrl: "https://github.com/xaxy7/SideQuest",
    },    
    {
        id: 4,
        title: "Arduino Slot Machine",
        description: (
            <>
                <span className="font-bold text-primary">Arduino Slot Machine </span> is a simple slot machine built using Arduino components, built both as a university and passion project. This project required me and my team to design the circuit, the wooden case and the logic behind the randomizng algortithm. 
            </>
        ),
        image: withBaseUrl("projects/ArduinoSlotMachine_1.jpg"),
        images: [
            withBaseUrl("projects/ArduinoSlotMachine_1.jpg"),
            withBaseUrl("projects/ArduinoSlotMachine_2.jpg"),

        ],
        tags: ["Arduino", "C", "Git"],
        demoUrl: "https://arduino-slot-machine.com",
        githubUrl: "https://github.com/xaxy7/ArduinoSlotMachine",
    },

    {
        id: 2,
        title: "Peck of Rage",
        description: (
            <>
                <span className="font-bold text-primary">Peck of Rage</span> is a small 2D platformer inspired by classic
                retro games, where you control a pigeon making its way through a chaotic city, to reach his spaceship.
                Built using <span className="font-bold text-primary"> JavaScript, HTML, </span> and{" "}
                <span className="font-bold text-primary"> CSS,</span> the project features hand-drawn art and simple
                animations, all created from scratch.
                As one of my first game projects, it showcases the basics of platformer mechanics, level building, and
                visual design in a fun, lightweight package.
            </>
        ),
        image: withBaseUrl("projects/PeckOFRage_3.png"),
        images: [
            withBaseUrl("projects/PeckOFRage_1.png"),
            withBaseUrl("projects/PeckOFRage_2.png"),
            withBaseUrl("projects/PeckOFRage_3.png"),
        ],
        tags: ["JavaScript", "HTML/CSS", "Git"],
        demoUrl: "https://xaxy7.github.io/cc241042_CCL_1/",
        githubUrl: "https://github.com/xaxy7/cc241042_CCL_1",
    },
    {
        id: 3,
        title: "Map Website",
        description: (
            <>
                This project is a web platform that allows users to mark the countries they’ve visited on an{" "}
                <span className="font-bold text-primary">interactive map </span> and browse travel maps created by
                others. It also includes additional features such as chat rooms and basic statistics.
                Developed in a team of five using <span className="font-bold text-primary"> JavaScript, Node.js, Express,</span>{" "}
                and <span className="font-bold text-primary">Git</span>, the project offered solid experience in
                collaborative development and task coordination.
                The map functionality—covering data handling, state updates, and user interaction—was primarily overseen
                and implemented by me, forming a central technical element of the application.
            </>
        ),
        image: "",
        images: [
            withBaseUrl("projects/Map_Website_1.png"),
            withBaseUrl("projects/Map_Website_2.png"),
            withBaseUrl("projects/Map_Website_3.png"),
        ],
        tags: ["JavaScript", "Node.js", "Express", "HTML/CSS", "Git"],
        demoUrl: "#",
        githubUrl: "",
    },
]

export function getProjectById(id) {
    const numericId = Number(id)
    return projects.find((p) => p.id === numericId)
}


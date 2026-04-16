import {Background} from "@/components/Background.jsx";
import {NavBar} from "@/components/NavBar.jsx";
import {ProjectsSection} from "@/components/ProjectsSection.jsx";
import {Footer} from "@/components/Footer.jsx";

export const Projects = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
            <Background/>
            <NavBar/>

            <main>
                <ProjectsSection/>
            </main>

            <Footer/>
        </div>
    );
};


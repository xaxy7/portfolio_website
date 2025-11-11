import {ThemeToggle} from "@/components/ThemeToggle.jsx";
import {NavBar} from "@/components/NavBar.jsx";

import {Background} from "@/components/Background.jsx";
import {HeroSection} from "@/components/HeroSection.jsx";
import {About} from "@/components/About.jsx"
import {SkillsSection} from "@/components/SkillsSection.jsx";
import {ProjectsSection} from "@/components/ProjectsSection.jsx";
import {ContactSection} from "@/components/ContactSection.jsx";


export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/*Theme Toggle*/}
        <ThemeToggle />
        {/*Background Effects*/}
        <Background/>
        {/*NavBar*/}
        <NavBar/>

        {/*MainContent*/}
        <main >
            <HeroSection/>
            {/*<About/>*/}
            <SkillsSection/>
            <ProjectsSection/>
            <ContactSection/>
        </main>
        {/*Footer*/}
    </div>
}
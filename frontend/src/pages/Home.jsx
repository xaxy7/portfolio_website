import {ThemeToggle} from "@/components/ThemeToggle.jsx";
// import {NavBar} from "@/components/NavBar.jsx";
import {NavbarTest} from "@/components/NavBarTest.jsx";
import {Background} from "@/components/Background.jsx";


export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/*Theme Toggle*/}
        <ThemeToggle />
        {/*Background Effects*/}
        <Background/>
        {/*NavBar*/}
        {/*<NavBar/>*/}
        <NavbarTest/>
        {/*MainContent*/}

        {/*Footer*/}
    </div>
}
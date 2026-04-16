import {useEffect} from "react";
import {BrowserRouter, Routes, Route, useLocation} from "react-router-dom";
import {Home} from "@/pages/Home.jsx";
import {NotFound} from "@/pages/NotFound.jsx";
import {ProjectDetail} from "@/pages/ProjectDetail.jsx";
import {Projects} from "@/pages/Projects.jsx";

function ScrollToHash() {
    const location = useLocation();

    useEffect(() => {
        const {hash} = location;
        if (!hash || !hash.startsWith("#")) return;

        const id = hash.slice(1);
        if (!id) return;

        const scroll = () => {
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({behavior: "smooth", block: "start"});
                return true;
            }
            return false;
        };

        // The section might render on the next tick (route change), so we retry briefly.
        let attempts = 0;
        const interval = setInterval(() => {
            attempts += 1;
            if (scroll() || attempts > 20) clearInterval(interval);
        }, 50);

        scroll();
        return () => clearInterval(interval);
    }, [location.pathname, location.hash]);

    return null;
}


function App() {


  return (
    <>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <ScrollToHash />
            <Routes>
                <Route index element={<Home />} />
                <Route path="projects" element={<Projects />} />
                <Route path="projects/:projectId" element={<ProjectDetail />} />
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App

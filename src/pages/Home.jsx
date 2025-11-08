import { ThemeToggle } from "../components/ThemeToggle";
import {StarBackground} from "../components/StarBackground";
import {NavBar} from "../components/NavBar";
import {HeroSection} from "../components/HeroSection";
import {AboutMe} from "../components/AboutMe";
import { SkillsSection } from "../components/SkillsSection";
import {ProjectsSection} from "../components/ProjectsSection";

export function Home() {
    // console.log('Home');
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/*Theme Toggle*/}
            <ThemeToggle/>
            {/*Background Effects*/}
            <StarBackground/>
            {/*NavBar*/}
            <NavBar/>
            {/*Main content*/}
            <main>
                <HeroSection/>
                <AboutMe/>
                <SkillsSection/>
                <ProjectsSection/>
            </main>
            {/*Footer*/}
        </div>  
    )
}
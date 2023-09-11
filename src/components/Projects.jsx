import { FooterSection } from "./footer";
import { NavSection } from "./nav";
import "../styles/component.css";
import "../styles/Projects.css";

export default function ProjectsPage() {
    return (
        <div className="Container">
            <NavSection />
        <div className="ProjectsContainer">
            <h1 className="Projects-Heading">Take a look at my Projects!</h1>
            <div className="Projects">
            <a href="https://dream-v2.vercel.app/" target="_blank" className="ProjectLinks">
                <div>Dream</div>
            </a>
            <a href="https://thinkr.vercel.app/" target="_blank" className="ProjectLinks">
                <div>Thinkr</div>
            </a>
            <a href="https://the-halls-whisper-murder.vercel.app/" target="_blank" className="ProjectLinks" >
                <div>The Halls Whisper MURDER!</div>
            </a>
            <a href="https://web54-spacial-design-idea.vercel.app/" target="_blank" className="ProjectLinks" >
                <div>Spacial Design Experience</div>
            </a>
            <a href="#" target="_blank" className="ProjectLinks" >
                <div>Another One</div>
            </a>
            <a href="#" target="_blank" className="ProjectLinks" >
                <div>Another One</div>
            </a>
            <a href="#" target="_blank" className="ProjectLinks" >
                <div>Another One</div>
            </a>
            <a href="#" target="_blank" className="ProjectLinks" >
                <div>Another One</div>
            </a>
            </div>
        </div>
        <FooterSection />
        </div>
    )
}
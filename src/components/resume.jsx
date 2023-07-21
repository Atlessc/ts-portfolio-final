import "./component.css"
import "./resume.css"
import "./XPCards.css"
import { FooterSection } from "./footer"
import { NavSection } from "./nav"
import { XPCards } from "./XPCards"
import { CertCards } from "./CertCards"

export function ResumePage() {

    return (
        <div className="Container">
            <NavSection />
            <div className="Resume">
                <div className="ResumeHeader">Tyler Smith's Resume</div>
                <div className="AspireQuote"><i>Motivated and detail-oriented individual with a passion for coding and web development. Possessing 7 certificates, 6 months of hands-on experience in HTML, CSS, Javascript, typescript, SQL, JSON, React, and a personal website built from scratch while learning. Committed to delivering high-quality results and eager to bring customer service and tech support background to a new role as a junior web developer.</i></div>
                <XPCards />
                <div className="Certificates">
                    <div className="SectionContent">
                    <CertCards />
                    </div>
                </div>
            </div>
            <FooterSection />
        </div>
    )
}
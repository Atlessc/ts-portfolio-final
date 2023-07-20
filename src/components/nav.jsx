import "./component.css"
import "./nav.css"
import { Link } from "react-router-dom"
import { useState } from "react"

// import Img1 from "../public/Logo1.png"
import Img1 from "/Vite.png"

export function NavSection() {

    var Img = Img1;

    const [nav, setNav] = useState(false)

    function toggleNav() {

        setNav(!nav)
    }
    return (
        <div className="Nav">
            <div className="LogoName">
            <img alt="Tyler Smith's Resume" src={Img} className="NavLogo"/>
            <div className="Logo">Tyler Smith's Resume</div>
            </div>
            <div className="NavButton">
                {
                nav ?
                <div className="NavLinks">
                    <Link to="/" className="NavItem" tabIndex={2}>Home</Link>
                    <Link to="/resume" className="NavItem" tabIndex={3}>Resume</Link>
                    <Link to="/projects" className="NavItem" tabIndex={4}>Projects</Link>
                    <Link to="/contact" className="NavItem" tabIndex={5}>Contact</Link>
                </div>
                :
                null
                }
                <button className="Menubutton" onClick={toggleNav} tabIndex={1}>☰</button>
            </div>
        </div>
    )
}
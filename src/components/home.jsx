import "../styles/component.css"
import "../styles/home.css"
import { Link } from "react-router-dom"

export function HomePage() {
    return (
        <div className="HomeContent">
            <div className="Home">
                <h1>Hello! I'm Tyler Smith</h1>
                <p>I'm an aspiring web designer and developer starting my career here by creating my own portfolio websiteI'm an aspiring web designer and developer starting my career here by creating my own portfolio website</p>
                <div className="CTA">
                    <div className="CTA-sections">
                        <p>Are your looking to hire me for IT?</p>
                        <Link to="/resume" className="CTA-button">Look at my resume</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
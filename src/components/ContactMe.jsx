import "../styles/component.css";
import "../styles/contact.css";
import { FooterSection } from "./footer";
import { NavSection } from "./nav";

export function ContactPage() {
    return(
    <div className="Container">
        <NavSection />
    <div className="Contact">
            <div>
            <div className="Contact-Header">Contact Me</div>
            <form action="https://formsubmit.co/tylersmith4596@gmail.com" method="POST">
                <label className="Contact-Name">
                    Name:
                    <input type="text" name="name" placeholder="John Smith" />
                </label>
                <label className="Contact-Email">
                    Email:
                    <input type="email" name="email" placeholder="JohnSmith@Email.com" required />
                </label>
                <label className="Contact-Message">
                    Message:<br/>
                    <textarea name="message" placeholder="Send me a message! This will email me directly" />
                </label>
                <input type="submit" value="Submit" className="Conatct-SubmitBtn"/>
            </form>
            </div>
</div>
<FooterSection />
</div>


    );
};

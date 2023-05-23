import "./component.css";
import { FooterSection } from "./footer";
import { NavSection } from "./nav";

export function ContactPage() {
    return(
    <div className="Container">
        <NavSection />
    <div className="Contact">
            <div>
            <div>Contact me</div>
            <form action="https://formsubmit.co/tylersmith4596@gmail.com#" method="POST">
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" placeholder="JohnSmith@Email.com" required />
                </label>
                <label className="Message">
                    Message:<br/>
                    <textarea name="message" placeholder="Send me a message! this will directly Email me" />
                </label>
                <input type="submit" value="Submit" />
            </form>
            </div>
</div>
<FooterSection />
</div>


    );
};
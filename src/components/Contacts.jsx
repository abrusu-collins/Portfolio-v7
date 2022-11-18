import twitter from "../img/twitter.png";
import linkedin from "../img/linkedin.png";
import github from "../img/github.png";

function Contacts() {
    return ( 
        <div className="contacts" id="contacts">
            <p className="touch">Get in touch🤙</p>
            <div className="socials">
            <a href="https://twitter.com/devSedem"><img src={twitter} alt="" /></a>
            <a className="linkedin" href="ttps://www.linkedin.com/in/abrusu-collins-359a4416a/"><img src={linkedin} alt="" /></a>
            <a href="https://github.com/abrusu-collins"><img src={github} alt="" /></a>
            </div>
        </div>
     );
}

export default Contacts;
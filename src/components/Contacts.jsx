import twitter from "../img/twitter.png";
import linkedin from "../img/linkedin.png";
import github from "../img/github.png";

function Contacts() {
    return ( 
        <div className="contacts" id="contacts">
            <p className="touch">Get in touch🤙</p>
            <div className="socials">
            <a href=""><img src={twitter} alt="" /></a>
            <a className="linkedin" href=""><img src={linkedin} alt="" /></a>
            <a href=""><img src={github} alt="" /></a>
            </div>
        </div>
     );
}

export default Contacts;
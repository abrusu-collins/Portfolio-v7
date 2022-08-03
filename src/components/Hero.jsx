import avatar from "../img/avatar.webp";
function Hero() {
    return ( 
        <div className="hero">
            <div className="leftside">
            <h1 id="name">Collins Abrusu</h1>
            <h1 id="job">Front End Engineer</h1>
            <div id="links">
                <a href="https://github.com/abrusu-collins">GitHub</a>
                <a href="https://twitter.com/devSedem">Twitter</a>
                <a href="https://www.linkedin.com/in/abrusu-collins-359a4416a/">LinkedIn</a>
                <a href="mailto">Gmail</a>
                <a href="dd">Resume</a>
            </div>
            </div>
           <img src={avatar} alt="avatar" />
           

        </div>
     );
}

export default Hero;
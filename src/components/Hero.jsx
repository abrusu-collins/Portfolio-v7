import avatar from "../img/avatar.webp"
function Hero() {
    return ( 
        <div className="hero">
            <div className="leftside">
            <h1 id="name">Collins Abrusu</h1>
            <h1 id="job">Front End Engineer</h1>
            <div id="links">
                <a href="dd">GitHub</a>
                <a href="dd">Twitter</a>
                <a href="dd">LinkedIn</a>
                <a href="dd">Gmail</a>
                <a href="dd">Resume</a>
            </div>
            </div>
           <img src={avatar} alt="avatar" />

        </div>
     );
}

export default Hero;
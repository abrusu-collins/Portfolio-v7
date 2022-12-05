import img1 from "../img/sedem.jfif";
import twitter from "../img/twitter.png";
import linkedin from "../img/linkedin.png";
import github from "../img/github.png";
function Hero() {
  return (
    <div className="hero">
      <div className="hero-inner">
        <div className="about">
          <p className="name">Hi, I'm  Abrusu Collins</p>
          <p className="about">
          I am a Full Stack Engineer based in Accra, Ghana.
          I love developing softwares that run in your browser and I also love writing clean, effficient and elegant code.
          I have been on this journey since 2018 and I love how it's going.
          When I'm away from the screen, you'll catch me playing basketball 🏀 or listening to some good music🎶.
          </p>
          <div className="socials">
            <a href="https://twitter.com/devSedem"><img src={twitter} alt="" /></a>
            <a href="https://www.linkedin.com/in/abrusu-collins-359a4416a/"><img src={linkedin} alt="" /></a>
            <a href="https://github.com/abrusu-collins"><img src={github} alt="" /></a>
          </div>
        </div>
        <img className="sedem" src={img1} alt="" />
      </div>
    </div>
  );
}

export default Hero;

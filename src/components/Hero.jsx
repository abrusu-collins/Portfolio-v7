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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
            aperiam molestias explicabo eos beatae consequuntur ratione unde
            nisi ad voluptas, quod obcaecati dolorum cupiditate repellat,
            assumenda voluptatem harum ipsum laudantium!
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

import img1 from "../img/sedem.jfif";
import img2 from "../img/sedem2.jpg";
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
          <div className="socials"></div>
        </div>
        <img src={img1} alt="" />
      </div>
    </div>
  );
}

export default Hero;

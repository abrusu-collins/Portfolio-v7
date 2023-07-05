import React from "react";
import { BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";

function Hero() {
  return (
    <div className="hero" id="hero">
      <div>
        <div>
          <p className="title">Front-end engineer building cool products</p>
          <p className="title stuff">Front-end engineer building cool stuff</p>
          <p className="description">
            Hi, I&apos;m <span>Abrusu Collins</span>, a computer Science
            graduate and a Front End Engineer based in Accra, Ghana. I love
            developing softwares that run in your browser and I also love
            writing clean, effficient and elegant code. I have been on this
            journey since 2018 and I love how it&apos;s going.
          </p>
          <div className="socials">
            <a href="https://github.com/abrusu-collins">
              <BsGithub />
            </a>
            <a href="https://twitter.com/sedem_tsx">
              <BsTwitter />
            </a>
            <a href="https://www.linkedin.com/in/abrusu-collins-359a4416a/">
              <BsLinkedin />
            </a>
          </div>
        </div>
        <img src="/imgs/me.webp" alt="" />
      </div>
    </div>
  );
}

export default Hero;

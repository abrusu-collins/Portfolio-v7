import React from "react";
import { BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";

function Hero() {
  return (
    <div className="hero">
      <div>
        <div>
          <p className="title">Front-end engineer building cool products</p>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            fugiat, a suscipit nam repellat quidem. Earum optio porro sapiente
            quo, obcaecati praesentium autem reprehenderit dignissimos quibusdam
            rem repellat inventore suscipit?
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
        <img src="/imgs/DSC_4909.jpg" alt="" />
      </div>
    </div>
  );
}

export default Hero;

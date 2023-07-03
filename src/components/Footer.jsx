import React from "react";
import Link from "next/link";
function Footer() {
  const year = new Date().getFullYear();
  const dayNumber = new Date().getDay();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return (
    <footer>
      <div className="footer" id="footer">
        <div>
          <Link href="/">
            <p className="name">
              CA<span>.</span>
            </p>
          </Link>
          <p className="footer-title">Collins Abrusu</p>
          <p>
            Thanks for checking out my portfolio. <br /> Have a blissful{" "}
            {days[dayNumber]}.
          </p>
        </div>

        <div>
          <p className="footer-title">Site Map</p>
          <Link href="/">About</Link>
          <Link href="/offering">Projects</Link>
          <Link href="/menu">Skills</Link>
          <Link href="/about">Testimonials</Link>
          <Link href="/events">Contact</Link>
        </div>

        <div>
          <p className="footer-title">Contacts</p>
          <a href="https://github.com/abrusu-collins">Github</a>
          <a href="https://twitter.com/sedem_tsx">Twitter</a>
          <a href="https://www.linkedin.com/in/abrusu-collins-359a4416a/">
            Linkedin
          </a>
        </div>

        <div>
          <p className="footer-title">Sponsor Me</p>
          <a href="https://www.buymeacoffee.com/collinsabrusu">buymeacoffee</a>
          <a href="https://www.patreon.com/abrusucollins">Patreon</a>
          <a href="https://ko-fi.com/abrusucollins">ko-fi</a>
        </div>
      </div>
      <p>Copyright &copy; {year}. Built by Collins Abrusu</p>
    </footer>
  );
}

export default Footer;

function Navbar() {
    return ( 
        <nav>
            <a  href="/">Home</a>
            <a href="/allprojects">Projects</a>
            <a href="https://sedem-qoutes.vercel.app/" target="blank">Quotes</a>
            <a className="active" href="mailto:snillochemingson@gmail.com">Send Mail</a>
        </nav>
     );
}

export default Navbar;
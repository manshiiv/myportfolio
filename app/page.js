import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <header className="header">
      <div>
        <a href="a" className="logo">Portfolio</a>
        <i className="fa-solid fa-bars" id="menu-icon"></i>

      </div>
        
        <nav className="navbar">
            <a href="#home" className="active">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>

<section className="home" id="home">
    <div className="home-content">
        <h3>Hi! I am </h3>
        <h1>Manshi Verma</h1>
        <h3>And I'm a  Developer</h3>
        <div className="social.media">
            <a href="a"><i className="fa-brands fa-linkedin"></i></a>
            <a href="a"><i className="fa-brands fa-github"></i></a>
          
            
        </div>
        <a href="a" className="btn">Download cv</a>
    </div>
    <div className="home-img">
        <img className="profile-pic" src="/6601941_page-0001 (1).png" alt=""/>
    </div>
</section>

<section className="about" id="about">
   <div className="about-img">
    
   </div>

   <div className="about content">
    <h2 className="heading">ABOUT <span>ME</span></h2>
    <h3>I'm a Developer</h3>
    <p>I'm a dedicated developer with a passion for learning and innovation. I thrive on problem-solving and enjoy the challenge of building creative solutions. My interests extend beyond technology, encompassing maths, science, space and artistic pursuits like painting and doodling.</p>
    <a href="a" className="btn">Read more</a>
   </div>
</section>
<section className="skills" id="skills">
        <h2 className="heading">My <span>Skills</span></h2>
        <div className="skills-container">
          <div className="skills-stem">
            <div className="skill">JavaScript</div>
            <div className="skill">React</div>
            <div className="skill">Next.js</div>
            <div className="skill">CSS</div>
            <div className="skill">HTML</div>
            <div className="skill">Java</div>
            <div className="skill">Node.js</div>
            <div className="skill">python</div>
          </div>
        </div>
      </section>

<section className="services" id="services">
    <h2 className="heading">My<span>Services</span></h2>

    <div className ="services-container">
        <div className="services-box">
        <i className="fa-solid fa-code"></i>
        <h3>web Developer</h3>
        <a href="a" className="btn">Read more</a>
        </div>

        <div className="services-box">
            <i className="fa-solid fa-palette"></i>
            <h3>UI/UX Designer</h3>
            <a href="a" className="btn">Read more</a>
            </div>
            
            <div className="services-box">
                <i className="fa-brands fa-android"></i>
                <h3>Android developer</h3>
                <a href="a" className="btn">Read more</a>
                </div>
    </div>
</section>

<section className="contact" id="contact">
    <h2 className="heading">Contact <span>Me</span></h2>

    <form action="a">
          <div className="input-box">
              <input type="text" placeholder="Full Name"/>
              <input type="email" placeholder="Email Address"/>
          </div>

        <div className="input-box">
          <input type="number" placeholder="Mobile Number"/>
          <input type="text" placeholder="Email Subject"/>
        </div>
        <textarea name="" id="" cols="30" row="10" placeholder="your Message"></textarea>
        <input type="submit" value="send Message" className="btn"/>
    </form>
</section>


<footer className="footer">
    <div className="footer-text">
        <p>Copyright &copy; 2024 by @manshiiv |All Rights Reserved.</p>
    </div>
    <div className="footer-iconTop">
        <a href="#home"><i className="fa-solid fa-angle-up"></i></a>
    </div>
</footer>

    </div>
  );
}

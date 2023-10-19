import "./Intro.css";

function Intro() {
  return (
    <section id="home" className="intro-section">
      <div className="intro-top">
        <div className="intro-title">
          <h1>Full-Stack Web Developer.</h1>
          <p className="intro-p">
            Hi, I'm <span>Santiago Basile</span>. <br />A passionate Full-Stack
            Web Developer from Argentina.
          </p>
          <ul className="intro-ul">
            <li>
              <a
                className="intro-links"
                href="https://www.linkedin.com/in/santiago-basile-703037275/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bx bx-md bxl-linkedin-square"></i>
              </a>
            </li>
            <li>
              <a
                className="intro-links"
                href="https://github.com/santibasileCODE"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bx bx-md bxl-github"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="intro-img"></div>
      </div>
      <div className="intro-skills">
        <div>
          <h3>My Skills</h3>
        </div>
        <div className="skills">
          <div className="skill-a"></div>
          <div className="skill-b"></div>
          <div className="skill-c"></div>
          <div className="skill-d"></div>
          <div className="skill-e"></div>
        </div>
      </div>
    </section>
  );
}

export default Intro;

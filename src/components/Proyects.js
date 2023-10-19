import "./Proyects.css";

function Proyects() {
  return (
    <section id="projects" className="Proyects-container">
      <div className="Proyects-title">
        <h2>My Projects</h2>
      </div>
      <div className="Proyects-card-container">
        <div className="proyect-1 proyect-container">
          <div className="left">
            <div className="top">
              <h3 className="proyect-title">Basile Downloader </h3>
              <p className="proyect-description">
              I created Basile Downloader since in my free time I usually edit videos and I always require an external program to download, them so 
              I created this page to practice my programming skills
              </p>
            </div>
            <div className="bottom">
              <h3>Tech used</h3>
              <div className="proyect-skills">
                <div className="skill-a"></div>
                <div className="skill-c"></div>
                <div className="skill-g"></div>
                <div className="skill-h"></div>
                <div className="skill-j"></div>
              </div>
            </div>
          </div>
          <div className="right">
            <a
              className="img-link"
              href="https://basile-downloader.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              <div className="img-proyect-1"></div>
            </a>
            <div className="proyect-links">
              <a
                href="https://basile-downloader.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bx bx-sm bx-globe"></i>
              </a>
              <a
                href="https://github.com/santibasileCODE/Basile-Downloader"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bx bx-sm bxl-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Proyects;

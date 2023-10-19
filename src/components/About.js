import "./About.css";

function About() {
  return (
    <div id="about" className="About-container">
      <div className="About-title">
        <h2>About Me</h2>
      </div>
      <div className="About-container-2">
        <div className="About-text">
          <div className="About-image"></div>
          <h3>A creative web developer &#128187;</h3>
          <p>
            As a Full-Stack Developer, I turn <span>ideas</span> into
            <span> code</span>. I am capable of handling any obstacles,
            challenges or problems. Being a <span>focused</span> and
            <span> disciplined</span> person makes me a good choice.  Using
            <span>HTML/CSS/JS/React</span>   for the Front-end 
            and SQL/NoSQL
            databases for the Back-end, I am able to make
            <span> attractive, interactive, useful</span> and
            <span> professional </span>websites. <br />
            In my free time I love editing videos, hanging out with friends and 
            making projects for my own use.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

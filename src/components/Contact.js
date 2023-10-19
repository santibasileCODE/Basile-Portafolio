import "./Contact.css";

function Contact() {
  return (
    <div className="Contact-container">
      <h2 className="Contact-title">Contact</h2>
      <h3 className="Contact-subtitle">
        If you are intrested in <span>hiring</span> me, <span>call</span> me,
        <span> email</span> me or <span>connect</span> and chat with me via
        LinkedIn!
      </h3>
      <div className="Contact-card">
        <div className="Contact-link">
          <a href="tel:+542477511704" target="_blank" rel="noreferrer">
            <i className="bx bx-md bxs-phone"></i>
          </a>
          <p>+54 2477 511704</p>
        </div>
        <div className="Contact-link">
          <a href="mailto:santibasile10@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bx-md bxs-envelope"></i>
          </a>
          <p>santibasile10@gmail.com</p>
        </div>
        <div className="Contact-link">
          <a
            href="https://www.linkedin.com/in/santiago-basile-703037275/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bx-md bxl-linkedin-square"></i>
          </a>
          <p>Santiago Basile</p>
        </div>
      </div>
    </div>
  );
}



export default Contact;



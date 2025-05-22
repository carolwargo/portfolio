import { Link } from "react-router-dom";
import ResumeDownload from "../assets/ResumeDownload.pdf";
import "bootstrap/dist/css/bootstrap.min.css";

function HomePage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 w-100">
      <header className="text-center">
        <h1 className="fw-bold text-black display-4">Carol Wargo</h1>
        <p className="lead">Full Stack Developer | UX Designer</p>

        <a
          href={ResumeDownload}
          download
          className="btn btn-outline-dark rounded-pill"
          style={{ transition: "opacity 0.3s" }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          <i className="fa fa-download me-2"></i> Download Resume
        </a>

        <div className="mt-4">
          <Link
            to="/about"
            onClick={scrollToTop}
            className="btn btn-dark rounded-pill"
            style={{ transition: "opacity 0.3s" }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Learn More 
          </Link>
        </div>
      </header>
    </div>
  );
}

export default HomePage;
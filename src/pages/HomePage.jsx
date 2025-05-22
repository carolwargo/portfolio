import { Link } from "react-router-dom";
import ResumeDownload from "../assets/ResumeDownload.pdf";

function HomePage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="container-fluid">
      <div className="row align-items-center vh-100">

        {/* Profile Image */}
        <div className="col-sm-12 col-md-12 col-lg-12 text-center mb-4 mb-md-0">
   
    
          <h1 className="fw-bold text-black display-4">Carol Wargo</h1>
          <p className="lead">Full Stack Developer | UX Designer</p>

          {/* Resume Download */}
          <a
            href={ResumeDownload}
            download
            className="btn btn-dark rounded-pill px-4 py-3 my-3"
            style={{ transition: "opacity 0.3s" }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            <i className="fa fa-download me-2"></i> Download Resume
          </a>
  
          {/* Notice */}
          <div className="container mt-4" >

            {/* About Me Link */}
            <Link
              to="/about"
              onClick={scrollToTop}
              className=" link-dark"
              style={{ transition: "opacity 0.3s" }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
         Learn More About Me Professionally
            </Link>

          </div>
        </div>

      </div>
    </div>
  );
}

export default HomePage;


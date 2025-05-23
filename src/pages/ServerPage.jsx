import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import WeatherNew from "../assets/images/Server/WeatherNew.png";
import WeatherMobile from "../assets/images/Server/WeatherMobile.png";
import { MDBRow, MDBCol, MDBContainer, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCardFooter, MDBBtn } from "mdb-react-ui-kit";  
import portfolioItems from "../data/portfolioItems"; // Import your portfolio items data
const Server = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const { ref, inView } = useInView({
    triggerOnce: false, // Animation triggers only once
    threshold: 0.1, // Percentage of the div that needs to be visible to trigger the animation
  });
  return (
    <div className="server" id="server">

        <style>
          {`


.text-custom-pink {
  color: #FF385C !important;
}
.bg-custom-pink {
  background-color: #FF385C !important;
}
.btn-custom-pink {
  background-color: #FF385C;
  border-color: #FF385C;
  color: #fff;
}
.btn-custom-pink:hover {
  background-color: #e63252; /* Darker pink for hover */
  border-color: #e63252;
  color: #fff;
}
.portfolio .card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.portfolio .card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0,0,0,0.1) !important;
}
  `}
        </style>

        {/**Start INTRO Web Components */}
        <div className="container w3-padding-top-64 mb-4">
            <div className="row py-2 d-flex justify-content-center align-items-center w3-padding-24-top">
        
<div className="py-4">
                  <h1 className="text-center">Utility Apps</h1>
                  <hr className="w3-opacity" />
                  <h4 className="text-center mb-5">
                    Utility apps prioritize functionality over aesthetics. They
                    are built to serve practical purposes, such as file
                    management, system optimization, productivity enhancement,
                    or data analysis. Utility apps are essential tools for users
                    seeking solutions to everyday problems or seeking to
                    streamline their workflows.{" "}
                  </h4>
            
             </div>
          
         
              <div className="flex-column col-sm-12 col-md-8 col-lg-8 justify-content-center align-items-center">
                <div className="w3-container ">
                  <h2 className="w3-text-black text-center">
                    <b className="fw-bold text-black">Mobile & Desktop</b>
                  </h2>
                  <hr className="w3-opacity" />

                  <p className="text-black text-center">
                    Experience the convenience and reliability of the Open
                    Weather App, your go-to weather resource for both mobile and
                    desktop. Stay informed, stay prepared, and stay connected to
                    the weather conditions that impact your life.{" "}
                  </p>
                </div>
                <br />
                <div className="w3-weather" id="weather">
                  <img
                    src={WeatherNew}
                    alt="blog-profile"
                    style={{ width: "100%" }}
                    className="rounded-top shadow"
                  ></img>
                            <p
                          className="text-secondary text-center"
                          style={{ fontSize: "16px" }}
                        >
                          Mobile version
                        </p>
                  <div className="w3-container w3-white justify-content-center w3-center">
                    <br></br>
                    <h5>
                      <b>Weather App</b>
                    </h5>
                    <p style={{ fontSize: "16px", fontWeight: "lighter" }}>
                      <i>
                        Open Weather API: With this tool, you can search for any
                        city to view detailed weather information for today,
                        including temperature, humidity, wind speed, and
                        atmospheric conditions.{" "}
                      </i>
                    </p>
                    <div className="card-footer w3-center w3-margin-bottom">
                
                      <a href="https://carolwargo.github.io/weather/">
                        <button   className="btn-custom-pink rounded-pill w-100">
                          Github
                        </button>
                      </a>
                      <div className="card-footer">
      
                      </div>
                    </div>
                  </div>
                </div>
                <br />
              </div>
              {/*2. end weather app*/}

              {/*2. start weather app*/}
              <div className="flex-column col-sm-12 col-md-4 col-lg-4 justify-content-center align-items-center">
                <div className="w3-weather-card" id="weather-card">
                  <img
                    src={WeatherMobile}
                    alt="blog-profile"
                    style={{ width: "100%" }}
                    className="rounded-top shadow"
                  ></img>
                  <div className="card-footer">
                    <p
                      className="text-secondary text-center"
                      style={{ fontSize: "16px" }}
                    >
                      Desktop version
                    </p>
                  </div>
                </div>
                <br />
              </div>
              {/*2. end weather app*/}
            </div>
           </div>





 <div
      className="portfolio py-5 border-top border-bottom"
      style={{ fontFamily: "Raleway, sans-serif", backgroundColor: "#f8f9fa" }}
    >
      <MDBContainer>
        <MDBRow className="justify-content-center align-items-center g-4">
          {portfolioItems.map((item) => (
            <MDBCol sm="12" md="4" lg="4" key={item.id} className="d-flex justify-content-center">
              <MDBCard
                className="h-100 border-0 shadow-sm"
                style={{
                  maxWidth: "350px",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.05)";
                }}
              >
                <div className="position-relative">
                  <MDBCardImage
                    src={item.image || "/assets/placeholder.jpg"} // Fallback image
                    alt={item.altText}
                    position="top"
                    className="rounded-top"
                    style={{ width: "100%", height: "200px", objectFit: "cover" }}
                    loading="lazy"
                  />
                  {item.isNew && (
                    <div
                      className="position-absolute top-0 start-0 translate-middle-y bg-white py-1 px-2 rounded-end"
                      style={{ fontSize: "12px", fontWeight: "bold" }}
                    >
                      <span className="text-custom-pink">New</span>
                    </div>
                  )}
                </div>
                <MDBCardBody className="text-center">
                  <MDBCardTitle className="fw-bold mb-3" style={{ fontSize: "1.25rem" }}>
                    {item.title}
                  </MDBCardTitle>
                  <MDBCardText className="text-muted" style={{ fontSize: "14px", fontStyle: "italic" }}>
                    {item.description}
                  </MDBCardText>
                </MDBCardBody>
                <MDBCardFooter className="text-center">
                  <p className="text-muted mb-2" style={{ fontSize: "12px" }}>
                    Click to view repository
                  </p>
                  <a href={item.link} target="_blank" rel="noopener noreferrer" aria-label={`View ${item.title} repository on GitHub`}>
                    <MDBBtn
                      className="btn-custom-pink rounded-pill w-100"
                      style={{ fontSize: "14px" }}
                    >
                      GitHub
                    </MDBBtn>
                  </a>
                </MDBCardFooter>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
    </div>

        
 
   {/**Start FooterS*/}
      <div className="w3-container w3-padding-48 w3-margin-top">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="flex-column col-sm-12 col-md-12 col-lg-12 justify-content-center align-items-center">
            <div className="container w3-white text-center w3-padding-large w3-padding-small">
              <h2 className="w3-text-black w3-margin-top">
                <b className="fw-bold text-black">Graphic Elements</b>
              </h2>
              <hr className="w3-opacity" />
              <h4 className="text-black">
                Graphic elements allow designers to create compelling and
                impactful experiences that resonate with audiences and achieve
                their design objectives.
              </h4>
              <p>
                {" "}
                <i>
                  <b> NOTE:</b> "Graphic elements page is under construction.
                  View with the understanding it's a work in progress. Thanks
                  for your patience."
                </i>
              </p>
              <button
                className="w3-button w3-text-light-grey  w3-margin-right rounded mt-2 w3-margin-bottom"
                style={{ backgroundColor: "#FF385C" }}
              >
                <Link
                  to="/graphics"
                  className="button text-white"
                  onClick={scrollToTop}
                >
                  VIEW GRAPHICS PAGE
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <footer className="text-muted py-5 position-fixed bottom-0 start-0 w-100">
        <div className="container">
          <p className="float-end mb-1">
            <a href="#server" style={{ color: "#FF385C" }}>
              Back to top
            </a>
          </p>
        </div>
      </footer>
       {/**Start FooterS*/}
    </div>
  );
};

export default Server;

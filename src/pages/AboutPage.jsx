import { useInView } from "react-intersection-observer";
import { FaLaptopCode } from "react-icons/fa";
import { HiOutlinePuzzlePiece } from "react-icons/hi2";
import { AiFillDatabase } from "react-icons/ai";
import { BsDatabaseLock } from "react-icons/bs";
import { GiGears } from "react-icons/gi";

import MeWhite from "../assets/images/MeWhite.png";
import LocationView from "../assets/images/LocationView.png";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

export default function AboutPage() {
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
    <div className="about" id="about">
      <div>
        <div className="container p-5">
          <div className="p-4">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="container p-3">
                <h1 className=" fw-light" style={{ fontSize: "3rem" }}>
                  <b>ABOUT ME.</b>
                </h1>
              </div>
              <div className="col-lg-6 ">
                <img
                  src={MeWhite}
                  className="rounded-5 shadow d-block"
                  alt="Me"
                  style={{ border: "4px solid #FF385C" }}
                />
                <h5 className=" fw-lighter mt-2">
                  "I'm Carol Wargo, and welcome to my corner of the internet!"
                </h5>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="container p-4 mb-3">
                  <h4>
                    {" "}
                    <span className="fw-light">PROFICIENCIES </span>
                    <strong>WHAT I DO BEST.</strong>
                  </h4>
                  <br />
                  <p
                    className="w3-wide text-black"
                    style={{ fontSize: "1rem" }}
                  >
                    <GiGears className="justify-content-center" /> Core
                    Technologies
                  </p>
                  <div className="w3-light-grey shadow">
                    <div
                      className="w3-container w3-padding-small bg-black w3-center shadow"
                      style={{ width: "85%" }}
                    >
                      85%
                    </div>
                  </div>
                  <br />
                  <p
                    className="w3-wide text-black"
                    style={{ fontSize: "1rem" }}
                  >
                    <FaLaptopCode className="justify-content-center" />{" "}
                    Front-End Design
                  </p>
                  <div className="w3-light-grey shadow">
                    <div
                      className="w3-container w3-padding-small bg-black w3-center"
                      style={{ width: "95%" }}
                    >
                      95%
                    </div>
                  </div>
                  <br />
                  <p
                    className="w3-wide text-black"
                    style={{ fontSize: "1rem" }}
                  >
                    <BsDatabaseLock className="justify-content-center" />{" "}
                    Server-Side Development
                  </p>
                  <div className="w3-light-grey shadow">
                    <div
                      className="w3-container w3-padding-small bg-black w3-center"
                      style={{ width: "80%" }}
                    >
                      80%
                    </div>
                  </div>
                  <br />
                  <p
                    className="w3-wide text-black"
                    style={{ fontSize: "1rem" }}
                  >
                    <HiOutlinePuzzlePiece className="justify-content-center" />{" "}
                    Full-Stack Integration
                  </p>
                  <div className="w3-light-grey shadow">
                    <div
                      className="w3-container w3-padding-small bg-black w3-center"
                      style={{ width: "75%" }}
                    >
                      75%
                    </div>
                  </div>
                  <br />
                  <p
                    className="w3-wide text-black"
                    style={{ fontSize: "1rem" }}
                  >
                    <AiFillDatabase className="justify-content-center" />{" "}
                    Database Implementation
                  </p>
                  <div className="w3-light-grey shadow">
                    <div
                      className="w3-container w3-padding-small bg-black w3-center"
                      style={{ width: "75%" }}
                    >
                      75%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/**End technical proficiencies */}

        {/**start experience count */}

        <div
          className="w3-row w3-center bg-black w3-padding-32 text-white"
          style={{ backgroundColor: "#FF385C" }}
        >
          <div className="w3-quarter w3-section">
            <span className="w3-xlarge">
              20<span style={{ fontSize: "10px" }}>yrs</span> +
            </span>
            <br />
            BUSINESS EXPERIENCE
          </div>
          <div className="w3-quarter w3-section">
            <span className="w3-xlarge">100+</span>
            <br />
            DESIGN PROJECTS
          </div>
          <div className="w3-quarter w3-section">
            <span className="w3-xlarge">10+</span>
            <br />
            LEADERSHIP ROLES
          </div>
          <div className="w3-quarter w3-section">
            <span className="w3-xlarge">100+</span>
            <br />
            MEETINGS
          </div>
        </div>

        {/* Location */}
        <div className="container p-5">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-4">
              <h1 className="text-center">WHERE I'M LOCATED</h1>
              <h5 className="text-center">
                <em>Huntingtown, Maryland!</em>
              </h5>
            </div>
            <div className="col-lg-8 ">
              <img
                src={LocationView}
                alt="htown"
                className="w3-image w3-round shadow"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <hr />
      <div className="container p-5 text-center">
        <h4 className="text-black">
          View my digital resume to learn more about my professional experience
          and qualifications.
        </h4>
        <br />

        <Link to="/resume" className="button text-white" onClick={scrollToTop}>
          <button
            className="btn rounded-pill px-4 py-3 my-3 text-white"
            style={{ backgroundColor: "#FF385C" }}
          >
            {" "}
            VIEW MY RESUME
          </button>
        </Link>
        <footer className="text-muted py-5 position-fixed bottom-0 start-0 w-100">
          <div className="container">
            <p className="float-end mb-1">
              <a href="#about" style={{ color: "#FF385C" }}>
                Back to top
              </a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import MeWhite from '../../assets/images/MeWhite.png';
import ResumeDownload from "../../assets/ResumeDownload.pdf";
import { FaGoogle } from "react-icons/fa";
import { FaMicrosoft } from "react-icons/fa"; // Font Awesome
import { SiAdobecreativecloud } from "react-icons/si"; // Font Awesome
import Accordion from "react-bootstrap/Accordion";
import ResumeBadges from "./ResumeBadges";
import { MdOutlineBoy } from "react-icons/md";
import { MdOutlineGirl } from "react-icons/md";
import Nav from 'react-bootstrap/Nav';

import "bootstrap/dist/css/bootstrap.min.css";
import "./ResumePage.css"; // Import CSS for styling

export default function ResumePage() {
  return (
    <div className="profile" id="profile">
      {/** Start Main container */}
      <div className="w3-margin-top w3-padding-top-32">
        <div className="container">
          {/*} Start Main row*/}
          <div className="row justify-content-center w3-white align-items-center">
            {/*Start Left Column*/}
            <div className="w3-quarter flex-column justify-content-center align-items-center  ">
              {/*Start Left Column*/}
              <div className="shadow border border-3 rounded ">
                <div className="w3-content shadow">
                  <div className="w3-display-container">
                    <img
                      src={MeWhite}
                      style={{
                        width: "100%",
                        border: "4px solidrgb(131, 2, 26)",
                      }}
                      alt="me"
                      className="w3-hover-opacity-off"
                    />
                  </div>

                  <div className="shadow-lg">
                    <div className="container py-2">
                      <div className="w3-container ">
                        <h2 className="fw-bolder text-secondary-emphasis">Jocelyn Doe</h2>
                        <p className="mb-0 small">
                          <i className="fa fa-briefcase w3-margin-right w3-text-black"></i>
                         Cosmetologist
                        </p>

                        <p className="small">
                          <i className="fa fa-home w3-margin-right w3-text-black"></i>
                          Huntingtown, MD
                        </p>
                      </div>
                      <div className="pt-2  pb-3">
                      <div className="container">
         <ResumeBadges/>
                  </div>
                </div>
                      <div className="w3-container my-2">
                        <div className="row">
                          <div className="col-md-6">
                            <a
                              href="mail:carolwargo.dev@gmail.com"
                              className=" link-dark w3-hover-opacity fw-bolder"
                            >
                              <i className="fa fa-envelope  w3-margin-right"></i>
                              <span className="small">Email</span>
                            </a>
                            <br />
                            <a
                              href="tel:+14437711726"
                              className=" link-dark w3-hover-opacity fw-bolder"
                            >
                              <i className="fa fa-phone w3-margin-Left  w3-margin-right"></i>
                              <span className="small">Phone</span>
                            </a>
                          </div>
                          <div className="col-md-6">
                            <a
                              href="https://github.com/carolwargo"
                              className=" link-dark w3-hover-opacity fw-bolder"
                            >
                              <i className="fab fa-instagram w3-margin-right"></i>
                              <span className="small">Instagram</span>
                            </a>

                            <br />

                            <a
                              href="https://github.com/carolwargo"
                              className=" link-dark w3-hover-opacity fw-bolder"
                            >
                              <i className="fab fa-linkedin w3-margin-right"></i>
                              <span className="small">LinkedIn</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      {/**start bio */}
                      <div className="container border-top">
                        <p className="w3-margin-top small">
                        <span className="small">
                         <b>About Me</b>
                          </span> <span className="small">
                         Hello, Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Harum ratione modi corrupti
                            voluptate optio natus dolorem
                            esse cupiditate doloremque. Vel.
                          </span>
                        </p>
                        <div className=" text-end my-3">
                          <button className=" btn btn-dark w-100">
                            Message
                          </button>
                        </div>
                      </div>
                      {/**end bio */}
                    </div>
                  </div>

                  {/**start  certs */}
                  <div className="container bg-black">
                    <div className="container py-2">
                      <div className="w3-container">
                        <h4 className="w3-large w3-text-theme my-3 text-uppercase">
                          <i className="fa fa-certificate w3-xlarge "></i>{" "}
                          Licensing
                        </h4>
                      </div>
               
                      <div className="w3-container">
                        <h6>
                          <b>Board Certified Cosmetologist</b>
                        </h6>
                        <h6 className="fw-light small">
                          {" "}
                          <i className="fa fa-calendar "></i> June 2003- present
                        </h6>
                        <p className="small">State of Maryland</p>
                      </div>
                    </div>
                  </div>
                  {/**end  certs */}

                  {/**Start Tech Skills*/}
                  <div className="shadow-lg">
                    <div className="container py-2">
                      <div className="w3-container">
                        <h6 className="w3-large my-3 w3-text-black">
                          <i className="fa fa-asterisk fa-fw"></i>
                          <b style={{ marginLeft: "3px" }}>Hair Proficiency</b>
                        </h6>

                        <div className="w3-grey w3-round-xlarge w3-small mt-4">
                          <div
                            className="w3-container w3-center w3-round-xlarge bg-black"
                            style={{ width: "90%" }}
                          >
                            99%
                          </div>
                        </div>
                        <p className="small">Styling</p>

                        <div className="w3-grey w3-round-xlarge w3-small">
                          <div
                            className="w3-container w3-center w3-round-xlarge bg-black"
                            style={{ width: "75%" }}
                          >
                            95%
                          </div>
                        </div>
                        <p className="small">Cutting</p>

                        <div className="w3-grey w3-round-xlarge w3-small">
                          <div
                            className="w3-container w3-center w3-round-xlarge bg-black"
                            style={{ width: "85%" }}
                          >
                            99%
                          </div>
                        </div>
                        <p className="small">Color <i className=" fas fa-trophy w3-text-pink"></i></p>

                      </div>
                      {/**End Tech Skills */}

                      {/**Start Programming Languages */}
                      <div className="w3-container border-top border-black">
                        <h6 className="w3-large w3-text-theme w3-text-black my-4">
                          <i className="fa fa-globe fa-fw w3-text-black"></i>
                          <b style={{ marginLeft: "3px" }}>
                          Gender
                          </b>
                        </h6>

                        <div className="w3-grey w3-round-xlarge w3-small">
                          <div
                            className="w3-container w3-center w3-round-xlarge bg-black small"
                            style={{ width: "50%" }}
                          >
                            50%
                          </div>
                        </div>
                        <p className="small"> <MdOutlineBoy className='pt-0' style={{fontSize:'1.3rem'}}/><span className="mt-3">Male</span></p>

                        <div className="w3-grey w3-round-xlarge w3-small">
                          <div
                            className="w3-container w3-center w3-round-xlarge bg-black small"
                            style={{ width: "90%" }}
                          >
                            95%
                          </div>
                        </div>
                        <p className="small"> < MdOutlineGirl className='pt-0' style={{fontSize:'1.3rem'}}/><span className="mt-3">Female</span></p>
                        {/**End Programming Languages */}
                      </div>
                      {/**End Programming Languages */}

                      {/**Start Frameworks */}
                      <div className="w3-container border-top border-black">
                        <h6 className="w3-large w3-text-theme w3-text-black my-4">
                          <i className="fa fa-globe fa-fw  w3-text-black"></i>
                          <b style={{ marginLeft: "3px" }}>Frameworks</b>
                        </h6>

                        <div className="w3-grey w3-round-xlarge w3-small">
                          <div
                            className="w3-container w3-center w3-round-xlarge bg-black small"
                            style={{ width: "85%" }}
                          >
                            85%
                          </div>
                        </div>
                        <p className="small">
                          Front-End Frameworks-{" "}
                          <span
                            className="text-gray"
                            style={{ fontSize: "12px" }}
                          >
                            <i>
                              {" "}
                              " <i className="fa fa-heart w3-text-pink"></i>{" "}
                              React."
                            </i>
                          </span>
                        </p>

                        <div className="w3-grey w3-round-xlarge w3-small">
                          <div
                            className="w3-container w3-center w3-round-xlarge bg-black small"
                            style={{ width: "75%" }}
                          >
                            75%
                          </div>
                        </div>
                        <p className="small">Back-End Frameworks</p>

                        <div className="w3-grey w3-round-xlarge w3-small">
                          <div
                            className="w3-container w3-center w3-round-xlarge bg-black small"
                            style={{ width: "70%" }}
                          >
                            70%
                          </div>
                        </div>

                        <p className="small">Mobile App Frameworks</p>
                      </div>
                      {/**End Frameworks */}

                      {/**Start Proficiencies */}
                      <div className="w3-container border-top border-black">
                        <h6 className="w3-large w3-text-theme w3-text-black my-4">
                          <i className="fas fa-desktop  w3-text-black"></i>
                          <b style={{ marginLeft: "3px" }}>
                            {" "}
                            Software Proficiencies
                          </b>
                        </h6>

                        <h6 className="w3-text-black w3-margin-left small">
                          <FaGoogle className="fa-fw w3-margin-left w3-text-black" />{" "}
                          Google Workspace
                        </h6>
                        <h6 className="w3-text-black w3-margin-left small">
                          <FaMicrosoft className="fa-fw w3-margin-left w3-text-black" />{" "}
                          Microsoft Suite
                        </h6>
                        <h6 className="w3-text-black w3-margin-left small">
                          <SiAdobecreativecloud className="fa-fw w3-margin-left w3-text-black" />{" "}
                          Adobe Creative Cloud
                        </h6>
                        <div className="w3-grey w3-round-xlarge w3-small mt-4">
                          <div
                            className="w3-container w3-center w3-round-xlarge bg-black small"
                            style={{ width: "90%" }}
                          >
                            90%
                          </div>
                        </div>
                        <p className="w3-text-black small">
                          Collaborative Software
                        </p>

                        <div className="w3-grey w3-round-xlarge w3-small">
                          <div
                            className="w3-container w3-center w3-round-xlarge bg-black small"
                            style={{ width: "90%" }}
                          >
                            90%
                          </div>
                        </div>
                        <p className="w3-text-black small">Design Software</p>
                      </div>
                      {/**end Proficiencies */}
                    </div>
                  </div>
                </div>
                <div
                  className="w3-padding-large w3-padding-32 text-white shadow border-top border-black "
                  style={{ backgroundColor: "#FF385C" }}
                >
                  <div className=" w3-container">
                    <h6 className="w3-large w3-text-theme w3-text-white text-uppercase mb-3">
                      <i className="fas fa-desktop"></i>
                      <b style={{ marginLeft: "3px" }}> Downloads</b>
                    </h6>

                    <p className="fw-light w3-text-light-grey small">
                      For a physical copy, click the "Download" below to
                      download a PDF of of the selected document.
                    </p>
                    <div className=" text-end my-3">
                      <a
                        className="button text-decoration-none"
                        id="download"
                        download
                        href={ResumeDownload}
                      >
                        <button className=" btn bg-black w-100 w3-hover-opacity">
                          Download Resume
                        </button>
                      </a>
                    </div>
                    <div className=" text-end my-3">
                      <a
                        className="button text-decoration-none"
                        id="download"
                        download
                        href={ResumeDownload}
                      >
                        <button className=" btn bg-black w-100 w3-hover-opacity">
                          Download References
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*End Left Column*/}

            {/*Start Middle Column Half*/}
            <div className="w3-half flex-column justify-content-center align-items-center px-2">
             
             {/**Start Menu Icons */}
              <div
                className="rounded border shadow"
                style={{
                  borderWidth: "2px",
                  borderStyle: "solid",
                  borderColor: "#ccc",
                  backgroundColor: "#f8f9fa",
                }}
              >
                <div className="p-2 w3-margin-top">
                  <div className="row align-items-center">
                    <div className="col text-center">
                      <div
                        className="btn w3-hover-asphalt rounded-circle bg-danger-subtle d-flex flex-column align-items-center justify-content-center mx-auto mb-3"
                        style={{
                          width: "6.5rem",
                          height: "6.5rem",
                          color: "black",
                          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                        }}
                      >
                        <i className="fas fa-users fa-lg w3-large mt-1"></i>
                        <p className="mb-0 mt-1" style={{ fontSize: ".75rem" }}>
                          Network
                        </p>
                      </div>
                    </div>

                    <div className="col text-center">
                      <div
                        className="btn w3-hover-asphalt rounded-circle bg-danger-subtle d-flex flex-column align-items-center justify-content-center mx-auto mb-3"
                        style={{
                          width: "6.5rem",
                          height: "6.5rem",
                          color: "black",
                          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                        }}
                      >
                        <i className="fas fa-graduation-cap fa-lg w3-large mt-1"></i>
                        <p className="mb-0 mt-1" style={{ fontSize: ".75rem" }}>
                          Classes
                        </p>
                      </div>
                    </div>

                    <div className="col text-center">
                      <div
                        className="btn w3-hover-asphalt rounded-circle bg-danger-subtle d-flex flex-column align-items-center justify-content-center mx-auto mb-3"
                        style={{
                          width: "6.5rem",
                          height: "6.5rem",
                          color: "black",
                          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                        }}
                      >
                        <i className="fas fa-tools fa-lg w3-large mt-1"></i>
                        <p className="mb-0 mt-1" style={{ fontSize: ".75rem" }}>
                          Services
                        </p>
                      </div>
                    </div>

                    <div className="col text-center">
                      <div
                        className="btn w3-hover-asphalt rounded-circle bg-danger-subtle d-flex flex-column align-items-center justify-content-center mx-auto mb-3"
                        style={{
                          width: "6.5rem",
                          height: "6.5rem",
                          color: "black",
                          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                        }}
                      >
                        <i className="fas fa-tags fa-lg w3-large mt-1"></i>
                        <p className="mb-0 mt-1" style={{ fontSize: ".75rem" }}>
                          For Sale
                        </p>
                      </div>
                    </div>

                    <div className="col text-center">
                      <div
                        className="btn w3-hover-asphalt rounded-circle bg-danger-subtle d-flex flex-column align-items-center justify-content-center mx-auto mb-3"
                        style={{
                          width: "6.5rem",
                          height: "6.5rem",
                          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                        }}
                      >
                        <i className="fas fa-briefcase fa-lg w3-large mt-1"></i>
                        <p className="mb-0 mt-1" style={{ fontSize: ".75rem" }}>
                          Jobs
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  {/**End Menu Icons */}
  

       {/**Start Post Component */}
       <div className="py-1">
       <Nav variant="tabs" defaultActiveKey="/home" className="justify-content-center mt-3">
      <Nav.Item>
        <Nav.Link href="/home">Network</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Services</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Classes</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-3">For Sale</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-4">Jobs</Nav.Link>
      </Nav.Item>
    </Nav>

       <div
                className="rounded-bottom border shadow"
                style={{
                  borderWidth: "2px",
                  borderStyle: "solid",
                  borderColor: "#ccc",
                  backgroundColor: "#f8f9fa",
                }}
              >
                
                    <div className="container">
                  
                  <div className="row align-items-center justify-content-center p-3">
                  <div className="card">
                  <div className="card-body"> 
                  <div className="col-sm-2 col-md-2 col-lg-2">
                  <div className="container">
                      <img src={MeWhite} alt="" className="shadow rounded-circle" style={{width:'85%'}}/>
                    </div>
                    </div>
                    <div className="col-sm-10 col-md-10 col-lg-10 align-items-center justify-content-center">
                    <div className="container">
                      <Link to={"/"} className=" text-decoration-none">
              <h1>What's Happening?</h1>
                        <p className="card-title fw-bold w3-margin-left my-2">Start a Post</p>
                      </Link>
                    </div>
                    </div>
                    </div>
                  </div>
                </div>
                </div>
                </div>
              </div>
  {/**End Menu Icons */}

    {/**Start Newsfeed */}
              <div className="w3-content">
                <div className=" py-1">
                  <div
                    className="rounded border"
                    style={{
                      borderWidth: "2px",
                      borderStyle: "solid",
                      borderColor: "#ccc",
                      backgroundColor: "#f8f9fa",
                      boxShadow:
                        "inset 2px 2px 5px rgba(255,255,255,0.8), inset -2px -2px 5px rgba(0,0,0,0.1), 2px 2px 8px rgba(0,0,0,0.2)",
                    }}
                  >
                    <div className="p-4">
                      <h5>TITLE (EVENT)</h5>
                      <img
                        src={MeWhite}
                        alt="girl camera"
                        className="w-100"
                      />
                      <h6 className="w3-text-black small">
                        <i className="fa fa-calendar fa-fw small mt-3"></i> June
                        2016 -{" "}
                        <span className="w3-tag bg-black w3-round small py-1">
                          timestamp
                        </span>
                      </h6>
                      <p className="w3-text-black my-2 small">
                        <b>Description</b>
                      </p>
                      <p className="small">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Provident pariatur minima harum recusandae perspiciatis
                        obcaecati, ipsa laborum vero quas quis. Autem cumque
                        nulla quasi sequi cum ad! Dolores, voluptas quasi.
                      </p>
                      <div className=" text-end my-3">
                        <a
                          className="button text-decoration-none"
                          id="download"
                          download
                          href={ResumeDownload}
                        >
                          <button className=" btn bg-black w-100 w3-hover-opacity">
                            Message
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" w3-padding-16">
                  <div className="shadow-lg border border-secondary-subtle border-2 rounded">
                    <div className=" w3-padding-large w3-padding-16 shadow-lg">
                      <h5>TITLE (EVENT)</h5>
                      <img
                        src={MeWhite}
                        alt="girl camera"
                        className="w-100"
                      />
                      <h6 className="w3-text-black small">
                        <i className="fa fa-calendar fa-fw small mt-3"></i> June
                        2016 -{" "}
                        <span className="w3-tag bg-black w3-round small py-1">
                          timestamp
                        </span>
                      </h6>
                      <p className="w3-text-black my-2 small">
                        <b>Description</b>
                      </p>
                      <p className="small">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Provident pariatur minima harum recusandae perspiciatis
                        obcaecati, ipsa laborum vero quas quis. Autem cumque
                        nulla quasi sequi cum ad! Dolores, voluptas quasi.
                      </p>
                      <div className=" text-end my-3">
                        <a
                          className="button text-decoration-none"
                          id="download"
                          download
                          href={ResumeDownload}
                        >
                          <button className=" btn bg-black w-100 w3-hover-opacity">
                            Message
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
               {/**End Newsfeed */}
            </div>
            {/*End Middle Column Half*/}

  {/*Start Right Column Quarter*/}
            <div className="w3-quarter  flex-column justify-content-center align-items-center  ">
              <div className="border rounded ">
                <div className="w3-content">
                  <div className="shadow-lg">
                    <div className="container py-2">
                      {/**start Upgrade */}

                      <div className="w3-container">
                        <h4 className="fw-bolder w3-text-black">
                          Upgrade to Premium +
                        </h4>

                        <p className="w3-margin-top fw-light small">
                          <i>
                            {" "}
                            Enjoy additional benefits, zero ads and the largest
                            reply prioritization.{" "}
                          </i>
                        </p>
                        <div className=" text-end my-3">
                          <button className=" btn btn-outline-dark rounded-5 w-100">
                            {" "}
                            Upgrade to Premium +
                          </button>
                        </div>
                      </div>
                      {/**end Upgrade */}
                    </div>
                  </div>
                </div>
              </div>

              {/**start explore business services */}
              <div className="mt-1">
                <div className="border border-2 rounded">
                  <div className="shadow-lg">
                    <div className="container">
                      <div className="w3-container py-2">
                        <h4 className="fw-bolder w3-text-black mb-0 d-flex justify-content-between align-items-center">
                          <span>Business Services</span>
                          <span
                            className="w3-tag py-1 px-3 bg-danger-subtle text-danger rounded-4"
                            style={{ fontSize: "12px" }}
                          >
                            Beta
                          </span> 
                        </h4>
                        <p className="py-0 small text-muted mb-4">how we can help...</p>

                        {/**start business service 1 */}
                        <div className="explore-business">
                          <p className="explore-business-entry">
                            <span className="explore-business-title">
                            
Cosmetic Chemist & Innovative Analyst
                            </span>
                            <br />
                            <span className="explore-business-meta">
                              {" "}
                              17 hours ago · 5 min read · 43K posts
                            </span>
                          </p>
                        </div>
                        {/**start business services 2 */}
                        <div className="explore-business">
                          <p className="explore-business-entry">
                            <span className="explore-business-title">
                            Virtual Makeup Consultant (AR/AI Tools)
                            </span>
                            <br />
                            <span className="explore-business-meta">
                              {" "}
                              15 hours ago · 8 min read · 3K posts
                            </span>
                          </p>
                        </div>
                        {/**start business services 3 */}
                        <div className="explore-business">
                          <p className="explore-business-entry">
                            <span className="explore-business-title">
                            Digital Beauty Content Strategist
                            </span>
                            <br />
                            <span className="explore-business-meta">
                              {" "}
                              2 hours ago · 1 min read · 3K posts
                            </span>
                          </p>
                        </div>
                        {/**start business services 4 */}
                        <div className="explore-business">
                          <p className="explore-business-entry">
                            <span className="explore-business-title">
                            Beauty Tech UX/UI Designer
                            </span>
                            <br />
                            <span className="explore-business-meta">
                              {" "}
                              7 hours ago · 15 min read · 3K posts
                            </span>
                          </p>
                        </div>
                        {/**Start Accordian Feature: See More */}
                        <Accordion className="mb-3">
                          <Accordion.Item eventKey="0">
                            <Accordion.Header> <span className="text-danger">See More</span></Accordion.Header>
                            <Accordion.Body>
                              <Link
                                to={"/"}
                                className="text-decoration-none text-dark"
                              >
                                {/**start business services 5 */}
                                <div className="explore-business">
                                  <p className="explore-business-entry">
                                    <span className="explore-business-title">
                                    E-commerce Brand Manager
                                    </span>
                                    <br />
                                    <span className="explore-business-meta">
                                      {" "}
                                      12 hours ago · 4 min read · 3K posts
                                    </span>
                                  </p>
                                </div>
                              </Link>
                              <Link
                                to={"/"}
                                className="text-decoration-none text-dark"
                              >
                                {/**start business services 6 */}
                                <div className="explore-business">
                                  <p className="explore-business-entry">
                                    <span className="explore-business-title">
                                      {" "}
                                      Skincare Product Development Specialist
                                    </span>
                                    <br />
                                    <span className="explore-business-meta">
                                      {" "}
                                      8 hours ago · 19 min read · 3K posts
                                    </span>
                                  </p>
                                </div>
                              </Link>

                              <Link
                                to={"/"}
                                className="text-decoration-none text-dark"
                              >
                                {/**start business services 6 */}
                                <div className="">
                                  <button className=" btn btn-outline-danger rounded-5 w-100 mt-2">
                                     See All Services
                                  </button>
                                </div>
                              </Link>
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                        {/**End Accordian Feature: See More */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/**End explore-business services */}


              {/**start explore-hot-topics */}
              <div className="mt-1">
                <div className="border border-2 rounded">
                  <div className="shadow-lg">
                    <div className="container">
                      <div className="w3-container py-2">
                        <h4 className="fw-bolder w3-text-black mb-4 d-flex justify-content-between align-items-center">
                          <span>Explore (Hot Topics)</span>
                          <span
                            className="w3-tag py-1 px-3 bg-danger-subtle text-danger rounded-4"
                            style={{ fontSize: "12px" }}
                          >
                            Beta
                          </span>
                        </h4>

                        {/**start topic 1 */}
                        <div className="explore-topics">
                          <p className="explore-topics-entry">
                            <span className="explore-topics-title">
                              AI and beauty technology
                            </span>
                            <br />
                            <span className="explore-topics-meta">
                              {" "}
                              17 hours ago · 5 min read · 43K posts
                            </span>
                          </p>
                        </div>
                        {/**start topic 2 */}
                        <div className="explore-topics">
                          <p className="explore-topics-entry">
                            <span className="explore-topics-title">
                              Botox & Fillers
                            </span>
                            <br />
                            <span className="explore-topics-meta">
                              {" "}
                              15 hours ago · 8 min read · 3K posts
                            </span>
                          </p>
                        </div>
                        {/**start topic 3 */}
                        <div className="explore-topics">
                          <p className="explore-topics-entry">
                            <span className="explore-topics-title">
                              XY: Men's Product Demand
                            </span>
                            <br />
                            <span className="explore-topics-meta">
                              {" "}
                              2 hours ago · 1 min read · 3K posts
                            </span>
                          </p>
                        </div>
                        {/**start topic 4 */}
                        <div className="explore-topics">
                          <p className="explore-topics-entry">
                            <span className="explore-topics-title">
                              Smarter use of products
                            </span>
                            <br />
                            <span className="explore-topics-meta">
                              {" "}
                              7 hours ago · 15 min read · 3K posts
                            </span>
                          </p>
                        </div>
                        {/**Start Accordian Feature: See More */}
                        <Accordion className="mb-3">
                          <Accordion.Item eventKey="0">
                            <Accordion.Header>See More</Accordion.Header>
                            <Accordion.Body>
                              <Link
                                to={"/"}
                                className="text-decoration-none text-dark"
                              >
                                {/**start topic 5 */}
                                <div className="explore-topics">
                                  <p className="explore-topics-entry">
                                    <span className="explore-topics-title">
                                      Clean ingredients.
                                    </span>
                                    <br />
                                    <span className="explore-topics-meta">
                                      {" "}
                                      12 hours ago · 4 min read · 3K posts
                                    </span>
                                  </p>
                                </div>
                              </Link>
                              <Link
                                to={"/"}
                                className="text-decoration-none text-dark"
                              >
                                {/**start topic 6 */}
                                <div className="explore-topics">
                                  <p className="explore-topics-entry">
                                    <span className="explore-topics-title">
                                      {" "}
                                      Non-surgical Solutions (EBDs)
                                    </span>
                                    <br />
                                    <span className="explore-topics-meta">
                                      {" "}
                                      8 hours ago · 19 min read · 3K posts
                                    </span>
                                  </p>
                                </div>
                              </Link>
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                        {/**End Accordian Feature: See More */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/**end explore-hot-topics */}

              {/**start explore-classes */}
              <div className="mt-1">
                <div className="border border-2 rounded">
                  <div className="shadow-lg">
                    <div className="container">
                      <div className="w3-container py-2">
                        <h4 className="fw-bolder w3-text-black mb-4 d-flex justify-content-between align-items-center">
                          <span>Explore (Hot Topics)</span>
                          <span
                            className="w3-tag py-1 px-3 bg-danger-subtle text-danger rounded-4"
                            style={{ fontSize: "12px" }}
                          >
                            Beta
                          </span>
                        </h4>

                        {/**start topic 1 */}
                        <div className="explore-topics">
                          <p className="explore-topics-entry">
                            <span className="explore-topics-title">
                              AI and beauty technology
                            </span>
                            <br />
                            <span className="explore-topics-meta">
                              {" "}
                              17 hours ago · 5 min read · 43K posts
                            </span>
                          </p>
                        </div>
                        {/**start topic 2 */}
                        <div className="explore-topics">
                          <p className="explore-topics-entry">
                            <span className="explore-topics-title">
                              Botox & Fillers
                            </span>
                            <br />
                            <span className="explore-topics-meta">
                              {" "}
                              15 hours ago · 8 min read · 3K posts
                            </span>
                          </p>
                        </div>
                        {/**start topic 3 */}
                        <div className="explore-topics">
                          <p className="explore-topics-entry">
                            <span className="explore-topics-title">
                              XY: Men's Product Demand
                            </span>
                            <br />
                            <span className="explore-topics-meta">
                              {" "}
                              2 hours ago · 1 min read · 3K posts
                            </span>
                          </p>
                        </div>
                        {/**start topic 4 */}
                        <div className="explore-topics">
                          <p className="explore-topics-entry">
                            <span className="explore-topics-title">
                              Smarter use of products
                            </span>
                            <br />
                            <span className="explore-topics-meta">
                              {" "}
                              7 hours ago · 15 min read · 3K posts
                            </span>
                          </p>
                        </div>
                        {/**Start Accordian Feature: See More */}
                        <Accordion className="mb-3">
                          <Accordion.Item eventKey="0">
                            <Accordion.Header>See More</Accordion.Header>
                            <Accordion.Body>
                              <Link
                                to={"/"}
                                className="text-decoration-none text-dark"
                              >
                                {/**start topic 5 */}
                                <div className="explore-topics">
                                  <p className="explore-topics-entry">
                                    <span className="explore-topics-title">
                                      Clean ingredients.
                                    </span>
                                    <br />
                                    <span className="explore-topics-meta">
                                      {" "}
                                      12 hours ago · 4 min read · 3K posts
                                    </span>
                                  </p>
                                </div>
                              </Link>
                              <Link
                                to={"/"}
                                className="text-decoration-none text-dark"
                              >
                                {/**start topic 6 */}
                                <div className="explore-topics">
                                  <p className="explore-topics-entry">
                                    <span className="explore-topics-title">
                                      {" "}
                                      Non-surgical Solutions (EBDs)
                                    </span>
                                    <br />
                                    <span className="explore-topics-meta">
                                      {" "}
                                      8 hours ago · 19 min read · 3K posts
                                    </span>
                                  </p>
                                </div>
                              </Link>
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                        {/**End Accordian Feature: See More */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/**End explore-classes */}

              {/**start explore-jobs */}
              <div className="mt-1">
                <div className="border border-2 rounded">
                  <div className="shadow-lg">
                    <div className="container">
                      <div className="w3-container py-2">
                        <h4 className="fw-bolder w3-text-black mb-4 d-flex justify-content-between align-items-center">
                          <span>Jobs</span>
                          <span
                            className="w3-tag py-1 px-3 bg-danger-subtle text-danger rounded-4"
                            style={{ fontSize: "12px" }}
                          >
                            Beta
                          </span>
                        </h4>

                        {/**start topic 1 */}
                        <div className="explore-jobs">
                          <p className="explore-jobs-entry">
                            <span className="explore-jobs-title">
                            
Cosmetic Chemist & Innovative Analyst
                            </span>
                            <br />
                            <span className="explore-jobs-meta">
                              {" "}
                              17 hours ago · 5 min read · 43K posts
                            </span>
                          </p>
                        </div>
                        {/**start topic 2 */}
                        <div className="explore-jobs">
                          <p className="explore-jobs-entry">
                            <span className="explore-jobs-title">
                            Virtual Makeup Consultant (AR/AI Tools)
                            </span>
                            <br />
                            <span className="explore-jobs-meta">
                              {" "}
                              15 hours ago · 8 min read · 3K posts
                            </span>
                          </p>
                        </div>
                        {/**start topic 3 */}
                        <div className="explore-jobs">
                          <p className="explore-jobs-entry">
                            <span className="explore-jobs-title">
                            Digital Beauty Content Strategist
                            </span>
                            <br />
                            <span className="explore-jobs-meta">
                              {" "}
                              2 hours ago · 1 min read · 3K posts
                            </span>
                          </p>
                        </div>
                        {/**start topic 4 */}
                        <div className="explore-jobs">
                          <p className="explore-jobs-entry">
                            <span className="explore-jobs-title">
                            Beauty Tech UX/UI Designer
                            </span>
                            <br />
                            <span className="explore-jobs-meta">
                              {" "}
                              7 hours ago · 15 min read · 3K posts
                            </span>
                          </p>
                        </div>
                        {/**Start Accordian Feature: See More */}
                        <Accordion className="mb-3">
                          <Accordion.Item eventKey="0">
                            <Accordion.Header>See More</Accordion.Header>
                            <Accordion.Body>
                              <Link
                                to={"/"}
                                className="text-decoration-none text-dark"
                              >
                                {/**start topic 5 */}
                                <div className="explore-jobs">
                                  <p className="explore-jobs-entry">
                                    <span className="explore-jobs-title">
                                    E-commerce Brand Manager
                                    </span>
                                    <br />
                                    <span className="explore-jobs-meta">
                                      {" "}
                                      12 hours ago · 4 min read · 3K posts
                                    </span>
                                  </p>
                                </div>
                              </Link>
                              <Link
                                to={"/"}
                                className="text-decoration-none text-dark"
                              >
                                {/**start topic 6 */}
                                <div className="explore-jobs">
                                  <p className="explore-jobs-entry">
                                    <span className="explore-jobs-title">
                                      {" "}
                                      Skincare Product Development Specialist
                                    </span>
                                    <br />
                                    <span className="explore-jobs-meta">
                                      {" "}
                                      8 hours ago · 19 min read · 3K posts
                                    </span>
                                  </p>
                                </div>
                              </Link>
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                        {/**End Accordian Feature: See More */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/**End explore-jobs */}
            </div>
          {/*End Right Column Quarter*/}
           
            {/*} End Grid*/}
          </div>
          {/*}End Main row*/}
        </div>
      </div>

      <div className="w3-container w3-content text-center w3-padding-48 w3-margin-bottom w3-padding-small">
        <footer className="text-muted py-5 position-fixed bottom-0 start-0 w-100">
          <div className="container">
            <p className="float-end mb-1">
              <a href="#profile" style={{ color: "#FF385C" }}>
                Back to top
              </a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

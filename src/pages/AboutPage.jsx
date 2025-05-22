import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdb-react-ui-kit";
import { FaGoogle } from "react-icons/fa";
import { FaMicrosoft } from "react-icons/fa";
import { SiAdobecreativecloud } from "react-icons/si";
import ResumeDownload from "../assets/ResumeDownload.pdf";

import MeWhite from "../assets/images/MeWhite.png";
import LocationView from "../assets/images/LocationView.png";

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
   

        {/**start experience count */}

 
     <div className="w3-margin-top w3-padding-top-32">
            {/** Start intro*/}
            <div className="d-flex justify-content-center align-items-center w3-padding-16 w3-light-gray">
              {/** End intro*/}
  
              <div className="w3-text-black w3-margin-top">
                {/*} Start Main row*/}
                <div className="w3-row-padding justify-content-center align-items-center">
                  {/*Start Left Column*/}
                  <div className="w3-third flex-column justify-content-center align-items-center" style={{ borderRight: "2px solid rgb(180, 180, 180)" }}>
    
                      <div className="w3-display-container w3-padding" >
                        <img 
                        src={MeWhite} 
                        alt="Carol Wargo, Full Stack Developer" 
                          className="opacity-75 w3-hover-opacity-off rounded shadow"
                            style={{ width: "100%" }}
                        title="Carol Wargo" />
  
                        <div className="w3-display-bottomleft p-2 text-white ms-4 mb-2">
                          <h3
                            style={{ color: "#FF000C", textShadow: "1px 1px 2px #000000" }}
                          >
                            CAROL WARGO <br />
                           
                          </h3>
                       
                        </div>
                      </div>
                      <br />
                      <div className="w3-container">
                        <div className="w3-container">
                          <h6 className="w3-large text-black text-uppercase mb-3">
                          <span style={{fontSize:'14px', textShadow:'1px 1px 2px #000000'}}>Full Stack Software Developer | UX/UI Design</span>
                          </h6>
                
                            <div className="row">
                              
                          <p className="mb-0 pb-1">
                            <i className="fa fa-home w3-margin-right w3-text-black mb-0"></i>
                            Huntingtown, MD
                          </p>
                              <div className="col-md-6 pt-0">
                                <a
                                  href="mailto:carolwargo.dev@gmail.com"
                                  className="w3-text-black"
                                >
                                  <i className="fa fa-envelope  w3-margin-right w3-text-black"></i>
                                  Email
                                </a>
                                <br />
                                <a
                                  href="tel:+14437711726"
                                  className="w3-text-black "
                                >
                                  <i className="fa fa-phone w3-margin-Left  w3-margin-right  w3-text-black mt-2"></i>
                                  Phone
                                </a>
                              </div>
                              <div className="col-sm-6 col-md-6">
                                <a
                                  href="https://github.com/carolwargo"
                                  className="w3-text-black"
                                >
                                  <i className="fab fa-github w3-margin-right w3-text-black mt-2"></i>
                                  Github
                                </a>
  
                                <br />
                                <a
                                  href="https://www.linkedin.com/in/carol-wargo-35021baa/"
                                  className="w3-text-black"
                                >
                                  <i className="fab fa-linkedin w3-margin-right w3-text-black mt-2"></i>
                                  LinkedIn
                                </a>
                              </div>
                            </div>
                          </div>
                      
                        <br />
                        <div className="w3-container bg-black text-light w3-padding-16">
                          <div className="w3-container">
                            <h4 className=" w3-padding-16">
                              <i className="fa fa-certificate w3-xlarge "></i>{" "}
                              Education
                            </h4>
                          </div>
                          <div className="w3-container">
                            <h6>
                              <b>George Washington University</b>
                            </h6>
                            <h6>
                              <i className="fa fa-calendar "></i> Jan. 2023- Aug.
                              2023
                            </h6>
                            <p>Full Stack Developer | UX Design Certificate</p>
                          </div>
  
                          <div className="w3-container">
                            <h6>
                              <b>Real Estate License</b>
                            </h6>
                            <h6>
                              {" "}
                              <i className="fa fa-calendar "></i> June 2003
                            </h6>
                            <p>State of Maryland</p>
                          </div>
                        </div>
  
                        <br />
                        <p
                          className="w3-text-black w3-margin-top w3-padding-small"
                          style={{ fontSize: "14px" }}
                        >
                          <b>
                            <i>
                              'I am a Full-Stack Software Developer with a focus
                              on User Experience. My passion is helping others and
                              using creative design to develop innovative
                              technological solutions. With over 20 years of
                              experience in business management and strategic
                              development, I bring extensive knowledge and
                              expertise to every project I undertake.'
                            </i>
                          </b>
                        </p>
                        <br />
                        {/**Start Tech Skills*/}
                        <h6 className="w3-large w3-text-black text-uppercase mb-3">
                        
                          <b>Technical Skills</b>
                        </h6>
                 
                        <div className="w3-grey w3-round-xlarge w3-small shadow">
                          <div
                            className="w3-container w3-center w3-round-xlarge bg-black text"
                            style={{ width: "90%" }}
                          >
                            90%
                          </div>
                        </div>
                        <p>Front-End</p>
  
                        <div className="w3-grey w3-round-xlarge w3-small shadow">
                          <div
                            className="w3-container w3-center w3-round-xlarge bg-black text"
                            style={{ width: "75%" }}
                          >
                            75%
                          </div>
                        </div>
                        <p>Back-End</p>
  
                        <div className="w3-grey w3-round-xlarge w3-small shadow">
                          <div
                            className="w3-container w3-center w3-round-xlarge bg-black text"
                            style={{ width: "85%" }}
                          >
                            85%
                          </div>
                        </div>
                        <p>Graphic Design</p>
  
                        <div className="w3-grey w3-round-xlarge w3-small shadow">
                          <div
                            className="w3-container w3-center w3-round-xlarge bg-black text"
                            style={{ width: "80%" }}
                          >
                            <div className="w3-center w3-text-black">80%</div>
                          </div>
                        </div>
                        <p>Digital Marketing</p>
  
                        <div className="w3-grey w3-round-xlarge w3-small shadow">
                          <div
                            className="w3-container w3-center w3-round-xlarge bg-black text"
                            style={{ width: "75%" }}
                          >
                            75%
                          </div>
                        </div>
                        <p>E-Commerce</p>
  
                        {/**End Tech Skills */}
                        <hr className="my-4" />
                        {/**Start Programming Languages */}
  
                          <h6 className="w3-large w3-text-black text-uppercase mb-3">
                          <b>Programming Languages</b>
                        </h6>
                        <div className="w3-grey w3-round-xlarge w3-small shadow">
                          <div
                            className="w3-container w3-center w3-round-xlarge bg-black text"
                            style={{ width: "95%" }}
                          >
                            95%
                          </div>
                        </div>
                        <p>HTML</p>
  
                        <div className="w3-grey w3-round-xlarge w3-small shadow">
                          <div
                            className="w3-container w3-center w3-round-xlarge bg-black text"
                            style={{ width: "90%" }}
                          >
                            90%
                          </div>
                        </div>
                        <p>CSS</p>
  
                        <div className="w3-grey w3-round-xlarge w3-small shadow">
                          <div
                            className="w3-container w3-center w3-round-xlarge bg-black text"
                            style={{ width: "75%" }}
                          >
                            75%
                          </div>
                        </div>
                        <p>JavaScript</p>
                        {/**End Programming Languages */}
                        <hr className="my-4" />
                        {/**Start Frameworks */}
  
                              <h6 className="w3-large w3-text-black text-uppercase mb-3">
                          <b>Frameworks</b>
                        </h6>
                        <div className="w3-grey w3-round-xlarge w3-small shadow">
                          <div
                            className="w3-container w3-center w3-round-xlarge bg-black text"
                            style={{ width: "85%" }}
                          >
                            85%
                          </div>
                        </div>
                        <p>
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
  
                        <div className="w3-grey w3-round-xlarge w3-small shadow">
                          <div
                            className="w3-container w3-center w3-round-xlarge bg-black text"
                            style={{ width: "75%" }}
                          >
                            75%
                          </div>
                        </div>
                        <p>Back-End Frameworks</p>
  
                        <div className="w3-grey w3-round-xlarge w3-small shadow">
                          <div
                            className="w3-container w3-center w3-round-xlarge bg-black text"
                            style={{ width: "90%" }}
                          >
                            90%
                          </div>
                        </div>
                        <p>UI Frameworks</p>
  
                        <div className="w3-grey w3-round-xlarge w3-small shadow">
                          <div
                            className="w3-container w3-center w3-round-xlarge bg-black text"
                            style={{ width: "70%" }}
                          >
                            70%
                          </div>
                        </div>
  
                        <p className="">Mobile App Frameworks</p>
  
                        <hr className="my-4" />
      <h6 className="w3-large w3-text-black text-uppercase mb-3">
                          <b>
                            {" "}
                            Software Proficiencies
                          </b>
                        </h6>
                        <h6 className="w3-text-black">
                          <FaGoogle className="fa-fw w3-margin-left w3-text-black" />{" "}
                          Google Workspace
                        </h6>
                        <h6 className="w3-text-black">
                          <FaMicrosoft className="fa-fw w3-margin-left w3-text-black" />{" "}
                          Microsoft Suite
                        </h6>
                        <h6 className="w3-text-black">
                          <SiAdobecreativecloud className="fa-fw w3-margin-left w3-text-black" />{" "}
                          Adobe Creative Cloud
                        </h6>
                        <br />
  
                        <div className="w3-grey w3-round-xlarge w3-small shadow">
                          <div
                            className="w3-container w3-center w3-round-xlarge bg-black text"
                            style={{ width: "90%" }}
                          >
                            90%
                          </div>
                        </div>
                        <p className="w3-text-black">Collaborative Software</p>
  
                        <div className="w3-grey w3-round-xlarge w3-small shadow">
                          <div
                            className="w3-container w3-center w3-round-xlarge bg-black text"
                            style={{ width: "90%" }}
                          >
                            90%
                          </div>
                        </div>
                        <p className="w3-text-black">Design Software</p>
                        <br />
                      </div>
                      
            




   <div className="container">

                                            <div
                      className="w3-center p-4 text-white shadow"
                      style={{ backgroundColor: "#FF000C" }}
                    >
                   
                      <p style={{ fontSize: "14px" }}>
                      Click "Download Resume" button
                        below to download a PDF of my resume.
                      </p>
                     
                        <a
                          className="text-white w3-hover-opacity "
                          id="download"
                          download
                          href={ResumeDownload}
                        >
                           <button className="btn btn-dark  rounded-pill">
                          <i className="fa fa-download-alt"></i> Download Resume
                          </button>
                        </a>
                  
                    </div>
                      
                        </div>
               
            
  
                    <br />
                    {/*End Left Column*/}
                  </div>
                  {/*End Left Column*/}
  
                  {/*Start Right Column*/}
                  <div className="w3-twothird flex-column justify-content-center align-items-center">
                    <div className="container w3-light-gray">
                      <h2 className="w3-padding-16  text-black">
                        <i className="fa fa-suitcase fa-fw  w3-xlarge w3-text-black"></i>{" "}
                        WORK EXPERIENCE
                      </h2>
                      <h5 className='my-red'>
                        FREELANCE 
                      </h5>
                      <h6 className="w3-text-black">
                          <b>Digital Design & Development</b> <br />
                        <i className="fa fa-calendar fa-fw mt-1"></i> June 2016 -{" "}
                        <span className="w3-tag bg-black w3-round">Current</span>
                      </h6>
                      <p className="w3-text-black w3-margin-top">
                        <i className="far fa-sticky-note fa-fw"></i>
                        <b> Duties</b>
                      </p>
                      <ul style={{ fontSize: "14.25px" }}>
                        <li>
                          Develop marketing strategies through analysis and client
                          engagement.
                        </li>
                        <li>
                          Design, develop, monitor, and maintain CMS and custom
                          websites.
                        </li>
                        <li>
                          Design custom, interchangeable, and reusable components.
                        </li>
                        <li>Edit video and images.</li>
                        <li>
                          Create and implement graphic design elements and
                          branding initiatives.
                        </li>
                        <li>
                          Produce content and manage social media platforms.
                        </li>
                        <li>
                          Oversee projects, including resource planning, risk
                          management, and stakeholder collaboration.
                        </li>
                        <li>Integrate and manage e-commerce platforms.</li>
                        <li>
                          Conduct audits to identify and resolve technical issues
                          and monitor site security.
                        </li>
                        <li>
                          Implement SEO strategies to enhance online visibility.
                        </li>
                        <li>
                          Address user inquiries and feedback to improve client
                          satisfaction.
                        </li>
                      </ul>
                      <hr className="red-line"/>
  
                      <h5 className='my-red'>
                        PRINCE GEORGES COMMUNITY FEDERAL CREDIT UNION
                      </h5>
                      <h6 className="w3-text-black">
                           <b>
                          Corporate Event Manager & Employee Engagement Specialist
                        </b> <br />
                        <i className="fa fa-calendar fa-fw mt-1"></i>Oct 2020
                        - Feb 2022{" "}
                        
                          <span className="w3-tag bg-black w3-round">Open-Ended</span>
                      </h6>
                      <p className="w3-text-black w3-margin-top">
                        <i className="far fa-sticky-note fa-fw"></i>
                        <b> Duties</b>
                      </p>
  
                      <ul style={{ fontSize: "14.25px" }}>
                        <li>
                          <strong>Primary Focus:</strong> Strategize, coordinate,
                          and execute corporate events and organization-wide
                          celebrations to foster morale and enhance
                          employee/management relations during the pandemic.
                        </li>
                        <li>
                          Collaborate with internal stakeholders to identify event
                          goals, themes, and desired outcomes.
                        </li>
                        <li>
                          Serve as the primary contact for event-related
                          inquiries, providing exceptional customer service to
                          both internal and external stakeholders.
                        </li>
                        <li>
                          Build and maintain relationships with external vendors,
                          sponsors, and partners to support event objectives and
                          secure necessary resources.
                        </li>
                        <li>
                          Stay updated on industry trends and best practices in
                          corporate event management and employee engagement
                          strategies.
                        </li>
                        <li>
                          Design and implement creative engagement initiatives to
                          boost employee morale and strengthen team cohesion.
                        </li>
                        <li>
                          Manage event budgets, negotiate contracts with vendors,
                          and ensure cost-effective solutions without compromising
                          quality.
                        </li>
                      </ul>
                      <hr className="red-line" />
  
                      <h5 className='my-red'>
                        INDEPENDENT CONTRACTOR
                      </h5>
                      <h6 className="w3-text-black">
                         <b>Real Estate Agent / Investor</b> <br />
                        <i className="fa fa-calendar fa-fw mt-1"></i> June 2003 -{" "}
                        <span className="w3-tag bg-black w3-round">Current</span>
                      </h6>
                      <p className="w3-text-black w3-margin-top">
                        <i className="far fa-sticky-note fa-fw "></i>
                        <b> Duties</b>
                      </p>
  
                      <ul style={{ fontSize: "14.25px" }}>
                        <li>
                          Prepare budgets and financial reports, ensuring
                          adherence to fiscal policies.
                        </li>
                        <li>
                          Develop and execute marketing strategies to attract new
                          tenants and retain existing ones.
                        </li>
                        <li>
                          Etablish and implement procedures for property
                          accountability and control, ensuring compliance with
                          regulations and safeguarding assets.
                        </li>
                        <li>
                          Conduct market research to identify investment
                          opportunities.
                        </li>
                        <li>Write, edit & negotiate contracts.</li>
                        <li>
                          Implement property management software to streamline
                          operations and improve efficiency.
                        </li>
                        <li>
                          Facilitate inspections, appraisals & legal matters.
                        </li>
                        <li>
                          Oversee home staging, architectural design, and
                          contractor management to ensure project completion.
                        </li>
                      </ul>
                      <hr className="red-line" />
  
                      <h5 className='my-red'>
                        CALVERT YOUTH RECREATION
                      </h5>
                      <h6 className="w3-text-black">
                           <b>Media Management & Director of Community Affairs</b> <br />
                        <i className="fa fa-calendar fa-fw mt-1"></i> Jun 2016 - Mar
                        2019
                      </h6>
                      <p className="w3-text-black w3-margin-top">
                        <i className="far fa-sticky-note fa-fw"></i>
                        <b> Duties</b>
                      </p>
                      <ul style={{ fontSize: "14.25px" }}>
                        <li>
                          Developed a new product line to expand offerings and
                          attract new customers.
                        </li>
                        <li>
                          Integrated e-commerce platforms to streamline sales and
                          improve customer experience.
                        </li>
                        <li>
                          Collaborate with board members, stakeholders, and
                          lawmakers.
                        </li>
                        <li>
                          Implement website design changes to ensure a
                          user-friendly UI.
                        </li>
                        <li>Create engaging content on social media.</li>
                        <li>
                          Conduct audits to identify and fix any technical issues
                          or broken links.
                        </li>
                        <li>Implement SEO strategies.</li>
                        <li>
                          Monitor site security for threats and vulnerabilities.
                        </li>
                        <li>Address user inquiries and respond to feedback.</li>
                      </ul>
                      <hr className="red-line" />
  
                      <h5 className='my-red'>
                        JOSTENS
                        <br />
                   
                      </h5>
                      <h6 className="w3-text-black">
                             <b>Territory Sales Manager</b> <br />
                        <i className="fa fa-calendar fa-fw mt-1"></i> Mar 2001 - Aug
                        2003{" "}

                      </h6>
                      <p className="w3-text-black w3-margin-top">
                        <i className="far fa-sticky-note fa-fw"></i>
                        <b> Duties</b>
                      </p>
  
                      <ul style={{ fontSize: "14.25px" }}>
                        <li>Develop & Maintain customer relationships.</li>
                        <li>Devise sales strategies based on data analysis.</li>
                        <li>
                          Demonstrate comprehensive knowledge of products and
                          procedures.
                        </li>
                        <li>Identify and capitalize on sales opportunities.</li>
                        <li>
                          Conduct routine follow-ups to gather feedback and
                          identify areas for improvement.
                        </li>
                        <li>
                          • Manage sales accounts, address customer service
                          inquiries, and resolve IT issues promptly.
                        </li>
                        <li>
                          Coordinate and oversee events, travel, product
                          distribution, and staffing.
                        </li>
                        <li>
                          Lead monthly staff meetings to set goals, address needs,
                          resolve conflicts, and provide clarity.
                        </li>
                        <li>
                          Conduct onboarding sessions and train new sales
                          representatives.
                        </li>
                      </ul>
                      <hr className="red-line" />
  
                      <h5 className='my-red'>
                        CALVIN KLEIN COSMETICS
                        <br />
                      
                      </h5>
                      <h6 className="w3-text-black">
                          <b>Regional Sales Manager</b> <br />
                        <i className="fa fa-calendar fa-fw mt-1"></i> Aug 1999 - Mar
                        2001
                      </h6>
                      <p className="w3-text-black w3-margin-top">
                        <i className="far fa-sticky-note fa-fw"></i>
                        <b> Duties</b>
                      </p>
  
                      <ul style={{ fontSize: "14.25px" }}>
                        <li>
                          Maintain detailed and organized documentation of events
                          and timelines.
                        </li>
                        <li>
                          Vet, schedule, and coordinate staffing, vendors,
                          security, travel itineraries, and entertainment for
                          exclusive events.
                        </li>
                        <li>
                          Demonstrate comprehensive knowledge of products,
                          inventory, and procedures to effectively showcase
                          progress and provide comparisons.
                        </li>
                        <li>
                          Conduct staff training to promote awareness of clients'
                          ethnicities, cultural differences, and customs.
                        </li>
                        <li>
                          Conduct onboarding sessions to train event staff on the
                          importance of discretion, cultural differences, and
                          awareness of current events.
                        </li>
                        <li>
                          Develop clear process guidelines for staff to follow.
                        </li>
                      </ul>
                    </div>
  
                    {/*End Right Column*/}
                  </div>
  
                  {/*} End Grid*/}
                </div>
                {/*}End Main row*/}
  <div className="mt-5">
         <div
          className="w3-row w3-center bg-black w3-padding-32 text-white "
          style={{ backgroundColor: "#FF000C" }}
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
</div>
     <div className="my-5">
<MDBContainer>
        <MDBRow className="justify-content-center align-items-center">
          <MDBCol lg="4" className="text-center mb-4 mb-lg-0">
            <h1
              className="fw-bold mb-3"
              style={{ color: "#FF000C", fontSize: "2.5rem" }}
            >
              Where I'm Located
            </h1>
            <h5
              className="text-muted mb-4"
              style={{ fontStyle: "italic", fontSize: "1.25rem" }}
            >
              <MDBIcon icon="map-marker-alt" className="me-2" />
              Huntingtown, Maryland
            </h5>
          </MDBCol>
          <MDBCol lg="6">
            <div
              className="image-container rounded overflow-hidden shadow"
              style={{
                transition: "transform 0.3s ease, filter 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.02)";
                e.currentTarget.style.filter = "brightness(1.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.filter = "brightness(1)";
              }}
            >
              <img
                src={LocationView}
                alt="Scenic view of Huntingtown, Maryland"
                className="img-fluid rounded shadow"
                style={{ width: "100%", height: "auto", border:'3px solid #FF000C' }}
              />
            </div>
          </MDBCol>
        </MDBRow>
        <div className="text-center mt-5">
          <div
            className="divider mx-auto mb-4"
            style={{
              width: "100px",
              height: "2px",
              background: "linear-gradient(to right, #FF000C, transparent)",
            }}
          />
          <p className="text-muted mb-4" style={{ fontSize: "16px" }}>
            Explore my portfolio, sample sites, and repositories.
          </p>
          <Link
            to="/portfolio"
            onClick={scrollToTop}
            className="btn btn-outline-primary rounded-pill px-4 py-2 shadow"
            style={{
              borderColor: "#FF000C",
              color: "#FF000C",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#FF000C";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#FF000C";
            }}
            aria-label="View Carol Wargo's Portfolio"
          >
            <MDBIcon icon="arrow-right" className="me-2" />
            View Portfolio
          </Link>
        </div>
      </MDBContainer>
        {/* Location */}
     

        </div>

                {/*
                <div className="w3-light-gray w3-margin-top">
           
                             <div className="py-5">
                    <div className="row d-flex justify-content-center align-items-end ">
                           <div className="w3-col m3 flex-column">
                                           <div className="container">
                          <h2>SERVICE TO OTHERS</h2>
                       
                          <p className="mt-3">
                            Community service has been my catalyst for personal
                            growth, skill development, and exposure to new
                            experiences. It offers me the chance to explore facets
                            of life I wouldn't have encountered otherwise.
                          </p>
                           </div>
</div>
  <div className="w3-col m9 flex-column">
                              <div className="row d-flex justify-content-center align-items-end ">
                      <div className="w3-col m6 flex-column">
                           <div className="container">
                        <ul>
                          <li className="ml-3">
                            <strong style={{ color: "#FF000C" }}>
                              MIRACLE LEAGUE (favorite):
                            </strong>{" "}
                            Assist with organized sports for children & young
                            adults with disabilities.
                          </li>
  
                          <li className="ml-3">
                            <strong style={{ color: "#FF000C" }}>
                              NATURE CENTER VOLUNTEER:
                            </strong>{" "}
                            Provide care for animals, monitor health, collect
                            data, & assist with educational programs.
                          </li>
                          <li className="ml-3">
                            <strong style={{ color: "#FF000C" }}>
                              YOUTH CLUB SECRETARTY:
                            </strong>{" "}
                            Maintain website, database, facilitate meetings,
                            coordinate registration, plan events and organize
                            fundraising activities.
                          </li>
                          <li className="ml-3">
                            <strong style={{ color: "#FF000C" }}>
                              PUBLIC SCHOOLS VOLUNTEER:
                            </strong>{" "}
                            Assist with classroom activities, support
                            kids in need, plan & facilitate events.
                          </li>
                        </ul>
                      </div>
                      </div>
                      <div className="w3-col m6 flex-column ">
                       <div className="container">
                          <ul>
                            <li className="ml-3">
                              <strong style={{ color: "#FF000C" }}>
                                UNDER ARMOUR GIVE-BACK:
                              </strong>{" "}
                              Participation includes: rebuilding schools,
                              distributing school supplies, assisting with
                              students & assemblies, and packing & shipping food
                              items to ship overseas.
                            </li>
                            <li className="ml-3">
                              <strong style={{ color: "#FF000C" }}>
                                ABUSED PERSONS PROGRAM (1st-experience):
                              </strong>{" "}
                              Provide a range of services to support those
                              affected by violence.
                            </li>
  
                            <li className="ml-3">
                              <strong style={{ color: "#FF000C" }}>
                                FOOD PANTRY:
                              </strong>{" "}
                              Distributes food & household goods to those in need.
                            </li>
                            <li className="ml-3">
                              <strong style={{ color: "#FF000C" }}>
                                FARMING 4HUNGER:
                              </strong>{" "}
                            Locally grown produce harvested by the community, that is distributed to families in need.
                            </li>
                          </ul>
                        </div>
                      </div>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
            */}
              </div>
            </div>
          </div>
  </div>

  );
}

import React from "react";
import MeWhite from "../../assets/images/MeWhite.png";
import { FaLaptopCode } from "react-icons/fa";
import { HiOutlinePuzzlePiece } from "react-icons/hi2";
import { AiFillDatabase } from "react-icons/ai";
import { BsDatabaseLock } from "react-icons/bs";
import { GiGears } from "react-icons/gi";
import { SiAdobecreativecloud } from "react-icons/si";
import { SiMicrosoftoffice } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";

const CV = () => {
  return (
    <div className="w3-content w3-padding-64" style={{ maxWidth: "1400px" }}>
      <div className="w3-third">
        <div className="p-2">
        <div className="card w3-text-grey">
          <div className="w3-display-container">
            <img src={MeWhite} alt="me" style={{ maxWidth: "100%" }} />
          </div>
          <div className="container px-5 py-4"> 
            <div className="w3-margin-top">
            <h2>
              <i className="fa-fw  w3-xxlarge w3-text-black"></i>{" "}
              CAROL WARGO
            </h2>
            
              <p>
                <i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-black"></i>
                Software Developer and Web Designer
              </p>
              <p>
                <i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-black"></i>
                Huntingtown, MD
              </p>
              <p>
                <a href="mail:carolwargo.dev@gmail.com">
                  <i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-black"></i>
                  Email
                </a>
              </p>
              <p>
                <a href="tel:+14437711726">
                  <i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-black"></i>
                  443-771-1726
                </a>
              </p>
            </div>
            </div>
                  {/**Start statement*/}
                  <div className=" bg-info-subtle">
            <div className="container px-5 py-4">
            <h3 className="w3-text-grey">
              <i className="fa fa-user fa-fw w3-xlarge w3-text-black"></i>{" "}
              Profile 
            </h3>
              <p>
                <i>
                  “I am a passionate Full-Stack Software Developer and Graphic
                  Designer with a solid foundation in both frontend & backend
                  technologies, and a 20-year background in Business Analysis &
                  Project Management. I excel in leading and collaborating with
                  cross-functional teams, leveraging the latest tools and
                  frameworks to bring innovative ideas to life. From crafting
                  interactive User interfaces to designing efficient and secure
                  server-side solutions, I am dedicated to delivering a seamless
                  User experience while optimizing performance.”{" "}
                </i>
              </p>
          </div>
          </div>
          {/**End statement*/}
          <div className="w3-container">
          <h5 className="w3-text-grey w3-margin-left">
              <i className="fa fa-graduation-cap fa-fw w3-margin-right w3-xlarge w3-text-black"></i>
              Education
            </h5>
            <div className="w3-container ">
              <h5 className="w3-opacity">
                <b>George Washington University</b>
              </h5>
              <h6 className="w3-text-black">
                <i className="fa fa-calendar fa-fw w3-margin-right"></i>July,
                2023
              </h6>
              <p>Full Stack Development | UX Design Certificate</p>
              <hr />
            </div>
            <div className="w3-container mb-2">
              <h5 className="w3-opacity">
                <b>Real Estate License</b>
              </h5>
              <h6 className="w3-text-black">
                <i className="fa fa-calendar fa-fw w3-margin-right"></i>June,
                2003
              </h6>
              <p>State of Maryland</p>
            </div>
            </div>
          </div>
          </div>
      </div>


      {/*Start Right Column */}
      <div className="w3-twothird">
      <div className="p-2">
        <div className="w3-container w3-card w3-white">

          {/**Start practices*/}
          <div className="w3-container w3-white ">
            <h3 className="w3-text-grey w3-margin-left">
       
              <i className="fas fa-lightbulb fa-fw w3-xlarge w3-text-black"></i>
              <span>Development Practices</span>
            </h3>

            <ul>
              <li>
                Effectively communicates to engage stakeholders throughout the
                development process.
              </li>
              <li>
                Articulates ideas, recommendations, and findings clearly and
                inclusively.
              </li>
              <li>Promotes and welcomes feedback from all stakeholders.</li>
              <li>
                Embraces continuous improvement through post-implementation
                evaluations and knowledge sharing.
              </li>
              <li>
                Adapts positively to change and proactively embraces new
                challenges.
              </li>
              <li>
                Applies critical thinking to analyze problems and propose
                innovative solutions.
              </li>
              <li>
                Inspires and motivates team members to achieve common goals.
              </li>
              <li>
                Negotiates and mediates to resolve conflicts and reach
                consensus.
              </li>
              <li>
                Delivers functional software focusing on meeting user needs and
                exceeding expectations.
              </li>
            </ul>
            <hr />
          </div>
          {/**End practices*/}


          {/**Start interpersonal*/}
          <div className="w3-container w3-white w3-padding-8 ">
            <h3 className="w3-text-grey w3-margin-left">
              {" "}
              <i className="fas fa-handshake fa-fw w3-xlarge w3-text-black"></i>{" "}
              <span>Interpersonal Skills</span>{" "}
            </h3>
            <div className="w3-container">
              <ul>
                <li>
                  Foster customer and stakeholder engagement through effective
                  communication.
                </li>
                <li>
                  Articulate ideas, recommendations, and findings clearly and
                  inclusively.
                </li>
                <li>
                  Welcome feedback from stakeholders and promote an inclusive
                  feedback culture.
                </li>
                <li>
                  Embrace continuous improvement through post-implementation
                  evaluations and knowledge sharing.
                </li>
                <li>
                  Adapt positively to change and proactively tackle challenges.
                </li>
                <li>
                  Demonstrate critical thinking skills to analyze and solve
                  complex problems.
                </li>
                <li>Inspire and motivate team members towards common goals.</li>
                <li>
                  Proficient in negotiation and conflict resolution among
                  stakeholders.
                </li>
                <li>
                  Deliver functional software focused on meeting user needs and
                  exceeding expectations.
                </li>
              </ul>
            </div>
          </div>






          <div className="w3-container w3-white w3-padding-8 ">
            <h3 className="w3-text-grey w3-margin-left">
              {" "}
              <i className="fas fa-keyboard fa-fw w3-xlarge w3-text-black"></i>{" "}
              <span>Technical Skills</span>{" "}
            </h3>
            <div className="w3-container">
              <div className="w3-light-grey shadow">
                <div
                  className="w3-container bg-black w3-center shadow"
                  style={{ width: "85%" }}
                >
                  85%
                </div>
              </div>
              <p
                className="w3-wide text-black"
                style={{ fontSize: "1rem", paddingTop: ".25rem" }}
              >
                <GiGears
                  className="justify-content-center"
                  style={{ fontSize: "1.5rem" }}
                />{" "}
                Core Technologies
              </p>
              <div className="w3-light-grey shadow">
                <div
                  className="w3-container bg-black w3-center"
                  style={{ width: "95%" }}
                >
                  95%
                </div>
              </div>
              <p
                className="w3-wide text-black"
                style={{ fontSize: "1rem", paddingTop: ".25rem" }}
              >
                <FaLaptopCode
                  className="justify-content-center"
                  style={{ fontSize: "1.5rem" }}
                />{" "}
                Front-End Design
              </p>

              <div className="w3-light-grey shadow">
                <div
                  className="w3-container bg-black w3-center"
                  style={{ width: "80%" }}
                >
                  80%
                </div>
              </div>
              <p
                className="w3-wide text-black"
                style={{ fontSize: "1rem", paddingTop: ".25rem" }}
              >
                <BsDatabaseLock
                  className="justify-content-center"
                  style={{ fontSize: "1.5rem" }}
                />{" "}
                Server-Side Development
              </p>

              <div className="w3-light-grey shadow">
                <div
                  className="w3-container  bg-black w3-center"
                  style={{ width: "75%" }}
                >
                  75%
                </div>
              </div>
              <p
                className="w3-wide text-black"
                style={{ fontSize: "1rem", paddingTop: ".25rem" }}
              >
                <HiOutlinePuzzlePiece
                  className="justify-content-center"
                  style={{ fontSize: "1.5rem" }}
                />{" "}
                Full-Stack Integration
              </p>

              <div className="w3-light-grey shadow">
                <div
                  className="w3-container bg-black w3-center"
                  style={{ width: "75%" }}
                >
                  75%
                </div>
              </div>
              <p
                className="w3-wide text-black"
                style={{ fontSize: "1rem", paddingTop: ".25rem" }}
              >
                <AiFillDatabase
                  className="justify-content-center"
                  style={{ fontSize: "1.5rem" }}
                />{" "}
                Database Implementation
              </p>
            </div>
          </div>
          <hr />
          <div className="w3-container w3-white w3-padding-8 ">
            <div className="row bg-info-subtle w3-padding-16">
              <h3 className="w3-text-grey w3-margin-left">
                {" "}
                <i className="fa fa-cog fa-fw w3-xlarge w3-text-black"></i>{" "}
                <span> Software</span>{" "}
              </h3>
              <div className="w3-col l4">
                {/**start software */}

                <h6 className="w3-text-black">
                  <SiAdobecreativecloud className="fa-fw " /> Adobe Creative
                  Cloud
                </h6>
              </div>
              <div className="w3-col l4">
                {/**start software */}

                <h6 className="w3-text-black">
                  <SiMicrosoftoffice className="fa-fw " /> Microsoft Suite
                </h6>
              </div>
              <div className="w3-col l4">
                {/**start software */}

                <h6 className="w3-text-black">
                  <FaGoogle className="fa-fw " /> Google Workspace
                </h6>
              </div>
            </div>
          </div>
          <hr />

        </div>
</div>
        {/*End Right Column */}
        <br />
      </div>

      {/*End Grid */}
      <br />

      <div>
        {/**End interpersonal*/}

        <div
          className="w3-content w3-padding-64"
          style={{ maxWidth: "1400px" }}
        >
          <div className="w3-row-padding justify-content-center align-items-center">
            <div className="w3-container w3-card w3-white">
              <h3 className="w3-text-grey w3-padding-16 w3-margin-top w3-margin-left">
                <i className="fa fa-suitcase fa-fw w3-margin-right w3-xlarge w3-text-black"></i>
                Work Experience
              </h3>
              <hr />
              <div className="w3-container">
                <div className="row justify-content-center align-items-center">
                  <div className="col">
                    <h5 className="w3-opacity">
                      <b>Digital Marketing Manager & Webmaster</b>
                    </h5>
                    <h6 className="w3-text-black">
                      <i className="fa fa-calendar fa-fw w3-margin-right"></i>
                      2018 -{" "}
                      <span className="w3-tag bg-black w3-round">2021</span>
                    </h6>
                  </div>
                  <div className="col">
                    <ul>
                      <li>Employ marketing strategies</li>
                      <li>Analyze current & past market trends</li>
                      <li>Write, edit & negotiate contracts.</li>
                      <li>
                        Facilitate inspections, appraisals & legal matters.
                      </li>
                      <li>Oversee home staging and architectural Design.</li>
                    </ul>
                  </div>
                </div>

                <hr />
              </div>
              <div className="w3-container">
                <div className="row justify-content-center align-items-center">
                  <div className="col">
                    <h5 className="w3-opacity">
                      <b>Real Estate</b>
                    </h5>
                    <h6 className="w3-text-black">
                      <i className="fa fa-calendar fa-fw w3-margin-right"></i>
                      2003-{" "}
                      <span className="w3-tag bg-black w3-round">2024 </span>
                    </h6>
                  </div>
                  <div className="col">
                    <ul>
                      <li>Employ marketing strategies</li>
                      <li>Analyze current & past market trends</li>
                      <li>Write, edit & negotiate contracts.</li>
                      <li>
                        Facilitate inspections, appraisals & legal matters.
                      </li>
                      <li>Oversee home staging and architectural Design.</li>
                    </ul>
                  </div>
                </div>
                <hr />
              </div>
              <div className="w3-container">
                <div className="row justify-content-center align-items-center">
                  <div className="col">
                    <h5 className="w3-opacity">
                      <b>Freelance Design & Development</b>
                    </h5>
                    <h6 className="w3-text-black">
                      <i className="fa fa-calendar fa-fw w3-margin-right"></i>
                      Jun 2021 -
                      <span className="w3-tag bg-black w3-round">current </span>
                    </h6>
                  </div>
                  <div className="col">
                    <ul>
                      <li>Maintain site to ensure a user-friendly UI.</li>
                      <li>
                        Develop, refactor and Maintain e-commerce platforms.
                      </li>
                      <li>
                        Implement design changes to improve user experience.
                      </li>
                      <li>
                        Conduct audits to identify and fix any technical issues
                        or broken links.
                      </li>
                      <li>Implement SEO strategies.</li>
                      <li>
                        Monitor site security for threats & vulnerabilities.
                      </li>
                      <li>
                        Respond to client to address user inquiries and
                        feedback.
                      </li>
                      <li>Create engaging content.</li>
                      <li>Collaborate with board members and lawmakers</li>
                      <li>Address user inquiries and feedback.</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/*End Page Container */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CV;

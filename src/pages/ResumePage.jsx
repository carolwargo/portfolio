import { Link } from "react-router-dom";
import MeWhite from "../assets/images/MeWhite.png";
import { FaGoogle } from "react-icons/fa";
import { SiMicrosoftoffice } from "react-icons/si";
import { SiAdobecreativecloud } from "react-icons/si";
import ResumeDownload from "../assets/ResumeDownload.pdf";
import CV from "../components/Resume/CV.jsx";
import ResumeProfile from "../components/Resume/ResumeProfile.jsx";

export default function ResumePage() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="container">
        {" "}
        <ResumeProfile />
      </div>
      <div className="resume" id="resume">
        <CV />
        {/** Start Main container */}
        <div className="w3-margin-top w3-padding-top-32">
          <div className="w3-container w3-padding">
            <h1 className="w3-text-black">DIGITAL RESUME</h1>
            <h4>
              View my skills, work experience, volunteer background, or download
              a physical copy of my resume.
            </h4>
          </div>
          {/** Start intro*/}
          <div className="w3-container d-flex justify-content-center align-items-center w3-padding-16 w3-light-gray">
            {/** End intro*/}

            <div className="w3-text-black w3-margin-top">
              {/*} Start Main row*/}
              <div className="w3-row-padding justify-content-center align-items-center ">
                {/*Start Left Column*/}
                <div className="w3-third flex-column justify-content-center align-items-center">
                  <div className="w3-text-grey">
                    <div className="w3-display-container">
                      <img
                        src={MeWhite}
                        style={{ width: "100%", border: "4px solid #FF385C" }}
                        alt="me"
                        className="w3-hover-opacity-off"
                      />
                      <div className="w3-display-bottomleft w3-container w3-text-white">
                        <h4
                          className="w3-margin-bottom"
                          style={{ color: "#FF000C" }}
                        >
                          Carol Wargo
                        </h4>
                      </div>
                    </div>
                    <br />
                    <div className="w3-container">
                      <div className="w3-container">
                        <h6 className="w3-large text-black">
                          <b>Contact Information</b>
                        </h6>
                        <p className="mb-0">
                          <i className="fa fa-briefcase w3-margin-right w3-text-black"></i>
                          Full Stack Developer
                        </p>

                        <p>
                          <i className="fa fa-home w3-margin-right w3-text-black"></i>
                          Huntingtown, MD
                        </p>

                        <br />
                        <div className="w3-content">
                          <div className="row ">
                            <div className="col-md-6">
                              <a
                                href="mail:carolwargo.dev@gmail.com"
                                className="w3-text-black"
                              >
                                <i className="fa fa-envelope  w3-margin-right w3-text-black"></i>
                                Email
                              </a>
                              <br />
                              <a
                                href="tel:+14437711726"
                                className="w3-text-black"
                              >
                                <i className="fa fa-phone w3-margin-Left  w3-margin-right  w3-text-black"></i>
                                Phone
                              </a>
                            </div>
                            <div className="col-md-6">
                              <a
                                href="https://github.com/carolwargo"
                                className="w3-text-black"
                              >
                                <i className="fab fa-github w3-margin-right w3-text-black"></i>
                                Github
                              </a>

                              <br />
                              <a
                                href="https://www.linkedin.com/in/carol-wargo-35021baa/"
                                className="w3-text-black"
                              >
                                <i className="fab fa-linkedin w3-margin-right w3-text-black"></i>
                                LinkedIn
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <br />
                      <div className="w3-container bg-black w3-padding-16">
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
                      <h6 className="w3-large w3-margin-top w3-text-black">
                        <i className="fa fa-asterisk fa-fw w3-margin-right"></i>
                        <b>Technical Skills</b>
                      </h6>
                      <br />

                      <div className="w3-light-grey w3-round-xlarge w3-small">
                        <div
                          className="w3-container w3-center w3-round-xlarge bg-black"
                          style={{ width: "90%" }}
                        >
                          90%
                        </div>
                      </div>
                      <p>Front-End</p>

                      <div className="w3-light-grey w3-round-xlarge w3-small">
                        <div
                          className="w3-container w3-center w3-round-xlarge bg-black"
                          style={{ width: "75%" }}
                        >
                          75%
                        </div>
                      </div>
                      <p>Back-End</p>

                      <div className="w3-light-grey w3-round-xlarge w3-small">
                        <div
                          className="w3-container w3-center w3-round-xlarge bg-black"
                          style={{ width: "85%" }}
                        >
                          85%
                        </div>
                      </div>
                      <p>Graphic Design</p>

                      <div className="w3-light-grey w3-round-xlarge w3-small">
                        <div
                          className="w3-container w3-center w3-round-xlarge bg-black"
                          style={{ width: "80%" }}
                        >
                          <div className="w3-center w3-text-black">80%</div>
                        </div>
                      </div>
                      <p>Digital Marketing</p>

                      <div className="w3-light-grey w3-round-xlarge w3-small">
                        <div
                          className="w3-container w3-center w3-round-xlarge bg-black"
                          style={{ width: "75%" }}
                        >
                          75%
                        </div>
                      </div>
                      <p>E-Commerce</p>

                      {/**End Tech Skills */}
                      <hr className="my-4" />
                      {/**Start Programming Languages */}

                      <h6 className="w3-large w3-margin-top w3-text-theme w3-text-black">
                        <i className="fa fa-globe fa-fw w3-margin-right w3-text-black"></i>
                        <b>Programming Languages</b>
                      </h6>
                      <br />
                      <div className="w3-light-grey w3-round-xlarge w3-small">
                        <div
                          className="w3-container w3-center w3-round-xlarge bg-black"
                          style={{ width: "95%" }}
                        >
                          95%
                        </div>
                      </div>
                      <p>HTML</p>

                      <div className="w3-light-grey w3-round-xlarge w3-small">
                        <div
                          className="w3-container w3-center w3-round-xlarge bg-black"
                          style={{ width: "90%" }}
                        >
                          90%
                        </div>
                      </div>
                      <p>CSS</p>

                      <div className="w3-light-grey w3-round-xlarge w3-small">
                        <div
                          className="w3-container w3-center w3-round-xlarge bg-black"
                          style={{ width: "75%" }}
                        >
                          75%
                        </div>
                      </div>
                      <p>JavaScript</p>
                      {/**End Programming Languages */}
                      <hr className="my-4" />
                      {/**Start Frameworks */}

                      <h6 className="w3-large w3-text-theme w3-text-black">
                        <i className="fa fa-globe fa-fw w3-margin-right w3-text-black"></i>
                        <b>Frameworks</b>
                      </h6>
                      <br />
                      <div className="w3-light-grey w3-round-xlarge w3-small">
                        <div
                          className="w3-container w3-center w3-round-xlarge bg-black"
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

                      <div className="w3-light-grey w3-round-xlarge w3-small">
                        <div
                          className="w3-container w3-center w3-round-xlarge bg-black"
                          style={{ width: "75%" }}
                        >
                          75%
                        </div>
                      </div>
                      <p>Back-End Frameworks</p>

                      <div className="w3-light-grey w3-round-xlarge w3-small">
                        <div
                          className="w3-container w3-center w3-round-xlarge bg-black"
                          style={{ width: "90%" }}
                        >
                          90%
                        </div>
                      </div>
                      <p>UI Frameworks</p>

                      <div className="w3-light-grey w3-round-xlarge w3-small">
                        <div
                          className="w3-container w3-center w3-round-xlarge bg-black"
                          style={{ width: "70%" }}
                        >
                          70%
                        </div>
                      </div>

                      <p className="">Mobile App Frameworks</p>

                      <hr className="my-5" />

                      <h5 className="w3-text-black ">
                        <i className="fas fa-desktop  w3-text-black"></i>
                        <b className="w3-margin-left">
                          {" "}
                          Software Proficiencies
                        </b>
                      </h5>
                      <h6 className="w3-text-black w3-margin-left">
                        <FaGoogle className="fa-fw w3-margin-left w3-text-black" />{" "}
                        Google Workspace
                      </h6>
                      <h6 className="w3-text-black w3-margin-left">
                        <SiMicrosoftoffice className="fa-fw w3-margin-left w3-text-black" />{" "}
                        Microsoft Suite
                      </h6>
                      <h6 className="w3-text-black w3-margin-left">
                        <SiAdobecreativecloud className="fa-fw w3-margin-left w3-text-black" />{" "}
                        Adobe Creative Cloud
                      </h6>
                      <br />

                      <div className="w3-light-grey w3-round-xlarge w3-small">
                        <div
                          className="w3-container w3-center w3-round-xlarge bg-black"
                          style={{ width: "90%" }}
                        >
                          90%
                        </div>
                      </div>
                      <p className="w3-text-black">Collaborative Software</p>

                      <div className="w3-light-grey w3-round-xlarge w3-small">
                        <div
                          className="w3-container w3-center w3-round-xlarge bg-black"
                          style={{ width: "90%" }}
                        >
                          90%
                        </div>
                      </div>
                      <p className="w3-text-black">Design Software</p>
                      <br />
                    </div>
                  </div>
                  <div
                    className="w3-center w3-padding-large w3-padding-32 text-white shadow"
                    style={{ backgroundColor: "#FF385C" }}
                  >
                    <h5 className="w3-text-white w3-margin-bottom">
                      <b className="w3-margin-left">Resume Download</b>
                    </h5>
                    <p style={{ fontSize: "14px" }}>
                      For a physical copy, click the "Download Resume" button
                      below to download a PDF of my resume.
                    </p>
                    <button className="w3-button bg-black w3-padding-large rounded mt-2">
                      <a
                        className="button text-white w3-hover-opacity "
                        id="download"
                        download
                        href={ResumeDownload}
                      >
                        <i className="fa fa-download-alt"></i> Download Resume
                      </a>
                    </button>
                  </div>
                  <br />

                  <br />
                  {/*End Left Column*/}
                </div>
                {/*End Left Column*/}

                {/*Start Right Column*/}
                <div className="w3-twothird flex-column justify-content-center align-items-center">
                  <div className="w3-content w3-light-gray w3-padding-large">
                    <h2 className="w3-padding-16  text-black">
                      <i className="fa fa-suitcase fa-fw  w3-xlarge w3-text-black"></i>{" "}
                      WORK EXPERIENCE
                    </h2>
                    <h5>
                      FREELANCE
                      <br />
                      <b>Digital Design & Development</b>
                    </h5>
                    <h6 className="w3-text-black">
                      <i className="fa fa-calendar fa-fw"></i> June 2016 -{" "}
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
                    <hr className="my-5" />

                    <h5>
                      PRINCE GEORGES COMMUNITY FEDERAL CREDIT UNION
                      <br />
                      <b>
                        Corporate Event Manager & Employee Engagement Specialist
                      </b>
                    </h5>
                    <h6 className="w3-text-black">
                      <i className="fa fa-calendar fa-fw"></i> Contract Oct 2020
                      - Feb 2022{" "}
                      <span
                        className="w3-tag bg-black w3-round"
                        style={{ fontSize: "12px" }}
                      >
                        date approximates
                      </span>
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
                    <hr className="my-5" />

                    <h5>
                      INDEPENDENT CONTRACTOR
                      <br />
                      <b>Real Estate Agent / Investor</b>
                    </h5>
                    <h6 className="w3-text-black">
                      <i className="fa fa-calendar fa-fw"></i> June 2003 -{" "}
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
                    <hr className="my-5" />

                    <h5>
                      CALVERT YOUTH RECREATION
                      <br />
                      <b>Media Management & Director of Community Affairs</b>
                    </h5>
                    <h6 className="w3-text-black">
                      <i className="fa fa-calendar fa-fw"></i> Jun 2016 - Mar
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
                    <hr className="my-5" />

                    <h5>
                      JOSTENS
                      <br />
                      <b>Territory Sales Manager</b>
                    </h5>
                    <h6 className="w3-text-black">
                      <i className="fa fa-calendar fa-fw"></i> Mar 2001 - Aug
                      2003{" "}
                      <span
                        className="w3-tag bg-black w3-round"
                        style={{ fontSize: "12px" }}
                      >
                        date approximates
                      </span>
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
                    <hr className="my-5" />

                    <h5>
                      CALVIN KLEIN COSMETICS
                      <br />
                      <b>Regional Sales Manager</b>
                    </h5>
                    <h6 className="w3-text-black">
                      <i className="fa fa-calendar fa-fw"></i> Aug 1999 - Mar
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

              {/*Start Practices
 <div className="bg-black w3-margin-top">

 <div className="w3-container w3-content bg-black w3-padding-32 w3-padding-large">
   <div className="container text-center">
      <h2>
       PRACTICES FOLLOWED
          </h2>
          </div>
      
        <div className="w3-row d-flex justify-content-center w3-padding-top-24 w3-margin-top" >
    <div className="w3-col m6 flex-column  w3-padding-16">
    <h5 className="w3-margin-left"><b>DEVELOPMENT PRACTICES.</b></h5>
        <ul>
              <li>
              Effectively communicates with stakeholders throughout the development process.
              </li>
              <li>
              Embraces continuous improvement through post-implementation evaluations and knowledge sharing.
              </li>
              <li>Applies critical thinking to analyze problems and propose innovative solutions.
</li>
<li>Delivers functional software focusing on meeting user needs and exceeding expectations.</li>
             
            </ul> 
            <br />
            </div>
            <div className="w3-col m6 flex-column w3-padding-16">
            <h5 className="w3-margin-left"><b>INTERPERSONAL PRACTICES.</b></h5>
        
        <ul>
                <li>
                Articulates ideas, recommendations, and findings clearly and inclusively.
                </li>
                <li>
                Promotes and welcomes feedback from all stakeholders.
                </li>
                <li>
                Adapts positively to change and proactively embraces new challenges.
                </li>
                <li>
                Inspires and motivates team members to achieve common goals.
                </li>
                <li>
                Negotiates and mediaties to resolve conflicts and reach consensus.
                </li>
               
              </ul>
              </div>
      </div>
</div>
</div>
End Practices*/}

              {/*Start Volunteer*/}
              <div className="w3-light-gray w3-margin-top">
                <div className="w3-container w3-padding-large w3-padding-32">
                  <div className="row d-flex justify-content-center align-items-end ">
                    <div className="w3-col m12 flex-column">
                      <div className="w3-container w3-content text-center">
                        <h2>SERVICE TO OTHERS</h2>
                        <hr className="w3-opacity" />
                        <h4>
                          Community service has been my catalyst for personal
                          growth, skill development, and exposure to new
                          experiences. It offers me the chance to explore facets
                          of life I wouldn't have encountered otherwise.
                        </h4>

                        <p>
                          Listed below are some of the programs I have been
                          involved in.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row d-flex justify-content-center align-items-end ">
                    <div className="w3-col m4 flex-column">
                      <ul>
                        <li className="ml-3">
                          <strong style={{ color: "#FF385C" }}>
                            MIRACLE LEAGUE (favorite):
                          </strong>{" "}
                          Assist with organized sports for children & young
                          adults with disabilities.
                        </li>

                        <li className="ml-3">
                          <strong style={{ color: "#FF385C" }}>
                            NATURE CENTER VOLUNTEER:
                          </strong>{" "}
                          Provide care for the animals, monitor health, collect
                          data, and assist with educational programs.
                        </li>
                        <li className="ml-3">
                          <strong style={{ color: "#FF385C" }}>
                            YOUTH CLUB SECRETARTY:
                          </strong>{" "}
                          Maintain website & database, facilitate meetings,
                          coordinate registration, plan events and organize
                          fundraising activities.
                        </li>
                        <li className="ml-3">
                          <strong style={{ color: "#FF385C" }}>
                            PUBLIC SCHOOLS VOLUNTEER:
                          </strong>{" "}
                          Assist with classroom activities, work with & support
                          kids in need, plan & facilitate events.
                        </li>
                      </ul>
                    </div>
                    <div className="w3-col m4 flex-column ">
                      <div>
                        <ul>
                          <li className="ml-3">
                            <strong style={{ color: "#FF385C" }}>
                              UNDER ARMOUR GIVE-BACK:
                            </strong>{" "}
                            Participation includes: rebuilding schools,
                            distributing school supplies, assisting with
                            students & assemblies, and packing & shipping food
                            items to ship overseas.
                          </li>
                          <li className="ml-3">
                            <strong style={{ color: "#FF385C" }}>
                              ABUSED PERSONS PROGRAM (1st-experience):
                            </strong>{" "}
                            Provide a range of services to support those
                            affected by violence.
                          </li>

                          <li className="ml-3">
                            <strong style={{ color: "#FF385C" }}>
                              FOOD PANTRY:
                            </strong>{" "}
                            Distributes food & household goods to those in need.
                          </li>
                          <li className="ml-3">
                            <strong style={{ color: "#FF385C" }}>
                              FARMING 4HUNGER:
                            </strong>{" "}
                            Grows and distributes locally grown produce.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Volunteer*/}
            </div>
          </div>
        </div>

        <div className="w3-content text-center w3-padding-48 w3-margin-bottom w3-padding-small">
          <h2 className="text-black">VIEW MY WORK</h2>
          <hr className="w3-opacity" />
          <h4 className="text-black">
            Take a peek at "My Work"! There's a whole world of changes and
            improvements happening behind the scenes. Thanks in advance for your
            patience!
          </h4>
          <button
            className="w3-button w3-text-light-grey  w3-margin-right rounded mt-2 w3-margin-bottom"
            style={{ backgroundColor: "#FF385C" }}
          >
            <Link
              to='/portfolio'
              className="button text-white"
              onClick={scrollToTop}
            >
              View My Work
            </Link>
          </button>
          <footer className="text-muted py-5 position-fixed bottom-0 start-0 w-100">
            <div className="container">
              <p className="float-end mb-1">
                <a href="#resume" style={{ color: "#FF385C" }}>
                  Back to top
                </a>
              </p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

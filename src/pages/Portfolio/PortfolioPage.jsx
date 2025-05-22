import  { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";
import { Button, Badge, CloseButton } from "react-bootstrap";
import WebComponentsTrans from "../../assets/images/WebComponentsTrans.png";
import ImageList from "../../components/Portfolio/ImageList/ImageList.jsx";
import ImageTitles from "../../components/Portfolio/ImageList/ImageTitles.jsx";
import NutritionTable from "../../components/Portfolio/Tables/NutritionTable.jsx";
import DataTable from "../../components/Portfolio/Tables/DataTable.jsx";
import PaginationTable from "../../components/Portfolio/Tables/PaginationTable.jsx";

function Portfolio() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  // State to manage accordion expansion
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Function to handle accordion toggle
  const handleAccordionToggle = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  const faqs = [
    {
      question: "Alert Components",
      answer:
        "Web alerts are visual components used to convey important messages, notifications, or warnings to users. ",
      link: "#alerts",
    },

    {
      question: "Buttons Components",
      answer:
        "Button provide visual cues to indicate clickable areas and help users navigate through a website or complete tasks",
      link: "#buttons",
    },

    {
      question: "Image List Components",
      answer:
        "Image lists, are gallery grids used to display multiple images in an organized and visually appealing manner.",
      link: "#image-lists",
    },

    {
      question: "Table Components",
      answer:
        "Web tables are used for presenting data such as financial reports, product listings, and comparison charts on websites.",
      link: "#tables",
    },
  ];

  return (
    <div className="portfolio" id="portfolio">
        
        {/**Start INTRO Web Components */}
        <div className="w3-container text-center w3-padding-large w3-padding-48">
          <div className="row d-flex justify-content-center align-items-center w3-padding-large">
            <div className="col-sm-12 col-md-12 col-lg-12 flex-column">
              <div className="container w3-padding-48 w3-margin-top">
                <h1>MY PORTFOLIO <i>'My Work'</i></h1>
                <h4 className="fw-regular">
                  'My Portfolio consists of a wide range of sample elements,
                  images, apps and more. Follow the path to witness my level of
                  understanding in both function and design.'
                </h4>
              </div>
              <hr/>
            </div>
          </div>

          <div className="container" id="web-components">
            <div className="row d-flex justify-content-center align-items-center">
             
              <div className="col-sm-12 col-md-7 col-lg-7 flex-column w3-padding-large">
 <img
                  src={WebComponentsTrans}
                  alt="web-components"
                  style={{ width: "100%" }}
                ></img>
              </div>
              <div className="col-sm-12 col-md-5 col-lg-5 flex-column w3-padding-small">
              <div className="card shadow border w3-padding-large w3-padding-24">
               <div className="">
                <h3>Web Component Menu</h3>
                
                <p style={{fontSize:'14px'}}>
                  Web components offer benefits like code reuse,
                  encapsulation, and interoperability.
                </p>
                </div>
                <style>
                  {`
      .accordion-item {
        border:  1px solid #000000; /* Remove outside border */
        border-bottom: 1px solid #000000; /* Add bottom border */
      }
      .question.py-2 {
        font-size: 2rem !important; /* Adjust font size */
        font-weight: bold;
      }
  
    `}
                </style>


                <Accordion
                  defaultActiveKey="-1"
                  className="components-accordian"
                >
                  {faqs.map((faq, index) => (
                    <Accordion.Item
                      key={index}
                      eventKey={index.toString()}
                      className="accordion-item"
                    >
                      <Accordion.Header
                        className="question py-1 w3-xlarge"
                        onClick={() => handleAccordionToggle(index)}
                        style={{ fontSize: "2rem" }}
                      >
                        {faq.question}
                      </Accordion.Header>
                      <Accordion.Body className="answer">
                        {faq.answer}
                        <div>
                          <a href={faq.link}>
                            <button className="link w3-button bg-black rounded mt-2">
                              Learn More
                            </button>
                          </a>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  ))}
                </Accordion>
              </div>
            </div>
            </div>
          </div>
        </div>
        {/**End INTRO Web Components */}

        {/**Start Alerts */}
        <div className="w3-light-gray" id="alerts">
          <div className="w3-container  text-center text-black ">
            <div className="w3-content w3-padding-32 text-black">
              <div className="row d-flex justify-content-center align-items-center mb-3">
                <div className="col-sm-12 col-md-5 col-lg-5 flex-column w3-padding-large">
                  <h2>Alert Components</h2>
                  <hr />

                  <p className="mb-4">
                    Alert color options are strategically chosen to convey
                    different meanings and priorities.
                  </p>

                  <Alert
                    variant="danger"
                    className="rounded text-center  shadow"
                    style={{ color: "#FF385C" }}
                  >
                    <Alert.Heading>
                      {" "}
                      <h4>THIS IS AN ALERT.</h4>{" "}
                    </Alert.Heading>
                    <hr />
                    <p className="mb-0 w3-hover-opacity w3-margin-bottom">
                      Alerts are designed to be attention-grabbing, often with
                      prominent colors, icons, and text formatting to ensure
                      users notice them.
                    </p>

                    <hr />
                    <p>
                      Color indicates info <b>DANGER</b>.
                    </p>
                  </Alert>
                </div>
                <div className="col-sm-12 col-md-7 col-lg-7 flex-column">
                  <div className="container w3-padding-large">
                    <div className="row justify-content-center align-items-center ">
                      <div className="flex-column col-sm-12 col-md-6 col-lg-6">
                        <p style={{ fontSize: "14px" }}>
                          {" "}
                          Blue, light gray, white, and black are often used to
                          establish a messaging hierarchy, with 'primary' being
                          the most prominent color, indicating the primary
                          action or information.
                        </p>
                      </div>

                      <div className="col-sm-12 col-md-6 col-lg-6">
                        <div
                          style={{ display: "flex", gap: "10px" }}
                          className=" justify-content-center"
                        >
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                            }}
                          >
                            <div
                              style={{
                                width: "35px",
                                height: "35px",
                                borderRadius: "50%",
                                backgroundColor: "#b8daff",
                              }}
                              className="shadow"
                            ></div>
                            <p
                              className="text-primary"
                              style={{ marginTop: "5px", fontSize: "12px" }}
                            >
                              Primary
                            </p>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                            }}
                          >
                            <div
                              style={{
                                width: "35px",
                                height: "35px",
                                borderRadius: "50%",
                                backgroundColor: "#d6d8db",
                              }}
                              className="shadow"
                            ></div>
                            <p
                              className="text-secondary"
                              style={{ marginTop: "5px", fontSize: "12px" }}
                            >
                              Secondary
                            </p>
                          </div>

                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                            }}
                          >
                            <div
                              style={{
                                width: "35px",
                                height: "35px",
                                borderRadius: "50%",
                                backgroundColor: "white",
                              }}
                              className="shadow"
                            ></div>
                            <p style={{ marginTop: "5px", fontSize: "12px" }}>
                              White
                            </p>
                          </div>

                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                            }}
                          >
                            <div
                              style={{
                                width: "35px",
                                height: "35px",
                                borderRadius: "50%",
                                backgroundColor: "black",
                              }}
                              className="shadow"
                            ></div>
                            <p style={{ marginTop: "5px", fontSize: "12px" }}>
                              Black
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <br />

                    <div className="row justify-content-center align-items-center ">
                      <div className="col-sm-12 col-md-6 col-lg-6">
                        <p style={{ fontSize: "14px" }}>
                          {" "}
                          Green, red, and yellow are commonly associated with
                          actions or statuses.
                        </p>
                      </div>
                      <div className="col-sm-12 col-md-6 col-lg-6">
                        <div
                          style={{ display: "flex", gap: "10px" }}
                          className="justify-content-center align-items-center "
                        >
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                            }}
                          >
                            <div
                              style={{
                                width: "35px",
                                height: "35px",
                                borderRadius: "50%",
                                backgroundColor: "#c3e6cb",
                              }}
                              className="shadow"
                            ></div>
                            <p
                              className="text-success"
                              style={{ marginTop: "5px", fontSize: "12px" }}
                            >
                              Success
                            </p>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                            }}
                          >
                            <div
                              style={{
                                width: "35px",
                                height: "35px",
                                borderRadius: "50%",
                                backgroundColor: " #f5c6cb",
                              }}
                              className="shadow"
                            ></div>
                            <p
                              className="text-danger"
                              style={{ marginTop: "5px", fontSize: "12px" }}
                            >
                              Danger
                            </p>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                            }}
                          >
                            <div
                              style={{
                                width: "35px",
                                height: "35px",
                                borderRadius: "50%",
                                backgroundColor: "#ffeeba",
                              }}
                              className="shadow"
                            ></div>
                            <p
                              className="text-warning"
                              style={{ marginTop: "5px", fontSize: "12px" }}
                            >
                              Warning
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <br />
                    <div className="row justify-content-center align-items-center ">
                      <div className="col-sm-12 col-md-6 col-lg-6">
                        <p style={{ fontSize: "14px" }}>
                          {" "}
                          Lighter shades such as light and teal are frequently
                          employed to inform, direct, or notify users without
                          necessarily signaling urgency or importance.
                        </p>
                      </div>
                      <div className="col-sm-12 col-md-6 col-lg-6">
                        <div
                          style={{ display: "flex", gap: "10px" }}
                          className="justify-content-center align-items-center "
                        >
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                            }}
                          >
                            <div
                              style={{
                                width: "35px",
                                height: "35px",
                                borderRadius: "50%",
                                backgroundColor: "#bee5eb",
                              }}
                              className="shadow"
                            ></div>
                            <p
                              className="text-info"
                              style={{ marginTop: "5px", fontSize: "12px" }}
                            >
                              Info
                            </p>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                            }}
                          >
                            <div
                              style={{
                                width: "35px",
                                height: "35px",
                                borderRadius: "50%",
                                backgroundColor: "#f8f9fa",
                              }}
                              className="shadow"
                            ></div>
                            <p style={{ marginTop: "5px", fontSize: "12px" }}>
                              Light
                            </p>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                            }}
                          >
                            <div
                              style={{
                                width: "35px",
                                height: "35px",
                                borderRadius: "50%",
                                backgroundColor: "#495057",
                              }}
                              className="shadow"
                            ></div>
                            <p
                              className="text-dark"
                              style={{ marginTop: "5px", fontSize: "12px" }}
                            >
                              Dark
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/**End Alerts */}

        {/**Start Buttons section*/}
        <div className="w3-padding-large" id="buttons">
          <div className="w3-container w3-content text-center w3-padding-32 text-black">
            <h1 className="text-center">Button Components</h1>
            <hr />

            <h4 className="text-center fw-lighter mb-4">
              Well-designed web buttons boost engagement, streamline navigation,
              and prompt user actions, creating a more intuitive and compelling
              user experience.
            </h4>

            <p className="mt-3 text-center fw-lighter">
              <b> Button variations displayed include:</b> <br />
              size, color, outline, solid, shape, icon elements and shadowing to
              give the appearance the element is floating.{" "}
            </p>
          </div>
        </div>

        <div className="w3-container w3-content text-center">
          {/**Start buttons row*/}
          <div className="row d-flex justify-content-center align-items-center ">
            {/**Start Intro to buttons col*/}
            <div className="w3-col l6 w3-padding-large flex-column justify-content-center align-items-center">
              <div
                className="w3-card w3-padding-32 w3-padding-large bg-danger-subtle border mb-1 d-flex justify-content-center align-items-center"
                style={{
                  backgroundColor: "white",
                  color: "#FF385C",
                  height: "20rem",
                }}
              >
                <div className="text-center">
                  <h3>
                    <b>ARE BUTTONS IMPORTANT?</b>
                  </h3>
                  <p style={{ fontSize: "18px" }}>
                    'Explore these statistics, which suggest that buttons are
                    not only integral to web development but also play a pivotal
                    role in driving business growth.'
                  </p>
                </div>
              </div>
            </div>
            {/**end Intro to buttons */}
            {/**start form submission buttons */}
            <div className="w3-col l6 w3-padding-large flex-column justify-content-center align-items-center">
              <div
                className="w3-card w3-padding-32 w3-padding-large bg-danger-subtle border mb-1 d-flex justify-content-center align-items-center"
                style={{ height: "20rem" }}
              >
                <div className="text-center">
                  <h4 style={{ color: "#FF385C", fontWeight: "bold" }}>
                    SUBMISSION BUTTONS
                  </h4>
                  <hr />
                  <p style={{ fontSize: "13.5px" }}>
                    Data from Formstack indicates that optimizing form design,
                    including the placement and design of submission buttons,
                    can increase form completion rates by up to 120%.
                  </p>
                  <div className="w3-padding-8 mt-3">
                    <Button
                      variant="black"
                      size="sm"
                      className="rounded-circle shadow w3-margin-right"
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                      }}
                    >
                      <i className="fa fa-download w3-large text-white"></i>
                    </Button>
                    <Button
                      size="sm"
                      className="btn-black w3-hover-opacity-off rounded-circle w3-margin-right w3-gray"
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                      }}
                    >
                      <i className="fa fa-paper-plane w3-large"></i>
                    </Button>
                    <Button
                      variant="white"
                      size="sm"
                      className=" rounded-circle"
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        backgroundColor: "white",
                      }}
                    >
                      <i className="fa fa-upload w3-large"></i>
                    </Button>
                  </div>
                </div>
              </div>
              {/**end form submission buttons */}
            </div>
          </div>

          <div className="row d-flex justify-content-center align-items-center ">
            {/**start cta */}
            <div className="w3-col l6 w3-padding-large flex-column justify-content-center align-items-center">
              <div
                className="w3-card w3-padding-32 w3-padding-large bg-danger-subtle border mb-1 d-flex justify-content-center align-items-center"
                style={{ height: "20rem" }}
              >
                <div className="text-center">
                  <h4 style={{ color: "#FF385C", fontWeight: "bold" }}>
                    CALL-TO-ACTION
                  </h4>
                  <hr />
                  <p style={{ fontSize: "13px" }}>
                    {" "}
                    According to HubSpot, sites with clear and compelling CTAs
                    have a 47% higher conversion rate than those without.
                    SmallBizGenius states personalized CTAs increase conversion
                    rates up to 202%.
                  </p>
                  <div className="w3-padding-8 mt-3">
                    <Button
                      variant="outline-dark"
                      size="lg"
                      className="mb-2 mx-1 shadow"
                      style={{
                        width: "100%",
                        borderRadius: "50px",
                        backgroundColor: "white",
                      }}
                    >
                      Learn More
                    </Button>{" "}
                  </div>
                  <div>
                    <Button
                      variant="dark"
                      size="sm"
                      className="my-1 mx-1 shadow"
                      style={{ borderRadius: "50px" }}
                    >
                      Start Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            {/**end cta */}
            {/**start nav buttons */}
            <div className="w3-col l6 w3-padding-large flex-column justify-content-center align-items-center">
              <div
                className="w3-card w3-light-gray w3-padding-32 w3-padding-large bg-danger-subtle border mb-1 d-flex justify-content-center align-items-center"
                style={{ height: "20rem" }}
              >
                <div className="text-center w3-padding-small">
                  <h4
                    className="text-center mb-3"
                    style={{ color: "#FF385C", fontWeight: "bold" }}
                  >
                    NAVIGATION BUTTONS
                  </h4>
                  <hr />
                  <p style={{ fontSize: "13.5px" }}>
                    NN Group suggests clear and consistent navigation can boost
                    usability by up to 50%. A study by Forrester revealed that
                    improving website navigation can lead to a 10% increase in
                    website conversions.
                  </p>
                  <div className="w3-padding-8 mt-3">
                    <Button
                      variant="black"
                      size="sm"
                      className="rounded-circle shadow w3-margin-right"
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                      }}
                    >
                      <i className="fa fa-home w3-large text-white"></i>
                    </Button>
                    <Button
                      size="sm"
                      className="w3-hover-opacity-off rounded-circle w3-margin-right w3-gray"
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                      }}
                    >
                      <i className="fa fa-user w3-large"></i>
                    </Button>

                    <Button
                      variant="white"
                      size="sm"
                      className="w3-hover-opacity-off rounded-circle w3-margin-right"
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                      }}
                    >
                      <i className="fa fa-shopping-cart w3-large"></i>
                    </Button>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
            {/**end nav buttons */}
          </div>

          <div className="row d-flex justify-content-center align-items-center ">
            <div className="w3-col l12 w3-padding-large flex-column justify-content-center align-items-center">
              <div className="w3-card bg-danger-subtle py-3 border mb-1">
                <div className="container text-center w3-padding-large align-items-center">
                  <p style={{ color: "#FF385C", fontWeight: "bold" }}>
                    <i className="fa fa-info-circle w3-large text-black"></i>{" "}
                    Additional Web Buttons.
                  </p>
                  <Button
                    variant="black"
                    size="sm"
                    className="rounded shadow"
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "40%",
                    }}
                  >
                    <i className="fa fa-square text-white"></i>
                  </Button>

                  <CloseButton className="mx-1 w3-padding-large bg-white shadow border border-black " />
                  <Button variant="black" className="w3-padding-large">
                    Profile <Badge bg="white text-black"> 9</Badge>
                    <span className="visually-hidden">unread messages</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <br />

          <br />
        </div>
        {/**End Buttons */}

        {/**Start Image lists*/}
        <div className="w3-light-gray" id="image-lists">
          <div className="w3-container w3-padding-top-32">
            <div className="w3-container w3-padding-large text-center">
              <h1 className="text-center w3-margin-bottom">Image Lists</h1>
              <hr />
              <h4>
                Image lists, also known as galleries or grids, are a collection
                of images arranged in a structured format on a webpage. Image
                lists can be presented in various layouts, such as grids,
                masonry, or carousel styles.{" "}
              </h4>
              <p>
                Check out the following examples displayed for greater
                understanding!
              </p>
            </div>
            <div className="row d-flex justify-content-center align-items-center w3-padding-large my-3">
              <div className="col-sm-12 col-md-7 col-lg-7 d-flex flex-column justify-content-center align-items-center">
                <ImageList />
              </div>
              <div className="col-sm-12 col-md-5 col-lg-5 d-flex flex-column justify-content-center align-items-center">
                <div className="w3-padding-small text-center ">
                  <h4 className=" w3-margin-bottom mt-4">MASONRY GRID</h4>
                  <hr />
                  <p>
                    Layout provides versatility for image sizes. Perfect for
                    showcasing portfolios, photo galleries, and other visual
                    content that doesn't conform to 'one-size fits all'. Images
                    display a simple heading and can be clickable to increase in
                    size or navigate to a defined section of choice.
                  </p>
                </div>
              </div>
            </div>

            <div className="row d-flex justify-content-center align-items-center w3-padding-large my-2">
              <div className="col-sm-12 col-md-7 col-lg-7 d-flex flex-column justify-content-center align-items-center">
                <ImageTitles />
              </div>
              <div className="col-sm-12 col-md-5 col-lg-5 d-flex flex-column justify-content-center align-items-center">
                <div className="w3-padding-small text-center ">
                  <h2 className="">Image List with Overlay</h2>
                  <hr />
                  <p>
                    Each image has accompanying text, with title and artist
                    handle. Interactions can be provided by clicking the info
                    icon to display a description or allow actions like zooming,
                    linking to other pages, or triggering animations.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/**End Image lists*/}

        {/**Start Tables*/}
        {/**Start responsive tables*/}

        <div
          className="w3-container w3-content w3-padding-top-32"
          id="tables"
        >
          <div className="mb-5">
            <h1 className="text-center text-black w3-margin-bottom">Tables</h1>
            <p className="text-center">
              Tables are structured grids used to present data in rows and
              columns. They're commonly used for displaying tabular data, such
              as product listings, pricing tables, or data summaries.
            </p>
          </div>
          <NutritionTable />
          <DataTable />
          <PaginationTable />
        </div>

        {/**End responsive tables*/}
        {/**End Tables*/}
  

      {/**Start FootersS */}
      <div className="w3-container w3-padding-32">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="flex-column col-sm-12 col-md-12 col-lg-12 justify-content-center align-items-center">
            <div className="container w3-white text-center w3-padding-large w3-padding-small">
              <h2 className="w3-text-black">
                <b className="fw-bold text-black">FORM COMPONENTS</b>
              </h2>
              <hr className="w3-opacity" />
              <h4 className="text-black">
                With their adaptability and efficiency, forms serve as
                indispensable assets in modern digital environments, catering to
                a wide range of needs and requirements.
              </h4>
              <br />
              <p>
                {" "}
                <i>
                  "Sample forms are under construction. View with the
                  understanding they a work in progress. Thanks for your
                  patience."
                </i>
              </p>

              <Link
                to="/forms"
                className="button text-white"
                onClick={scrollToTop}
              >
                <button
                  className="w3-button w3-text-light-grey  w3-margin-right rounded mt-2 w3-margin-bottom"
                  style={{ backgroundColor: "#FF385C" }}
                >
                  View Form Components
                </button>
              </Link>
            </div>
          </div>
        </div>
        <footer className="text-muted position-fixed bottom-0 start-0 w-100">
          <div className="container">
            <p className="float-end mb-1">
              <a href="#portfolio" style={{ color: "#FF385C" }}>
                Back to top
              </a>
            </p>
          </div>
        </footer>
      </div>
      {/**End FooterS */}
    </div>
  );
}

export default Portfolio;

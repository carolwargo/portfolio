import React from "react";
import { Container} from "react-bootstrap";
//import Events from "../About/Events.jsx";

export default function Volunteer() {
  return (
    <div className="border-top p-5 bg-black text-white" id="#community-service">
      <Container
        style={{
          fontFamily: "bellota text",
      
        }}
      >
        <h2 className="text-decoration-underline">
          <strong>GIVING BACK & GAINING MORE</strong>
        </h2>
      
        <p>
          <strong>EVERYTHING NEW & EXCITING</strong> in my life has been a
          direct result of the volunteer opportunities presented to me...{" "}
          <br></br> <strong>INCLUDING MY CAREER PATH.</strong>."
        </p>
      </Container>
      <br></br>
      <Container
        
        style={{
          borderRadius: "10px",
          fontFamily: "bellota text",
        }}
      >
        <div>
          <h5
            style={{
              textAlign: "start",
              fontWeight: "bold",
            }}
          >
            {" "}
            The Signifigance in My Life:
          </h5>

          <p>
            "Volunteer work has and will consistently hold a central place in my
            household, serving as a facet of responsibility and an integral part
            of my identity. Beyond its apparent merits, I personally consider
            community service to be the single most powerful platform for my
            personal growth, skill development, and most important EXPOSURE- The
            opportunity to explore aspects of life that I may not have
            encountered otherwise. "
          </p>
<br></br>
          
          <h5
            style={{
         
              fontWeight: "bold",
            }}
          >
            {" "}
            Personal & Interpersonal Gains:
          </h5>

          <p
            style={{
              fontFamily: "bellota text",
            }}
          >
            Volunteer work has expanded my perspective and taught me the
            importance of empathy and social responsibility. It has strengthened
            my ability to collaborate with diverse groups of people, understand
            various perspectives, and adapt to different working environments.
            Often given few resources to accomplish massive tasks; resilience,
            resourcefulness and creativity are key to success.{" "}
          </p>
          <br></br>
          <h5
            style={{
          
              fontWeight: "bold",
            }}
          >
            {" "}
            A Catalyst For Professional Development:
          </h5>
          <p>
            In addition to personal and interpersonal skills, volunteer work has
            also exposed me to a wide range of industries and fields. This
            exposure has deepened my understanding of various sectors, broadened
            my knowledge base, and allowed me to explore potential career paths.
            It has been a source of inspiration, a catalyst for professional
            development, and is directly attributed to leading me to discover my
            passion for the digital world.
          </p>
     
          <div>
        
          </div>
        </div>
      </Container>
    </div>
  );
}

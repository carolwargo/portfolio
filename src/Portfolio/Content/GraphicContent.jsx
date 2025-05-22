import React from "react";
import Sports from "../../Carousel/Sports";
import LogoBrand from "../../Carousel/LogoBrand/LogoBrand";
import { Row, Col } from "react-bootstrap";

export default function GraphicDesigns() {
  return (
    <div >
      <Row
       className="g-4"
       style={{
         display: "flex",
         alignItems: "center",
         justifyContent: "center",
         borderRadius: "5px",
       }}
     >
        <Col md={5}>
      <h4
      style={{fontFamily:'sans-serif'}}
      >
        <strong>EXPLORE...</strong>
      </h4>
      <p
        className="graphic-design "
        style={{ color: "white", fontFamily: "bellota text" }}
      >
        Explore some of my 'original' Graphic Design pieces for a glimpse
        into my creative world. From web design to branding, each project
        completed is a testament to my dedication and passion for the
        craft. Take a moment to immerse yourself in the details and
        discover the stories behind each creation."
      </p>
      <ul className="pt-3">
        <li>
          Renderings are all custom design items, that originate from a
          blank canvas.
        </li>
        <li>
          No templates are used, all designs are created from scratch.
        </li>
        <li>
        Not all of my "graphic design" projects have been added. Check back often to see new additions!
        </li>
      </ul>
</Col>
<Col>
<Sports />
</Col>
      </Row>
      <br></br>
      <br></br>
     <Row>
     <Col>
     <LogoBrand/>
     </Col>
        <Col md={5}>
            <h4
            style={{fontFamily:'sans-serif', marginTop:'2rem'}}
            >
               <strong>BRANDING SAMPLE WORK</strong>
            </h4>
            <h6
              className="graphic-design "
              style={{ color: "white", fontFamily: "bellota text" }}
            >
            Re-Branding & New Apparel Collection  
            </h6>
            <br></br>
        
            <p
              className="graphic-design "
              style={{ color: "white", fontFamily: "bellota text" }}
            >
              <b><i>"Here is a bit of the design work I am currently working on for a client. KEEP IN MIND- Work is still in-process!"" </i></b>  <br></br>
              </p>
              <ul >
              Long Term plan: 
                <li>
                Revamp the brand 
                </li>
                <li>
                Create a Branding Book 
                </li>
                <li>
                Create Apparel-"Collections" based on events held at the farm, venue & storefront, as well as time of year- The gold is the start of the Christmas Collection.
                  </li>
              </ul>
      </Col>
          </Row>
    </div>
  );
}

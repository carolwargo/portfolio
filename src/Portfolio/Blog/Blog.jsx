import React from "react";
import WomanReading from "../../../assets/images/WomanReading.jpg";
import Business from "../../../assets/images/About/Business.png";
import PostsShare from "./PostsShare";
import Posts from "./Posts";
import { Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Blog = () => {
  return (
    <div > 
        <div style={{ maxWidth: "1400px" }}>
        
          <div className="w3-row">
            {/*card start for bio, popular posts & tags*/}
            <div className="w3-col l4 w3-padding">
          
              {/*card start for bio*/}
              <div className="w3-container">
               
                {/*card-image-start for bio*/}
                <img
                  src={WomanReading}
                  alt="blog-profile"
                  style={{ width: "100%" }}
                ></img>{" "}
                {/*card-image-start for bio*/}
               
                  {" "}
                  {/*card-container-start for bio*/}
                  <br></br>
                  <h5 className="mt-3" style={{ fontFamily: "sans-serif" }}>
                    <b>Your Name</b>
                  </h5>
                  <p className="mb-3">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Impedit vel harum odio nihil maxime dolorem explicabo
                    blanditiis, optio eaque quasi vero quae nostrum voluptates.
                    Non natus minus omnis ipsa in!{" "}
                  </p>
                  <br></br>
                </div>

              <hr />
                {" "}
                {/*card start for all popular posts elements*/}
                <div className="w3-container">
                  {/*container start header popular posts */}
                  <h4>Popular Posts</h4>
                </div>
                {/*container end header popular posts */}
                <ul className="w3-ul w3-hoverable w3-white">
                  {/*list start popular posts */}
                  <li className="w3-padding-16 ">
                    {" "}
                    {/*list-item-4 start popular posts */}
                    <img
                      src={Business}
                      alt="Business"
                      className="w3-left w3-margin-right"
                      style={{ width: "15%" }}
                    ></img>
                    <span className="w3-large">Title</span>
                    <br />
                    <span>Sed mattis nunc</span>
                  </li>
                  {/*list-item-1 end popular posts */}
                  <li className="w3-padding-16 ">
                    {" "}
                    {/*list-item-4 start popular posts */}
                    <img
                      src={Business}
                      alt="Business"
                      className="w3-left w3-margin-right"
                      style={{ width: "15%" }}
                    ></img>
                    <span className="w3-large">Title</span>
                    <br />
                    <span>Sed mattis nunc</span>
                  </li>
                  {/*list-item-2 end popular posts */}
                  <li className="w3-padding-16">
                    {/*list-item-3 start popular posts */}
                    <img
                      src={Business}
                      alt="Business"
                      className="w3-left w3-margin-right"
                      style={{ width: "15%" }}
                    ></img>
                    <span className="w3-large">Title</span>
                    <br></br>
                    <span>Sed mattis nunc</span>
                  </li>
                  {/*list-item-3 end popular posts */}
                  <li className="w3-padding-16 ">
                    {" "}
                    {/*list-item-4 start popular posts */}
                    <img
                      src={Business}
                      alt="Business"
                      className="w3-left w3-margin-right"
                      style={{ width: "15%" }}
                    ></img>
                    <span className="w3-large">Title</span>
                    <br />
                    <span>Sed mattis nunc</span>
                  </li>
                  {/*list-item-4 end popular posts */}
                </ul>
                {/*list end popular posts */}
         
              {/*card end for all popular posts elements*/}
              <hr />
              <div className="w3-container">
                {" "}
             
                  {/*container start for tags Header*/}
                  <h4>Tags</h4>
                </div>{" "}
                {/*container end for tags Header*/}
                <div className="w3-container w3-white">
                  {" "}
                  {/*container start for tags*/}
                  <p>
                    <span className="w3-tag bg-black w3-margin-bottom">
                      Travel
                    </span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                      New York
                    </span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                      London
                    </span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                      IKEA
                    </span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                      NORWAY
                    </span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                      DIY
                    </span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                      Ideas
                    </span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                      Baby
                    </span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                      Family
                    </span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                      News
                    </span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                      Clothing
                    </span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                      Shopping
                    </span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                      Sports
                    </span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                      Games
                    </span>
                  </p>
              </div>
            </div>
            <div className="w3-col l8 s12 w3-padding">
              <Posts />
              <PostsShare />
            </div>
            {/*col end for posts iteration */}   
          </div>
          
          {/*row end for the whole page with exception of header & footer */}
        </div>
        <br />
        <div className="w3-container d-flex w3-white w3-padding-24 w3-margin-top justify-content-around" >
  {/*container start for stats*/}
  <Alert variant="info" className="w3-margin-top  w3-padding-16">
    <p style={{ fontSize: "1.5rem" }}>
      <b className="w3-margin-left"> DID YOU KNOW ?</b>
    </p>
    <ul className="text-left">
      <li>
        Social share buttons increase sharing by 700%. <span style={{fontSize:'12px'}}>(Source:
        ShareThis)</span>
      </li>
      <li>
      Content shared on social media content generates 8x more engagement than other channels.
      <span style={{fontSize:'12px'}}> (Source: QuickSprout)</span>
      </li>
      <li>
        Articles with share buttons get 7 times more mentions
        than those without. <span style={{fontSize:'12px'}}> (Source: Buffer)</span>
      </li>
      <li>
        Tweets with share buttons get 2.5 times more clicks than
        those without. <span style={{fontSize:'12px'}}> (Source: HubSpot)</span>
      </li>
      <li>
      Share Buttons should be prominently displayed near the
      content and be mobile friendly. <span style={{fontSize:'12px'}}></span>
      </li>
    </ul>
  </Alert>
</div>
    </div>
  );
};

export default Blog;

import React from "react";
import moment from "moment";
import YogaSet from "../../../assets/images/YogaStory/YogaSet.png";
import { FaTwitter, FaFacebook, FaPinterest, FaGithub } from "react-icons/fa";
import {
  TwitterShareButton,
  FacebookShareButton,
  PinterestShareButton,
} from "react-share";
import "bootstrap/dist/css/bootstrap.min.css";

const Posts = () => {
  const blogPosts = [
    {
      id: '1',
      title: "Social Share Buttons",
      titledescription: "Style Option #1",
      timestamp: moment().toISOString(), // Current date and time
      content: `Social share buttons allow users to easily share content 
      with their social networks. These buttons typically appear 
      alongside content such as articles, blog posts, images, or 
      videos, and provide users with a quick way to share that content 
      with their friends, followers, or connections on various social 
      media platforms.`,
      imageUrl: YogaSet,
      postURL: "/full-posts#1",
    },
  ];

  return (
    <div style={{fontSize:'11.5px'}} >
    {" "}
    {/*col start for all posts */}
    {blogPosts.map((post) => (
      <div key={post.id} className="w3-container-4 mt-3 bg-black">
        <img
          src={post.imageUrl}
          alt="blog-post"
          style={{ width: "100%" }}
        />

        <div className="w3-container">
          <br></br>
          <h4>
             Title: {""} <i><b>{post.title}</b> </i>
          </h4>
   
          <p>
           Post Description: {""} {post.titledescription}
           <br />
            <span className="w3-opacity">
              Posted on:{" "}
              {moment(post.timestamp).format(
                "MMMM Do YYYY, h:mm:ss a"
              )}
            </span>
          </p>
        </div>

        {/* start entries container content container*/}
        <div className="w3-container">
          <p>{post.content}</p>
       
          {/* start entries container content container ROW*/}
       


          <div className="row d-flex border-top">{/* Add bg-black class here */}
    <br></br>
    <div className="col-12">
        <div className="w3-container pb-3 w3-margin-bottom">
          <br />
            <h6>
              <b> <u>SHARE THIS POST</u></b> 
            </h6>

            <div className="mt-3">
      <span className="mx-1">
        <TwitterShareButton url={window.location.href} title={post.title}>
          <div className="btn btn-xs" style={{ backgroundColor: "white", padding: "5px", borderRadius: "50%" }}>
            <FaTwitter style={{ color: "black", fontSize: "16px" }} />
          </div>
        </TwitterShareButton>{" "}
        {/* end Twitter Share Button */}
      </span>
      <span className="mx-1">
        {/* start Facebook Share Button */}
        <FacebookShareButton url={window.location.href} quote={post.title}>
          <div className="btn btn-xs" style={{ backgroundColor: "#007bff", padding: "5px", borderRadius: "50%" }}>
            <FaFacebook style={{ color: "white", fontSize: "16px" }} />
          </div>
        </FacebookShareButton>{" "}
        {/*end Facebook Share Button */}
      </span>
      <span className="mx-1">
        {/* start Pinterest Share Button */}
        <PinterestShareButton url={window.location.href} media={post.imageUrl} description={post.title}>
          <div className="btn btn-xs" style={{ backgroundColor: "red", padding: "5px", borderRadius: "50%" }}>
            <FaPinterest style={{ color: "white", fontSize: "16px" }} />
          </div>
        </PinterestShareButton>{" "}
        {/* end Pinterest Share Button */}
      </span>
      <span className="mx-1">
        {/* start Github Button */}
        <button className="btn btn-xs" style={{ backgroundColor: "#800080", padding: "5px", borderRadius: "50%" }}>
          <FaGithub style={{ color: "white", fontSize: "16px" }} />
        </button>
      </span>
    </div>

    </div>
</div>
          </div>
          </div>
        {/* end entries container content container*/}
      </div>
    ))}
       
              {/*col end for posts iteration */}
           
    </div>
  );
};

export default Posts;

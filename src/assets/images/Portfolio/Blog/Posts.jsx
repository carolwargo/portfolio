import React from "react";
import moment from "moment"; // Don't forget to import moment library
import YogaSet from "../../../assets/images/YogaStory/YogaSet.png";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Posts = () => {
  // Ensure correct structure for posts array
  const blogPosts = [
    {
        id: 2,
        title: "READ MORE BUTTON",
        titledescription: "Style Option #2",
        timestamp: moment().toISOString(), // Current date and time
        content:
        "A blog page on a blog site is a dedicated section or webpage where the blog's articles or posts are displayed in a chronological order, typically with the most recent posts appearing at the top. Here's a breakdown of the key components and features commonly found on a blog page:",
      imageUrl: YogaSet,
        comments: 5,
      },
  ];

  return (
    <div  className="w3-card bg-black shadow" style={{fontSize:'11.5px'}}>
    {/*col start for all posts */}
    {blogPosts.map((post) => (
      <div key={post.id} >
        <img
          src={post.imageUrl}
          alt="blog-post"
          style={{ width: "100%" }}
        />

        <div className="w3-container">
          <br></br>
          <h4>
            <b>
              <i>{post.title}</i>
            </b>
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
  {/* start entries card content container*/}
  <div className="w3-container">
                    <p>{post.content}</p>
                    {/* start entries card content container ROW*/}
                   <b><hr /></b> 
                    <div className="w3-row">
                      {/* start entries card content container COL BUT*/}
                      <div className="w3-col py-4 m12 s12">
               
                  <Button
                    href={post.postURL} 
                    className="w3-padding-small w3-white w3-border"
                  >
                    <b>READ MORE »</b>
                  </Button>
   
                      </div>
                      {/* start entries card content container COL COMMENTS*/}
                    </div>
                    {/* end entries card content container ROW*/}
                  </div>
                  {/* end entries card content container*/}
                </div>
              ))}
       
       
              {/*col end for posts iteration */}
           
    </div>
  );
};

export default Posts;

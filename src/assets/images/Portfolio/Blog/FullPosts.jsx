import React from "react";
import moment from "moment"; // Don't forget to import moment library
import YogaSet from "../../../assets/images/YogaStory/YogaSet.png";

const FullPosts = () => {
  // Ensure correct structure for posts array
  const blogPosts = [
    {
      id: '1',
      title: "Unlocking Business Growth with HubSpot: A Comprehensive Guide",
      timestamp: moment().toISOString(), // Current date and time
      content: `In today's digital age, managing customer relationships, organizing marketing efforts, and streamlining sales processes are essential components of any successful business strategy. Fortunately, platforms like HubSpot have revolutionized the way businesses approach these tasks, offering an all-in-one solution that simplifies complex processes and drives growth.
      
      What is HubSpot?
      HubSpot is a powerful inbound marketing, sales, and customer service software designed to help businesses attract visitors, convert leads, and close customers. It offers a suite of tools and features tailored to various aspects of marketing, sales, and customer service, providing businesses with the capabilities they need to thrive in the digital landscape.
      
      How Does HubSpot Work?
      HubSpot operates on the principles of inbound marketing, which focuses on attracting and engaging customers through valuable content and experiences tailored to their needs. Here's how HubSpot works across its key functionalities:
      
      Marketing Hub: HubSpot's Marketing Hub empowers businesses to attract, engage, and delight customers through personalized marketing campaigns. It includes tools for email marketing, social media management, content creation, SEO optimization, and more, enabling businesses to reach their target audience effectively.
      
      Sales Hub: The Sales Hub equips sales teams with the tools they need to manage and nurture leads, track interactions, and close deals efficiently. Features like contact management, email tracking, pipeline management, and sales automation streamline the sales process, enabling teams to focus on building relationships and driving revenue.
      
      Service Hub: HubSpot's Service Hub enables businesses to deliver exceptional customer service and support experiences. From ticketing systems and knowledge bases to customer feedback tools and chatbots, the Service Hub helps businesses resolve customer issues quickly and effectively, fostering customer satisfaction and loyalty.
      
      The Importance of Using HubSpot
      Using HubSpot offers several key benefits that contribute to the overall success and growth of businesses:
      
      Centralized Platform: HubSpot provides a centralized platform for all marketing, sales, and customer service activities, eliminating the need for disparate systems and allowing for seamless collaboration across teams.
      
      Data-Driven Insights: With robust analytics and reporting features, HubSpot provides valuable insights into campaign performance, lead behavior, sales metrics, and customer satisfaction, empowering businesses to make informed decisions and optimize their strategies.
      
      Automation and Efficiency: HubSpot's automation capabilities streamline repetitive tasks, such as email sequences, lead nurturing, and data entry, freeing up valuable time for teams to focus on high-impact activities and strategic initiatives.
      
      Personalization and Engagement: By leveraging HubSpot's personalization tools and CRM data, businesses can deliver tailored experiences to prospects and customers, increasing engagement, loyalty, and conversions.
      
      Scalability and Flexibility: Whether you're a small startup or a large enterprise, HubSpot offers scalable solutions that can adapt to your business needs and grow with your organization over time.
      
      Benefits vs. Cost
      While there is a cost associated with using HubSpot, the benefits far outweigh the investment for many businesses:
      
      Increased Efficiency: HubSpot's automation and productivity features can save businesses significant time and resources, resulting in improved efficiency and cost savings in the long run.
      
      Higher ROI: By optimizing marketing, sales, and service processes, businesses can drive higher conversion rates, customer retention, and revenue, ultimately leading to a positive return on investment.
      
      Better Customer Experience: HubSpot's focus on personalized, customer-centric experiences can enhance customer satisfaction and loyalty, leading to long-term relationships and repeat business.
      
      Competitive Advantage: In today's competitive landscape, businesses that leverage tools like HubSpot gain a competitive edge by staying ahead of the curve, adapting to changing market dynamics, and delivering exceptional value to their customers.
      
      In conclusion, HubSpot offers a comprehensive solution for businesses looking to scale their operations, improve their marketing and sales efforts, and deliver outstanding customer experiences. While there is a cost associated with using HubSpot, the benefits it provides in terms of efficiency, ROI, customer satisfaction, and competitive advantage make it a worthwhile investment for businesses of all sizes.`,
      imageUrl: YogaSet,
    },

    {
        id: 2,
        title: "Blog Post 1",
        timestamp: moment().toISOString(), // Current date and time
        content:
        "Lorem unde omnis iste natus error sit Sed ut perspiciatis unde omnis Lorem unde omnis iste natus error sit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem Lorem unde omnis iste natus error sit. Sed ut perspiciatis unde omnis...",
      imageUrl: YogaSet,
        comments: 5,
      },
      {
        id: 3,
        title: "Blog Post 2",
        timestamp: moment().toISOString(), // Current date and time
        content:
        "Lorem unde omnis iste natus error sit Sed ut perspiciatis unde omnis Lorem unde omnis iste natus error sit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem Lorem unde omnis iste natus error sit. Sed ut perspiciatis unde omnis...",
       imageUrl: YogaSet,
        comments: 10,
      },

  ];

  return (
    <div>
     
              {/*col start for all posts */}
              {blogPosts.map((post) => (
                <div key={post.id} className="w3-container w3-white">
                  <img
                    src={post.imageUrl}
                    alt="blog-post"
                    style={{ width: "100%" }}
                  />

                

                  <div className="w3-container m-2">  
              
                    <br></br>
                    <h3>
                      <b>
                        <i>{post.title}</i>
                      </b>
                    </h3>
                    <p>
                      Title description,{" "}
                      <span className="w3-opacity">
                        Posted on:{" "}
                        {moment(post.timestamp).format(
                          "MMMM Do YYYY, h:mm:ss a"
                        )}
                      </span>
                    </p>
                  </div>

                  {/* end entries containeritle & title description */}

                  {/* start entries containerontent container*/}
                  <div className="w3-container ">
                    <p>{post.content}</p>
                    {/* start entries containerontent container ROW*/}
                    <div className="w3-row">
                      {/* start entries containerontent container COL BUT*/}
                      <div className="w3-col m12 s12">
                       
                          <button className="w3-button p-4 w3-white w3-border">
                            <b>READ MORE »</b>
                          </button>
                       
                      </div>
                      {/* start entries containerontent container COL COMMENTS*/}
                    </div>
                    {/* end entries containerontent container ROW*/}
                  </div>
                  {/* end entries containerontent container*/}
                </div>
              ))}
              {/*col end for posts iteration */}

    </div>
  );
};

export default FullPosts;

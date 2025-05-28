import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { useMediaQuery, useTheme } from "@mui/material";

// Image imports (adjusted paths)
import CarBW from "../assets/images/Hawaii/CarBW.png";
import Sunset from "../assets/images/Hawaii/Sunset.png";
import Surf from "../assets/images/Hawaii/Surf.png";
import Concert from "../assets/images/Hybiscus550/Concert.png";
import Bed from "../assets/images/Hybiscus550/Bed.png";
import Street from "../assets/images/Hybiscus550/Street.png";
import SurfGuy from "../assets/images/Hybiscus450/SurfGuy.png";
import GirlBoat from "../assets/images/Hybiscus450/GirlBoat.png";
import Swing from "../assets/images/Hybiscus450/Swing.png";

export default function TitlebarBelowMasonryImageList() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // < 600px
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md")); // 600px–900px
  const isDesktop = useMediaQuery(theme.breakpoints.up("md")); // ≥ 900px

  const getCols = () => {
    if (isMobile) return 1; // 1 column on mobile
    if (isTablet) return 2; // 2 columns on tablet
    return 3; // 3 columns on desktop
  };

  const getGap = () => {
    if (isMobile) return 4; // Smaller gap on mobile
    if (isTablet) return 6;
    return 8; // Larger gap on desktop
  };

  return (
    <Box
      sx={{
        mt: { xs: 5, sm: 5, md: 5 }, // Responsive margin 
        py: { xs: 3, sm: 4, md: 5 }, // Responsive padding
        px: { xs: 2, sm: 3, md: 4 },
        bgcolor: "transparent", // Let background show through
        fontFamily: "Raleway, sans-serif",
        background: isMobile
          ? "linear-gradient(180deg, #830083 0%, #f5e8c7 100%)" // Simplified for mobile
          : `url('/assets/hibiscus-pattern.png') center center / 200px repeat, linear-gradient(180deg, #1e3a8a 0%, #f5e8c7 100%)`, // Pattern + gradient
        backgroundAttachment: isMobile ? "scroll" : "fixed", // Disable parallax on mobile
        backgroundSize: isMobile ? "cover" : "200px, cover", // Pattern size, gradient cover
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          bgcolor: "rgba(255, 255, 255, 0.1)", // Subtle overlay for readability
          zIndex: 0,
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          zIndex: 1, // Ensure content is above overlay
          textAlign: "center",
          mb: { xs: 2, sm: 3, md: 4 },
        }}
      >
      <Box sx={{ textAlign: "center", mb: { xs: 2, sm: 3, md: 4 } }}>
        <Typography
          variant={isMobile ? "h5" : "h4"}
          sx={{ fontWeight: "bold", color: "#f96dd6", mb: 1 }}
        >
          Masonry Grid
        </Typography>
        <Divider
          sx={{
            width: "100px",
            mx: "auto",
            mb: 2,
            bgcolor: "#f96dd6",
            height: "2px",
          }}
        />
        <Typography
          variant={isMobile ? "body2" : "body1"}
          sx={{ color: "white", maxWidth: "600px", mx: "auto" }}
        >
          Versatile layout for varying image sizes, ideal for portfolios, photo galleries, and visual content that breaks the uniform grid mold.
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          maxWidth: "1200px",
          mx: "auto",
          minHeight: "100%", // Grow with content
        }}
      >
        <ImageList
          variant="masonry"
          cols={getCols()}
          gap={getGap()}
          sx={{
            p: { xs: 1, sm: 2 },
            "& img": {
              maxHeight: { xs: "250px", sm: "300px", md: "350px" }, // Limit image height
              objectFit: "cover",
              width: "100%",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
                cursor: "pointer",
              },
            },
          }}
        >
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={item.img}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={`Photograph titled ${item.title} by ${item.author}`}
                loading="lazy"
                style={{ width: "100%", height: "auto" }}
                onClick={() => console.log(`Clicked: ${item.title}`)} // Placeholder for modal
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
      </Box>
    </Box>
  );
}

const itemData = [
  { img: CarBW, title: "Vintage Car", author: "Joanna Doe" },
  { img: Swing, title: "Oceanfront Swing", author: "Jane Doe" },
  { img: Street, title: "Urban Street", author: "John Doe" },
  { img: Concert, title: "Live Concert", author: "John Doe" },
  { img: SurfGuy, title: "Surfer", author: "John Doe" },
  { img: Sunset, title: "Beach Sunset", author: "Jocelynn Doe" },
  { img: Surf, title: "Surfing Wave", author: "Joaquin Doe" },
  { img: GirlBoat, title: "Girl on Boat", author: "John Doe" },
  { img: Bed, title: "Cozy Bed", author: "John Doe" },
];



/**     <div className="col-sm-12 col-md-7 col-lg-7 w3-padding-small">
        <img src={Newsletter3} alt="newsletter3" className='w-100 shadow' />
        </div>
   
        </div>
        </div> 
     
  <div className="w3-container w3-container" id="graphics-email-samples" >
  <EmailComponent/>
  </div>
  <div className="w3-container w3-container" id="graphics-social-samples">
  <SocialComponent/>
  </div>
  <div className="w3-container w3-container" id="graphics-sport-samples">
  <SportsComponent/>
  </div>
<div className="w3-container w3-container" id="graphics-info-samples">
  <InfographicsComponents/>
  </div>
 


      <div className="w3-container w3-container w3-padding-large w3-padding-64 text-center ">
              
              <h3 className="text-black">Much more to come... Stay tuned! Feedback is welcome and encouraged. Feel free to contact me to share your thoughts.
        </h3><br />
              <button className="w3-button w3-text-light-grey w3-padding rounded mt-2 w3-margin-bottom" 
              style={{backgroundColor:'#FF385C'}}>
              <Link to="/contact"
                  className="button text-white"
                  onClick={scrollToTop}
                >
               CONTACT ME
                </Link>
              </button>
              </div> 
              <footer className="text-muted padding-32 position-fixed bottom-0 start-0 w-100">
          <div className="container">
            <p className="float-end mb-1">
              <a href="#forms" style={{color:'#FF385C'}}>Back to top</a>
            </p>
          </div>
        </footer>
    
        </div>
    );
    }
export default Graphics; */



/**
 *      <div className="mb-4 p-5">
        <div className="row d-flex justify-content-center align-items-center" >
              <div className="col-sm-12 col-md-5 col-lg-5 justify-content-center w3-padding-small">
    
           <h2 className="fw-bold">EMAIL MARKETING</h2>   
        <h4 className="mt-4">Key elements that engage readers, convey important information, and promote brand identity.</h4>
        
      <p className="mt-4 mb-4" style={{fontSize:'14px'}}>These elements include a captivating subject line, a clear and concise header, engaging content with well-structured sections, visually appealing images, and compelling calls to action.</p>
      <br />
       <div>
        <Link to= '#email-samples' className="mt-4">
       <p>view campaign samples < HiArrowLongRight/></p>
       </Link>
       </div>
           </div>
         <div className="col-sm-12 col-md-7 col-lg-7 px-3">
        <img src={Newsletter3} alt="newsletter3" className='w-100 shadow' />
        </div>
        </div> 
     </div>
 */
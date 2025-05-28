import { useState } from 'react';
import Fitness2 from '../../assets/images/Newsletters/FITNESS/Fitness2.png';
import Fitness3 from '../../assets/images/Newsletters/FITNESS/Fitness3.png';
import Fitness4 from '../../assets/images/Newsletters/FITNESS/Fitness4.png';
import Furniture1 from '../../assets/images/Newsletters/FURNITURE/Furniture1.png';
import Furniture2 from '../../assets/images/Newsletters/FURNITURE/Furniture2.png';
import Furniture3 from '../../assets/images/Newsletters/FURNITURE/Furniture3.png';
import Business1 from '../../assets/images/Newsletters/BUSINESS/Business1.png';
import Business2 from '../../assets/images/Newsletters/BUSINESS/Business2.png';
import Business3 from '../../assets/images/Newsletters/BUSINESS/Business3.png';
import Business4 from '../../assets/images/Newsletters/BUSINESS/Business4.png';
import Business5 from '../../assets/images/Newsletters/BUSINESS/Business5.png';
import Business6 from '../../assets/images/Newsletters/BUSINESS/Business6.png';
import Business7 from '../../assets/images/Newsletters/BUSINESS/Business7.png';
import BusinessStart from '../../assets/images/Newsletters/BUSINESS/BusinessStart.png';
import Agency1 from '../../assets/images/Newsletters/AGENCY/Agency1.png';
import Agency2 from '../../assets/images/Newsletters/AGENCY/Agency2.png';
import Agency3 from '../../assets/images/Newsletters/AGENCY/Agency3.png';
import Design1 from '../../assets/images/Newsletters/DESIGN/Design1.png';
import Design2 from '../../assets/images/Newsletters/DESIGN/Design2.png';
import Water1 from '../../assets/images/Newsletters/ISLAND/Water1.png';
import Water2 from '../../assets/images/Newsletters/ISLAND/Water2.png';
import Photo1 from '../../assets/images/Newsletters/PHOTO/Photo1.png';
import Photo2 from '../../assets/images/Newsletters/PHOTO/Photo2.png';

const businessImages = [BusinessStart, Business1, Business2];
const photoImages = [Photo2, Photo1];
const financeImages = [Business3, Business4, Business5, Business6, Business7];
const fitnessImages = [Fitness2, Fitness3, Fitness4];
const furnitureImages = [Furniture1, Furniture2, Furniture3];
const agencyImages = [Agency1, Agency2, Agency3];
const designImages = [Design1, Design2];
const islandImages = [Water1, Water2];

export default function EmailComponent() {
  const [currentBusinessIndex, setCurrentBusinessIndex] = useState(0);
  const [currentFitnessIndex, setCurrentFitnessIndex] = useState(0);
  const [currentFurnitureIndex, setCurrentFurnitureIndex] = useState(0);
  const [currentAgencyIndex, setCurrentAgencyIndex] = useState(0);
  const [currentFinanceIndex, setCurrentFinanceIndex] = useState(0);
  const [currentDesignIndex, setCurrentDesignIndex] = useState(0);
  const [currentIslandIndex, setCurrentIslandIndex] = useState(0);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const handleBusinessImageClick = (index) => setCurrentBusinessIndex(index);
  const handleFitnessImageClick = (index) => setCurrentFitnessIndex(index);
  const handleFurnitureImageClick = (index) => setCurrentFurnitureIndex(index);
  const handleAgencyImageClick = (index) => setCurrentAgencyIndex(index);
  const handleFinanceImageClick = (index) => setCurrentFinanceIndex(index);
  const handleDesignImageClick = (index) => setCurrentDesignIndex(index);
  const handleIslandImageClick = (index) => setCurrentIslandIndex(index);
  const handlePhotoImageClick = (index) => setCurrentPhotoIndex(index);

  const categories = [
    { name: 'Business', images: businessImages, index: currentBusinessIndex, handler: handleBusinessImageClick },
    { name: 'Finance', images: financeImages, index: currentFinanceIndex, handler: handleFinanceImageClick },
    { name: 'Design', images: designImages, index: currentDesignIndex, handler: handleDesignImageClick },
    { name: 'Island', images: islandImages, index: currentIslandIndex, handler: handleIslandImageClick },
    { name: 'Photo', images: photoImages, index: currentPhotoIndex, handler: handlePhotoImageClick },
    { name: 'Fitness', images: fitnessImages, index: currentFitnessIndex, handler: handleFitnessImageClick },
    { name: 'Furniture', images: furnitureImages, index: currentFurnitureIndex, handler: handleFurnitureImageClick },
    { name: 'Agency', images: agencyImages, index: currentAgencyIndex, handler: handleAgencyImageClick },
  ];

  return (
    <div
      className="bg-light py-3 py-md-5 px-2 px-md-0 d-flex flex-column justify-content-center align-items-center"
      id="email-samples"
      style={{ minHeight: '50vh' }}
    >
      <div className="text-center mb-5">
        <h1 className="fw-bold" style={{ color: '#FF385C', fontSize: 'clamp(1.5rem, 5vw, 2.5rem)', fontFamily: '"Raleway", sans-serif' }}>
          <i>EMAIL CAMPAIGN SAMPLES</i>
        </h1>
        <h4 className="mt-2" style={{ color: '#333', fontSize: 'clamp(1.125rem, 4vw, 1.5rem)', fontFamily: '"Raleway", sans-serif' }}>
          Unified Graphics-Maximize your brand’s visibility with multi-platform marketing graphics, ensuring consistent and captivating visuals across all your marketing channels.
        </h4>
      </div>
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-2 justify-content-center">
          {categories.map((category) => (
            <div className="col" key={category.name}>
              <div className="card shadow-sm h-100">
                <img
                  src={category.images[category.index]}
                  className="card-img-top"
                  alt={`${category.name} email campaign sample`}
                  loading="lazy"
                />
                <div className="card-body d-flex justify-content-center align-items-center py-2">
                  <div className="d-flex align-items-center gap-2">
                    {category.images.map((_, index) => (
                      <div
                        key={index}
                        onClick={() => category.handler(index)}
                        style={{
                          borderRadius: '50%',
                          width: '10px',
                          height: '10px',
                          cursor: 'pointer',
                          backgroundColor: index === category.index ? '#FF385C' : '#d3d3d3',
                          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


/**
 *    <div className="graphics w3-light-gray" id="graphics">
    
          <div className="w3-container w3-content w3-margin-bottom w3-padding-large w3-padding-48">
        <div className="row d-flex justify-content-center align-items-center" >
              <div className="col-sm-12 col-md-5 col-lg-5 justify-content-center w3-padding-small">
    
           <h2 className="fw-bold">EMAIL MARKETING</h2>   
        <h4 className="w3-margin-top">Key elements that engage readers, convey important information, and promote brand identity.</h4>
        
      <p className="w3-margin-top w3-margin-bottom" style={{fontSize:'14px'}}>These elements include a captivating subject line, a clear and concise header, engaging content with well-structured sections, visually appealing images, and compelling calls to action.</p>
      <br />
       <div>
        <Link to= '#email-samples' className="w3-margin-top">
       <p>view campaign samples < HiArrowLongRight/></p>
       </Link>
       </div>
     </div>
     <div className="col-sm-12 col-md-7 col-lg-7 w3-padding-small">
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
export default Graphics;
 */
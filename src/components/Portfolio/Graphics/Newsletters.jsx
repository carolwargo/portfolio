import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import Business1 from '../../../assets/images/Newsletters/BUSINESS/Business1.png';
import Business2 from '../../../assets/images/Newsletters/BUSINESS/Business2.png';
import Business3 from '../../../assets/images/Newsletters/BUSINESS/Business3.png';
import Business4 from '../../../assets/images/Newsletters/BUSINESS/Business4.png';
import Business5 from '../../../assets/images/Newsletters/BUSINESS/Business5.png';
import Business6 from '../../../assets/images/Newsletters/BUSINESS/Business6.png';
import Business7 from '../../../assets/images/Newsletters/BUSINESS/Business7.png';
import BusinessStart from '../../../assets/images/Newsletters/BUSINESS/BusinessStart.png';
import Fitness2 from '../../../assets/images/Newsletters/FITNESS/Fitness2.png';  
import Fitness3 from '../../../assets/images/Newsletters/FITNESS/Fitness3.png';  
import Fitness4 from '../../../assets/images/Newsletters/FITNESS/Fitness4.png'; 
import Furniture1 from '../../../assets/images/Newsletters/FURNITURE/Furniture1.png';
import Furniture2 from '../../../assets/images/Newsletters/FURNITURE/Furniture2.png';
import Furniture3 from '../../../assets/images/Newsletters/FURNITURE/Furniture3.png'; 
//import Newsletter3 from '../../../assets/images/NewsLetterImages/DIAGRAMS/Newsletter3.png';
//import NewsLetter4 from '../../../assets/images/NewsLetterImages/Newsletter4.png';


const Newsletters = () => {

      return (
    
        <div className='email-samples bg-primary-subtle w3-padding-24' id="email-samples">
        <div className="p-4 text-center ">
        <h1 className='fw-bold text-center'>
          <i className='fw-bold'>EMAIL CAMPAIGN SAMPLES</i></h1> 
            <div className="container  w3-padding-48">
     
              <div className="row d-flex justify-content-center align-items-center">
              <div className="col-sm-12 col-md-4 col-lg-4 justify-content-center align-items-center ">
              <div className="graphics-carousel-body justify-content-center align-items-center">
         <div className="graphics-carousel-title text-black">
           <h2>Newsletters</h2>
           
             <br />
        <h5>Key elements that engage readers, convey important information, and promote brand identity.</h5>
        
      <p>These elements include a captivating subject line, a clear and concise header, engaging content with well-structured sections, visually appealing images, and compelling calls to action.</p>
       </div>
       </div>
     </div>
        </div>
   
        <div className="p-4 text-center ">
    <h1 className='fw-bold text-primary'>
      <i className='fw-bold'>Newsletters</i></h1> 
    </div>
        <div className="container p-4">      
       
        <div className="row d-flex justify-content-center align-items-center">
<div className="col-sm-6 col-md-3 col-lg-3 w3-padding-small">
           
     <MDBCarousel showControls className='shadow border-black border-5'>
          <MDBCarouselItem itemId={1}>
            <img src={BusinessStart} className='d-block w-100' alt='...' />
          </MDBCarouselItem>
          <MDBCarouselItem itemId={2}>
            <img src={Business2} className='d-block w-100' alt='...' />
          </MDBCarouselItem>
          <MDBCarouselItem itemId={3}>
            <img src={Business3} className='d-block w-100' alt='...' />
          </MDBCarouselItem>
          <MDBCarouselItem itemId={4}>
            <img src={Business4} className='d-block w-100' alt='...' />
          </MDBCarouselItem>
          <MDBCarouselItem itemId={5}>
            <img src={Business5} className='d-block w-100' alt='...' />
          </MDBCarouselItem>
          <MDBCarouselItem itemId={6}>
            <img src={Business6} className='d-block w-100' alt='...' />
          </MDBCarouselItem>
          <MDBCarouselItem itemId={7}>
            <img src={Business7} className='d-block w-100' alt='...' />
          </MDBCarouselItem>
          <MDBCarouselItem itemId={8}>
            <img src={Business1} className='d-block w-100' alt='...' />
          </MDBCarouselItem>
        </MDBCarousel>
        </div>
<div className="col-sm-6 col-md-3 col-lg-3 w3-padding-small">
     <MDBCarousel showControls className='shadow border-black border-5'>
          <MDBCarouselItem itemId={1}>
            <img src={Fitness2} className='d-block w-100' alt='...' />
          </MDBCarouselItem>
          <MDBCarouselItem itemId={2}>
            <img src={Fitness3} className='d-block w-100' alt='...' />
          </MDBCarouselItem>
          <MDBCarouselItem itemId={3}>
            <img src={Fitness4} className='d-block w-100' alt='...' />
          </MDBCarouselItem>
        
        </MDBCarousel>
        </div>
        <div className="col-sm-6 col-md-3 col-lg-3 w3-padding-small">
       <MDBCarousel showControls className='shadow border-black border-5'>
          <MDBCarouselItem itemId={1}>
            <img src={Furniture1} className='d-block w-100' alt='...' />
          </MDBCarouselItem>
          <MDBCarouselItem itemId={2}>
            <img src={Furniture2} className='d-block w-100' alt='...' />
          </MDBCarouselItem>
          <MDBCarouselItem itemId={3}>
            <img src={Furniture3} className='d-block w-100' alt='...' />
          </MDBCarouselItem>
        </MDBCarousel>
        </div>
        </div>
        </div>
        </div>
     {/*recruit YOGA COMPLETE start 
     <div className='w3-padding-48 text-center text-black'>
        <div className="row">
          <div className="col"><h1>Logos | Branding</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus nostrum nisi quaerat quibusdam tempore corrupti quidem enim repellendus maiores provident necessitatibus exercitationem dolor asperiores voluptas molestias placeat dignissimos, et nihil.</p></div>
          <div className="col"><h1>Forms|Interactive </h1> <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus nostrum nisi quaerat quibusdam tempore corrupti quidem enim repellendus maiores provident necessitatibus exercitationem dolor asperiores voluptas molestias placeat dignissimos, et nihil.</p></div>
          <div className="col"><h1>Presentations </h1> <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus nostrum nisi quaerat quibusdam tempore corrupti quidem enim repellendus maiores provident necessitatibus exercitationem dolor asperiores voluptas molestias placeat dignissimos, et nihil.</p></div>   
        </div>
       </div>
       */}
        {/*End Business*/}
   </div>
        </div>
    );

}

export default Newsletters;
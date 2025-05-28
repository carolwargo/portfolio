// src/components/Graphics/InfographicComponent.jsx

import Slider from "react-slick";
import Typo1 from '../../assets/images/Typo/Typo1.png';  
import Typo2 from '../../assets/images/Typo/Typo2.png';  
import Typo3 from '../../assets/images/Typo/Typo3.png';  
import Typo4 from '../../assets/images/Typo/Typo4.png';
import Info2 from '../../assets/images/Infographics/Info2.png';

import Info3 from '../../assets/images/Infographics/Info3.png';
import Info4 from '../../assets/images/Infographics/Info4.png';
import Info5 from '../../assets/images/Infographics/Info5.png';
import Info6 from '../../assets/images/Infographics/Info6.png';
import Info7 from '../../assets/images/Infographics/Info7.png';

import Info8 from '../../assets/images/Infographics/Info8.png';
import Info9 from '../../assets/images/Infographics/Info9.png';
import Info10 from '../../assets/images/Infographics/Info10.png';
import Info11 from '../../assets/images/Infographics/Info11.png';
import Info12 from '../../assets/images/Infographics/Info12.png';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function InfographicComponents() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },

    ]
  }; 
  return (
    <div className='infos' id="infos">
     
     
      <style>
        {`
     
.slick-prev, .slick-next {
  font-size: 0;
  background-color: transparent;
  border: none;
  outline: none;
}

.slick-prev::before, .slick-next::before {
  font-size: 30px;
  color: #000000; 
  shadow: 0 0 10px #000;

.slick-prev:hover::before, .slick-next:hover::before {
  color: #00ff00; 
  `}
      </style>

    <div className='p-5 bg-info-subtle' id="infos">
      <div className="p-5 text-center ">
    <h1 className='fw-bold text-primary'>
      <i className='fw-bold'>INFOGRAPHICS</i></h1> 
      <h4> Visual Insights that Illuminate- Dive into our meticulously crafted infographics that transform complex data into compelling visual narratives, making information both engaging and easy to understand.</h4>
      </div>

        <div className="container mt-2"> 
      <Slider {...settings}>
        <div className="px-1"> 
          <img src={Typo1} alt="info1" className="w-100 rounded-2"></img>
        </div>
        <div className="px-1"> 
          <img src={Typo2} alt="info1" className="w-100 rounded-2"></img>
        </div>
        <div className="px-1"> 
          <img src={Typo3} alt="info1" className="w-100 rounded-2"></img>
        </div>
        <div className="px-1"> 
          <img src={Typo4} alt="info1" className="w-100 rounded-2"></img>
        </div>
        <div className="px-1"> 
        <img src={Info2} alt="info2" className="w-100 rounded-2"></img>
        </div>
        <div className="px-1"> 
        <img src={Info3} alt="info3" className="w-100 rounded-2"></img>
        </div>
        <div className="px-1"> 
        <img src={Info4} alt="info4" className="w-100 rounded-2"></img>
        </div>
        <div className="px-1"> 
        <img src={Info5} alt="info5" className="w-100 rounded-2"></img>
        </div>
        <div className="px-1"> 
        <img src={Info6} alt="info7" className="w-100 rounded-2"></img>
        </div>
        <div className="px-1"> 
          <img src={Info7} alt="info7" className="w-100 rounded-2"></img>
        </div>
        <div className="px-1"> 
        <img src={Info8} alt="info8" className="w-100 rounded-2"></img>
        </div>
        <div className="px-1"> 
        <img src={Info9} alt="info9" className="w-100 rounded-2"></img>
        </div>
        <div className="px-1"> 
        <img src={Info10} alt="info10" className="w-100 rounded-2"></img>
        </div>
        <div className="px-1"> 
        <img src={Info11} alt="info" className="w-100 rounded-2"></img>
        </div>
        <div className="px-1"> 
        <img src={Info12} alt="info12" className="w-100 rounded-2"></img>
        </div>
        <div className="px-1 "> 
          <img src={Typo4} alt="info1" className="w-100 rounded-2"></img>
        </div>
    
      </Slider>
    </div>
    </div>
    </div>
  );
}

export default InfographicComponents;

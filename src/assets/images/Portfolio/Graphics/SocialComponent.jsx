/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Food1 from '../../../assets/images/SocialMedia/Food/Food1.png';
import Food3 from '../../../assets/images/SocialMedia/Food/Food3.png';
import Food4 from '../../../assets/images/SocialMedia/Food/Food4.png';
import Food5 from '../../../assets/images/SocialMedia/Food/Food5.png';
import Food6 from '../../../assets/images/SocialMedia/Food/Food6.png';
import GreenFood1 from '../../../assets/images/SocialMedia/Food/GreenFood1.png';
import GreenFood2 from '../../../assets/images/SocialMedia/Food/GreenFood2.png';
import Fruits1 from '../../../assets/images/SocialMedia/Fruit/Fruits1.png';
import Fruits2 from '../../../assets/images/SocialMedia/Fruit/Fruits2.png';
import Fruits3 from '../../../assets/images/SocialMedia/Fruit/Fruits3.png';
import Fruits4 from '../../../assets/images/SocialMedia/Fruit/Fruits4.png';
import Open1 from '../../../assets/images/SocialMedia/Open/Open1.png';
import Open2 from '../../../assets/images/SocialMedia/Open/Open2.png';
import Open3 from '../../../assets/images/SocialMedia/Open/Open3.png';
import Open4 from '../../../assets/images/SocialMedia/Open/Open4.png';
import Travel1 from '../../../assets/images/SocialMedia/Travel/Travel1.png';
import Travel2 from '../../../assets/images/SocialMedia/Travel/Travel2.png';
import Travel3 from '../../../assets/images/SocialMedia/Travel/Travel3.png';
import Travel4 from '../../../assets/images/SocialMedia/Travel/Travel4.png';
import YogaSet from '../../../assets/images/YogaStory/YogaSet.png';

const foodImages = [
Food1, Food3, Food4, Food5, Food6, GreenFood1, GreenFood2
];

const travelImages = [   
Travel1, Travel2, Travel3, Travel4
];

const openImages = [
Open1, Open2, Open3, Open4
    ];

const fruitImages = [
Fruits1, Fruits2, Fruits3, Fruits4
  ];

 



export default function InstagramPost() {
  const [currentFruitIndex, setCurrentFruitIndex] = React.useState(0);
  const [currentFoodIndex, setCurrentFoodIndex] = React.useState(0);
 const [currentTravelIndex, setCurrentTravelIndex] = React.useState(0);
const [currentOpenIndex, setCurrentOpenIndex] = React.useState(0);

  const handleFoodImageClick = (index) => {
    setCurrentFoodIndex(index);
  };
  const handleFruitImageClick = (index) => {
    setCurrentFruitIndex(index);
  };

  const handleOpenImageClick = (index) => {
    setCurrentOpenIndex(index);
  }


    const handleTravelImageClick = (index) => {
    setCurrentTravelIndex(index);
    }





  return (
    <div className='social bg-danger-subtle w3-padding-24' id="social">
        <div className="w3-padding-large text-center ">
    <h1 className='fw-bold text-primary'>
      <i className='fw-bold'>SOCIAL MEDIA CAMPAIGN SAMPLES</i></h1> 
      <h4> Enhance your social media presence with our vibrant and impactful graphics, tailored to catch the eye and engage your followers across all platforms.</h4>
      </div>
        <div className="container p-4">      
        <img src={YogaSet} alt="yoga" style={{width:'100%'}} className="shadow mt-2"/>
       
        <div className="row d-flex justify-content-center align-items-center">
<div className="col-sm-6 col-md-3 col-lg-3 w3-padding-small ">
            <Card
            className="shadow my-1"
      variant="outlined"
      sx={{
        minWidth: 225,
        '--Card-radius': (theme) => theme.vars.radius.xs,
      }}
    >
      <img src={foodImages[currentFoodIndex]} className='w-100' alt='' loading="lazy" />

      <CardContent orientation="horizontal" 
      sx={{ alignItems: 'center', mx: -1 }}>
        <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 0.5, 
            mx: 'auto' }}>
          {foodImages.map((_, index) => (
            <Box
            className="shadow my-4"
              key={index}
              onClick={() => handleFoodImageClick(index)}
              sx={{
                borderRadius: '50%',
                width: '10px',
                height: '10px',
                cursor: 'pointer',
                bgcolor: index === currentFoodIndex ? 'primary.solidBg' : 'background.level3',
              }}
            />
          ))}
        </Box>
      </CardContent>
    </Card>
            </div>

 
            <div className="col-sm-6 col-md-3 col-lg-3 w3-padding-small ">
            <Card
                 className="shadow my-1"
      variant="outlined"
      sx={{
        minWidth: 225,
        '--Card-radius': (theme) => theme.vars.radius.xs,
      }}
    >
      <img src={fruitImages[currentFruitIndex]} className='w-100' alt='' loading="lazy" />

      <CardContent orientation="horizontal" 
      sx={{ alignItems: 'center', mx: -1 }}>
        <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 0.5, 
            mx: 'auto' }}>
          {fruitImages.map((_, index) => (
            <Box
            className="shadow my-4"
              key={index}
              onClick={() => handleFruitImageClick(index)}
              sx={{
                borderRadius: '50%',
                width: '10px',
                height: '10px',
                cursor: 'pointer',
                bgcolor: index === currentFruitIndex ? 'primary.solidBg' : 'background.level3',
              }}
            />
          ))}
        </Box>
      </CardContent>
    </Card>
            </div>


            <div className="col-sm-6 col-md-3 col-lg-3 w3-padding-small ">
            <Card
                 className="shadow my-1"
      variant="outlined"
      sx={{
        minWidth: 225,
        '--Card-radius': (theme) => theme.vars.radius.xs,
      }}
    >
      <img src={openImages[currentOpenIndex]} className='w-100' alt='' loading="lazy" />

      <CardContent orientation="horizontal" 
      sx={{ alignItems: 'center', mx: -1 }}>
        <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 0.5, 
            mx: 'auto' }}>
          {openImages.map((_, index) => (
            <Box
            className="shadow my-4"
              key={index}
              onClick={() => handleOpenImageClick(index)}
              sx={{
                borderRadius: '50%',
                width: '10px',
                height: '10px',
                cursor: 'pointer',
                bgcolor: index === currentOpenIndex ? 'primary.solidBg' : 'background.level3',
              }}
            />
          ))}
        </Box>
      </CardContent>
    </Card>
            </div>

       
           <div className="col-sm-6 col-md-3 col-lg-3 w3-padding-small ">
            <Card
                 className="shadow my-1"
      variant="outlined"
      sx={{
        minWidth: 225,
        '--Card-radius': (theme) => theme.vars.radius.xs,
      }}
    >
      <img src={travelImages[currentTravelIndex]} className='w-100' alt='' loading="lazy" />

      <CardContent orientation="horizontal" sx={{ alignItems: 'center', mx: -1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mx: 'auto' }}>
          {travelImages.map((_, index) => (
            <Box
            className="shadow my-4"
              key={index}
              onClick={() => handleTravelImageClick(index)}
              sx={{
                borderRadius: '50%',
                width: '10px',
                height: '10px',
                cursor: 'pointer',
                bgcolor: index === currentTravelIndex ? 'primary.solidBg' : 'background.level3',
              }}
            />
          ))}
        </Box>
      </CardContent>
    </Card>
            </div>
       </div>
       </div>
                </div>

  );
}

/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Fitness2 from '../../../assets/images/Newsletters/FITNESS/Fitness2.png';  
import Fitness3 from '../../../assets/images/Newsletters/FITNESS/Fitness3.png';  
import Fitness4 from '../../../assets/images/Newsletters/FITNESS/Fitness4.png'; 
import Furniture1 from '../../../assets/images/Newsletters/FURNITURE/Furniture1.png';
import Furniture2 from '../../../assets/images/Newsletters/FURNITURE/Furniture2.png';
import Furniture3 from '../../../assets/images/Newsletters/FURNITURE/Furniture3.png'; 
import Business1 from '../../../assets/images/Newsletters/BUSINESS/Business1.png';
import Business2 from '../../../assets/images/Newsletters/BUSINESS/Business2.png';
import Business3 from '../../../assets/images/Newsletters/BUSINESS/Business3.png';
import Business4 from '../../../assets/images/Newsletters/BUSINESS/Business4.png';
import Business5 from '../../../assets/images/Newsletters/BUSINESS/Business5.png';
import Business6 from '../../../assets/images/Newsletters/BUSINESS/Business6.png';
import Business7 from '../../../assets/images/Newsletters/BUSINESS/Business7.png';
import BusinessStart from '../../../assets/images/Newsletters/BUSINESS/BusinessStart.png';
import Agency1 from '../../../assets/images/Newsletters/AGENCY/Agency1.png';
import Agency2 from '../../../assets/images/Newsletters/AGENCY/Agency2.png';
import Agency3 from '../../../assets/images/Newsletters/AGENCY/Agency3.png';
import Design1 from '../../../assets/images/Newsletters/DESIGN/Design1.png';
import Design2 from '../../../assets/images/Newsletters/DESIGN/Design2.png';
import Water1 from '../../../assets/images/Newsletters/ISLAND/Water1.png';
import Water2 from '../../../assets/images/Newsletters/ISLAND/Water2.png';
import Photo1 from '../../../assets/images/Newsletters/PHOTO/Photo1.png';
import Photo2 from '../../../assets/images/Newsletters/PHOTO/Photo2.png';

const businessImages = [
BusinessStart, Business1, Business2
];

const photoImages = [   
    Photo2, Photo1
];

const financeImages = [
    Business3, Business4, Business5, Business6, Business7,
    ];

const fitnessImages = [
    Fitness2, Fitness3, Fitness4,
  ];

  const furnitureImages = [
    Furniture1, Furniture2, Furniture3,
  ];


const agencyImages = [
    Agency1, Agency2, Agency3
];

const designImages = [
    Design1, Design2
];

const islandImages = [
    Water1, Water2
];


export default function InstagramPost() {
  const [currentBusinessIndex, setCurrentBusinessIndex] = React.useState(0);
  const [currentFitnessIndex, setCurrentFitnessIndex] = React.useState(0);
 const [currentFurnitureIndex, setCurrentFurnitureIndex] = React.useState(0);
const [currentAgencyIndex, setCurrentAgencyIndex] = React.useState(0);
const [currentFinanceIndex, setCurrentFinanceIndex] = React.useState(0);
const [currentDesignIndex, setCurrentDesignIndex] = React.useState(0);
const [currentIslandIndex, setCurrentIslandIndex] = React.useState(0);
const [currentPhotoIndex, setCurrentPhotoIndex] = React.useState(0);

  const handleBusinessImageClick = (index) => {
    setCurrentBusinessIndex(index);
  };
  const handleFitnessImageClick = (index) => {
    setCurrentFitnessIndex(index);
  };

  const handleFurnitureImageClick = (index) => {
    setCurrentFurnitureIndex(index);
  }


    const handleAgencyImageClick = (index) => {
    setCurrentAgencyIndex(index);
    }

const handleFinanceImageClick = (index) => {
    setCurrentFinanceIndex(index);
    };

    const handleDesignImageClick = (index) => {
    setCurrentDesignIndex(index);
    }

    const handleIslandImageClick = (index) => {
    setCurrentIslandIndex(index);
    }

    const handlePhotoImageClick = (index) => {
    setCurrentPhotoIndex(index);
    }



  return (
    <div className='email-samples bg-primary-subtle w3-padding-48' id="email-samples">
     <div className="w3-padding-large text-center ">
    <h1 className='fw-bold text-primary'>
      <i className='fw-bold'>EMAIL CAMPAIGN SAMPLES</i></h1> 
      <h4> Unified Graphics-Maximize your brand’s visibility with multi-platform marketing graphics, ensuring consistent and captivating visuals across all your marketing channels.</h4>
      </div>
        <div className="container w3-padding-32">
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
      <img src={businessImages[currentBusinessIndex]} className='w-100' alt='' loading="lazy" />

      <CardContent orientation="horizontal" 
      sx={{ alignItems: 'center', mx: -1 }}>
        <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 0.5, 
            mx: 'auto' }}>
          {businessImages.map((_, index) => (
            <Box
            className="shadow my-4"
              key={index}
              onClick={() => handleBusinessImageClick(index)}
              sx={{
                borderRadius: '50%',
                width: '10px',
                height: '10px',
                cursor: 'pointer',
                bgcolor: index === currentBusinessIndex ? 'primary.solidBg' : 'background.level3',
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
      <img src={financeImages[currentFinanceIndex]} className='w-100' alt='' loading="lazy" />

      <CardContent orientation="horizontal" 
      sx={{ alignItems: 'center', mx: -1 }}>
        <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 0.5, 
            mx: 'auto' }}>
          {financeImages.map((_, index) => (
            <Box
            className="shadow my-4"
              key={index}
              onClick={() => handleFinanceImageClick(index)}
              sx={{
                borderRadius: '50%',
                width: '10px',
                height: '10px',
                cursor: 'pointer',
                bgcolor: index === currentFinanceIndex ? 'primary.solidBg' : 'background.level3',
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
      <img src={designImages[currentDesignIndex]} className='w-100' alt='' loading="lazy" />

      <CardContent orientation="horizontal" 
      sx={{ alignItems: 'center', mx: -1 }}>
        <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 0.5, 
            mx: 'auto' }}>
          {designImages.map((_, index) => (
            <Box
            className="shadow my-4"
              key={index}
              onClick={() => handleDesignImageClick(index)}
              sx={{
                borderRadius: '50%',
                width: '10px',
                height: '10px',
                cursor: 'pointer',
                bgcolor: index === currentDesignIndex ? 'primary.solidBg' : 'background.level3',
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
      <img src={islandImages[currentIslandIndex]} className='w-100' alt='' loading="lazy" />

      <CardContent orientation="horizontal" 
      sx={{ alignItems: 'center', mx: -1 }}>
        <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 0.5, 
            mx: 'auto' }}>
          {islandImages.map((_, index) => (
            <Box
            className="shadow my-4"
              key={index}
              onClick={() => handleIslandImageClick(index)}
              sx={{
                borderRadius: '50%',
                width: '10px',
                height: '10px',
                cursor: 'pointer',
                bgcolor: index === currentIslandIndex ? 'primary.solidBg' : 'background.level3',
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
      <img src={photoImages[currentPhotoIndex]} className='w-100' alt='' loading="lazy" />

      <CardContent orientation="horizontal" 
      sx={{ alignItems: 'center', mx: -1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mx: 'auto' }}>
          {photoImages.map((_, index) => (
            <Box
            className="shadow my-4"
              key={index}
              onClick={() => handlePhotoImageClick(index)}
              sx={{
                borderRadius: '50%',
                width: '10px',
                height: '10px',
                cursor: 'pointer',
                bgcolor: index === currentPhotoIndex ? 'primary.solidBg' : 'background.level3',
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
      <img src={fitnessImages[currentFitnessIndex]} className='w-100' alt='' loading="lazy" />

      <CardContent orientation="horizontal" sx={{ alignItems: 'center', mx: -1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mx: 'auto' }}>
          {fitnessImages.map((_, index) => (
            <Box
            className="shadow my-4"
              key={index}
              onClick={() => handleFitnessImageClick(index)}
              sx={{
                borderRadius: '50%',
                width: '10px',
                height: '10px',
                cursor: 'pointer',
                bgcolor: index === currentFitnessIndex ? 'primary.solidBg' : 'background.level3',
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
      <img src={furnitureImages[currentFurnitureIndex]} className='w-100' alt='' loading="lazy" />

      <CardContent orientation="horizontal" sx={{ alignItems: 'center', mx: -1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mx: 'auto' }}>
          {furnitureImages.map((_, index) => (
            <Box
            className="shadow my-4"
              key={index}
              onClick={() => handleFurnitureImageClick(index)}
              sx={{
                borderRadius: '50%',
                width: '10px',
                height: '10px',
                cursor: 'pointer',
                bgcolor: index === currentFurnitureIndex ? 'primary.solidBg' : 'background.level3',
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
      <img src={agencyImages[currentAgencyIndex]} className='w-100' alt='' loading="lazy" />

      <CardContent orientation="horizontal" sx={{ alignItems: 'center', mx: -1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mx: 'auto' }}>
          {agencyImages.map((_, index) => (
            <Box
            className="shadow my-4"
              key={index}
              onClick={() => handleAgencyImageClick(index)}
              sx={{
                borderRadius: '50%',
                width: '10px',
                height: '10px',
                cursor: 'pointer',
                bgcolor: index === currentAgencyIndex ? 'primary.solidBg' : 'background.level3',
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

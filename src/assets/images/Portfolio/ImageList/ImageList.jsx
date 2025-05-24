import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
//import GirlBW from '../../../assets/images/Hawaii/GirlBW.png';
import CarBW from '../../../assets/images/Hawaii/CarBW.png';
import Sunset from '../../../assets/images/Hawaii/Sunset.png';
//import Turtle from '../../../assets/images/Hawaii/Turtle.png';
import Surf from '../../../assets/images/Hawaii/Surf.png';
//import Cave from '../../../assets/images/Hybiscus550/Concert.png';
import Concert from '../../../assets/images/Hybiscus550/Concert.png';
//import Bridge from '../../../assets/images/Hybiscus550/Bridge.png';
import Bed from '../../../assets/images/Hybiscus550/Bed.png';
import Street from '../../../assets/images/Hybiscus550/Street.png';
import SurfGuy from '../../../assets/images/Hybiscus450/SurfGuy.png';
import GirlBoat from '../../../assets/images/Hybiscus450/GirlBoat.png';
//import Cabana from '../../../assets/images/Hybiscus450/Cabana.png';
//import Highway from '../../../assets/images/Hybiscus450/Highway.png';
import Swing from '../../../assets/images/Hybiscus450/Swing.png';
import { useMediaQuery, useTheme } from '@mui/material';

export default function TitlebarBelowMasonryImageList() {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('xs'));
  const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isMd = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isLg = useMediaQuery(theme.breakpoints.up('lg'));

  const getCols = () => {
    if (isXs) return 3;
    if (isSm) return 3;
    if (isMd) return 3;
    if (isLg) return 3;
    return 3;
  };

  return (
    <Box sx={{ width: '100%', height: 250, overflowY: 'scroll' }} className='shadow border align-items-center justify-content-center'>
      <ImageList
        variant="masonry"
        cols={getCols()}
        gap={8} 
    className='w3-padding-small'>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}`}
            src={item.img}
            alt={item.title}
            style={{fontSize: '10px'}}
            loading="lazy"
          />
     </ImageListItem>
      ))}
    </ImageList>
  </Box>
  );
}

const itemData = [
  { img: CarBW, title: 'Large Car', author: 'Joanna Doe' },
  { img: Swing, title: 'Medium Swing', author: 'Jane Doe' },
  { img: Street, title: 'Small Street', author: 'John Doe' },
 


  
  { img: Concert, title: 'Small Concert', author: 'John Doe' },
  { img: SurfGuy, title: 'Medium SurfGuy', author: 'John Doe' },
  { img: Sunset, title: 'Large Sunset', author: 'Jocelynn Doe' },
 

 
  { img: Surf, title: 'Large Surf', author: 'Joaquin Doe' },
  { img: GirlBoat, title: 'Medium GirlBoat', author: 'John Doe' },
  { img: Bed, title: 'Small Bed', author: 'John Doe' },

];
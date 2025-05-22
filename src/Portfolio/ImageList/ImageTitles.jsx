import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Grid from '@mui/material/Grid';
import YellowFlowers from '../../../assets/images/LandScape/YellowFlowers.png';
import Colors from '../../../assets/images/LandScape/Colors.png';
import Lake from '../../../assets/images/LandScape/Lake.png';
import Purple from '../../../assets/images/LandScape/Purple.png';
import LargeLake from '../../../assets/images/LandScape/LargeLake.png';
import SunRay from '../../../assets/images/LandScape/SunRay.png';
import Waterfall from '../../../assets/images/LandScape/Waterfall.png';
import White from '../../../assets/images/LandScape/White.png';

export default function TitlebarImageList() {
  return (
    <Grid container justifyContent="center" style={{ height: '80vh', overflow: 'hidden' }}>
       <Box sx={{ width: 600, height: 500, overflowY: 'scroll' }} className='shadow border'>
      <ImageList
      cols={2}
        gap={8}
        className='shadow border'
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.author}
              actionIcon={
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  aria-label={`info about ${item.title}`}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
      </Box>
    </Grid>
  );
}

const itemData = [
  {
    img: YellowFlowers,
    title: 'Yellow Flowers',
    author: '@yellowflowers',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: Colors,
    title: 'Colors',
    author: '@colors',
  },
  {
    img: Purple,
    title: 'Purple',
    author: '@hellopurple',
  },
  {
    img: LargeLake,
    title: 'Large Lake',
    author: '@LakeScape',
    cols: 2,
  },
  {
    img: SunRay,
    title: 'Sun Ray',
    author: '@sunshine',
    cols: 2,
  },
  {
    img: Lake,
    title: 'Lake',
    author: '@LakeScape',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: Waterfall,
    title: 'Waterfall',
    author: '@waterdrop',
  },
  {
    img: White,
    title: 'White',
    author: '@muted',
  },
];

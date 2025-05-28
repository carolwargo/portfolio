// src/components/Graphics/GraphicCarousel.jsx

import Slider from 'react-slick';
import { Box, Card, CardMedia } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const GraphicCarousel = ({ images, sectionTitle }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 600,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <Box sx={{ px: { xs: 1, md: 2 }, py: 2 }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <Box key={index} sx={{ px: 1 }}>
            <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
              <CardMedia
                component="img"
                src={image.src}
                alt={image.alt}
                sx={{ width: '100%', height: 'auto', borderRadius: 2 }}
                loading="lazy"
              />
            </Card>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default GraphicCarousel;
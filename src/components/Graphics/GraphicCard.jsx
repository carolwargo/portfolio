// src/components/Graphics/GraphicCard.jsx
import { useState } from 'react';
import { Card, CardContent, Box } from '@mui/material';
import { motion } from 'framer-motion';
import "../../styles/Graphics.css"

const GraphicCard = ({ images, categoryName }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <Card
      variant="outlined"
      sx={{
        minWidth: { xs: 200, sm: 225 },
        borderRadius: 1,
        boxShadow: 3,
        transition: 'transform 0.3s',
        '&:hover': { transform: 'scale(1.02)' },
      }}
      component={motion.div}
      whileHover={{ scale: 1.05 }}
    >
      <img
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
        style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '4px 4px 0 0' }}
        loading="lazy"
      />
      <CardContent sx={{ display: 'flex', justifyContent: 'center', p: 1 }}>
        <Box sx={{ display: 'flex', gap: 0.5 }}>
          {images.map((_, index) => (
            <Box
              key={index}
              onClick={() => handleDotClick(index)}
              sx={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                bgcolor: index === currentIndex ? '#FF385C' : 'grey.400',
                cursor: 'pointer',
                transition: 'background-color 0.3s',
              }}
              role="button"
              aria-label={`Select image ${index + 1} for ${categoryName}`}
            />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default GraphicCard;
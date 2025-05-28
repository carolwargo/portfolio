// src/data/raphics/sportsData.js


// Sports Images
import Catching from '../assets/images/Graphics/Catching.png';
import Canceled from '../assets/images/Graphics/Canceled.png';
import CuttersFlyers from '../assets/images/Graphics/CuttersFlyers.png';
import S1 from '../assets/images/Sports/S1.png';
import S2 from '../assets/images/Sports/S2.png';
import S4 from '../assets/images/Sports/S4.png';
import CCU1 from '../assets/images/Graphics/CCU1.png';
import CCU2 from '../assets/images/Graphics/CCU2.png';
import Duke1 from '../assets/images/WallPaper/Duke1.png';
import Duke2 from '../assets/images/WallPaper/Duke2.png';
import Duke3 from '../assets/images/WallPaper/Duke3.png';

export const sportData = [

  {
    id: 'sport-samples',
    title: 'Sports Graphics',
    description: 'Dynamic visuals for sports-related campaigns.',
    categories: [
      {
        name: 'General Sports',
        images: [Catching, Canceled, CuttersFlyers, S1, S2, S4].map((src, index) => ({
          src,
          alt: `Sports Graphic ${index + 1}`,
        })),
      },
      {
        name: 'CCU',
        images: [CCU1, CCU2].map((src, index) => ({
          src,
          alt: `CCU Graphic ${index + 1}`,
        })),
      },
      {
        name: 'Duke',
        images: [Duke1, Duke2, Duke3].map((src, index) => ({
          src,
          alt: `Duke Graphic ${index + 1}`,
        })),
      },
    ],
  },

];
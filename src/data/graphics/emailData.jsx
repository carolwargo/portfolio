// src/data/graphics/emailData.js


// Email Images (subset of Newsletter images)
import Agency1 from '../assets/images/Newsletters/AGENCY/Agency1.png';
import Agency2 from '../assets/images/Newsletters/AGENCY/Agency2.png';
import Agency3 from '../assets/images/Newsletters/AGENCY/Agency3.png';
import Design1 from '../assets/images/Newsletters/DESIGN/Design1.png';
import Design2 from '../assets/images/Newsletters/DESIGN/Design2.png';
import Water1 from '../assets/images/Newsletters/ISLAND/Water1.png';
import Water2 from '../assets/images/Newsletters/ISLAND/Water2.png';
import Photo1 from '../assets/images/Newsletters/PHOTO/Photo1.png';
import Photo2 from '../assets/images/Newsletters/PHOTO/Photo2.png';


export const emailData = [

  {
    id: 'email-samples',
    title: 'Email Campaign Samples',
    description: 'Unified graphics for multi-platform email marketing, ensuring consistent and captivating visuals.',
    categories: [
      {
        name: 'Agency',
        images: [Agency1, Agency2, Agency3].map((src, index) => ({
          src,
          alt: `Agency Email ${index + 1}`,
        })),
      },
      {
        name: 'Design',
        images: [Design1, Design2].map((src, index) => ({
          src,
          alt: `Design Email ${index + 1}`,
        })),
      },
      {
        name: 'Island',
        images: [Water1, Water2].map((src, index) => ({
          src,
          alt: `Island Email ${index + 1}`,
        })),
      },
      {
        name: 'Photo',
        images: [Photo2, Photo1].map((src, index) => ({
          src,
          alt: `Photo Email ${index + 1}`,
        })),
      },
    ],
  },
];
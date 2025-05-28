// src/data/graphics/socialData.jsx


// Social Media Images
import Food1 from '../assets/images/SocialMedia/Food/Food1.png';
import Food3 from '../assets/images/SocialMedia/Food/Food3.png';
import Food4 from '../assets/images/SocialMedia/Food/Food4.png';
import Food5 from '../assets/images/SocialMedia/Food/Food5.png';
import Food6 from '../assets/images/SocialMedia/Food/Food6.png';
import GreenFood1 from '../assets/images/SocialMedia/Food/GreenFood1.png';
import GreenFood2 from '../assets/images/SocialMedia/Food/GreenFood2.png';
import Fruits1 from '../assets/images/SocialMedia/Fruit/Fruits1.png';
import Fruits2 from '../assets/images/SocialMedia/Fruit/Fruits2.png';
import Fruits3 from '../assets/images/SocialMedia/Fruit/Fruits3.png';
import Fruits4 from '../assets/images/SocialMedia/Fruit/Fruits4.png';
import Open1 from '../assets/images/SocialMedia/Open/Open1.png';
import Open2 from '../assets/images/SocialMedia/Open/Open2.png';
import Open3 from '../assets/images/SocialMedia/Open/Open3.png';
import Open4 from '../assets/images/SocialMedia/Open/Open4.png';
import Travel1 from '../assets/images/SocialMedia/Travel/Travel1.png';
import Travel2 from '../assets/images/SocialMedia/Travel/Travel2.png';
import Travel3 from '../assets/images/SocialMedia/Travel/Travel3.png';
import Travel4 from '../assets/images/SocialMedia/Travel/Travel4.png';
import YogaSet from '../assets/images/YogaStory/YogaSet.png';


export const socialData = [
  {
    id: 'newsletter-samples',
    title: 'Newsletter Campaign Samples',
    description: 'Engaging newsletters designed to inform and captivate your audience with captivating subject lines, clear headers, and compelling calls to action.',
    categories: [
      {
        name: 'Business',
        images: [BusinessStart, Business1, Business2, Business3, Business4, Business5, Business6, Business7].map((src, index) => ({
          src,
          alt: `Business Newsletter ${index + 1}`,
        })),
      },
      {
        name: 'Fitness',
        images: [Fitness2, Fitness3, Fitness4].map((src, index) => ({
          src,
          alt: `Fitness Newsletter ${index + 1}`,
        })),
      },
      {
        name: 'Furniture',
        images: [Furniture1, Furniture2, Furniture3].map((src, index) => ({
          src,
          alt: `Furniture Newsletter ${index + 1}`,
        })),
      },
    ],
  },
];
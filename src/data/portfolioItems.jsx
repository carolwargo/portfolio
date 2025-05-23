// src/data/portfolioData.js
import JATE from "../assets/images/Server/JATE.png";
import Notes from "../assets/images/Server/Notes.png";
import SVG from "../assets/images/Server/SVG.png";
import Desk from "../assets/images/Server/Desk.png";
import README from "../assets/images/Server/README.png";
import Horizen from "../assets/images/Server/Horizen.png";
import Password from "../assets/images/Server/Password.png";

const portfolioItems = [
  {
    id: "text-editor",
    title: "Text_Editor",
    description: "A browser-based text editor for creating and editing text documents seamlessly.",
    image: JATE, // Corrected: Use imported module directly
    altText: "Screenshot of Text_Editor application",
    link: "https://github.com/carolwargo/Text_Editor-in-Chief",
    demoLink: "https://text-editor-chief.herokuapp.com",
    category: "Web App",
    techStack: ["React", "PWA", "IndexedDB"],
    date: "2024",
    isNew: true,
  },
  {
    id: "password",
    title: "Password Generator",
    description: "Generates random passwords based on user-selected criteria with a single click.",
    image: Password,
    altText: "Screenshot of Password Generator application",
    link: "https://carolwargo.github.io/JS-Password-Generator/",
    demoLink: "https://carolwargo.github.io/JS-Password-Generator/",
    category: "Web App",
    techStack: ["JavaScript", "HTML", "CSS"],
    date: "2023",
    isNew: false,
  },
  {
    id: "notes",
    title: "Note-Taker Application",
    description: "A note-taking app to write, save, and delete tasks you can't afford to forget.",
    image: Notes,
    altText: "Screenshot of Note-Taker application",
    link: "https://github.com/carolwargo/forget-me-NOTES",
    demoLink: "https://forget-me-notes.herokuapp.com",
    category: "Web App",
    techStack: ["Express.js", "Node.js", "JavaScript"],
    date: "2023",
    isNew: false,
  },
  {
    id: "svg",
    title: "SVG Generator App",
    description: "A Node.js CLI that generates a logo as an SVG file based on user input for color, shape, and text.",
    image: SVG,
    altText: "Screenshot of SVG Generator application",
    link: "https://github.com/carolwargo/forgetSVG",
    demoLink: null,
    category: "CLI Tool",
    techStack: ["Node.js", "Inquirer", "SVG"],
    date: "2023",
    isNew: false,
  },
  {
    id: "dayplanner",
    title: "Day Planner App",
    description: "A calendar app to save events for each hour of a typical 9-5 workday.",
    image: Desk,
    altText: "Screenshot of Day Planner application",
    link: "https://carolwargo.github.io/Desk_Jockey-dayplanner/",
    demoLink: "https://carolwargo.github.io/Desk_Jockey-dayplanner/",
    category: "Web App",
    techStack: ["JavaScript", "jQuery", "Moment.js"],
    date: "2023",
    isNew: false,
  },
  {
    id: "readme",
    title: "README Generator",
    description: "Generates a well-structured README.md file based on user input.",
    image: README,
    altText: "Screenshot of README Generator application",
    link: "https://github.com/carolwargo/forget-me-NOTES",
    demoLink: null,
    category: "CLI Tool",
    techStack: ["Node.js", "Inquirer", "Markdown"],
    date: "2023",
    isNew: false,
  },
  {
    id: "horizen",
    title: "Code Refactor",
    description: "Optimized code to follow WCAG standards, improve SEO, and limit liability.",
    image: Horizen,
    altText: "Screenshot of Code Refactor project",
    link: "https://github.com/carolwargo/Code-Refactor-Horisen",
    demoLink: "https://carolwargo.github.io/Code-Refactor-Horisen/",
    category: "Accessibility",
    techStack: ["HTML", "CSS", "WCAG"],
    date: "2023",
    isNew: false,
  },
];

export default portfolioItems;
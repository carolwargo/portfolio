import  { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import EmailComponent from '../components/Graphics/NewsletterComponent';
import SocialMediaComponent from '../components/Graphics/SocialMediaComponent';
import SportsComponent from '../components/Graphics/SportsComponent';
import InfographicComponent from '../components/Graphics/InfographicComponent';
import { graphicsData } from '../data/graphicsData';
import { IconButton } from '@mui/material';
import { Menu as MenuIcon, X as CloseIcon } from 'lucide-react';
//import NewsletterComponent from '../components/Graphics/NewsletterComponent';


const GraphicsPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState(null, '', `#${sectionId}`);
    }
    setSidebarOpen(false);
  };

  // Initialize Bootstrap scroll-spy
  useEffect(() => {
    const mainContent = document.querySelector('[data-bs-spy="scroll"]');
    if (mainContent) {
      // Ensure Bootstrap is loaded
      if (window.bootstrap) {
        new window.bootstrap.ScrollSpy(mainContent, {
          target: '#navbar-example3',
          offset: 60, // Match navbar height
        });
      }
    }

    // Handle initial hash navigation
    const hash = location.hash.replace('#', '');
    if (hash) {
      setTimeout(() => scrollToSection(hash), 100);
    }

    // Cleanup scroll-spy on unmount
    return () => {
      if (window.bootstrap && mainContent) {
        const scrollSpy = window.bootstrap.ScrollSpy.getInstance(mainContent);
        if (scrollSpy) scrollSpy.dispose();
      }
    };
  }, [location]);

  // Toggle sidebar on mobile
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div >

<nav id="navbar-example3" className="navbar navbar-light bg-light flex-column align-items-stretch p-3">
  <a className="navbar-brand" href="#">Navbar</a>
  <nav className="nav nav-pills flex-column">
    <a className="nav-link" href="#item-1">Item 1</a>
    <nav className="nav nav-pills flex-column">
      <a className="nav-link ms-3 my-1" href="#item-1-1">Item 1-1</a>
      <a className="nav-link ms-3 my-1" href="#item-1-2">Item 1-2</a>
    </nav>
    <a className="nav-link" href="#item-2">Item 2</a>
    <a className="nav-link" href="#item-3">Item 3</a>
    <nav className="nav nav-pills flex-column">
      <a className="nav-link ms-3 my-1" href="#item-3-1">Item 3-1</a>
      <a className="nav-link ms-3 my-1" href="#item-3-2">Item 3-2</a>
    </nav>
  </nav>
</nav>

<div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-offset="0" tabindex="0">
  <h4 id="item-1">Welcome</h4>

  <h5 id="item-1-1">Item 1-1</h5>

  <h5 id="item-1-2">Item 1-2</h5>
  <p>...</p>
  <h4 id="item-2">Item 2</h4>
  <p>...</p>
  <h4 id="item-3">Item 3</h4>
  <p>...</p>
  <h5 id="item-3-1">Item 3-1</h5>
  <p>...</p>
  <h5 id="item-3-2">Item 3-2</h5>
  <p>...</p>
</div>









      <div className="row">
        {/* Sidebar */}
        <nav
          id="navbar-example3"
          className={`navbar navbar-light flex-column align-items-stretch p-3 bg-light ${sidebarOpen ? 'd-block' : 'd-none d-md-block'}`}
          style={{
            width: sidebarOpen ? '300px' : '0',
            position: sidebarOpen ? 'fixed' : 'sticky',
            top: '60px',
            height: 'calc(100vh - 60px)',
            zIndex: 1200,
            transition: 'width 0.3s, transform 0.3s',
            transform: sidebarOpen ? 'translateX(0)' : 'translateX(-300px)',
            backgroundColor: '#FF3855',
            color: 'white',
            fontFamily: '"Raleway", sans-serif',
            overflowY: 'auto',
          }}
        >
          <div className="d-flex justify-content-between align-items-center mb-3">
            <span className="navbar-brand" style={{ color: 'white', fontWeight: 'bold', fontSize: '1.25rem' }}>
              Graphics Dashboard
            </span>
            <IconButton
              className="d-md-none"
              onClick={toggleSidebar}
              style={{ color: 'white' }}
              aria-label="Close sidebar"
            >
              <CloseIcon size={24} />
            </IconButton>
          </div>
          <nav className="nav nav-pills flex-column">
            {graphicsData.map((section) => (
              <a
                key={section.id}
                className="nav-link"
                href={`#${section.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(section.id);
                }}
                style={{
                  color: 'white',
                  padding: '10px 15px',
                  borderRadius: '4px',
                  margin: '2px 0',
                }}
              >
                {section.title}
              </a>
            ))}
          </nav>
        </nav>

        {/* Main Content */}
        <div
          className="col-12 col-md-9 ms-auto"
          data-bs-spy="scroll"
          data-bs-target="#navbar-example3"
          data-bs-offset="60"
          tabIndex="0"
          style={{ maxWidth: '1325px', margin: '0 auto', padding: '20px', position: 'relative', zIndex: 10 }}
        >
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h4 className="fw-bold" style={{ color: '#FF3855', fontSize: 'clamp(1.5rem, 5vw, 2rem)' }}>
              Graphics Portfolio
            </h4>
            <IconButton
              className="d-md-none"
              onClick={toggleSidebar}
              style={{ color: '#FF3855' }}
              aria-label="Toggle sidebar"
            >
              <MenuIcon size={24} />
            </IconButton>
          </div>

          {/* Sections */}
          <div id="email-samples">
            <EmailComponent />
          </div>
          <div id="social-media">
            <SocialMediaComponent />
          </div>
          <div id="sports">
            <SportsComponent />
          </div>
          <div id="infographic">
            <InfographicComponent />
          </div>

          {/* Feedback Section */}
          <div className="text-center py-5">
            <h5 className="mb-3" style={{ color: '#333', fontSize: 'clamp(1.25rem, 4vw, 1.5rem)' }}>
              Much more to come... Stay tuned! Feedback is welcome and encouraged. Feel free to contact me to share your thoughts.
            </h5>
            <motion.button
              className="btn"
              style={{
                backgroundColor: '#FF3855',
                color: '#fff',
                padding: '10px 20px',
                borderRadius: '1.5rem',
                border: 'none',
                fontFamily: '"Raleway", sans-serif',
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>
                CONTACT ME
              </Link>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphicsPage;

/**     <div className="col-sm-12 col-md-7 col-lg-7 w3-padding-small">
        <img src={Newsletter3} alt="newsletter3" className='w-100 shadow' />
        </div>
   
        </div>
        </div> 
     
  <div className="w3-container w3-container" id="graphics-email-samples" >
  <EmailComponent/>
  </div>
  <div className="w3-container w3-container" id="graphics-social-samples">
  <SocialComponent/>
  </div>
  <div className="w3-container w3-container" id="graphics-sport-samples">
  <SportsComponent/>
  </div>
<div className="w3-container w3-container" id="graphics-info-samples">
  <InfographicsComponents/>
  </div>
 


      <div className="w3-container w3-container w3-padding-large w3-padding-64 text-center ">
              
              <h3 className="text-black">Much more to come... Stay tuned! Feedback is welcome and encouraged. Feel free to contact me to share your thoughts.
        </h3><br />
              <button className="w3-button w3-text-light-grey w3-padding rounded mt-2 w3-margin-bottom" 
              style={{backgroundColor:'#FF385C'}}>
              <Link to="/contact"
                  className="button text-white"
                  onClick={scrollToTop}
                >
               CONTACT ME
                </Link>
              </button>
              </div> 
              <footer className="text-muted padding-32 position-fixed bottom-0 start-0 w-100">
          <div className="container">
            <p className="float-end mb-1">
              <a href="#forms" style={{color:'#FF385C'}}>Back to top</a>
            </p>
          </div>
        </footer>
    
        </div>
    );
    }
export default Graphics; */



/**
 *      <div className="mb-4 p-5">
        <div className="row d-flex justify-content-center align-items-center" >
              <div className="col-sm-12 col-md-5 col-lg-5 justify-content-center w3-padding-small">
    
           <h2 className="fw-bold">EMAIL MARKETING</h2>   
        <h4 className="mt-4">Key elements that engage readers, convey important information, and promote brand identity.</h4>
        
      <p className="mt-4 mb-4" style={{fontSize:'14px'}}>These elements include a captivating subject line, a clear and concise header, engaging content with well-structured sections, visually appealing images, and compelling calls to action.</p>
      <br />
       <div>
        <Link to= '#email-samples' className="mt-4">
       <p>view campaign samples < HiArrowLongRight/></p>
       </Link>
       </div>
           </div>
         <div className="col-sm-12 col-md-7 col-lg-7 px-3">
        <img src={Newsletter3} alt="newsletter3" className='w-100 shadow' />
        </div>
        </div> 
     </div>
 */
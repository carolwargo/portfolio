import { Suspense, lazy } from 'react';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import NavFixed from './components/Navs/NavFixed';
import Footer from './components/Footer';
import ErrorBoundary from './ErrorBoundary';
import { Box } from '@mui/material';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const AboutPage = lazy(() => import('./pages/AboutPage'));
const Homepage = lazy(() => import('./pages/Homepage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ResumePage = lazy(() => import('./pages/ResumePage'));
const PortfolioPage = lazy(() => import('./pages/Portfolio/PortfolioPage'));
//const GraphicsPage = lazy(() => import('./pages/GraphicsPage'));
const SamplesPage = lazy(() => import('./pages/SamplesPage'));
const ServerPage = lazy(() => import('./pages/ServerPage'));

const DefaultLayout = ({ children }) => (
  <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <NavFixed />
    <Box sx={{ flexGrow: 1 }}>
      {children}
    </Box>
    <Footer />
  </Box>
);

const GraphicsLayout = ({ children }) => (
  <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <Box sx={{ flexGrow: 1 }}>
      {children}
    </Box>
  </Box>
);

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<DefaultLayout><Homepage /></DefaultLayout>} />
              <Route path="/home" element={<DefaultLayout><Homepage /></DefaultLayout>} />
              <Route path="/about" element={<DefaultLayout><AboutPage /></DefaultLayout>} />
              <Route path="/contact" element={<DefaultLayout><ContactPage /></DefaultLayout>} />
              <Route path="/resume" element={<DefaultLayout><ResumePage /></DefaultLayout>} />
              <Route path="/portfolio" element={<DefaultLayout><PortfolioPage /></DefaultLayout>} />
             
              <Route path="/samples" element={<DefaultLayout><SamplesPage /></DefaultLayout>} />
              <Route path="/server" element={<DefaultLayout><ServerPage /></DefaultLayout>} />
              <Route path="/newsletter-samples" element={<Navigate to="/graphics#newsletter" replace />} />
              <Route path="*" element={<DefaultLayout><NotFound /></DefaultLayout>} />
            </Routes>
          </ErrorBoundary>
        </Suspense>
      </HashRouter>
    </div>
  );
}

function NotFound() {
  console.error('Page not found!');
  return <div />;
}

export default App;

{/** <Route path="/graphics" element={<Navigate to="/portfolio/graphics" replace />} /> */}
// src/App.jsx
import { Suspense, lazy } from 'react';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import NavFixed from './components/Navs/NavFixed';
import Footer from './components/Footer';
import ErrorBoundary from './ErrorBoundary';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const AboutPage = lazy(() => import('./pages/AboutPage'));
const Homepage = lazy(() => import('./pages/Homepage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ResumePage = lazy(() => import('./pages/ResumePage'));
const PortfolioPage = lazy(() => import('./pages/Portfolio/PortfolioPage'));
const GraphicsPage = lazy(() => import('./pages/GraphicsPage')); // Verify path
const SamplesPage = lazy(() => import('./pages/SamplesPage'));
const ServerPage = lazy(() => import('./pages/ServerPage'));

function App() {
  return (
    <div className="App">
      <HashRouter >
        <Suspense fallback={<div>Loading...</div>}>
          <ErrorBoundary>
            <NavFixed />
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/home" element={<Homepage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/resume" element={<ResumePage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/graphics" element={<GraphicsPage />} />
              <Route path="/samples" element={<SamplesPage />} />
              <Route path="/server" element={<ServerPage />} />
              <Route path="/newsletter-samples" element={<Navigate to="/graphics#newsletter" replace />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </ErrorBoundary>
        </Suspense>
      </HashRouter>
    </div>
  );
}

function NotFound() {
  console.error('Page not found!');
  return <h1 className="text-center mt-5">404 - Not Found</h1>;
}

export default App;

{/** <Route path="/graphics" element={<Navigate to="/portfolio/graphics" replace />} /> */}
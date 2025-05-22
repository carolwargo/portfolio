// ./src/App.js
import { lazy } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

//import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Lazy-loaded pages
const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const ResumePage = lazy(() => import("./pages/ResumePage"));
const PortfolioPage = lazy(() => import("./pages/Portfolio/PortfolioPage"));

function App() {
  return (
    <div className="App">
<HashRouter>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/resume" element={<ResumePage />} />
    <Route path="/portfolio" element={<PortfolioPage />} />
  </Routes>
</HashRouter>

    </div>
  );
}

function NotFound() {
  console.error("Page not found!");
  return <h1 className="text-center mt-5">404 - Not Found</h1>;
}

export default App;

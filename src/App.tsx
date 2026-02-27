import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ThemeToggleFAB from './components/ThemeToggleFAB';
import ScrollToTopOnNavigate from './components/ScrollToTopOnNavigate';
import { ThemeProvider } from './lib/ThemeProvider';

// Route-level code splitting — each page loads only when visited
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Teams = lazy(() => import('./pages/Teams'));
const Services = lazy(() => import('./pages/Services'));
const Booking = lazy(() => import('./pages/Booking'));
const TeamProfile = lazy(() => import('./pages/TeamProfile'));

// Import assets for preloading
import AboutImg from './assets/aboutus.jpg';
import HeroImg from './assets/heroimg2.jpg';

import './App.css';

// Minimal loading fallback shown during route transitions
function PageLoader() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="w-8 h-8 rounded-full border-2 border-white/20 border-t-white animate-spin" />
    </div>
  );
}

function App() {
  // Global Asset Preloading Strategy
  useEffect(() => {
    const criticalAssets = [AboutImg, HeroImg];
    criticalAssets.forEach((asset) => {
      const img = new Image();
      img.src = asset;
    });
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <div className="app-wrapper">
          <ScrollToTopOnNavigate />
          <Navbar />
          <main>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/teams" element={<Teams />} />
                <Route path="/services" element={<Services />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/team/:id" element={<TeamProfile />} />
              </Routes>
            </Suspense>
          </main>
          <div className="px-6 md:px-16 lg:px-24">
            <Footer />
          </div>
          <ScrollToTop />
          <ThemeToggleFAB />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;


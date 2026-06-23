import { useEffect, useState } from 'react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import VisionMission from './components/VisionMission';
import ProductSlider from './components/ProductSlider';
import WhyChooseUs from './components/WhyChooseUs';
import Certifications from './components/Certifications';
import Gallery from './components/Gallery';
import LocationSection from './components/LocationSection';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import FloatingWhatsapp from './components/FloatingWhatsapp';

export default function App() {
  const [darkMode,] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Loader loading={loading} />

      <div
        className={`min-h-screen transition-all duration-500 ${
          darkMode
            ? 'bg-[#161616] text-white'
            : 'bg-[#f6f2ea] text-[#2f2f2f]'
        }`}
      >
       <Navbar />
        <HeroSection loading={loading} />
        <AboutSection darkMode={darkMode} />
        <VisionMission />
        <ProductSlider />
        <WhyChooseUs />
        <Certifications />
        <Gallery />
        <LocationSection />
        <Testimonials />
        <CTASection />
        <Footer />
        <FloatingWhatsapp />
      </div>
    </>
  );
}

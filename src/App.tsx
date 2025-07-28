import ContactSection from "./components/ContactSection";
import FeatureCards from "./components/FeatureCards";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import TestimonialsCarousel from "./components/TestimonialsCarousel";

const SmartCareApp: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection/>
      <FeatureCards />
      <TestimonialsCarousel />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default SmartCareApp;
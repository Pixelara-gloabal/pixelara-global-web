import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Pricing from './sections/Pricing';
import PortfolioAndReviews from './sections/PortfolioAndReviews';
import FinalCTA from './sections/FinalCTA';
import Footer from './components/Footer';
import Recommend from './pages/Recommend';
import ScopeModal from './components/ScopeModal';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import CookieConsent from './components/CookieConsent';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<string>('home');
  const [isCalculatorOpen, setIsCalculatorOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'recommend') {
        setCurrentRoute('recommend');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentRoute('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (currentRoute === 'recommend') {
    return <Recommend />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFBFC] text-slate-900">
      {/* 1. Global Navigation Bar */}
      <Navbar onOpenCalculator={() => setIsCalculatorOpen(true)} />

      <main className="flex-grow">
        {/* 2. Hero Section: Direct outcome position & inline brand logos */}
        <Hero onOpenCalculator={() => setIsCalculatorOpen(true)} />

        {/* 3. Services: Capabilities & Interactive Industry Blueprint Adaptor */}
        <Services />

        {/* 4. Pricing: Essential, Customized scopes, and Live Scope Builder */}
        <Pricing onOpenCalculator={() => setIsCalculatorOpen(true)} />

        {/* 5. Case Studies & Client Reviews Switcher */}
        <PortfolioAndReviews />

        {/* 6. FAQ Accordion & Intake Lead Form */}
        <FinalCTA />
      </main>

      {/* 7. Footer */}
      <Footer />

      {/* Scope Estimator Modal */}
      <ScopeModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
      />

      {/* Floating Action WhatsApp */}
      <FloatingWhatsApp onOpenCalculator={() => setIsCalculatorOpen(true)} />

      {/* Cookie Consent Privacy Popup */}
      <CookieConsent />
    </div>
  );
}

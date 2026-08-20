import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Pricing from './sections/Pricing';
import Process from './sections/Process';
import Industries from './sections/Industries';
import Portfolio from './sections/Portfolio';
import FinalCTA from './sections/FinalCTA';
import Footer from './components/Footer';
import Recommend from './pages/Recommend';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<string>('home');

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

    // Handle initial load and browser back/forward buttons
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (currentRoute === 'recommend') {
    return <Recommend />;
  }

  return (
    <div className="min-h-screen bg-[#F4F7FB] text-[#111827] flex flex-col font-sans selection:bg-[#2563EB]/15 selection:text-[#2563EB]">
      {/* 1. Global Navigation Bar */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. Hero Section: Outcome-led positioning and entry pricing anchor */}
        <Hero />

        {/* 3. Services: Brochure, E-commerce, and Custom App families */}
        <Services />

        {/* 4. Pricing: Starter (₹9,999), Business (₹19,999), Professional (₹34,999), Business Pro (₹59,999) */}
        <Pricing />

        {/* 5. Process: 4-Step delivery workflow */}
        <Process />

        {/* 6. Industries: Industry structure adaptation cards */}
        <Industries />

        {/* 7. Portfolio: Case studies & verified scope frameworks */}
        <Portfolio />

        {/* 8. Final CTA: Lead intake form & direct WhatsApp conversion */}
        <FinalCTA />
      </main>

      {/* 9. Global Footer: Sitemap, legal notices, and commercial terms */}
      <Footer />
    </div>
  );
}

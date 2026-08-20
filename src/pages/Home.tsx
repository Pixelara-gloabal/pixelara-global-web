import Navbar from '../components/Navbar';
import Hero from '../sections/Hero';
import Services from '../sections/Services';
import Pricing from '../sections/Pricing';
import Process from '../sections/Process';
import Industries from '../sections/Industries';
import Portfolio from '../sections/Portfolio';
import FinalCTA from '../sections/FinalCTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F4F7FB] text-[#111827] flex flex-col font-sans">
      {/* 1. Sticky Navigation */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. Hero: Value proposition + starting price (₹9,999) */}
        <Hero />

        {/* 3. Services: Standard Sites, E-commerce, Custom Apps */}
        <Services />

        {/* 4. Pricing: Starter, Business (₹19,999), Pro, Business Pro */}
        <Pricing />

        {/* 5. Process: 4-step workflow (Plan -> UI -> Build -> Launch) */}
        <Process />

        {/* 6. Industries: Manufacturing, Exporters, Clinics, Retail */}
        <Industries />

        {/* 7. Portfolio: Case studies and verified proof */}
        <Portfolio />

        {/* 8. Final CTA: Project quote capture & WhatsApp trigger */}
        <FinalCTA />
      </main>

      {/* 9. Footer: Legal, sitemap links, commercial scope note */}
      <Footer />
    </div>
  );
}

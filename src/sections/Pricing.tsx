import { Layers, ShieldCheck, HelpCircle } from 'lucide-react';
import { PACKAGES } from '../data/packages';
import PricingCard from '../components/PricingCard';

export default function Pricing() {
  const handleSelectPackage = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="packages" className="py-20 bg-[#F4F7FB] border-b border-[#D9E1EC]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFFFFF] border border-[#D9E1EC] text-[#2563EB] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Layers className="w-3.5 h-3.5 text-[#2563EB]" />
            Official 2026 Rate Card
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0B1220] tracking-tight">
            Transparent Fixed Packages. No Scope Creep.
          </h2>
          <p className="text-base text-[#5B6472] mt-3 leading-relaxed">
            Our pricing is structured around scope complexity rather than industry type. The exact pages adapt to your business while keeping expectations clear.
          </p>
        </div>

        {/* 4-Tier Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PACKAGES.map((pkg) => (
            <PricingCard key={pkg.id} pkg={pkg} onSelect={handleSelectPackage} />
          ))}
        </div>

        {/* Commercial Clarifications & Milestone Terms */}
        <div className="mt-12 p-6 bg-[#FFFFFF] border border-[#D9E1EC] rounded-[16px] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
          <div className="flex items-start gap-3.5 max-w-3xl">
            <div className="w-9 h-9 rounded-[10px] bg-green-50 text-[#16A34A] flex items-center justify-center shrink-0 mt-0.5">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#0B1220]">Commercial Terms & Boundary Protection</h4>
              <p className="text-xs text-[#5B6472] mt-1 leading-relaxed">
                Under ₹20,000: 50% advance and 50% upon final delivery. ₹35,000+: 40% advance, 30% on design sign-off, and 30% before deployment. Domain, hosting, and paid third-party APIs are billed separately unless included in the final quotation.
              </p>
            </div>
          </div>

          <a
            href="#recommend"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2563EB] hover:underline whitespace-nowrap"
          >
            <HelpCircle className="w-4 h-4" /> Need help choosing?
          </a>
        </div>
      </div>
    </section>
  );
}

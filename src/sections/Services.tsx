import { useState } from 'react';
import { 
  Globe, ShoppingCart, Cpu, Layers, 
  Factory, Ship, Building2, Stethoscope, 
  UtensilsCrossed, ShoppingBag, ArrowRight 
} from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Services() {
  const [activeTab, setActiveTab] = useState<'capabilities' | 'industries'>('capabilities');
  const [selectedIndustry, setSelectedIndustry] = useState<number>(0);

  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  const serviceFamilies = [
    {
      icon: Globe,
      title: 'Business & Corporate Sites',
      badge: 'Fixed Tiered Pricing',
      description:
        'Professional, lead-generating brochure and catalog websites for manufacturers, exporters, clinics, and service companies.',
      priceTag: 'From ₹9,999',
      deliverables: [
        '5-page Essential or multi-page Customized scope',
        'Direct WhatsApp & Lead Capture',
        'SEO, Sitemap & Search Console',
        '15 to 90 days post-launch support'
      ],
      ctaText: 'View Packages',
      ctaHref: '#packages',
      highlighted: true,
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce Storefronts',
      badge: 'Starting Category',
      description:
        'Conversion-ready online stores with product variations, integrated carts, payment gateways, and order administration.',
      priceTag: 'Custom Scope',
      deliverables: [
        'Shop, Category & Product pages',
        'Payment gateway integration',
        'WhatsApp/Email order notices',
        'Customer account portals'
      ],
      ctaText: 'Scope E-Commerce',
      ctaHref: '#contact',
      highlighted: false,
    },
    {
      icon: Cpu,
      title: 'Custom Web Applications',
      badge: 'Scope-Based Quotation',
      description:
        'Bespoke digital platforms, booking engines, internal CRM/ERP integrations, and customer/employee dashboards.',
      priceTag: 'Custom Scope',
      deliverables: [
        'Requirements discovery blueprint',
        'Custom workflow & API integration',
        'Role-based dashboard systems',
        'Tailored delivery & QA milestones'
      ],
      ctaText: 'Request Discovery',
      ctaHref: '#contact',
      highlighted: false,
    },
  ];

  const industryProfiles = [
    {
      icon: Factory,
      name: 'Manufacturing',
      category: 'B2B & Industrial',
      recommendedTier: 'Customized Solution',
      structure: ['Home', 'About Company', 'Product Catalog', 'Certifications', 'Infrastructure', 'Export Inquiry'],
      desc: 'Heavy industrial specs, catalog PDF downloads, quality assurance and machinery showcase layouts.'
    },
    {
      icon: Ship,
      name: 'Import / Export',
      category: 'B2B & Trade',
      recommendedTier: 'Customized Solution',
      structure: ['Home', 'Export Catalog', 'Global Markets', 'Quality Standards', 'Lead Inquiry Form', 'WhatsApp Direct'],
      desc: 'Optimized for international trade, multi-market specifications, and foreign inquiry lead funnels.'
    },
    {
      icon: Building2,
      name: 'Corporate & Finance',
      category: 'Enterprise',
      recommendedTier: 'Customized Solution',
      structure: ['Company Story', 'Leadership', 'Services Offered', 'Investor Relations', 'Careers', 'Contact Portal'],
      desc: 'High-end layout, elegant typography, secure client intake forms, and corporate communication hubs.'
    },
    {
      icon: Stethoscope,
      name: 'Clinics & Healthcare',
      category: 'Local Services',
      recommendedTier: 'Essential (₹9,999)',
      structure: ['Clinic Overview', 'Doctor Profiles', 'Treatments', 'Appointment Booking', 'Directions & Maps'],
      desc: 'Integrated local SEO, branch search, doctor listings, and simple patient scheduling workflows.'
    },
    {
      icon: UtensilsCrossed,
      name: 'Restaurants & Hospitality',
      category: 'Local Services',
      recommendedTier: 'Essential (₹9,999)',
      structure: ['Home', 'Digital Menu', 'Photo Gallery', 'Table Reservation', 'Directions & Hours'],
      desc: 'High-speed image galleries, digital menu display, reservation widgets, and mobile directions.'
    },
    {
      icon: ShoppingBag,
      name: 'Retail & Showrooms',
      category: 'Commercial',
      recommendedTier: 'Essential or Customized',
      structure: ['Brand Story', 'Category Showcase', 'Digital Catalog PDF', 'Store Locations', 'WhatsApp Order'],
      desc: 'Brochure catalog with WhatsApp order redirects, location finders, and downloadable PDFs.'
    },
  ];

  const currentInd = industryProfiles[selectedIndustry];
  const IndIcon = currentInd.icon;

  return (
    <section id="services" className="py-14 sm:py-20 bg-white border-b border-slate-100 text-slate-900 relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute top-1/2 left-0 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-blue-50/50 rounded-full blur-3xl opacity-60 pointer-events-none -translate-y-1/2 -translate-x-1/2 animate-blob" />

      <div className="max-w-6xl mx-auto px-4 sm:px-5 relative z-10">
        
        {/* Section Header with Tabs */}
        <div 
          ref={headerRef}
          className={`flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12 animate-on-scroll ${headerVisible ? 'is-visible' : ''}`}
        >
          <div className="max-w-xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#3B82F6] text-xs font-semibold uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5" />
              Solutions &amp; Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Services &amp; Market Adaptation
            </h2>
            <p className="text-xs sm:text-[15px] text-slate-500 mt-2 leading-relaxed font-medium">
              Explore our core capabilities or check how our codebase customizes to your industry standard.
            </p>
          </div>

          {/* Section Tab Controller */}
          <div className="flex bg-slate-50 p-1 rounded-2xl border border-slate-200 mx-auto md:mx-0 shadow-3xs">
            <button
              onClick={() => setActiveTab('capabilities')}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-[11px] sm:text-xs font-black transition-all cursor-pointer ${
                activeTab === 'capabilities'
                  ? 'bg-white text-slate-950 shadow-xs border border-slate-200'
                  : 'text-slate-505 hover:text-slate-950'
              }`}
            >
              Service Capabilities
            </button>
            <button
              onClick={() => setActiveTab('industries')}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-[11px] sm:text-xs font-black transition-all cursor-pointer ${
                activeTab === 'industries'
                  ? 'bg-white text-slate-950 shadow-xs border border-slate-200'
                  : 'text-slate-505 hover:text-slate-950'
              }`}
            >
              Industry Blueprints
            </button>
          </div>
        </div>

        {/* TAB 1: Capabilities Grid */}
        {activeTab === 'capabilities' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 animate-scale-in is-visible">
            {serviceFamilies.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        )}

        {/* TAB 2: Industry Blueprints Adaptor */}
        {activeTab === 'industries' && (
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-stretch animate-scale-in is-visible">
            
            {/* Left Sector Switcher List - Responsive Swiper on Mobile */}
            <div className="lg:col-span-5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-3 text-center lg:text-left">Select Industry Sector</span>
              <div className="flex overflow-x-auto pb-3.5 gap-2 lg:flex-col lg:overflow-x-visible lg:pb-0 snap-x snap-mandatory scroll-smooth scrollbar-none">
                {industryProfiles.map((ind, idx) => {
                  const Icon = ind.icon;
                  const isSelected = selectedIndustry === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => setSelectedIndustry(idx)}
                      className={`flex-none w-[170px] sm:w-[220px] lg:w-full p-3 sm:p-4 rounded-xl text-left border flex items-center justify-between transition-all cursor-pointer snap-start ${
                        isSelected
                          ? 'border-[#2563EB] bg-blue-50/50 shadow-2xs ring-1 ring-[#2563EB]/15'
                          : 'border-slate-205 hover:bg-slate-50 bg-white lg:bg-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-2 sm:gap-3.5">
                        <div className={`w-7.5 h-7.5 sm:w-8.5 sm:h-8.5 rounded-lg flex items-center justify-center transition-colors ${
                          isSelected ? 'bg-[#2563EB] text-white' : 'bg-slate-100 text-slate-500'
                        }`}>
                          <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                        </div>
                        <div className="truncate max-w-[100px] sm:max-w-none">
                          <span className="text-[11px] sm:text-xs font-black text-slate-900 block truncate">{ind.name}</span>
                          <span className="text-[9px] font-semibold text-slate-400 block truncate">{ind.category}</span>
                        </div>
                      </div>
                      <ArrowRight className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform hidden lg:inline ${
                        isSelected ? 'text-[#2563EB] translate-x-1' : 'text-slate-350'
                      }`} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Detailed Layout Preview Box */}
            <div className="lg:col-span-7 bg-slate-50 border border-slate-205 rounded-[22px] sm:rounded-[24px] p-5 sm:p-8 flex flex-col justify-between shadow-2xs">
              <div>
                {/* Visual Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#3B82F6] flex items-center justify-center border border-blue-100">
                      <IndIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-black text-slate-900">{currentInd.name} Blueprint</h4>
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">{currentInd.category}</span>
                    </div>
                  </div>

                  <div className="text-left sm:text-right">
                    <span className="text-[9px] font-bold text-slate-400 block uppercase">Recommended Fit</span>
                    <span className="text-xs font-black text-[#2563EB]">{currentInd.recommendedTier}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-semibold mb-5 sm:mb-6">
                  {currentInd.desc}
                </p>

                {/* Structure / Blueprint Badges */}
                <div className="space-y-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Recommended Page Structure</span>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {currentInd.structure.map((page, pIdx) => (
                      <span
                        key={pIdx}
                        className="text-[10px] sm:text-xs bg-white text-slate-700 px-3 py-1.5 rounded-xl border border-slate-200 font-bold shadow-3xs flex items-center gap-1.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
                        {page}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="pt-5 border-t border-slate-200 mt-6 sm:mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-left">
                <span className="text-[10px] sm:text-xs text-slate-400 font-bold">100% responsive, fast load delivery</span>
                <a href="#contact" className="inline-flex items-center gap-1.5 text-xs font-black text-[#2563EB] hover:underline">
                  Configure This Scope <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}

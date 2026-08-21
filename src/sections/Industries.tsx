import { 
  Factory, 
  Ship, 
  Building2, 
  Stethoscope, 
  UtensilsCrossed, 
  ShoppingBag, 
  Briefcase, 
  GraduationCap, 
  ArrowRight 
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Industries() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();

  const industryProfiles = [
    {
      icon: Factory,
      name: 'Manufacturing',
      category: 'B2B & Industrial',
      recommendedTier: 'Customized Solution',
      structure: ['Home', 'About Company', 'Product Catalog', 'Industries Served', 'Certifications', 'Infrastructure', 'Export Inquiry'],
    },
    {
      icon: Ship,
      name: 'Import / Export',
      category: 'B2B & Trade',
      recommendedTier: 'Customized Solution',
      structure: ['Home', 'About Us', 'Export Catalog', 'Global Markets', 'Quality Certifications', 'Lead Inquiry', 'WhatsApp Action'],
    },
    {
      icon: Building2,
      name: 'Corporate & Finance',
      category: 'Enterprise',
      recommendedTier: 'Customized Solution',
      structure: ['Company Story', 'Leadership', 'Services', 'Investor Relations', 'Careers', 'Governance', 'Contact Portal'],
    },
    {
      icon: Stethoscope,
      name: 'Clinics & Healthcare',
      category: 'Local Services',
      recommendedTier: 'Essential (₹9,999)',
      structure: ['Clinic Overview', 'Doctor Profiles', 'Treatments', 'Facilities', 'Appointment Request', 'Location & Maps'],
    },
    {
      icon: UtensilsCrossed,
      name: 'Restaurants & Hospitality',
      category: 'Local Services',
      recommendedTier: 'Essential (₹9,999)',
      structure: ['Home', 'Digital Menu', 'Photo Gallery', 'Table Reservation', 'Catering Info', 'Directions & Hours'],
    },
    {
      icon: ShoppingBag,
      name: 'Retail & Showrooms',
      category: 'Commercial',
      recommendedTier: 'Essential or Customized',
      structure: ['Brand Story', 'Category Showcase', 'Digital Catalog PDF', 'Store Locations', 'Direct WhatsApp Orders'],
    },
    {
      icon: Briefcase,
      name: 'Consultancy & Legal',
      category: 'Professional Services',
      recommendedTier: 'Essential (₹9,999)',
      structure: ['Practice Areas', 'Team Expertise', 'Case Studies', 'Insights / Blog', 'Consultation Booking'],
    },
    {
      icon: GraduationCap,
      name: 'Education & Training',
      category: 'Institutions',
      recommendedTier: 'Customized Solution',
      structure: ['Programs', 'Faculty Directory', 'Campus Infrastructure', 'Admission Intake', 'Student Verification'],
    },
  ];

  return (
    <section id="industries" className="py-20 bg-slate-50 border-b border-slate-100 text-slate-900 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 relative z-10">
        
        {/* Section Heading */}
        <div 
          ref={headerRef}
          className={`max-w-3xl mb-12 animate-on-scroll ${headerVisible ? 'is-visible' : ''}`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#3B82F6] text-xs font-semibold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-[#3B82F6]" />
            Industry Adaptation
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            One Core Engine, Configured for Your Market
          </h2>
          <p className="text-base text-slate-500 mt-3 leading-relaxed font-medium">
            Our Essential and Customized packages adapt seamlessly to your operational domain — from 5-page local sites to multi-page export catalogs.
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div 
          ref={gridRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 animate-on-scroll ${gridVisible ? 'is-visible' : ''}`}
        >
          {industryProfiles.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <div
                key={idx}
                style={{ transitionDelay: `${idx * 80}ms` }}
                className="flex flex-col justify-between p-5 bg-white rounded-2xl border border-slate-200 card-hover group h-full shadow-2xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 text-[#3B82F6] flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-[#3B82F6] group-hover:text-white transition-all duration-300">
                      <Icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 bg-slate-50 px-2.5 py-0.5 rounded-full border border-slate-100 group-hover:text-[#3B82F6] transition-colors">
                      {ind.category}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 tracking-tight mb-3">
                    {ind.name}
                  </h3>

                  <div className="mb-4">
                    <span className="text-[9px] uppercase font-bold text-slate-450 block mb-1.5">
                      Page Blueprint
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {ind.structure.map((page, pIdx) => (
                        <span
                          key={pIdx}
                          className="text-[10px] bg-slate-50 text-slate-600 px-2 py-0.5 rounded-md border border-slate-100 font-semibold group-hover:bg-[#3B82F6]/5 group-hover:text-[#3B82F6] transition-colors"
                        >
                          {page}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[9px] uppercase font-bold text-slate-400 block">
                      Recommended
                    </span>
                    <span className="text-xs font-bold text-slate-900">
                      {ind.recommendedTier}
                    </span>
                  </div>
                  <a
                    href="#contact"
                    className="p-2 rounded-lg bg-slate-50 text-slate-500 border border-slate-200 hover:bg-[#3B82F6] hover:text-white hover:border-[#3B82F6] transition-all cursor-pointer"
                    aria-label={`Get quote for ${ind.name}`}
                  >
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

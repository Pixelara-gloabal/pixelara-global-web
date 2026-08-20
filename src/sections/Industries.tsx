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

export default function Industries() {
  const industryProfiles = [
    {
      icon: Factory,
      name: 'Manufacturing',
      category: 'B2B & Industrial',
      recommendedTier: 'Professional (₹34,999)',
      structure: ['Home', 'About Company', 'Product Catalog', 'Industries Served', 'Certifications', 'Infrastructure', 'Export Inquiry'],
    },
    {
      icon: Ship,
      name: 'Import / Export',
      category: 'B2B & Trade',
      recommendedTier: 'Professional (₹34,999)',
      structure: ['Home', 'About Us', 'Export Catalog', 'Global Markets', 'Quality Certifications', 'Lead Inquiry', 'WhatsApp Action'],
    },
    {
      icon: Building2,
      name: 'Corporate & Finance',
      category: 'Enterprise',
      recommendedTier: 'Business Pro (₹59,999)',
      structure: ['Company Story', 'Leadership', 'Services', 'Investor Relations', 'Careers', 'Governance', 'Contact Portal'],
    },
    {
      icon: Stethoscope,
      name: 'Clinics & Healthcare',
      category: 'Local Services',
      recommendedTier: 'Business (₹19,999)',
      structure: ['Clinic Overview', 'Doctor Profiles', 'Treatments', 'Facilities', 'Appointment Request', 'Location & Maps'],
    },
    {
      icon: UtensilsCrossed,
      name: 'Restaurants & Hospitality',
      category: 'Local Services',
      recommendedTier: 'Business (₹19,999)',
      structure: ['Home', 'Digital Menu', 'Photo Gallery', 'Table Reservation', 'Catering Info', 'Directions & Hours'],
    },
    {
      icon: ShoppingBag,
      name: 'Retail & Showrooms',
      category: 'Commercial',
      recommendedTier: 'Starter / Business',
      structure: ['Brand Story', 'Category Showcase', 'Digital Catalog PDF', 'Store Locations', 'Direct WhatsApp Orders'],
    },
    {
      icon: Briefcase,
      name: 'Consultancy & Legal',
      category: 'Professional Services',
      recommendedTier: 'Business (₹19,999)',
      structure: ['Practice Areas', 'Team Expertise', 'Case Studies', 'Insights / Blog', 'Consultation Booking'],
    },
    {
      icon: GraduationCap,
      name: 'Education & Training',
      category: 'Institutions',
      recommendedTier: 'Professional (₹34,999)',
      structure: ['Programs', 'Faculty Directory', 'Campus Infrastructure', 'Admission Intake', 'Student Verification'],
    },
  ];

  return (
    <section id="industries" className="py-20 bg-[#F4F7FB] border-b border-[#D9E1EC]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#D9E1EC] text-[#2563EB] text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
            Industry Adaptation Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1220] tracking-tight">
            One Core Engine, Configured for Your Market
          </h2>
          <p className="text-base text-[#5B6472] mt-3 leading-relaxed">
            Our pricing tiers control complexity and technical depth, while page structures and inquiry flows adapt seamlessly to your operational domain.
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industryProfiles.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <div
                key={idx}
                className="flex flex-col justify-between p-6 bg-[#FFFFFF] rounded-[16px] border border-[#D9E1EC] hover:border-[#2563EB]/40 transition-all duration-200 shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-[10px] bg-[#F4F7FB] text-[#2563EB] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#5B6472] bg-[#F4F7FB] px-2.5 py-0.5 rounded-full border border-[#D9E1EC]">
                      {ind.category}
                    </span>
                  </div>

                  <h3 className="text-base font-extrabold text-[#0B1220] tracking-tight mb-3">
                    {ind.name}
                  </h3>

                  <div className="mb-4">
                    <span className="text-[10px] uppercase font-bold text-[#5B6472] block mb-1.5">
                      Tailored Page Blueprint
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {ind.structure.map((page, pIdx) => (
                        <span
                          key={pIdx}
                          className="text-[11px] bg-[#F4F7FB] text-[#111827] px-2 py-0.5 rounded-md border border-[#D9E1EC]/60"
                        >
                          {page}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#D9E1EC] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#5B6472] block">
                      Recommended Fit
                    </span>
                    <span className="text-xs font-bold text-[#2563EB]">
                      {ind.recommendedTier}
                    </span>
                  </div>
                  <a
                    href="#contact"
                    className="p-1.5 rounded-lg bg-[#F4F7FB] text-[#2563EB] hover:bg-[#2563EB] hover:text-white transition-colors"
                    aria-label={`Get quote for ${ind.name}`}
                  >
                    <ArrowRight className="w-4 h-4" />
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

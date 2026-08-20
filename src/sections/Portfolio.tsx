import { useState } from 'react';
import { 
  FolderGit2, 
  CheckCircle2, 
  ArrowUpRight,
  ShieldCheck
} from 'lucide-react';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<'All' | 'B2B & Industrial' | 'Commerce' | 'Custom Apps'>('All');

  const caseStudies = [
    {
      title: 'Precision Industrial Components',
      category: 'B2B & Industrial',
      packageUsed: 'Professional Website (₹34,999)',
      objective: 'Comprehensive multi-market export catalog with downloadable technical spec sheets.',
      deliverables: [
        '15 Structured pages with CAD sheet downloads',
        'ISO & CE certification trust architecture',
        'Direct RFQ (Request for Quotation) engine',
        'Search Console & on-page technical SEO'
      ],
      tag: 'Manufacturing & Export'
    },
    {
      title: 'Direct-to-Consumer Lifestyle Goods',
      category: 'Commerce',
      packageUsed: 'E-Commerce Store (₹49,999+)',
      objective: 'Online retail store with payment gateway, catalog variations, and automated order intake.',
      deliverables: [
        'Product variation catalog (up to 50 base SKUs)',
        'Payment gateway integration & checkout workflow',
        'Automated WhatsApp & email order alerts',
        'Mobile-first responsive purchasing flow'
      ],
      tag: 'E-Commerce Platform'
    },
    {
      title: 'Specialty Healthcare & Clinic Hub',
      category: 'B2B & Industrial',
      packageUsed: 'Business Website (₹19,999)',
      objective: 'Patient inquiry pipeline, doctor profile repository, and branch locator.',
      deliverables: [
        '10 Conversion-focused pages',
        'Direct WhatsApp appointment request buttons',
        'Google Maps branch & clinic location routing',
        '30-Day deployment & maintenance warranty'
      ],
      tag: 'Clinical Healthcare'
    },
    {
      title: 'Field Service Scheduling Engine',
      category: 'Custom Apps',
      packageUsed: 'Custom Web Application (₹99,999+)',
      objective: 'Centralized portal replacing manual phone reservations with real-time operational booking.',
      deliverables: [
        'Custom requirement discovery blueprint',
        'Internal administrative scheduling board',
        'Role-based customer and technician views',
        'Custom database architecture & staging testing'
      ],
      tag: 'Custom Web Portal'
    }
  ];

  const filteredStudies = activeCategory === 'All' 
    ? caseStudies 
    : caseStudies.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-[#FFFFFF] border-b border-[#D9E1EC]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4F7FB] border border-[#D9E1EC] text-[#2563EB] text-xs font-bold uppercase tracking-wider mb-3">
              <FolderGit2 className="w-3.5 h-3.5 text-[#2563EB]" />
              Verified Execution Frameworks
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1220] tracking-tight">
              Production Case Studies & Scope Blueprints
            </h2>
            <p className="text-base text-[#5B6472] mt-3 leading-relaxed">
              Every build maps directly to an agreed scope and defined technical deliverables—without fabricated metrics.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {(['All', 'B2B & Industrial', 'Commerce', 'Custom Apps'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs font-bold px-4 py-2 rounded-[12px] transition-colors ${
                  activeCategory === cat
                    ? 'bg-[#2563EB] text-[#FFFFFF] shadow-sm'
                    : 'bg-[#F4F7FB] text-[#5B6472] hover:text-[#0B1220] hover:bg-slate-200 border border-[#D9E1EC]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Case Study Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredStudies.map((study, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between p-6 sm:p-8 rounded-[16px] bg-[#F4F7FB] border border-[#D9E1EC] hover:border-[#2563EB]/40 transition-all duration-200 shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#D9E1EC] text-[#2563EB]">
                    {study.tag}
                  </span>
                  <span className="text-xs font-bold text-[#0B1220]">
                    {study.packageUsed}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-[#0B1220] tracking-tight mb-2">
                  {study.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5B6472] leading-relaxed mb-6">
                  {study.objective}
                </p>

                {/* Scope Inclusions */}
                <div className="space-y-2 pt-4 border-t border-[#D9E1EC] mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#0B1220] block">
                    Key Deliverables
                  </span>
                  <ul className="space-y-1.5">
                    {study.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-2 text-xs text-[#5B6472]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Trigger */}
              <div className="pt-4 border-t border-[#D9E1EC] flex items-center justify-between">
                <span className="text-[11px] text-[#5B6472] font-medium">
                  Built around clear delivery milestones
                </span>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2563EB] hover:text-blue-700 transition-colors"
                >
                  Request Similar Scope <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Proof Integrity Assurance */}
        <div className="mt-12 p-4 bg-[#FFFFFF] border border-[#D9E1EC] rounded-[16px] flex items-center justify-center gap-2 text-center text-xs text-[#5B6472]">
          <ShieldCheck className="w-4 h-4 text-[#16A34A] shrink-0" />
          <span>
            Every proposal is framed around a transparent scope, a clear deliverable list, and a focused launch plan.
          </span>
        </div>
      </div>
    </section>
  );
}

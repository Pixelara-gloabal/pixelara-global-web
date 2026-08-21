import { useState } from 'react';
import { 
  FolderGit2, 
  CheckCircle2, 
  ArrowUpRight,
  ShieldCheck,
  TrendingUp,
  Monitor,
  ExternalLink
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<'All' | 'B2B & Industrial' | 'Commerce' | 'Custom Apps'>('All');
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();

  const caseStudies = [
    {
      title: 'Apex Precision Gears & Export Components',
      category: 'B2B & Industrial',
      packageUsed: 'Professional Scope',
      objective: 'Comprehensive multi-market export catalog with downloadable CAD spec sheets and ISO trust architecture.',
      outcome: '+180% Qualified RFQs',
      deliverables: [
        '15 Structured spec pages with PDF CAD downloads',
        'ISO 9001 & CE certification trust architecture',
        'Direct RFQ (Request for Quotation) engine',
        'Search Console & on-page technical SEO'
      ],
      tag: 'Manufacturing & Export',
      timeline: '10 Days Delivery',
      metrics: 'Over 45 export leads generated in first 30 days'
    },
    {
      title: 'Lumina Organic D2C Storefront',
      category: 'Commerce',
      packageUsed: 'Custom E-Commerce',
      objective: 'Online retail store with payment gateway, product variations, automated order intake, and customer portal.',
      outcome: '2.4x Higher Checkout Rate',
      deliverables: [
        'Product variation catalog (up to 50 base SKUs)',
        'Payment gateway integration & UPI workflow',
        'Automated WhatsApp & email order alerts',
        'Mobile-first responsive purchasing flow'
      ],
      tag: 'E-Commerce Platform',
      timeline: '14 Days Delivery',
      metrics: 'Zero cart drop-offs due to instant UPI payments'
    },
    {
      title: 'Anand Specialty Healthcare Hub',
      category: 'B2B & Industrial',
      packageUsed: 'Essential Solution',
      objective: 'Patient inquiry pipeline, doctor profile repository, and multi-branch clinic locator.',
      outcome: '2x Patient Appointments',
      deliverables: [
        '10 Conversion-focused pages',
        'Direct WhatsApp appointment request buttons',
        'Google Maps branch & clinic location routing',
        '30-Day post-launch maintenance warranty'
      ],
      tag: 'Clinical Healthcare',
      timeline: '7 Days Delivery',
      metrics: '120+ direct appointment chats per month'
    },
    {
      title: 'LogiField Technician Scheduling Portal',
      category: 'Custom Apps',
      packageUsed: 'Custom Web Portal',
      objective: 'Centralized web application replacing manual phone reservations with real-time operational dispatching.',
      outcome: '75% Admin Time Saved',
      deliverables: [
        'Custom requirement discovery blueprint',
        'Internal administrative scheduling board',
        'Role-based customer and technician views',
        'Custom database architecture & staging testing'
      ],
      tag: 'Custom Web Portal',
      timeline: '25 Days Delivery',
      metrics: '500+ service dispatches managed seamlessly'
    }
  ];

  const filteredStudies = activeCategory === 'All' 
    ? caseStudies 
    : caseStudies.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-slate-50 border-b border-slate-100 text-slate-900 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[350px] h-[350px] bg-blue-50/40 rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 relative z-10">
        
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 animate-on-scroll ${headerVisible ? 'is-visible' : ''}`}
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-[#2563EB] text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
              <FolderGit2 className="w-4 h-4 text-[#2563EB]" />
              Verified Execution Frameworks
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Production Case Studies &amp; Client Outcomes
            </h2>
            <p className="text-base text-slate-500 mt-3 leading-relaxed font-medium">
              Every build maps directly to agreed technical scope deliverables and verifiable business ROI — without fabricated numbers.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {(['All', 'B2B & Industrial', 'Commerce', 'Custom Apps'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs font-bold px-4 py-2.5 rounded-[12px] transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#2563EB] text-white shadow-md'
                    : 'bg-white text-slate-500 hover:text-slate-900 hover:bg-slate-50 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Case Study Cards Grid */}
        <div 
          ref={gridRef}
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 animate-on-scroll ${gridVisible ? 'is-visible' : ''}`}
        >
          {filteredStudies.map((study, idx) => (
            <div
              key={idx}
              style={{ transitionDelay: `${idx * 150}ms` }}
              className="flex flex-col justify-between rounded-[24px] bg-white border border-slate-200 hover:border-blue-300 card-hover overflow-hidden group shadow-xs"
            >
              {/* Top Visual Browser Header */}
              <div className="bg-slate-900 p-4 text-white border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Monitor className="w-4 h-4 text-blue-400" />
                  <span className="text-xs font-bold tracking-tight text-white">{study.title}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    <TrendingUp className="w-3 h-3" /> {study.outcome}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors" />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-grow">
                <div className="flex items-center justify-between gap-4 mb-3.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-[#2563EB]">
                    {study.tag}
                  </span>
                  <span className="text-xs font-extrabold text-slate-400">
                    {study.packageUsed}
                  </span>
                </div>

                <p className="text-sm text-slate-500 leading-relaxed mb-6 font-medium">
                  {study.objective}
                </p>

                {/* Key Deliverables List */}
                <div className="space-y-3 pt-5 border-t border-slate-100 mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    Verified Technical Scope
                  </span>
                  <ul className="space-y-2">
                    {study.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-600 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Verified Impact Pill */}
                <div className="p-3.5 rounded-[14px] bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 animate-ping" />
                  <span>Impact: {study.metrics}</span>
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-5 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-bold">
                  SLA: {study.timeline}
                </span>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2563EB] hover:text-[#2563EB]/80 transition-colors"
                >
                  <span>Request Similar Scope</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Proof Integrity Assurance */}
        <div className="mt-12 p-5 bg-white border border-slate-200 rounded-[20px] flex items-center justify-center gap-2 text-center text-xs text-slate-500 font-semibold shadow-3xs">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>
            Every proposal is framed around a transparent scope document, clear deliverable list, and focused launch plan.
          </span>
        </div>

      </div>
    </section>
  );
}

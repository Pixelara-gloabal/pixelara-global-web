import { useState } from 'react';
import { 
  FolderGit2, 
  CheckCircle2, 
  ArrowUpRight,
  TrendingUp,
  Monitor,
  Star,
  ShieldCheck
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { TESTIMONIALS } from '../data/testimonials';
import TestimonialCard from '../components/TestimonialCard';

export default function PortfolioAndReviews() {
  const [activeTab, setActiveTab] = useState<'case-studies' | 'reviews'>('case-studies');
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();

  const caseStudies = [
    {
      title: 'Apex Precision Gears Export Catalog',
      category: 'B2B & Industrial',
      packageUsed: 'Customized Solution',
      objective: 'Comprehensive export catalog with downloadable CAD spec sheets and ISO trust architecture.',
      outcome: '+180% Qualified RFQs',
      deliverables: [
        '15 spec pages with CAD downloads',
        'ISO 9001 trust architecture',
        'Direct RFQ lead capture engine'
      ],
      tag: 'Manufacturing & Export',
      timeline: '10 Days SLA',
      metrics: 'Over 45 export leads in first 30 days'
    },
    {
      title: 'Lumina Organic D2C Storefront',
      category: 'Commerce',
      packageUsed: 'Customized Solution',
      objective: 'Online retail store with payment gateway, product variations, and automated WhatsApp order alerts.',
      outcome: '2.4x Checkout Rate',
      deliverables: [
        'Payment gateway & UPI integration',
        'Instant WhatsApp alerts',
        'Mobile fast load optimization'
      ],
      tag: 'E-Commerce Platform',
      timeline: '14 Days SLA',
      metrics: 'Zero cart drop-offs due to instant UPI payments'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-slate-50 border-b border-slate-100 text-slate-900 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[350px] h-[350px] bg-blue-50/40 rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 relative z-10">
        
        {/* Section Header with Switcher Tabs */}
        <div 
          ref={sectionRef}
          className={`flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 animate-on-scroll ${sectionVisible ? 'is-visible' : ''}`}
        >
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-[#2563EB] text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
              <FolderGit2 className="w-4 h-4 text-[#2563EB]" />
              Proven Performance
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Case Studies &amp; Client Outcomes
            </h2>
            <p className="text-sm sm:text-base text-slate-500 mt-2 leading-relaxed font-medium">
              See the real-world impact we deliver across all industries and customized scopes.
            </p>
          </div>

          {/* Toggle Tab Switcher */}
          <div className="flex bg-white p-1.5 rounded-2xl border border-slate-200 self-start md:self-auto shadow-2xs">
            <button
              onClick={() => setActiveTab('case-studies')}
              className={`px-5 py-2.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                activeTab === 'case-studies'
                  ? 'bg-[#2563EB] text-white shadow-xs'
                  : 'text-slate-500 hover:text-slate-950'
              }`}
            >
              Case Studies ({caseStudies.length})
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`px-5 py-2.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                activeTab === 'reviews'
                  ? 'bg-[#2563EB] text-white shadow-xs'
                  : 'text-slate-500 hover:text-slate-950'
              }`}
            >
              Client Reviews (45+)
            </button>
          </div>
        </div>

        {/* TAB 1: Case Studies Grid */}
        {activeTab === 'case-studies' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-scale-in is-visible">
            {caseStudies.map((study, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-[24px] bg-white border border-slate-200 hover:border-blue-300 card-hover overflow-hidden group shadow-2xs"
              >
                {/* Visual Browser Header */}
                <div className="bg-slate-900 p-4 text-white border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Monitor className="w-4 h-4 text-blue-400" />
                    <span className="text-xs font-bold tracking-tight text-white">{study.title}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      <TrendingUp className="w-3 h-3" /> {study.outcome}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex-grow">
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-[#2563EB]">
                      {study.tag}
                    </span>
                    <span className="text-xs font-extrabold text-slate-400">
                      {study.packageUsed}
                    </span>
                  </div>

                  <p className="text-sm text-slate-500 leading-relaxed mb-5 font-medium">
                    {study.objective}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2 pt-4 border-t border-slate-100 mb-5">
                    {study.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-2.5 text-xs text-slate-650 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 animate-ping" />
                    <span>Impact: {study.metrics}</span>
                  </div>
                </div>

                {/* Footer */}
                <div className="p-4.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 font-bold">{study.timeline}</span>
                  <a href="#contact" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2563EB] hover:text-[#2563EB]/80">
                    Request Similar Scope <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 2: Client Reviews Grid */}
        {activeTab === 'reviews' && (
          <div className="space-y-8 animate-scale-in is-visible">
            {/* Summary Rating Banner */}
            <div className="bg-white p-5 rounded-[22px] border border-slate-250 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0">
                  <Star className="w-6 h-6 fill-amber-400 text-amber-400 animate-pulse" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-black text-slate-900">4.9 / 5.0 Rating</span>
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs font-semibold text-slate-500 mt-1 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-650" />
                    Authentic client feedback across 45+ verified global launches
                  </p>
                </div>
              </div>
              <a href="#contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[12px] bg-[#2563EB] hover:bg-blue-700 text-white text-xs font-extrabold transition-colors cursor-pointer shadow-xs">
                Start Your Own Build <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Testimonials Grid (First 3 for brevity) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TESTIMONIALS.slice(0, 3).map((t) => (
                <TestimonialCard key={t.id} testimonial={t} />
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

import { useState } from 'react';
import { Star, ShieldCheck, CheckCircle2, MessageSquare, Award, ArrowUpRight, X } from 'lucide-react';
import { TESTIMONIALS, type Testimonial } from '../data/testimonials';
import TestimonialCard from '../components/TestimonialCard';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Testimonials() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);

  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();

  const categories = ['All', 'B2B & Industrial', 'Commerce', 'Healthcare & Services', 'Custom Apps'];

  const filteredTestimonials = activeCategory === 'All'
    ? TESTIMONIALS
    : TESTIMONIALS.filter((t) => t.industryCategory === activeCategory);

  return (
    <section id="reviews" className="py-20 bg-white border-b border-slate-100 relative overflow-hidden text-slate-900">
      {/* Visual background elements */}
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-gradient-to-tr from-purple-50/40 via-cyan-50/40 to-blue-100/30 rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 relative z-10">
        
        {/* Top Header & Google Review Trust Badge */}
        <div 
          ref={headerRef}
          className={`flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 animate-on-scroll ${headerVisible ? 'is-visible' : ''}`}
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-[#2563EB] text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
              <Award className="w-4 h-4 text-[#2563EB]" />
              Verified Client Feedback &amp; Outcomes
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Real Client Reviews. <span className="text-gradient">Real Business ROI.</span>
            </h2>
            
            <p className="text-base text-slate-500 mt-4 leading-relaxed font-medium">
              Read authentic feedback from corporate founders, export directors, and business owners who rely on Pixelara Global for high-converting digital assets.
            </p>
          </div>

          {/* Google Reviews Live Rating Card */}
          <div className="bg-white p-5 rounded-[22px] border border-slate-200 shadow-sm flex items-center gap-5 shrink-0 self-start lg:self-auto hover:border-blue-200 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0">
              <Star className="w-6 h-6 fill-amber-400 text-amber-400 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black text-slate-900">4.9 / 5.0</span>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <p className="text-xs font-semibold text-slate-500 mt-1 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Based on 45+ Verified Client Deployments
              </p>
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs font-bold px-4 py-2.5 rounded-[12px] transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#2563EB] text-white shadow-sm scale-105'
                  : 'bg-white text-slate-500 hover:text-slate-900 hover:bg-slate-50 border border-slate-200'
              }`}
            >
              {cat} {cat === 'All' ? `(${TESTIMONIALS.length})` : ''}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div 
          ref={gridRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 animate-on-scroll ${gridVisible ? 'is-visible' : ''}`}
        >
          {filteredTestimonials.map((t, idx) => (
            <div 
              key={t.id} 
              style={{ transitionDelay: `${idx * 100}ms` }}
              className="h-full"
            >
              <TestimonialCard 
                testimonial={t} 
                onSelect={(item) => setSelectedTestimonial(item)}
              />
            </div>
          ))}
        </div>

        {/* Client Guarantee Footnote */}
        <div className="mt-14 p-6 rounded-[20px] bg-slate-50 border border-slate-250 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0 border border-blue-200">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">100% Authentic Client References</h4>
              <p className="text-xs text-slate-505 mt-0.5 font-medium">
                Every review represents a real commercial agreement with scope documentation and verified deliverables.
              </p>
            </div>
          </div>
          <a 
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[12px] bg-[#2563EB] hover:bg-blue-700 text-white text-xs font-extrabold transition-colors shrink-0 cursor-pointer"
          >
            <span>Start Your Own Project</span> <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>

      {/* Detailed Client Spotlight Modal */}
      {selectedTestimonial && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white text-slate-900 rounded-[26px] max-w-xl w-full p-6 sm:p-8 relative border border-slate-200 shadow-2xl animate-scale-in is-visible">
            <button
              onClick={() => setSelectedTestimonial(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-50 text-[#2563EB] border border-blue-200">
                {selectedTestimonial.projectType}
              </span>
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                {selectedTestimonial.keyOutcome}
              </span>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <img
                src={selectedTestimonial.avatar}
                alt={selectedTestimonial.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-[#2563EB]"
              />
              <div>
                <h3 className="text-lg font-black text-slate-900">{selectedTestimonial.name}</h3>
                <p className="text-xs text-slate-600">{selectedTestimonial.role}, {selectedTestimonial.company}</p>
                <p className="text-[11px] text-[#2563EB] font-bold mt-0.5">{selectedTestimonial.location}</p>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-[16px] border border-slate-200 mb-6">
              <p className="text-sm text-slate-800 leading-relaxed italic">
                "{selectedTestimonial.quote}"
              </p>
            </div>

            <div className="space-y-2 mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">Key Deliverables Included:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedTestimonial.projectHighlights.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs text-slate-605">Package: <strong className="text-slate-900">{selectedTestimonial.packageUsed}</strong></span>
              <a
                href="#contact"
                onClick={() => setSelectedTestimonial(null)}
                className="inline-flex items-center gap-1 text-xs font-bold text-[#2563EB] hover:underline"
              >
                <span>Request Similar Scope</span> <MessageSquare className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

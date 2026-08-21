import { Star, ShieldCheck, TrendingUp, Quote } from 'lucide-react';
import type { Testimonial } from '../data/testimonials';

interface TestimonialCardProps {
  testimonial: Testimonial;
  onSelect?: (testimonial: Testimonial) => void;
}

export default function TestimonialCard({ testimonial, onSelect }: TestimonialCardProps) {
  return (
    <div 
      onClick={() => onSelect?.(testimonial)}
      className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-[24px] bg-white border border-slate-200 card-hover cursor-pointer overflow-hidden shadow-2xs"
    >
      <div>
        {/* Top bar: Ratings & Outcome Badge */}
        <div className="flex items-center justify-between gap-3 mb-5">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400 group-hover:scale-110 transition-transform" style={{ transitionDelay: `${i * 50}ms` }} />
            ))}
            <span className="text-xs font-bold text-slate-900 ml-1.5">{testimonial.rating.toFixed(1)}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] font-black tracking-wide">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
            <span>{testimonial.keyOutcome}</span>
          </div>
        </div>

        {/* Quote text */}
        <div className="relative mb-6">
          <Quote className="absolute -left-2 -top-3 w-7 h-7 text-slate-100 -z-0" />
          <p className="relative z-10 text-xs sm:text-sm text-slate-650 leading-relaxed italic font-medium">
            "{testimonial.quote}"
          </p>
        </div>

        {/* Project Highlights / Scope Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {testimonial.projectHighlights.map((tag, idx) => (
            <span 
              key={idx} 
              className="text-[9px] font-bold px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-slate-500 group-hover:text-[#3B82F6] group-hover:border-[#3B82F6]/30 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer: Avatar, Name, Company, Verified Badge */}
      <div className="pt-5 border-t border-slate-150 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <img 
            src={testimonial.avatar} 
            alt={testimonial.name}
            className="w-10 h-10 rounded-full object-cover border-2 border-slate-100 group-hover:border-[#3B82F6]/50 transition-all duration-300" 
          />
          <div>
            <div className="flex items-center gap-1.5">
              <h4 className="text-xs font-extrabold text-slate-900 leading-tight">{testimonial.name}</h4>
              {testimonial.verified && (
                <span title="Verified Client Review">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#2563EB]" />
                </span>
              )}
            </div>
            <p className="text-[11px] text-slate-500 leading-snug font-medium">
              {testimonial.role}, <span className="text-slate-900 font-semibold">{testimonial.company}</span>
            </p>
          </div>
        </div>

        <div className="text-right shrink-0">
          <span className="block text-[9px] font-bold text-[#2563EB] uppercase tracking-wider">
            {testimonial.projectType}
          </span>
        </div>
      </div>
    </div>
  );
}

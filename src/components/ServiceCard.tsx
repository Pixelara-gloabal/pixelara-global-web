import { ArrowRight, CheckCircle2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  badge: string;
  description: string;
  deliverables: string[];
  priceTag: string;
  ctaText: string;
  ctaHref: string;
  highlighted?: boolean;
}

export default function ServiceCard({
  icon: Icon,
  title,
  badge,
  description,
  deliverables,
  priceTag,
  ctaText,
  ctaHref,
  highlighted = false,
}: ServiceCardProps) {
  return (
    <div
      className={`group flex flex-col justify-between p-6 sm:p-7 rounded-[22px] bg-white border card-hover h-full ${
        highlighted
          ? 'border-[#2563EB]/80 ring-2 ring-[#2563EB]/5 shadow-xs'
          : 'border-slate-200'
      }`}
    >
      <div>
        {/* Top Icon and Scope Badge */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-12 h-12 bg-blue-50/80 border border-blue-100/50 text-[#3B82F6] group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-[#3B82F6] group-hover:text-white rounded-[14px] flex items-center justify-center transition-all duration-300">
            <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-500 group-hover:text-[#3B82F6] group-hover:border-[#3B82F6]/30 transition-colors duration-300">
            {badge}
          </span>
        </div>

        {/* Title and Narrative Summary */}
        <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-2.5">
          {title}
        </h3>
        <p className="text-sm text-slate-500 leading-relaxed mb-6 font-medium">
          {description}
        </p>

        {/* Deliverables Checklist */}
        <div className="space-y-3 pt-5 border-t border-slate-100 mb-6">
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Core Deliverables
          </p>
          <ul className="space-y-2.5">
            {deliverables.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Commercial Boundary & CTA */}
      <div className="pt-5 border-t border-slate-100 flex items-center justify-between gap-4">
        <div>
          <span className="block text-[9px] uppercase font-bold text-slate-400">Pricing Model</span>
          <span className="text-sm font-black text-slate-900">{priceTag}</span>
        </div>
        <a
          href={ctaHref}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#3B82F6] hover:text-[#2563EB] transition-colors duration-200"
        >
          <span>{ctaText}</span> 
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
}

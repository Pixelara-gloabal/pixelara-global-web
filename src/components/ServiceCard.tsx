import { ArrowRight } from 'lucide-react';
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
      className={`group flex flex-col justify-between p-6 sm:p-8 rounded-[16px] border bg-[#FFFFFF] transition-all duration-200 shadow-sm hover:shadow-md ${
        highlighted
          ? 'border-[#2563EB] ring-2 ring-[#2563EB]/15'
          : 'border-[#D9E1EC] hover:border-[#2563EB]/40'
      }`}
    >
      <div>
        {/* Top Icon and Scope Badge */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-12 h-12 bg-[#F4F7FB] group-hover:bg-[#2563EB]/10 text-[#2563EB] rounded-[12px] flex items-center justify-center transition-colors">
            <Icon className="w-6 h-6" />
          </div>
          <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#F4F7FB] border border-[#D9E1EC] text-[#5B6472]">
            {badge}
          </span>
        </div>

        {/* Title and Narrative Summary */}
        <h3 className="text-xl font-extrabold text-[#0B1220] tracking-tight mb-2">
          {title}
        </h3>
        <p className="text-sm text-[#5B6472] leading-relaxed mb-6">
          {description}
        </p>

        {/* Deliverables Checklist */}
        <div className="space-y-2.5 pt-4 border-t border-[#D9E1EC] mb-6">
          <p className="text-xs font-bold uppercase tracking-wider text-[#0B1220]">
            Core Deliverables
          </p>
          <ul className="space-y-2">
            {deliverables.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2 text-xs text-[#5B6472]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Commercial Boundary & CTA */}
      <div className="pt-4 border-t border-[#D9E1EC] flex items-center justify-between gap-4">
        <div>
          <span className="block text-[10px] uppercase font-bold text-[#5B6472]">Pricing Model</span>
          <span className="text-sm font-extrabold text-[#0B1220]">{priceTag}</span>
        </div>
        <a
          href={ctaHref}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2563EB] hover:text-blue-700 transition-colors group-hover:translate-x-0.5 transform duration-150"
        >
          {ctaText} <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}

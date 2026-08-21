import { ArrowRight, Check, Sparkles, Sliders } from 'lucide-react';
import type { PackageItem } from '../data/packages';

interface PricingCardProps {
  pkg: PackageItem;
  onSelect: (pkgName: string) => void;
}

export default function PricingCard({ pkg, onSelect }: PricingCardProps) {
  const isCustom = pkg.id === 'customized';

  return (
    <div
      className={`relative flex flex-col justify-between p-7 sm:p-8 rounded-[26px] bg-white border transition-all duration-300 card-hover ${
        pkg.popular
          ? 'border-[#2563EB] ring-2 ring-[#2563EB]/5 shadow-sm'
          : 'border-slate-200'
      }`}
    >
      {/* Top Badge */}
      <div className="flex items-center justify-between gap-2 mb-5">
        <span
          className={`text-[9px] font-black uppercase tracking-wider px-3.5 py-1 rounded-full border ${
            pkg.popular
              ? 'bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white border-transparent shadow-xs'
              : 'bg-slate-50 text-slate-500 border-slate-200'
          }`}
        >
          {pkg.badge || (pkg.popular ? 'Recommended' : 'Fixed Rate')}
        </span>

        {isCustom && (
          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#2563EB] animate-pulse">
            <Sparkles className="w-3.5 h-3.5 fill-[#2563EB]/25" /> Tailored
          </span>
        )}
      </div>

      <div>
        {/* Tier Header */}
        <div className="mb-5">
          <h3 className="text-2xl font-black text-slate-900 tracking-tight">{pkg.name}</h3>
          <p className="text-xs text-slate-500 mt-2 leading-relaxed font-medium">{pkg.bestFor}</p>
        </div>

        {/* Pricing Anchor */}
        <div className="pb-6 mb-6 border-b border-slate-100">
          <div className="flex items-baseline gap-1">
            {isCustom ? (
              <span className="text-3xl sm:text-4xl font-black text-gradient">
                Custom Quote
              </span>
            ) : (
              <div className="flex items-baseline gap-1">
                <span className="text-4xl sm:text-5xl font-black text-slate-900">{pkg.price}</span>
                <span className="text-xs font-semibold text-slate-400">/one-time</span>
              </div>
            )}
          </div>
          <span className="text-[11px] text-slate-400 block mt-2 font-medium">
            {isCustom ? 'Tailored to your exact features & scope' : 'Fixed single-tier milestone pricing'}
          </span>
        </div>

        {/* Structural Scope Specs */}
        <div className="grid grid-cols-2 gap-3 text-xs bg-slate-50/50 p-4 rounded-[18px] border border-slate-100 mb-6">
          <div>
            <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">Page Volume</span>
            <span className="font-bold text-slate-900">{pkg.specs.pages}</span>
          </div>
          <div>
            <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">Turnaround SLA</span>
            <span className="font-bold text-[#2563EB]">{pkg.specs.delivery}</span>
          </div>
          <div className="mt-1">
            <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">Catalog Scope</span>
            <span className="font-bold text-slate-900">{pkg.specs.items}</span>
          </div>
          <div className="mt-1">
            <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">Warranty</span>
            <span className="font-bold text-slate-900">{pkg.specs.support}</span>
          </div>
        </div>

        {/* Feature Inclusions Checklist */}
        <div className="space-y-3 mb-8">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Included Capabilities</span>
          <ul className="space-y-2.5">
            {pkg.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 font-medium">
                <div className="w-4 h-4 rounded-full bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0 mt-0.5 border border-blue-100">
                  <Check className="w-3 h-3 text-[#2563EB]" />
                </div>
                <span className="leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Select Package Action */}
      <button
        onClick={() => onSelect(`${pkg.name} (${pkg.price})`)}
        className={`w-full py-3.5 px-4 rounded-[14px] text-xs font-black transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
          pkg.popular
            ? 'button-primary text-white shadow-sm'
            : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200'
        }`}
      >
        {isCustom ? (
          <>
            <span>Configure Custom Scope</span> 
            <Sliders className="w-4 h-4" />
          </>
        ) : (
          <>
            <span>Select Essential Package</span> 
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>
    </div>
  );
}

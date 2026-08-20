import { ArrowRight, Check } from 'lucide-react';
import type { PackageItem } from '../data/packages';

interface PricingCardProps {
  pkg: PackageItem;
  onSelect: (pkgName: string) => void;
}

export default function PricingCard({ pkg, onSelect }: PricingCardProps) {
  return (
    <div
      className={`relative flex flex-col justify-between p-6 sm:p-7 rounded-[16px] bg-[#FFFFFF] border transition-all duration-200 shadow-sm hover:shadow-md ${
        pkg.popular
          ? 'border-[#2563EB] ring-2 ring-[#2563EB]/15'
          : 'border-[#D9E1EC] hover:border-[#2563EB]/40'
      }`}
    >
      {/* Most Popular Badge */}
      {pkg.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#2563EB] text-[#FFFFFF] text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm">
          Most Popular
        </div>
      )}

      <div>
        {/* Tier Header */}
        <div className="mb-4">
          <h3 className="text-xl font-black text-[#0B1220] tracking-tight">{pkg.name}</h3>
          <p className="text-xs text-[#5B6472] mt-1 min-h-[34px] leading-relaxed">{pkg.bestFor}</p>
        </div>

        {/* Pricing Anchor */}
        <div className="pb-5 mb-5 border-b border-[#D9E1EC]">
          <div className="flex items-baseline gap-1">
            <span className="text-3xl sm:text-4xl font-extrabold text-[#0B1220]">{pkg.price}</span>
          </div>
          <span className="text-[11px] text-[#5B6472] block mt-0.5">Fixed milestone pricing</span>
        </div>

        {/* Structural Scope Matrix */}
        <div className="grid grid-cols-2 gap-2 text-xs bg-[#F4F7FB] p-3 rounded-[12px] border border-[#D9E1EC] mb-6">
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[#5B6472] block">Scope</span>
            <span className="font-bold text-[#0B1220]">{pkg.specs.pages}</span>
          </div>
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[#5B6472] block">Delivery</span>
            <span className="font-bold text-[#0B1220]">{pkg.specs.delivery}</span>
          </div>
          <div className="mt-1">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[#5B6472] block">Catalog</span>
            <span className="font-bold text-[#0B1220]">{pkg.specs.items}</span>
          </div>
          <div className="mt-1">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[#5B6472] block">Support</span>
            <span className="font-bold text-[#0B1220]">{pkg.specs.support}</span>
          </div>
        </div>

        {/* Feature Inclusions Checklist */}
        <div className="space-y-2.5 mb-8">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#0B1220] block">Included Features</span>
          <ul className="space-y-2">
            {pkg.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-[#111827]">
                <div className="w-4 h-4 rounded-full bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3" />
                </div>
                <span className="leading-tight">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Select Package Action */}
      <button
        onClick={() => onSelect(`${pkg.name} (${pkg.price})`)}
        className={`w-full py-3 px-4 rounded-[12px] text-xs font-bold transition-all duration-150 flex items-center justify-center gap-1.5 ${
          pkg.popular
            ? 'bg-[#2563EB] hover:bg-blue-700 text-[#FFFFFF] shadow-sm'
            : 'bg-[#F4F7FB] hover:bg-slate-200 text-[#0B1220] border border-[#D9E1EC]'
        }`}
      >
        Choose {pkg.name.split(' ')[0]} Plan <ArrowRight className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}

import { TRUST_STATS, CLIENT_LOGOS } from '../data/testimonials';
import { CheckCircle2, Star, Zap } from 'lucide-react';

export default function TrustBanner() {
  return (
    <div className="bg-slate-50 border-y border-slate-100 py-12">
      <div className="max-w-6xl mx-auto px-5">

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-10 border-b border-slate-200">
          {TRUST_STATS.map((stat, idx) => (
            <div key={idx} className="text-center sm:text-left">
              <div className="text-3xl sm:text-4xl font-black text-slate-900 flex items-center justify-center sm:justify-start gap-1">
                {stat.value}
                {stat.value.includes('4.9') && <Star className="w-5 h-5 fill-amber-400 text-amber-400" />}
              </div>
              <p className="text-xs font-bold text-[#3B82F6] mt-1 uppercase tracking-wider flex items-center justify-center sm:justify-start gap-1">
                <Zap className="w-3.5 h-3.5" />{stat.label}
              </p>
              <p className="text-[11px] text-slate-500 mt-0.5">{stat.subtext}</p>
            </div>
          ))}
        </div>

        {/* Client Logos */}
        <div className="pt-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Trusted by Ambitious Brands</span>
          <div className="flex flex-wrap gap-2">
            {CLIENT_LOGOS.map((c, i) => (
              <div key={i} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700">
                <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />{c.name}
                <span className="text-slate-400 hidden sm:inline">({c.category})</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

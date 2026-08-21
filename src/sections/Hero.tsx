import { ArrowRight, CheckCircle2, Calculator, Star } from 'lucide-react';
import brandMark from '../assets/pixelara-mark.svg';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface HeroProps {
  onOpenCalculator?: () => void;
}

export default function Hero({ onOpenCalculator }: HeroProps) {
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation();
  const { ref: cardRef, isVisible: cardVisible } = useScrollAnimation();

  const clientLogos = [
    'Apex Gear Ltd.',
    'Lumina Organics',
    'Anand Clinics',
    'LogiField Systems',
    'Verma Legal',
    'KraftTech Global'
  ];

  return (
    <section className="relative overflow-hidden bg-white border-b border-slate-100 py-16 sm:py-24">
      {/* Dynamic Animated Blobs */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-gradient-to-br from-cyan-200/40 via-blue-200/40 to-purple-200/40 rounded-full blur-3xl opacity-75 pointer-events-none animate-blob" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-gradient-to-tr from-purple-100/40 via-cyan-100/40 to-blue-200/30 rounded-full blur-3xl opacity-60 pointer-events-none animate-blob animation-delay-4000" />

      <div className="max-w-6xl mx-auto px-5 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — Copy with Scroll Animation */}
          <div 
            ref={textRef} 
            className={`max-w-lg animate-on-scroll ${textVisible ? 'is-visible' : ''}`}
          >
            {/* Trust pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 backdrop-blur-xs px-3.5 py-1.5 text-xs font-semibold text-slate-650 shadow-xs mb-6 hover:border-blue-300 hover:shadow-sm transition-all duration-300">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400 animate-pulse" />
                ))}
              </div>
              <span className="h-4 w-px bg-slate-200 mx-1" />
              <span>4.9 / 5.0 Rating — 45+ Websites Delivered</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.12] tracking-tight text-slate-900">
              Technology. Innovation.{' '}
              <span className="text-gradient block sm:inline">Beyond Borders.</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg leading-relaxed text-slate-500 font-medium">
              High-performance web platforms, customizable scopes, and enterprise-grade code — engineered for brands scaling worldwide.
            </p>

            {/* CTA row */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contact" className="button-primary group">
                <span>Start a Project</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <button 
                onClick={onOpenCalculator} 
                type="button" 
                className="button-secondary text-[13px] group"
              >
                <Calculator className="h-4 w-4 text-[#3B82F6] group-hover:scale-110 transition-transform" /> 
                <span>Estimate Price</span>
              </button>
            </div>

            {/* Proof points */}
            <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 text-[13px] font-semibold text-slate-600">
              {['Strategy-led UI', 'Mobile-first responsive', '100% code ownership'].map((p) => (
                <span 
                  key={p} 
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-105 hover:border-blue-150 transition-colors"
                >
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  {p}
                </span>
              ))}
            </div>
          </div>

          {/* Right — Interactive Web Preview Card with Floating Motion */}
          <div 
            ref={cardRef} 
            className={`relative mx-auto w-full max-w-md lg:max-w-none animate-float-slow animate-scale-in ${cardVisible ? 'is-visible' : ''}`}
          >
            {/* Glowing Backdrop behind the preview */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition duration-1000" />
            
            <div className="relative rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl hover:shadow-3xl transition-shadow duration-300">
              {/* Browser chrome */}
              <div className="flex items-center gap-1.5 pb-3 px-2 border-b border-slate-100">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400/90" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400/90" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400/90" />
                <span className="ml-3 text-[10px] font-mono text-slate-400 bg-slate-50 px-3 py-0.5 rounded-md border border-slate-100 select-none">
                  preview.pixelara.global
                </span>
              </div>
              
              {/* Preview area with high-end aesthetic gradients */}
              <div className="mt-3 rounded-xl bg-gradient-to-br from-[#0B1120] via-[#101B30] to-[#1E293B] text-white p-6 min-h-[300px] flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <img src={brandMark} alt="" className="w-6 h-6 rounded-lg bg-slate-900/60 p-0.5" />
                    <span className="text-xs font-bold tracking-tight">Apex Precision Exports</span>
                    <span className="ml-auto text-[9px] font-semibold px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                      Professional
                    </span>
                  </div>
                  <div className="inline-block px-2.5 py-0.5 rounded-md text-[9px] font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30 mb-4 tracking-wider uppercase">
                    ISO Certified Exporter
                  </div>
                  <h3 className="text-xl font-bold leading-snug mb-3">
                    Heavy Engineering &amp; Industrial Components
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4 max-w-sm">
                    Supplying precision CNC components, CAD specification sheets, and certified fabrications globally.
                  </p>
                </div>

                <div className="relative z-10 flex gap-2 pt-2">
                  <span className="px-3.5 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-[#3B82F6] hover:from-cyan-300 hover:to-[#2563EB] text-white text-[11px] font-extrabold cursor-pointer transition-all duration-300 shadow-sm shadow-blue-500/20">
                    Request RFQ
                  </span>
                  <span className="px-3.5 py-2 rounded-lg bg-white/5 text-white text-[11px] font-semibold border border-white/10 hover:bg-white/10 cursor-pointer transition-all duration-300">
                    Download CAD
                  </span>
                </div>
              </div>
              
              <div className="text-center text-[11px] text-slate-400 mt-3 font-semibold flex items-center justify-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>✓ Delivered in 10 business days — on schedule</span>
              </div>
            </div>
          </div>

        </div>

        {/* Brand Logotype Grid integrated directly into Hero */}
        <div className="mt-20 pt-8 border-t border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Trusted by Ambitious Brands</span>
          <div className="flex flex-wrap gap-2.5">
            {clientLogos.map((name, i) => (
              <div 
                key={i} 
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-655 hover:border-blue-300 hover:bg-white transition-all cursor-default"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

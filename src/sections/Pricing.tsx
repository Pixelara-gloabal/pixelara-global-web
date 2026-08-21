import { useState } from 'react';
import { Layers, ShieldCheck, Sliders, CheckCircle2, MessageSquare, ArrowRight, Sparkles, Plus, Minus } from 'lucide-react';
import { PACKAGES, CUSTOM_BUILDER_OPTIONS } from '../data/packages';
import PricingCard from '../components/PricingCard';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface PricingProps {
  onOpenCalculator?: () => void;
}

export default function Pricing({ onOpenCalculator }: PricingProps) {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: packagesRef, isVisible: packagesVisible } = useScrollAnimation();
  const { ref: builderRef, isVisible: builderVisible } = useScrollAnimation();

  // Custom builder live state
  const [extraPages, setExtraPages] = useState<number>(0);
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['ecommerce-engine', 'payment-gateway']);

  const handleSelectPackage = (pkgName: string) => {
    if (pkgName.includes('Customized')) {
      const customBuilderSection = document.getElementById('custom-builder');
      if (customBuilderSection) {
        customBuilderSection.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleAddon = (id: string) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter(item => item !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  // Calculate live custom estimate
  const baseEssentialPrice = 9999;
  const extraPagesTotal = extraPages * 1500;
  const addonsTotal = selectedAddons.reduce((sum, id) => {
    const opt = CUSTOM_BUILDER_OPTIONS.find(o => o.id === id);
    return sum + (opt ? opt.estimatedCost : 0);
  }, 0);
  const totalCustomEstimate = baseEssentialPrice + extraPagesTotal + addonsTotal;

  const customWhatsAppMsg = encodeURIComponent(
    `Hello Pixelara Global, I built a custom website scope on your website: Base Essential + ${extraPages} extra pages + Features: ${selectedAddons.map(id => CUSTOM_BUILDER_OPTIONS.find(o => o.id === id)?.name).join(', ')}. Estimated Scope Value: ₹${totalCustomEstimate.toLocaleString('en-IN')}.`
  );

  return (
    <section id="packages" className="py-20 bg-slate-50 border-b border-slate-100 text-slate-900 relative overflow-hidden">
      {/* Decorative Blur Blobs */}
      <div className="absolute top-0 left-1/4 w-[450px] h-[450px] bg-gradient-to-tr from-cyan-100/30 to-purple-100/30 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 relative z-10">
        
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-14 animate-on-scroll ${headerVisible ? 'is-visible' : ''}`}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-[#2563EB] text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
            <Layers className="w-3.5 h-3.5 text-[#2563EB]" />
            Official 2026 Package Options
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Two Simple Paths. <span className="text-gradient">Unlimited Customization.</span>
          </h2>
          <p className="text-base text-slate-500 mt-4 leading-relaxed font-medium">
            Choose our fixed ₹9,999 Essential Package for rapid turnaround, or build a 100% customized solution tailored to your exact business needs.
          </p>
        </div>

        {/* 2-Tier Primary Package Cards */}
        <div 
          ref={packagesRef}
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16 animate-on-scroll ${packagesVisible ? 'is-visible' : ''}`}
        >
          {PACKAGES.map((pkg) => (
            <PricingCard key={pkg.id} pkg={pkg} onSelect={handleSelectPackage} />
          ))}
        </div>

        {/* INTERACTIVE CUSTOM PACKAGE SCOPE BUILDER */}
        <div 
          id="custom-builder" 
          ref={builderRef}
          className={`p-6 sm:p-10 rounded-[28px] bg-white border border-slate-200/80 shadow-2xl relative overflow-hidden transition-all duration-300 animate-on-scroll ${builderVisible ? 'is-visible' : ''}`}
        >
          {/* Subtle builder gradient backglow */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-bl from-blue-50 to-purple-50 rounded-full blur-3xl opacity-60 pointer-events-none" />

          <div className="relative z-10">
            
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-100 mb-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#2563EB] border border-blue-200 text-[10px] font-bold uppercase tracking-wider mb-2">
                  <Sliders className="w-3.5 h-3.5 text-[#2563EB]" /> Interactive Scope Builder
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  Customize Your Package &amp; Features Live
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1.5 font-medium">
                  Check optional modules to generate a real-time customized scope &amp; budget estimate.
                </p>
              </div>

              {/* Live Price Calculator Display Pill */}
              <div className="p-5 rounded-[22px] bg-slate-900 text-white shadow-xl shrink-0 text-right min-w-[200px] relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-50" />
                <span className="text-[9px] uppercase font-bold text-slate-400 block tracking-wider relative z-10">Estimated Scope</span>
                <span className="text-3xl font-black text-white block mt-0.5 relative z-10">
                  ₹{totalCustomEstimate.toLocaleString('en-IN')}
                </span>
                <span className="text-[10px] text-cyan-300 block mt-1 font-semibold relative z-10">SLA: {7 + extraPages + selectedAddons.length * 2} Business Days</span>
              </div>
            </div>

            {/* Custom Controls Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
              
              {/* Controls Column */}
              <div className="lg:col-span-8 space-y-6">
                
                {/* 1. Page Volume Incrementer */}
                <div className="p-5 rounded-[20px] bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Extra Structured Pages</h4>
                    <p className="text-xs text-slate-500 mt-1 font-medium">Base package includes 5 pages. Add extra pages at ₹1,500/page.</p>
                  </div>

                  <div className="flex items-center gap-3 bg-white p-1.5 rounded-xl border border-slate-200 shrink-0 shadow-2xs">
                    <button
                      type="button"
                      onClick={() => setExtraPages(Math.max(0, extraPages - 1))}
                      className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 hover:bg-[#2563EB] hover:text-white flex items-center justify-center font-bold transition-all"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-sm font-black text-slate-900 px-2 min-w-[70px] text-center">+{extraPages} Pages</span>
                    <button
                      type="button"
                      onClick={() => setExtraPages(extraPages + 1)}
                      className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 hover:bg-[#2563EB] hover:text-white flex items-center justify-center font-bold transition-all"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* 2. Feature Toggles Grid */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Select Optional Custom Modules</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {CUSTOM_BUILDER_OPTIONS.filter(o => o.id !== 'extra-pages').map((opt) => {
                      const isSelected = selectedAddons.includes(opt.id);
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => toggleAddon(opt.id)}
                          className={`p-4 rounded-[20px] text-left border transition-all duration-300 flex flex-col justify-between min-h-[110px] cursor-pointer ${
                            isSelected
                              ? 'border-[#2563EB] bg-blue-50/40 shadow-xs ring-1 ring-[#2563EB]/20'
                              : 'border-slate-200 bg-slate-50/50 hover:bg-slate-50 hover:border-blue-200'
                          }`}
                        >
                          <div className="w-full">
                            <div className="flex items-center justify-between gap-2 mb-1">
                              <span className="text-xs font-bold text-slate-900">{opt.name}</span>
                              <div className={`w-4 h-4 rounded-full flex items-center justify-center border transition-all ${
                                isSelected ? 'bg-[#2563EB] border-[#2563EB] text-white' : 'border-slate-300 bg-white'
                              }`}>
                                {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                              </div>
                            </div>
                            <p className="text-[11px] text-slate-500 leading-normal font-medium">{opt.description}</p>
                          </div>
                          <span className="text-[10px] font-black text-[#2563EB] block mt-3">
                            +₹{opt.estimatedCost.toLocaleString('en-IN')}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

              </div>

              {/* Live Scope Summary Box */}
              <div className="lg:col-span-4 p-6 rounded-[24px] bg-slate-900 text-white border border-slate-800 space-y-5 shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent pointer-events-none" />
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-300 relative z-10">
                  <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" /> Customized Scope Breakdown
                </div>

                <div className="space-y-3 text-xs text-slate-300 pb-4 border-b border-slate-850 relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Base Essential Package:</span>
                    <span className="font-bold text-white">₹9,999</span>
                  </div>
                  {extraPages > 0 && (
                    <div className="flex items-center justify-between text-cyan-300">
                      <span>Extra Pages ({extraPages} × ₹1.5k):</span>
                      <span className="font-bold">+₹{extraPagesTotal.toLocaleString('en-IN')}</span>
                    </div>
                  )}
                  {selectedAddons.map(id => {
                    const item = CUSTOM_BUILDER_OPTIONS.find(o => o.id === id);
                    if (!item) return null;
                    return (
                      <div key={id} className="flex items-center justify-between text-slate-350">
                        <span className="truncate max-w-[170px] text-slate-400">{item.name}:</span>
                        <span className="font-bold text-white">+₹{item.estimatedCost.toLocaleString('en-IN')}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="flex items-center justify-between text-sm font-black text-white pt-1 relative z-10">
                  <span>Total Estimate:</span>
                  <span className="text-xl text-cyan-300">₹{totalCustomEstimate.toLocaleString('en-IN')}</span>
                </div>

                <div className="space-y-2.5 pt-3 relative z-10">
                  <a
                    href={`https://wa.me/917203075804?text=${customWhatsAppMsg}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-[14px] bg-[#16A34A] hover:bg-green-600 text-white text-xs font-black transition-all shadow-md hover:shadow-lg cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 fill-white" /> Lock Scope via WhatsApp
                  </a>
                  
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-[14px] bg-slate-800 hover:bg-slate-705 text-white text-xs font-bold border border-slate-700 transition-all cursor-pointer"
                  >
                    Submit Scope Inquiry <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>

            </div>

          </div>
        </div>

        {/* Commercial Terms Notice */}
        <div className="mt-12 p-6 bg-white border border-slate-200 rounded-[22px] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xs">
          <div className="flex items-start gap-4 max-w-3xl">
            <div className="w-11 h-11 rounded-[14px] bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Commercial Terms &amp; Boundary Protection</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed font-medium">
                Essential ₹9,999 Package: 50% advance and 50% prior to final delivery. Customized Solutions: Staged 40/30/30 milestone structure. All source code and assets transferred 100% upon completion.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenCalculator}
            type="button"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-[12px] bg-[#2563EB] hover:bg-blue-700 text-white text-xs font-black transition-all whitespace-nowrap shrink-0 shadow-sm cursor-pointer"
          >
            Launch Calculator
          </button>
        </div>

      </div>
    </section>
  );
}

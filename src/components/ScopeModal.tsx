import { useState } from 'react';
import { X, Sparkles, ArrowRight, CheckCircle2, Calculator, MessageSquare, ShieldCheck } from 'lucide-react';

interface ScopeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ScopeModal({ isOpen, onClose }: ScopeModalProps) {
  const [step, setStep] = useState<number>(1);
  const [projectType, setProjectType] = useState<string>('Business Catalog');
  const [pageCount, setPageCount] = useState<string>('5-10 Pages');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(['WhatsApp Integration', 'SEO Setup']);

  if (!isOpen) return null;

  const toggleFeature = (feature: string) => {
    if (selectedFeatures.includes(feature)) {
      setSelectedFeatures(selectedFeatures.filter(f => f !== feature));
    } else {
      setSelectedFeatures([...selectedFeatures, feature]);
    }
  };

  const getRecommendedPackage = () => {
    if (projectType === 'E-Commerce Store') {
      return {
        name: 'E-Commerce Storefront',
        price: '₹49,999+',
        timeline: '14 - 21 Days',
        description: 'Includes product catalog variations, payment gateway, order admin, and automated WhatsApp alerts.'
      };
    }
    if (projectType === 'Custom Web App') {
      return {
        name: 'Custom Web Application',
        price: '₹99,999+',
        timeline: '21 - 35 Days',
        description: 'Bespoke web platform with role-based dashboards, database architecture, and custom workflow logic.'
      };
    }
    if (pageCount === '15-25 Pages' || selectedFeatures.includes('Multi-currency & PDF Specs')) {
      return {
        name: 'Customized Growth Solution',
        price: 'Custom Quote',
        timeline: '10 - 14 Days',
        description: 'Comprehensive corporate or export website with CAD/spec sheets and on-page technical SEO.'
      };
    }
    return {
      name: 'Essential Website',
      price: '₹9,999',
      timeline: '5 - 7 Days',
      description: 'Turnkey 5-page responsive website with lead intake form and mobile optimization.'
    };
  };

  const rec = getRecommendedPackage();

  const whatsappMsg = encodeURIComponent(
    `Hello Pixelara Global, I ran your Scope Estimator on the website: Project Type: ${projectType}, Pages: ${pageCount}, Features: ${selectedFeatures.join(', ')}. Recommended Plan: ${rec.name} (${rec.price}).`
  );

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white text-slate-900 rounded-[28px] max-w-2xl w-full p-6 sm:p-8 relative border border-slate-200 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2563EB] mb-2">
          <Calculator className="w-4 h-4 text-[#2563EB]" />
          Instant Scope & Package Estimator
        </div>
        <h3 className="text-2xl font-black text-slate-900 tracking-tight">
          Estimate Your Project Scope in 30 Seconds
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1 mb-6 font-medium">
          Answer 3 quick questions to get an accurate package recommendation and timeline estimate.
        </p>

        {/* Progress Step Bar */}
        <div className="flex items-center gap-2 mb-8">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`h-2 flex-1 rounded-full transition-colors ${
                s <= step ? 'bg-[#2563EB]' : 'bg-slate-100'
              }`}
            />
          ))}
        </div>

        {/* STEP 1: Project Type */}
        {step === 1 && (
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-slate-900">Step 1: Select your main project objective</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { title: 'Business Catalog', desc: 'Brochure or product catalog website for B2B/Exporters' },
                { title: 'E-Commerce Store', desc: 'Online store selling physical products with payments' },
                { title: 'Corporate Firm', desc: 'Services, consultation, healthcare, or corporate portal' },
                { title: 'Custom Web App', desc: 'Bespoke web platform, scheduling engine, or SaaS' }
              ].map((item) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setProjectType(item.title)}
                  className={`p-4 rounded-[16px] text-left border transition-colors ${
                    projectType === item.title
                      ? 'border-[#2563EB] bg-blue-50/70 shadow-2xs ring-1 ring-[#2563EB]/30'
                      : 'border-slate-200 bg-slate-50 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900">{item.title}</span>
                    {projectType === item.title && <CheckCircle2 className="w-4 h-4 text-[#2563EB]" />}
                  </div>
                  <p className="text-[11px] text-slate-600 mt-1 font-medium">{item.desc}</p>
                </button>
              ))}
            </div>

            <div className="pt-4 flex justify-end">
              <button
                onClick={() => setStep(2)}
                className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-blue-700 text-white text-xs font-extrabold px-6 py-3 rounded-[12px] transition-colors shadow-2xs"
              >
                Next Step <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: Scale & Required Features */}
        {step === 2 && (
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-slate-900">Step 2: Page volume & technical features</h4>
            
            <div>
              <label className="block text-[11px] font-bold uppercase text-slate-700 mb-1.5">Page Volume</label>
              <div className="grid grid-cols-3 gap-2">
                {['Single Page', '5-10 Pages', '15-25 Pages'].map((cnt) => (
                  <button
                    key={cnt}
                    type="button"
                    onClick={() => setPageCount(cnt)}
                    className={`py-2.5 px-3 rounded-[12px] text-xs font-bold border transition-colors ${
                      pageCount === cnt
                        ? 'border-[#2563EB] bg-[#2563EB] text-white'
                        : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {cnt}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase text-slate-700 mb-1.5">Select Essential Features</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  'WhatsApp Integration',
                  'SEO Setup & Search Console',
                  'Payment Gateway Integration',
                  'Multi-currency & PDF Specs',
                  'Doctor / Branch Locator',
                  'Role-based Custom Admin'
                ].map((feat) => (
                  <button
                    key={feat}
                    type="button"
                    onClick={() => toggleFeature(feat)}
                    className={`p-3 rounded-[12px] text-left border text-xs font-semibold flex items-center justify-between transition-colors ${
                      selectedFeatures.includes(feat)
                        ? 'border-[#2563EB] bg-blue-50/70 text-slate-900'
                        : 'border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <span>{feat}</span>
                    {selectedFeatures.includes(feat) && <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB]" />}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4 flex justify-between">
              <button
                onClick={() => setStep(1)}
                className="text-xs font-bold text-slate-500 hover:text-slate-900 px-4 py-2.5"
              >
                Back
              </button>
              <button
                onClick={() => setStep(3)}
                className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-blue-700 text-white text-xs font-extrabold px-6 py-3 rounded-[12px] transition-colors shadow-2xs"
              >
                View Recommendation <Sparkles className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Instant Recommendation */}
        {step === 3 && (
          <div className="space-y-5">
            <div className="p-6 rounded-[20px] bg-slate-900 text-white relative overflow-hidden border border-slate-800 shadow-xl">
              <div className="flex items-center justify-between gap-4 mb-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Recommended Package Tier
                </span>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-800 text-cyan-300 border border-slate-700">
                  Estimated Delivery: {rec.timeline}
                </span>
              </div>

              <div className="flex items-baseline justify-between gap-4 mb-2">
                <h4 className="text-2xl font-black text-white">{rec.name}</h4>
                <span className="text-2xl font-black text-cyan-300">{rec.price}</span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-4 font-medium">
                {rec.description}
              </p>

              <div className="pt-3 border-t border-slate-800 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-slate-400">
                <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> 100% Code Ownership</span>
                <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> Fixed Price Guarantee</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={`https://wa.me/917203075804?text=${whatsappMsg}`}
                target="_blank"
                rel="noreferrer"
                onClick={onClose}
                className="inline-flex items-center justify-center gap-2 bg-[#16A34A] hover:bg-green-700 text-white text-xs font-extrabold py-3.5 px-5 rounded-[14px] transition-colors shadow-2xs"
              >
                <MessageSquare className="w-4 h-4 fill-white" /> Discuss via WhatsApp
              </a>
              <a
                href="#contact"
                onClick={onClose}
                className="inline-flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-blue-700 text-white text-xs font-extrabold py-3.5 px-5 rounded-[14px] transition-colors shadow-2xs"
              >
                Lock Package Proposal <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={() => setStep(1)}
              className="w-full text-center text-xs font-semibold text-slate-500 hover:underline pt-1"
            >
              Start Over with Different Criteria
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

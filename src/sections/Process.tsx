import { Compass, PenTool, Code2, Rocket } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Process() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();

  const steps = [
    {
      number: '01',
      icon: Compass,
      title: 'Plan & Scope',
      description:
        'Choose the ₹9,999 Essential package or define a Customized scope. Final milestones and deliverables are confirmed upfront.',
      deliverable: 'Scope sheet & milestone agreement',
    },
    {
      number: '02',
      icon: PenTool,
      title: 'UI/UX Blueprint',
      description:
        'Wireframing and structural layouts tailored to your industry content, conversion goals, and the pages included in your package.',
      deliverable: 'Page blueprints & design review',
    },
    {
      number: '03',
      icon: Code2,
      title: 'Development',
      description:
        'Responsive coding, WhatsApp trigger setup, basic on-page SEO, and any custom modules selected in your scope builder.',
      deliverable: 'Live staging preview build',
    },
    {
      number: '04',
      icon: Rocket,
      title: 'QA & Deployment',
      description:
        'Cross-browser checks, speed optimization, domain mapping, final sign-off, and activation of your post-launch warranty support.',
      deliverable: 'Production launch & handover',
    },
  ];

  return (
    <section id="process" className="py-20 bg-white border-b border-slate-100 text-slate-900 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 relative z-10">
        
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`max-w-2xl mb-14 animate-on-scroll ${headerVisible ? 'is-visible' : ''}`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#3B82F6] text-xs font-semibold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-[#3B82F6] animate-pulse" />
            Delivery Workflow
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Predictable 4-Step Delivery Process
          </h2>
          <p className="text-base text-slate-500 mt-3 leading-relaxed font-medium">
            Every project — whether Essential or Customized — follows a structured milestone pipeline designed to keep scope protected and launches reliable.
          </p>
        </div>

        {/* 4-Column Step Grid */}
        <div 
          ref={gridRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 animate-on-scroll ${gridVisible ? 'is-visible' : ''}`}
        >
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                style={{ transitionDelay: `${idx * 120}ms` }}
                className="relative flex flex-col justify-between p-6 rounded-[22px] bg-white border border-slate-200 hover:border-blue-200 card-hover shadow-2xs group h-full"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 text-[#3B82F6] flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-[#3B82F6] group-hover:text-white transition-all duration-300">
                      <Icon className="w-5.5 h-5.5 transition-transform group-hover:scale-110" />
                    </div>
                    <span className="text-3xl font-black text-slate-100 group-hover:text-blue-100 transition-colors duration-300 select-none">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-6 font-medium">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <span className="text-[9px] uppercase font-bold text-slate-400 block tracking-wider">
                    Deliverable
                  </span>
                  <span className="text-xs font-bold text-slate-905">
                    {step.deliverable}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

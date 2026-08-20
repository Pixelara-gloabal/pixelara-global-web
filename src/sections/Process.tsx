import { Compass, PenTool, Code2, Rocket } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      number: '01',
      icon: Compass,
      title: 'Plan & Scope',
      description:
        'Select an official package or define custom requirements. Final scope and milestones are confirmed upfront to avoid ambiguity.',
      deliverable: 'Scope sheet & milestone agreement',
    },
    {
      number: '02',
      icon: PenTool,
      title: 'UI/UX Blueprint',
      description:
        'Wireframing and structural layouts tailored specifically to your industry content, conversion priorities, and page structure.',
      deliverable: 'Page blueprints & design review',
    },
    {
      number: '03',
      icon: Code2,
      title: 'Development',
      description:
        'Responsive coding, WhatsApp trigger setup, basic on-page SEO configuration, and third-party integration wiring.',
      deliverable: 'Live staging preview build',
    },
    {
      number: '04',
      icon: Rocket,
      title: 'QA & Deployment',
      description:
        'Cross-browser checks, speed optimization, final domain mapping, milestone sign-off, and activation of warranty support.',
      deliverable: 'Production launch & handover',
    },
  ];

  return (
    <section id="process" className="py-20 bg-[#FFFFFF] border-b border-[#D9E1EC]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4F7FB] border border-[#D9E1EC] text-[#2563EB] text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
            Delivery Workflow
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1220] tracking-tight">
            Predictable 4-Step Delivery Process
          </h2>
          <p className="text-base text-[#5B6472] mt-3 leading-relaxed">
            Every website follows a structured milestone pipeline designed to keep scope protected, turnarounds fast, and launches reliable.
          </p>
        </div>

        {/* 4-Column Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative flex flex-col justify-between p-6 sm:p-7 rounded-[16px] bg-[#F4F7FB] border border-[#D9E1EC] hover:border-[#2563EB]/40 transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-[10px] bg-[#FFFFFF] border border-[#D9E1EC] text-[#2563EB] flex items-center justify-center shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-2xl font-black text-[#D9E1EC] select-none">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0B1220] tracking-tight mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#5B6472] leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#D9E1EC]">
                  <span className="text-[10px] uppercase font-bold text-[#5B6472] block">
                    Deliverable
                  </span>
                  <span className="text-xs font-bold text-[#0B1220]">
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

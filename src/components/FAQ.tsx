import { useState } from 'react';
import { HelpCircle, ChevronDown, ShieldCheck, CreditCard, Code, Clock } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface FAQItem {
  question: string;
  answer: string;
  category: 'Commercial & Pricing' | 'Code & Ownership' | 'Process & Support';
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'How are project payments structured?',
    answer: 'For the Essential ₹9,999 package, we follow a simple 50% advance + 50% upon final delivery. For Customized Solutions above ₹20,000, we use a 3-tier milestone structure: 40% advance, 30% after design sign-off, and 30% prior to domain deployment.',
    category: 'Commercial & Pricing'
  },
  {
    question: 'Do I get 100% full source code and asset ownership?',
    answer: 'Yes! Upon final milestone payment, all source code, graphic assets, domain registration details, and admin accounts are transferred 100% to your organization. We do not lock you into proprietary platforms.',
    category: 'Code & Ownership'
  },
  {
    question: 'Are domain, hosting, and business emails included?',
    answer: 'The Essential ₹9,999 package includes assistance with domain setup and basic hosting configuration. For Customized Solutions, hosting setup, SSL certificate, and 1 year of support are included based on your scope. Domain renewal and third-party API fees are paid directly to providers.',
    category: 'Commercial & Pricing'
  },
  {
    question: 'What is your post-launch warranty and bug-fix policy?',
    answer: 'The Essential package includes 15-day post-launch warranty. Customized Solutions include up to 90-day warranty based on scope. Any functional bugs or rendering issues during the warranty period are fixed free of charge.',
    category: 'Process & Support'
  },
  {
    question: 'How long does a website take from start to launch?',
    answer: 'Essential 5-page sites are delivered in 5–7 business days. Customized Solutions with 10+ pages take 7–14 business days. E-Commerce stores and custom web applications take 14–30+ days based on milestone sign-offs and scope complexity.',
    category: 'Process & Support'
  },
  {
    question: 'How do you handle scope changes or additional page requests?',
    answer: 'Every project begins with a clear Scope Document. If you need extra pages or custom modules mid-build, we provide a transparent add-on quote (₹1,500/page) before executing — preventing scope creep and billing surprises.',
    category: 'Process & Support'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<string>('All');
  
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

  const categories = ['All', 'Commercial & Pricing', 'Code & Ownership', 'Process & Support'];

  const filteredItems = activeTab === 'All'
    ? FAQ_ITEMS
    : FAQ_ITEMS.filter((item) => item.category === activeTab);

  return (
    <section id="faq" className="py-20 bg-white border-b border-slate-100 text-slate-900 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 relative z-10">
        
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-12 animate-on-scroll ${headerVisible ? 'is-visible' : ''}`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#3B82F6] text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            Transparency &amp; Clarity
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-slate-500 mt-3 leading-relaxed font-medium">
            Clear answers about our two-tier pricing, code ownership, milestone structure, and post-launch maintenance.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveTab(cat); setOpenIndex(0); }}
              className={`text-xs font-bold px-4 py-2 rounded-xl transition-all cursor-pointer ${
                activeTab === cat
                  ? 'bg-[#3B82F6] text-white shadow-sm'
                  : 'bg-slate-55 text-slate-500 hover:text-slate-900 hover:bg-slate-50 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion Container */}
        <div 
          ref={contentRef}
          className={`max-w-3xl mx-auto space-y-3.5 animate-on-scroll ${contentVisible ? 'is-visible' : ''}`}
        >
          {filteredItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border overflow-hidden transition-all duration-305 ${
                  isOpen ? 'border-blue-200 bg-blue-50/20 shadow-xs' : 'border-slate-200 bg-white hover:border-slate-350'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-slate-900 text-sm hover:bg-slate-50/50 transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    {item.category === 'Commercial & Pricing' && <CreditCard className="w-4 h-4 text-[#3B82F6] shrink-0" />}
                    {item.category === 'Code & Ownership' && <Code className="w-4 h-4 text-[#3B82F6] shrink-0" />}
                    {item.category === 'Process & Support' && <Clock className="w-4 h-4 text-[#3B82F6] shrink-0" />}
                    <span>{item.question}</span>
                  </span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#3B82F6]' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-0 text-sm text-slate-505 leading-relaxed bg-white">
                    <p className="pl-7 font-medium text-slate-500">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Protection Assurance */}
        <div className="mt-10 max-w-3xl mx-auto p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center gap-2 text-center text-xs text-slate-500 font-semibold shadow-3xs">
          <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0 animate-pulse" />
          <span>
            Have a custom requirement? Message our team directly on WhatsApp for instant scope confirmation.
          </span>
        </div>

      </div>
    </section>
  );
}

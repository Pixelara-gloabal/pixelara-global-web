import { useState, type FormEvent } from 'react';
import { MessageSquare, Send, CheckCircle2, ShieldCheck, Clock, Star, Mail, ChevronDown, CreditCard, Code } from 'lucide-react';
import { InstagramIcon, LinkedinIcon } from '../components/SocialIcons';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import ToastNotification from '../components/ToastNotification';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'How are payments structured?',
    answer: 'For the Essential ₹9,999 package: simple 50% advance + 50% on final launch. For Customized Solutions: staged 40% advance, 30% on design sign-off, and 30% prior to final domain deployment.',
    category: 'pricing'
  },
  {
    question: 'Do I get full source code ownership?',
    answer: 'Yes! Upon final milestone payment, all source code, graphic assets, domain registration details, and administrative credentials are transferred 100% to your organization.',
    category: 'ownership'
  },
  {
    question: 'Are hosting and domains included?',
    answer: 'The Essential package includes assistance with domain setup. Customized scopes include 1 year of free high-speed hosting and SSL configuration. Third-party API charges are billed directly.',
    category: 'pricing'
  },
  {
    question: 'What is your post-launch support?',
    answer: 'Every website comes with a technical warranty warranty (15 days for Essential, up to 90 days for Customized projects). Any rendering issues or bugs are resolved free of charge.',
    category: 'support'
  }
];

export default function FinalCTA() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    industry: 'Manufacturing & Industrial',
    packageTier: 'Essential Website (₹9,999)',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [showToast, setShowToast] = useState(false);

  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation();
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setShowToast(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Pixelara Global, I would like to request a project quotation for the ${formData.packageTier} in the ${formData.industry} domain.`
  );

  return (
    <section id="contact" className="py-20 bg-slate-50 text-slate-900 border-b border-slate-100 relative overflow-hidden">
      {showToast && (
        <ToastNotification 
          message="Project request received! We will reply within 24 hours." 
          onClose={() => setShowToast(false)} 
        />
      )}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-100/30 via-blue-100/20 to-purple-100/20 rounded-full blur-3xl opacity-60 pointer-events-none animate-blob" />

      <div className="max-w-6xl mx-auto px-5 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: FAQs & Direct Contacts */}
          <div 
            ref={leftRef}
            className={`lg:col-span-6 space-y-6 animate-on-scroll-left ${leftVisible ? 'is-visible' : ''}`}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-[#2563EB] text-xs font-bold uppercase tracking-wider shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
              Clarity &amp; Support
            </div>

            <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight text-slate-900">
              Frequently Asked Questions &amp; Support
            </h2>

            {/* Accordion list */}
            <div className="space-y-3.5 pr-2 pt-2">
              {FAQ_ITEMS.map((item, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className={`rounded-2xl border overflow-hidden transition-all duration-300 bg-white ${
                      isOpen ? 'border-blue-200 bg-blue-50/10 shadow-3xs' : 'border-slate-200'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full p-4.5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm cursor-pointer hover:bg-slate-50/30 transition-colors"
                    >
                      <span className="flex items-center gap-2.5">
                        {item.category === 'pricing' && <CreditCard className="w-4 h-4 text-[#3B82F6] shrink-0" />}
                        {item.category === 'ownership' && <Code className="w-4 h-4 text-[#3B82F6] shrink-0" />}
                        {item.category === 'support' && <Clock className="w-4 h-4 text-[#3B82F6] shrink-0" />}
                        <span>{item.question}</span>
                      </span>
                      <ChevronDown className={`w-4.5 h-4.5 text-slate-450 shrink-0 transition-transform ${isOpen ? 'rotate-180 text-[#3B82F6]' : ''}`} />
                    </button>

                    {isOpen && (
                      <div className="px-4.5 pb-4.5 pt-0 text-[13px] text-slate-500 leading-relaxed bg-white">
                        <p className="pl-6.5 font-medium">{item.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Direct Connect Handles */}
            <div className="pt-4 border-t border-slate-200/60 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">Direct Assistance Channels</span>
              <div className="flex flex-wrap gap-2">
                <a
                  href={`https://wa.me/917203075804?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4.5 py-3 bg-[#16A34A] hover:bg-green-600 text-white text-xs font-black rounded-xl transition-all shadow-md hover:shadow-lg cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 fill-white" /> WhatsApp Direct
                </a>

                <a
                  href="mailto:pixelaragloabal@gmail.com"
                  className="inline-flex items-center gap-2 px-4.5 py-3 bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 text-xs font-bold rounded-xl transition-colors shadow-2xs cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-[#2563EB]" /> Email
                </a>

                <a
                  href="https://www.instagram.com/pixelara_global?igsi=d3F1ZnNucDhmcnN6"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3 bg-white hover:bg-slate-50 border border-slate-200 text-pink-650 text-xs font-bold rounded-xl transition-colors shadow-2xs cursor-pointer"
                >
                  <InstagramIcon className="w-4 h-4" /> Instagram
                </a>

                <a
                  href="https://www.linkedin.com/company/pixelara-global/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3 bg-white hover:bg-slate-50 border border-slate-200 text-blue-650 text-xs font-bold rounded-xl transition-colors shadow-2xs cursor-pointer"
                >
                  <LinkedinIcon className="w-4 h-4" /> LinkedIn
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Lead Intake Form */}
          <div 
            ref={rightRef}
            className={`lg:col-span-6 bg-white text-slate-900 p-6 sm:p-8 rounded-[28px] border border-slate-200 shadow-2xl animate-on-scroll-right ${rightVisible ? 'is-visible' : ''}`}
          >
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200 animate-bounce">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-black text-slate-900">Inquiry Submitted</h3>
                <p className="text-sm text-slate-650 max-w-md mx-auto leading-relaxed font-semibold">
                  Thank you, <strong className="text-slate-950">{formData.name}</strong>. We have received your request for the <strong className="text-[#2563EB]">{formData.packageTier}</strong>. Our lead consultant will reply within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-bold text-[#2563EB] hover:underline pt-4 block mx-auto cursor-pointer"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center justify-between mb-3 pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#2563EB]" />
                    <h3 className="text-sm font-extrabold text-slate-950">Project Intake Form</h3>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-500">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>4.9 / 5.0 Rating</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Ramesh Patel"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-[12px] border border-slate-200 bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/15 focus:border-[#2563EB] text-slate-900 placeholder-slate-400"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                      Phone / WhatsApp *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="+91 72030 75804"
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-[12px] border border-slate-200 bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/15 focus:border-[#2563EB] text-slate-900 placeholder-slate-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                      Target Package Tier
                    </label>
                    <select
                      value={formData.packageTier}
                      onChange={(e) => setFormData({ ...formData, packageTier: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-[12px] border border-slate-200 bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/15 focus:border-[#2563EB] text-slate-900 cursor-pointer"
                    >
                      <option>Essential Website (₹9,999)</option>
                      <option>Customized Growth Solution (Custom Quote)</option>
                      <option>E-Commerce Storefront (Custom Quote)</option>
                      <option>Custom Web Application (Custom Quote)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                      Industry Domain
                    </label>
                    <select
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-[12px] border border-slate-200 bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/15 focus:border-[#2563EB] text-slate-900 cursor-pointer"
                    >
                      <option>Manufacturing &amp; Industrial</option>
                      <option>Import / Export</option>
                      <option>Corporate &amp; Legal</option>
                      <option>Healthcare &amp; Clinics</option>
                      <option>Retail &amp; D2C E-Commerce</option>
                      <option>Consulting &amp; Professional Services</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    Project Requirements / Specific Needs
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe your page volume, catalog items, target features, or expected launch timelines..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-[12px] border border-slate-200 bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/15 focus:border-[#2563EB] text-slate-900 placeholder-slate-400"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-blue-700 text-white text-sm font-black py-3.5 px-6 rounded-[14px] transition-all shadow-md hover:shadow-lg cursor-pointer"
                  >
                    <span>Submit Project Request</span> <Send className="w-4 h-4" />
                  </button>
                  <div className="flex items-center justify-center gap-4 mt-3 text-[10px] font-bold text-slate-400">
                    <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> Milestone Protection</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-[#3B82F6]" /> 24h Response SLA</span>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

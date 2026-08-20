import { useState, type FormEvent } from 'react';
import { MessageSquare, Send, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';

export default function FinalCTA() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    industry: 'Manufacturing',
    packageTier: 'Business Website (₹19,999)',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Pixelara Global, I would like to discuss a project for the ${formData.packageTier} in the ${formData.industry} sector.`
  );

  return (
    <section id="contact" className="py-20 bg-[#0B1220] text-[#FFFFFF] border-b border-[#0B1220]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Commercial Reassurance */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFFFFF]/10 border border-[#FFFFFF]/15 text-[#FFFFFF] text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
              Start Your Build
            </div>

            <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
              Ready to Launch a High-Converting Website?
            </h2>

            <p className="text-sm sm:text-base text-[#D9E1EC] leading-relaxed">
              Submit your project details for an accurate scope review, or start a direct conversation on WhatsApp with our technical team.
            </p>

            {/* Value Guarantees */}
            <div className="space-y-3.5 pt-4 border-t border-[#FFFFFF]/10">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#2563EB]/20 text-[#2563EB] flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#FFFFFF]">Fast Turnaround Milestones</h4>
                  <p className="text-[11px] text-[#5B6472]">Starter is delivered in 5–7 days; Business in 7–10 days.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#16A34A]/20 text-[#16A34A] flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#FFFFFF]">Structured Milestone Protection</h4>
                  <p className="text-[11px] text-[#5B6472]">
                    50% advance for plans under ₹20,000; staged 40/30/30 milestones for ₹35,000+.
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp Direct Option */}
            <div className="pt-2">
              <a
                href={`https://wa.me/?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-6 py-3.5 bg-[#16A34A] hover:bg-green-700 text-[#FFFFFF] text-xs font-bold uppercase tracking-wider rounded-[12px] transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4" /> Message via WhatsApp
              </a>
            </div>
          </div>

          {/* Right Column: Contextual Lead Intake Form */}
          <div className="lg:col-span-7 bg-[#FFFFFF] text-[#111827] p-6 sm:p-8 rounded-[24px] border border-[#D9E1EC] shadow-xl">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 bg-green-50 text-[#16A34A] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-[#0B1220]">Inquiry Logged</h3>
                <p className="text-sm text-[#5B6472] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-[#0B1220]">{formData.name}</strong>. We have received your request for the <strong className="text-[#0B1220]">{formData.packageTier}</strong>. Our team will review your specifications and reply within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-bold text-[#2563EB] hover:underline pt-4 block mx-auto"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#0B1220] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Ramesh Patel"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-[12px] border border-[#D9E1EC] bg-[#F4F7FB] focus:bg-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] text-[#111827]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#0B1220] mb-1.5">
                      Phone / WhatsApp *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="+91 98765 43210"
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-[12px] border border-[#D9E1EC] bg-[#F4F7FB] focus:bg-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] text-[#111827]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#0B1220] mb-1.5">
                      Target Package
                    </label>
                    <select
                      value={formData.packageTier}
                      onChange={(e) => setFormData({ ...formData, packageTier: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-[12px] border border-[#D9E1EC] bg-[#F4F7FB] focus:bg-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] text-[#111827]"
                    >
                      <option>Starter Website (₹9,999)</option>
                      <option>Business Website (₹19,999)</option>
                      <option>Professional Website (₹34,999)</option>
                      <option>Business Pro (₹59,999)</option>
                      <option>E-Commerce Store (₹49,999+)</option>
                      <option>Custom Web App (₹99,999+)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#0B1220] mb-1.5">
                      Industry Domain
                    </label>
                    <select
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-[12px] border border-[#D9E1EC] bg-[#F4F7FB] focus:bg-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] text-[#111827]"
                    >
                      <option>Manufacturing</option>
                      <option>Import / Export</option>
                      <option>Corporate / Finance</option>
                      <option>Clinic / Healthcare</option>
                      <option>Restaurant / Hospitality</option>
                      <option>Retail / Catalogue</option>
                      <option>Consultancy</option>
                      <option>Education</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#0B1220] mb-1.5">
                    Project Requirements / Notes
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Provide details such as page requirements, catalog items, integrations, or expected launch timelines..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-[12px] border border-[#D9E1EC] bg-[#F4F7FB] focus:bg-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] text-[#111827]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-blue-700 text-[#FFFFFF] text-sm font-bold py-3.5 px-6 rounded-[12px] transition-colors shadow-sm"
                  >
                    Submit Project Inquiry <Send className="w-4 h-4" />
                  </button>
                  <p className="text-[11px] text-[#5B6472] text-center mt-2.5">
                    No upfront commitments. We verify scope requirements before issuing final agreements.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

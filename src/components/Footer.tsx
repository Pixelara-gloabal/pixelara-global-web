import BrandLogo from './BrandLogo';
import { Mail, ArrowUpRight, Phone } from 'lucide-react';
import { InstagramIcon, LinkedinIcon } from './SocialIcons';

export default function Footer() {
  return (
    <footer className="bg-white text-slate-500 border-t border-slate-100 text-xs relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-14 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Company Brand Column */}
          <div className="md:col-span-1 space-y-3">
            <BrandLogo size="lg" />
            <p className="text-xs leading-relaxed text-slate-600 font-medium pt-1">
              High-performance custom software & web development for ambitious businesses worldwide.
            </p>

            {/* Official Social Handles */}
            <div className="pt-2 space-y-2">
              <h5 className="text-[10px] font-bold uppercase tracking-wider text-slate-800">Connect With Us</h5>
              <div className="flex items-center gap-2">
                <a
                  href="https://www.instagram.com/pixelara_global?igsi=d3F1ZnNucDhmcnN6"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 hover:text-pink-600 hover:border-pink-300 transition-colors flex items-center gap-2 text-xs font-bold"
                  title="Pixelara Global Instagram"
                >
                  <InstagramIcon className="w-4 h-4 text-pink-600" />
                  <span className="hidden sm:inline">Instagram</span>
                </a>

                <a
                  href="https://www.linkedin.com/company/pixelara-global/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-300 transition-colors flex items-center gap-2 text-xs font-bold"
                  title="Pixelara Global LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4 text-blue-600" />
                  <span className="hidden sm:inline">LinkedIn</span>
                </a>

                <a
                  href="mailto:pixelaragloabal@gmail.com"
                  className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 hover:text-[#2563EB] hover:border-blue-300 transition-colors flex items-center gap-2 text-xs font-bold"
                  title="Email Pixelara Global"
                >
                  <Mail className="w-4 h-4 text-[#2563EB]" />
                  <span className="hidden sm:inline">Email</span>
                </a>
              </div>
            </div>
          </div>

          {/* Standard Packages */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" /> Website Packages
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <a href="#packages" className="hover:text-[#2563EB] transition-colors font-bold text-slate-900">
                  Essential Website (₹9,999 — Fixed SLA)
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-[#2563EB] transition-colors font-bold text-slate-900 flex items-center gap-1.5">
                  Customized Growth Solution
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-blue-50 text-[#2563EB] border border-blue-200">Custom Quote</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Custom Solutions */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" /> Advanced Engineering
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <a href="#services" className="hover:text-[#2563EB] transition-colors">
                  E-Commerce Stores (Custom Quote)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#2563EB] transition-colors">
                  Custom Web Applications (Custom Quote)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#2563EB] transition-colors">
                  Booking & Dispatch Portals
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#2563EB] transition-colors">
                  API & Cloud Architecture
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Email & Phone Contact Box */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-600" /> Official Contact
            </h4>
            <div className="p-4 rounded-[16px] bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                <Phone className="w-4 h-4 text-[#2563EB] shrink-0" />
                <a href="tel:+917203075804" className="hover:text-[#2563EB] transition-colors">
                  +91 72030 75804
                </a>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                <Mail className="w-4 h-4 text-[#2563EB] shrink-0" />
                <a href="mailto:pixelaragloabal@gmail.com" className="hover:text-[#2563EB] transition-colors truncate">
                  pixelaragloabal@gmail.com
                </a>
              </div>
              <p className="text-[11px] leading-relaxed text-slate-600 font-medium">
                Send us your project scope or specifications for an accurate turnaround quote.
              </p>
              <a
                href="mailto:pixelaragloabal@gmail.com"
                className="inline-flex items-center gap-1 text-[11px] font-bold text-[#2563EB] hover:underline"
              >
                Send Direct Email <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Baseline Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium">
          <p>© 2026 Pixelara Global. All rights reserved. Technology • Innovation • Beyond Borders.</p>
          <div className="flex items-center gap-6">
            <a href="tel:+917203075804" className="text-slate-600 hover:text-[#2563EB] transition-colors">+91 72030 75804</a>
            <a href="mailto:pixelaragloabal@gmail.com" className="text-slate-600 hover:text-[#2563EB] transition-colors">pixelaragloabal@gmail.com</a>
            <span className="text-slate-600">pixelaraglobal.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

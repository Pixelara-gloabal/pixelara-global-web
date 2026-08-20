import brandMark from '../assets/pixelara-mark.svg';

export default function Footer() {
  return (
    <footer className="bg-[#0B1220] text-[#5B6472] border-t border-[#FFFFFF]/10 text-xs">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Brand Column */}
          <div className="md:col-span-1 space-y-3">
            <div className="flex items-center gap-2">
              <img src={brandMark} alt="" className="h-7 w-7 rounded-[8px]" />
              <span className="text-lg font-bold tracking-tight text-[#FFFFFF]">
                Pixelara<span className="text-[#2563EB]">Global</span>
              </span>
            </div>
            <p className="text-[11px] leading-relaxed text-[#5B6472]">
              Professional, conversion-ready website development for manufacturers, exporters, corporate brands, and service businesses.
            </p>
          </div>

          {/* Standard Packages */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FFFFFF] mb-3">
              Website Packages
            </h4>
            <ul className="space-y-2 text-[11px]">
              <li>
                <a href="#packages" className="hover:text-[#FFFFFF] transition-colors">
                  Starter Website (₹9,999)
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-[#FFFFFF] transition-colors font-medium text-[#2563EB]">
                  Business Website (₹19,999 — Most Popular)
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-[#FFFFFF] transition-colors">
                  Professional Website (₹34,999)
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-[#FFFFFF] transition-colors">
                  Business Pro (₹59,999)
                </a>
              </li>
            </ul>
          </div>

          {/* Custom Solutions */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FFFFFF] mb-3">
              Advanced Scope
            </h4>
            <ul className="space-y-2 text-[11px]">
              <li>
                <a href="#services" className="hover:text-[#FFFFFF] transition-colors">
                  E-Commerce Stores (₹49,999+)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#FFFFFF] transition-colors">
                  Custom Web Applications (₹99,999+)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#FFFFFF] transition-colors">
                  Booking & Reservation Systems
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#FFFFFF] transition-colors">
                  CRM & Portal Integrations
                </a>
              </li>
            </ul>
          </div>

          {/* Commercial Terms Notice */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FFFFFF] mb-3">
              Commercial Clarity
            </h4>
            <p className="text-[11px] leading-relaxed text-[#5B6472]">
              Domain, hosting, premium plugins, paid APIs, and third-party subscriptions are billed separately unless explicitly included in the formal quotation. GST is billed separately where applicable.
            </p>
          </div>
        </div>

        {/* Bottom Baseline Bar */}
        <div className="pt-8 border-t border-[#FFFFFF]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <p>© 2026 Pixelara Global. Built with clarity from first brief to final launch.</p>
          <div className="flex items-center gap-6">
            <span className="text-[#5B6472]">hello@pixelaraglobal.com</span>
            <span className="text-[#5B6472]">pixelaraglobal.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import brandMark from '../assets/pixelara-mark.svg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Packages', href: '#packages' },
    { label: 'Industries', href: '#industries' },
    { label: 'Process', href: '#process' },
    { label: 'Portfolio', href: '#portfolio' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FFFFFF]/95 backdrop-blur-md border-b border-[#D9E1EC]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <img src={brandMark} alt="" className="h-9 w-9 rounded-[10px] shadow-[0_8px_20px_rgba(37,99,235,0.18)]" />
          <span className="text-xl font-bold tracking-tight text-[#0B1220]">
            Pixelara<span className="text-[#2563EB]">Global</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#5B6472]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#2563EB] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Primary Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-[#2563EB] hover:bg-blue-700 text-[#FFFFFF] text-sm font-semibold px-5 py-2.5 rounded-[12px] transition-colors shadow-sm"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-[#5B6472] hover:text-[#0B1220] hover:bg-[#F4F7FB] focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-[#0B1220]" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#FFFFFF] border-b border-[#D9E1EC] px-4 pt-2 pb-6 space-y-3 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-[#111827] hover:bg-[#F4F7FB] hover:text-[#2563EB]"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#2563EB] text-[#FFFFFF] text-sm font-semibold px-4 py-3 rounded-[12px]"
            >
              Get a Quote <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

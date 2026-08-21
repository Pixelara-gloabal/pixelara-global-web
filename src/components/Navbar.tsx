import { useState } from 'react';
import { Menu, X, ArrowRight, Calculator, Mail } from 'lucide-react';
import BrandLogo from './BrandLogo';
import { InstagramIcon, LinkedinIcon } from './SocialIcons';

interface NavbarProps {
  onOpenCalculator?: () => void;
}

export default function Navbar({ onOpenCalculator }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Packages', href: '#packages' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Process', href: '#process' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">

        <a href="#"><BrandLogo size="md" /></a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7 text-[13px] font-semibold text-slate-500">
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} className="hover:text-[#3B82F6] transition-colors">{l.label}</a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-2.5">
          <div className="flex items-center gap-1 mr-1">
            <a href="https://www.instagram.com/pixelara_global?igsi=d3F1ZnNucDhmcnN6" target="_blank" rel="noreferrer" className="p-2 rounded-lg text-slate-400 hover:text-pink-500 transition-colors"><InstagramIcon className="w-4 h-4" /></a>
            <a href="https://www.linkedin.com/company/pixelara-global/" target="_blank" rel="noreferrer" className="p-2 rounded-lg text-slate-400 hover:text-[#3B82F6] transition-colors"><LinkedinIcon className="w-4 h-4" /></a>
            <a href="mailto:pixelaragloabal@gmail.com" className="p-2 rounded-lg text-slate-400 hover:text-[#3B82F6] transition-colors"><Mail className="w-4 h-4" /></a>
          </div>

          <button onClick={() => onOpenCalculator?.()} type="button" className="text-[13px] font-semibold text-[#3B82F6] bg-blue-50 hover:bg-blue-100 px-3.5 py-2 rounded-xl transition-colors">
            <Calculator className="w-3.5 h-3.5 inline mr-1.5 -mt-0.5" />Estimator
          </button>

          <a href="#contact" className="text-[13px] font-bold text-white bg-[#3B82F6] hover:bg-[#2563EB] px-4 py-2 rounded-xl transition-colors shadow-sm">
            Get a Quote
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-slate-700" aria-label="Menu">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-5 pt-3 pb-6 space-y-1 shadow-lg">
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setIsOpen(false)} className="block py-2.5 text-sm font-semibold text-slate-700 hover:text-[#3B82F6]">{l.label}</a>
          ))}
          <div className="flex items-center gap-4 pt-3 border-t border-slate-100">
            <a href="https://www.instagram.com/pixelara_global?igsi=d3F1ZnNucDhmcnN6" target="_blank" rel="noreferrer" className="text-xs font-semibold text-pink-500"><InstagramIcon className="w-4 h-4 inline mr-1" />Instagram</a>
            <a href="https://www.linkedin.com/company/pixelara-global/" target="_blank" rel="noreferrer" className="text-xs font-semibold text-[#3B82F6]"><LinkedinIcon className="w-4 h-4 inline mr-1" />LinkedIn</a>
            <a href="mailto:pixelaragloabal@gmail.com" className="text-xs font-semibold text-slate-500"><Mail className="w-4 h-4 inline mr-1" />Email</a>
          </div>
          <div className="pt-3 space-y-2">
            <button onClick={() => { setIsOpen(false); onOpenCalculator?.(); }} className="w-full text-[13px] font-semibold text-[#3B82F6] bg-blue-50 py-2.5 rounded-xl"><Calculator className="w-4 h-4 inline mr-1.5 -mt-0.5" />Estimate Scope</button>
            <a href="#contact" onClick={() => setIsOpen(false)} className="block w-full text-center text-[13px] font-bold text-white bg-[#3B82F6] py-2.5 rounded-xl">Get a Quote <ArrowRight className="w-4 h-4 inline ml-1" /></a>
          </div>
        </div>
      )}
    </header>
  );
}

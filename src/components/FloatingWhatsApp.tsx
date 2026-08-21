import { MessageSquare, Calculator } from 'lucide-react';

interface FloatingWhatsAppProps {
  onOpenCalculator: () => void;
}

export default function FloatingWhatsApp({ onOpenCalculator }: FloatingWhatsAppProps) {
  const whatsappUrl = `https://wa.me/917203075804?text=${encodeURIComponent('Hello Pixelara Global, I would like to consult on a new website project.')}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end pointer-events-auto">
      {/* Scope Calculator Pill */}
      <button
        onClick={onOpenCalculator}
        className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-slate-200 text-[#2563EB] text-xs font-extrabold shadow-md hover:border-blue-300 transition-all transform hover:-translate-y-0.5 group"
      >
        <Calculator className="w-4 h-4 text-[#2563EB] group-hover:rotate-12 transition-transform" />
        <span>Estimate Scope & Price</span>
      </button>

      {/* Direct WhatsApp Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#16A34A] hover:bg-green-700 text-white text-xs font-black shadow-lg transition-all transform hover:scale-105 group border border-green-500/40"
        aria-label="Direct WhatsApp Consultation"
      >
        <MessageSquare className="w-5 h-5 fill-white text-[#16A34A] group-hover:rotate-12 transition-transform" />
        <span className="hidden md:inline">Instant Consultation</span>
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-200 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
        </span>
      </a>
    </div>
  );
}

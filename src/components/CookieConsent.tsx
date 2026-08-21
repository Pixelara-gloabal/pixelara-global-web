import { useState, useEffect } from 'react';
import { X, ShieldCheck } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('pixelara_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2500); // Appear after 2.5s
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('pixelara_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-8 md:right-auto md:max-w-md z-50 animate-on-scroll is-visible">
      <div className="bg-white border border-slate-200 rounded-[22px] p-5 shadow-2xl flex flex-col gap-4 relative overflow-hidden">
        {/* Glow indicator */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600" />
        
        <div className="flex items-start gap-3.5 mt-1">
          <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#3B82F6] flex items-center justify-center shrink-0 border border-blue-100">
            <ShieldCheck className="w-5.5 h-5.5" />
          </div>
          <div>
            <h4 className="text-xs font-black text-slate-900 tracking-tight">Privacy &amp; Data Transparency</h4>
            <p className="text-[11px] text-slate-500 mt-1 leading-normal font-semibold">
              We use secure, functional cookies to optimize your custom scope calculations and analyze search metrics. No third-party ad trackers.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5 justify-end">
          <button 
            onClick={() => setIsVisible(false)}
            className="text-[10px] font-bold text-slate-400 hover:text-slate-900 px-3 py-2 transition-colors cursor-pointer"
          >
            Decline
          </button>
          <button 
            onClick={handleAccept}
            className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-[10px] font-black transition-colors shadow-xs cursor-pointer"
          >
            Accept Cookies
          </button>
        </div>

        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 p-1 text-slate-400 hover:text-slate-950 transition-colors"
          aria-label="Close panel"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

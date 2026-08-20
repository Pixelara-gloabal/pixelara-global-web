import { ArrowRight, CheckCircle2, HelpCircle, Sparkles } from 'lucide-react';
import brandMark from '../assets/pixelara-mark.svg';

const proofPoints = ['Strategy-led design', 'Responsive by default', 'Built to convert'];

export default function Hero() {
  return (
    <section className="hero-surface relative isolate overflow-hidden border-b border-[#D9E1EC]">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_77%_32%,rgba(124,58,237,0.16),transparent_18rem),radial-gradient(circle_at_30%_72%,rgba(37,99,235,0.14),transparent_27rem)]" />
      <div className="max-w-[1280px] mx-auto grid min-h-[670px] items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-20">
        <div className="relative z-10 max-w-2xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#2563EB]/15 bg-white/75 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#2563EB] shadow-[0_8px_30px_rgba(15,23,42,0.06)] backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-[#7C3AED]" />
            Pixelara Global — Digital Studio
          </div>

          <h1 className="max-w-xl text-5xl font-black leading-[0.98] tracking-[-0.055em] text-[#0B1220] sm:text-6xl lg:text-7xl">
            Make your next move <span className="text-gradient">unmistakable.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-[#5B6472] sm:text-lg">
            High-performance websites and digital systems for ambitious businesses ready to look sharper, move faster, and win better work.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#contact" className="button-primary group">
              Start a project <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#packages" className="button-secondary">
              Explore packages <HelpCircle className="h-4 w-4 text-[#2563EB]" />
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-5 gap-y-3 border-t border-[#0B1220]/10 pt-6 text-xs font-semibold text-[#344054]">
            {proofPoints.map((point) => (
              <span key={point} className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#2563EB]" /> {point}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[510px] lg:justify-self-end">
          <div className="hero-orbit absolute inset-[7%] rounded-full border border-[#2563EB]/10" />
          <div className="hero-orbit absolute inset-[18%] rounded-full border border-dashed border-[#7C3AED]/25" />
          <div className="absolute -right-5 top-[20%] h-20 w-20 rounded-[28px] border border-white/70 bg-white/70 shadow-xl backdrop-blur sm:-right-8 sm:h-28 sm:w-28" />
          <div className="absolute -bottom-3 left-2 h-16 w-16 rounded-[22px] bg-[#2563EB]/15 blur-[1px] sm:-bottom-5 sm:h-24 sm:w-24" />
          <div className="relative grid aspect-square place-items-center rounded-[2.5rem] border border-white/80 bg-white/70 p-8 shadow-[0_32px_100px_rgba(30,41,59,0.18)] backdrop-blur-xl sm:p-12">
            <div className="absolute inset-5 rounded-[2rem] border border-[#0B1220]/5" />
            <div className="absolute left-8 top-10 h-2.5 w-2.5 rounded-sm bg-[#2563EB] shadow-[0_0_22px_6px_rgba(37,99,235,0.26)]" />
            <div className="absolute bottom-14 right-11 h-3 w-3 rounded-sm bg-[#7C3AED] shadow-[0_0_22px_6px_rgba(124,58,237,0.2)]" />
            <img src={brandMark} alt="Pixelara mark" className="relative z-10 w-[44%] drop-shadow-[0_24px_28px_rgba(15,23,42,0.22)]" />
            <div className="absolute bottom-7 left-7 right-7 flex items-center justify-between rounded-2xl border border-white/80 bg-[#0B1220] px-4 py-3 text-white shadow-lg sm:bottom-9 sm:left-9 sm:right-9">
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#b7c7ff]">Pixelara signal</span>
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#60a5fa]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

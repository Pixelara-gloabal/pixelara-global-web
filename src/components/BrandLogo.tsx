import brandMark from '../assets/pixelara-mark.svg';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function BrandLogo({ size = 'md', className = '' }: BrandLogoProps) {
  const iconSize = size === 'sm' ? 'h-7 w-7' : size === 'lg' ? 'h-11 w-11' : 'h-9 w-9';
  const textSize = size === 'sm' ? 'text-[15px]' : size === 'lg' ? 'text-[22px]' : 'text-lg';

  return (
    <div className={`flex items-center gap-2.5 shrink-0 ${className}`}>
      <img
        src={brandMark}
        alt="Pixelara Global"
        className={`${iconSize} object-contain rounded-xl bg-[#0B1120] p-1 shrink-0`}
      />
      <span className={`font-black tracking-tight ${textSize} text-[#0F172A] whitespace-nowrap leading-none`}>
        Pixelara<span className="text-gradient">Global</span>
      </span>
    </div>
  );
}

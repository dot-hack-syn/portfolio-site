// Alchemical SVG symbols based on traditional iconography

export const SunSymbol = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="50" cy="50" r="20" fill="currentColor" opacity="0.2" />
    <circle cx="50" cy="50" r="20" />
    <line x1="50" y1="10" x2="50" y2="25" />
    <line x1="50" y1="75" x2="50" y2="90" />
    <line x1="10" y1="50" x2="25" y2="50" />
    <line x1="75" y1="50" x2="90" y2="50" />
    <line x1="21" y1="21" x2="32" y2="32" />
    <line x1="68" y1="68" x2="79" y2="79" />
    <line x1="79" y1="21" x2="68" y2="32" />
    <line x1="32" y1="68" x2="21" y2="79" />
  </svg>
);

export const MoonSymbol = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M 30 20 Q 20 50 30 80 Q 60 70 70 50 Q 60 30 30 20 Z" fill="currentColor" opacity="0.2" />
    <path d="M 30 20 Q 20 50 30 80" />
    <path d="M 30 20 Q 60 30 70 50 Q 60 70 30 80" />
  </svg>
);

export const MercurySymbol = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="50" cy="45" r="15" />
    <line x1="50" y1="60" x2="50" y2="85" />
    <line x1="35" y1="75" x2="65" y2="75" />
    <path d="M 40 30 Q 50 15 60 30" fill="none" />
    <line x1="50" y1="15" x2="50" y2="30" />
  </svg>
);

export const SulfurSymbol = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="50" y1="20" x2="50" y2="50" />
    <line x1="30" y1="40" x2="70" y2="40" />
    <path d="M 35 55 L 50 75 L 65 55 Z" fill="currentColor" opacity="0.2" />
    <path d="M 35 55 L 50 75 L 65 55 Z" fill="none" />
    <circle cx="50" cy="65" r="3" fill="currentColor" />
  </svg>
);

export const SaltSymbol = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="50" cy="50" r="25" />
    <line x1="50" y1="25" x2="50" y2="75" />
    <line x1="30" y1="50" x2="70" y2="50" />
  </svg>
);

export const FireSymbol = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M 25 75 L 50 25 L 75 75 Z" fill="currentColor" opacity="0.2" />
    <path d="M 25 75 L 50 25 L 75 75 Z" />
    <line x1="35" y1="62" x2="65" y2="62" />
  </svg>
);

export const WaterSymbol = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M 25 25 L 50 75 L 75 25 Z" fill="currentColor" opacity="0.2" />
    <path d="M 25 25 L 50 75 L 75 25 Z" />
    <line x1="35" y1="38" x2="65" y2="38" />
  </svg>
);

export const AirSymbol = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M 25 75 L 50 25 L 75 75 Z" fill="currentColor" opacity="0.2" />
    <path d="M 25 75 L 50 25 L 75 75 Z" />
  </svg>
);

export const EarthSymbol = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M 25 25 L 50 75 L 75 25 Z" fill="currentColor" opacity="0.2" />
    <path d="M 25 25 L 50 75 L 75 25 Z" />
  </svg>
);

export const GoldSymbol = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="50" cy="50" r="25" fill="currentColor" opacity="0.2" />
    <circle cx="50" cy="50" r="25" />
    <circle cx="50" cy="50" r="8" fill="currentColor" />
  </svg>
);

export const PentagramSymbol = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="50" cy="50" r="40" opacity="0.3" />
    <path d="M 50 15 L 61 45 L 92 45 L 68 63 L 78 92 L 50 73 L 22 92 L 32 63 L 8 45 L 39 45 Z" fill="currentColor" opacity="0.1" />
    <path d="M 50 15 L 61 45 L 92 45 L 68 63 L 78 92 L 50 73 L 22 92 L 32 63 L 8 45 L 39 45 Z" />
  </svg>
);

export const OuroborosSymbol = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="50" cy="50" r="35" strokeDasharray="4 2" opacity="0.3" />
    <path d="M 85 50 Q 85 25 65 15 Q 50 10 35 15 Q 15 25 15 50 Q 15 75 35 85 Q 45 90 55 88" fill="none" strokeWidth="2" />
    <path d="M 55 88 L 52 85 M 55 88 L 58 86" strokeLinecap="round" />
    <circle cx="35" cy="30" r="2" fill="currentColor" />
    <path d="M 60 85 Q 65 83 70 80" fill="none" strokeWidth="1.5" />
  </svg>
);

export const FlowerOfLifeSymbol = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="1">
    <circle cx="50" cy="50" r="15" opacity="0.4" />
    <circle cx="50" cy="35" r="15" opacity="0.4" />
    <circle cx="50" cy="65" r="15" opacity="0.4" />
    <circle cx="37" cy="42.5" r="15" opacity="0.4" />
    <circle cx="37" cy="57.5" r="15" opacity="0.4" />
    <circle cx="63" cy="42.5" r="15" opacity="0.4" />
    <circle cx="63" cy="57.5" r="15" opacity="0.4" />
  </svg>
);

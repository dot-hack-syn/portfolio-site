import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { OuroborosSymbol, PentagramSymbol, SunSymbol, MoonSymbol } from './AlchemicalSymbols';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-card/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <OuroborosSymbol className="w-8 h-8 text-primary" />
            <span className="font-serif italic text-primary">Opus Magnum</span>
          </motion.div>

          <nav className="hidden md:flex items-center gap-8">
            <motion.button
              onClick={() => scrollToSection('hero')}
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <PentagramSymbol className="w-5 h-5" />
              <span>Home</span>
            </motion.button>
            
            <motion.button
              onClick={() => scrollToSection('about')}
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <SunSymbol className="w-5 h-5" />
              <span>About</span>
            </motion.button>
            
            <motion.button
              onClick={() => scrollToSection('projects')}
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MoonSymbol className="w-5 h-5" />
              <span>Projects</span>
            </motion.button>
          </nav>

          <motion.div
            className="md:hidden flex items-center gap-1"
          >
            <div className="w-1 h-1 rounded-full bg-primary" />
            <div className="w-1 h-1 rounded-full bg-primary" />
            <div className="w-1 h-1 rounded-full bg-primary" />
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}

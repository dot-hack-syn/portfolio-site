import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { MercurySymbol, SunSymbol, MoonSymbol, PentagramSymbol } from './AlchemicalSymbols';

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  return (
    <section id="hero" ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1654408618689-b737eed3c171?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpZXZhbCUyMG1hbnVzY3JpcHR8ZW58MXx8fHwxNzYyMzI2Nzg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)'
          }}
        />
        {/* Decorative overlay pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
      </motion.div>

      {/* Floating symbols */}
      <motion.div
        className="absolute top-20 left-10 text-accent opacity-15"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <MercurySymbol className="w-24 h-24" />
      </motion.div>

      <motion.div
        className="absolute bottom-40 right-20 text-accent opacity-15"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -10, 0]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <MoonSymbol className="w-20 h-20" />
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-1/4 text-accent opacity-15"
        animate={{
          y: [0, -15, 0],
          rotate: [0, 15, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <SunSymbol className="w-20 h-20" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center px-6 max-w-4xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6"
        >
          <div className="mx-auto text-accent mb-4">
            <PentagramSymbol className="w-16 h-16 mx-auto" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mb-6"
        >
          <span className="block text-5xl md:text-7xl font-serif italic mb-2">The Alchemist's</span>
          <span className="block text-6xl md:text-8xl font-serif">Portfolio</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
        >
          Transforming base elements into digital gold through the sacred arts of design and development
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-primary text-primary-foreground rounded border-2 border-primary hover:bg-primary/90 transition-colors"
          >
            View Works
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-transparent text-primary border-2 border-primary rounded hover:bg-primary/10 transition-colors"
          >
            Contact
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <ArrowDown className="w-6 h-6 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

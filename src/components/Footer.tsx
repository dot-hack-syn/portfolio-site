import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { FlowerOfLifeSymbol } from './AlchemicalSymbols';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socials = [
    { icon: Mail, label: 'Email', href: 'mailto:alchemist@opus.com' },
    { icon: Github, label: 'GitHub', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' }
  ];

  return (
    <footer className="relative py-12 border-t-2 border-border bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main footer content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="mb-2 font-serif italic">Opus Magnum</h3>
              <p className="text-sm text-muted-foreground">
                Transmuting visions into reality through the sacred arts
              </p>
            </motion.div>

            {/* Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#hero" className="text-muted-foreground hover:text-accent transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-muted-foreground hover:text-accent transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-muted-foreground hover:text-accent transition-colors">
                    Projects
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="mb-4">Connect</h4>
              <div className="flex gap-4">
                {socials.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-px bg-border mb-8"
          />

          {/* Bottom bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground"
          >
            <p>© {currentYear} Opus Magnum. All mysteries reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-accent transition-colors">Privacy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms</a>
              <a href="#" className="hover:text-accent transition-colors">Cookies</a>
            </div>
          </motion.div>

          {/* Decorative element */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 0.1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="absolute bottom-4 right-4 text-accent pointer-events-none"
          >
            <FlowerOfLifeSymbol className="w-24 h-24" />
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

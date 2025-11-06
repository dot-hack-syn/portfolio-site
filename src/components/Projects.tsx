import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import { OuroborosSymbol, SulfurSymbol, GoldSymbol, MercurySymbol, SaltSymbol } from './AlchemicalSymbols';

export function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-50px', '50px']);

  const projects = [
    {
      title: 'Opus Primum',
      subtitle: 'The First Work',
      description: 'A mystical journey through interactive storytelling, weaving ancient wisdom with modern interaction paradigms.',
      image: 'https://images.unsplash.com/photo-1654408618689-b737eed3c171?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpZXZhbCUyMG1hbnVzY3JpcHR8ZW58MXx8fHwxNzYyMzI2Nzg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React', 'Animation', 'Design'],
      icon: SulfurSymbol
    },
    {
      title: 'Codex Arcanum',
      subtitle: 'The Secret Book',
      description: 'A digital grimoire housing esoteric knowledge, presented through an interface of sacred geometry and hidden symbols.',
      image: 'https://images.unsplash.com/photo-1728739831436-0f3d7af0c4d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwZHJhd2luZ3xlbnwxfHx8fDE3NjI0NDU4OTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['TypeScript', 'Database', 'API'],
      icon: MercurySymbol
    },
    {
      title: 'Astrolabium',
      subtitle: 'The Star Calculator',
      description: 'An astronomical visualization platform merging celestial mechanics with data-driven insights and ethereal aesthetics.',
      image: 'https://images.unsplash.com/photo-1543191878-f6a3e470454e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGQlMjBtYXB8ZW58MXx8fHwxNzYyNDQ1ODkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Data Viz', 'WebGL', 'Canvas'],
      icon: GoldSymbol
    },
    {
      title: 'Tabula Smaragdina',
      subtitle: 'The Emerald Tablet',
      description: 'A translation application that bridges languages through the lens of hermetic correspondence and symbolic transformation.',
      image: 'https://images.unsplash.com/photo-1579167728798-a1cf3d595960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwYm90YW5pY2FsfGVufDF8fHx8MTc2MjQ0NTg5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['NLP', 'ML', 'Cloud'],
      icon: SaltSymbol
    }
  ];

  return (
    <section id="projects" ref={ref} className="relative py-32 overflow-hidden">
      {/* Decorative background element */}
      <motion.div
        style={{ y }}
        className="absolute left-0 top-1/4 w-1/3 h-1/2 opacity-5 hidden lg:block"
      >
        <OuroborosSymbol className="w-full h-full text-accent" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-4">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-16 h-px bg-accent mb-2"
            />
            <h2 className="text-4xl md:text-5xl font-serif italic">The Great Works</h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-16 h-px bg-accent mt-2 ml-auto"
            />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-6">
            A collection of transmutations—each project a manifestation of the alchemical process
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-card rounded-lg overflow-hidden border-2 border-border shadow-xl"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-70"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                
                {/* Overlay icon */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="absolute top-4 right-4 bg-primary/90 p-3 rounded-full"
                >
                  <ExternalLink className="w-5 h-5 text-primary-foreground" />
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <project.icon className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="mb-1">{project.title}</h3>
                    <p className="text-sm italic text-muted-foreground">{project.subtitle}</p>
                  </div>
                </div>
                
                <p className="text-sm text-foreground/70 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 bg-muted text-muted-foreground rounded-full border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative corner element */}
              <div className="absolute bottom-0 right-0 w-16 h-16 opacity-10">
                <svg viewBox="0 0 100 100" className="w-full h-full text-accent">
                  <circle cx="100" cy="100" r="50" fill="currentColor" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center mt-20 max-w-2xl mx-auto"
        >
          <div className="relative inline-block">
            <p className="text-lg italic text-muted-foreground font-serif">
              "As above, so below; as within, so without"
            </p>
            <div className="absolute -top-3 -left-6 text-3xl text-accent/30">✦</div>
            <div className="absolute -bottom-3 -right-6 text-3xl text-accent/30">✦</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

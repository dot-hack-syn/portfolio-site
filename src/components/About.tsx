import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { FireSymbol, WaterSymbol, AirSymbol, EarthSymbol } from './AlchemicalSymbols';

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['100px', '-100px']);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

  const skills = [
    { icon: FireSymbol, title: 'Design', description: 'Crafting visual harmonies with the precision of ancient geometries' },
    { icon: WaterSymbol, title: 'Development', description: 'Transmuting ideas into living digital experiences' },
    { icon: AirSymbol, title: 'Strategy', description: 'Divining paths through the labyrinth of user needs' },
    { icon: EarthSymbol, title: 'Innovation', description: 'Discovering new essences in the confluence of art and science' }
  ];

  return (
    <section id="about" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background parallax image */}
      <motion.div
        style={{ y }}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-10 hidden lg:block"
      >
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1728739831436-0f3d7af0c4d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwZHJhd2luZ3xlbnwxfHx8fDE3NjI0NDU4OTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)'
          }}
        />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          style={{ opacity }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4">
              <div className="w-16 h-px bg-accent mb-2" />
              <h2 className="text-4xl md:text-5xl font-serif italic">About the Practitioner</h2>
              <div className="w-16 h-px bg-accent mt-2 ml-auto" />
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-6">
              A seeker of hidden knowledge, devoted to the marriage of aesthetic philosophy and technological craft
            </p>
          </motion.div>

          {/* Main content */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="relative">
                <div className="absolute -left-4 top-0 text-6xl text-accent/30 font-serif">"</div>
                <p className="pl-6 text-foreground/80 leading-relaxed">
                  In the ancient tradition of the Hermetic arts, I pursue the transformation of raw materials into refined works. 
                  Each project is an alchemical process—a journey from prima materia to the philosopher's stone.
                </p>
              </div>
              
              <p className="text-foreground/80 leading-relaxed">
                My practice draws upon the wisdom of esoteric traditions, blending mystical aesthetics with modern 
                technological capabilities. The result: experiences that transcend the ordinary and touch the sublime.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="aspect-square rounded-lg overflow-hidden border-2 border-border shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1579167728798-a1cf3d595960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwYm90YW5pY2FsfGVufDF8fHx8MTc2MjQ0NTg5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Botanical manuscript"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
              </div>
            </motion.div>
          </div>

          {/* Skills grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-card p-6 rounded border border-border shadow-lg"
              >
                <div className="mb-4">
                  <skill.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="mb-2">{skill.title}</h3>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

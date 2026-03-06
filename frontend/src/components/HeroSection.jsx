import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export const HeroSection = ({ clientName, industry, hero, heroImage, accentColor }) => {
  const scrollToContent = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="overview"
      className="relative h-screen w-full overflow-hidden"
      data-testid="hero-section"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <img
            src={heroImage}
            alt={`${clientName} hero`}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
            data-testid="hero-image"
          />
        </motion.div>
        {/* Dark overlay gradient */}
        <div 
          className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40"
          style={{
            background: `linear-gradient(to top, #050505 0%, rgba(5,5,5,0.85) 40%, rgba(5,5,5,0.5) 100%)`
          }}
        />
        {/* Accent color subtle overlay */}
        <div 
          className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{ backgroundColor: accentColor }}
        />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          {/* Industry Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <span 
              className="inline-block px-4 py-2 text-xs font-body font-medium tracking-widest uppercase border rounded-full"
              style={{ 
                borderColor: accentColor,
                color: accentColor
              }}
              data-testid="industry-tag"
            >
              {industry}
            </span>
          </motion.div>

          {/* Proposal For */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-zinc-400 text-base md:text-lg font-body mb-4"
            data-testid="proposal-for-text"
          >
            Strategic Proposal for
          </motion.p>

          {/* Client Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white tracking-tight leading-[1.1] mb-8"
            data-testid="client-name-hero"
          >
            {clientName}
          </motion.h1>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl md:text-2xl lg:text-3xl font-heading font-medium text-zinc-200 mb-6 max-w-3xl mx-auto"
            data-testid="hero-headline"
          >
            {hero.headline}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-base md:text-lg text-zinc-400 font-body max-w-2xl mx-auto"
            data-testid="hero-subtitle"
          >
            {hero.subtitle}
          </motion.p>
        </div>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          onClick={scrollToContent}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500 hover:text-white transition-colors cursor-pointer"
          data-testid="scroll-indicator"
        >
          <span className="text-xs font-body tracking-widest uppercase">Explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={20} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
};

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { 
  CheckCircle, XCircle, TrendingUp, Users, Globe, Smartphone, 
  ArrowDown, ChevronRight, BarChart3, Target, Zap, Building2,
  Instagram, ShoppingCart, Search, MessageSquare, Video, Palette
} from 'lucide-react';

// WTF Agency Logo URLs
const WTF_LOGO = "https://customer-assets.emergentagent.com/job_barugel-transform/artifacts/uie5u4fs_logo-wtf.png";
const WTF_LOGO_BLACK = "https://customer-assets.emergentagent.com/job_barugel-transform/artifacts/wsbw9ziw_logo-wtf-negro.png";

// Image URLs
const IMAGES = {
  hero: "https://images.unsplash.com/photo-1765766600820-58eaf8687f1d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MTJ8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjBtYXJibGUlMjBiYXRocm9vbSUyMG1pbmltYWxpc3R8ZW58MHx8fHwxNzcyNzYzMjQ0fDA&ixlib=rb-4.1.0&q=85",
  bathroom: "https://images.unsplash.com/photo-1758548157466-7c454382035a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODh8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBiYXRocm9vbSUyMHRpbGVzJTIwZGVzaWduJTIwbW9kZXJufGVufDB8fHx8MTc3Mjc2MzE5MHww&ixlib=rb-4.1.0&q=85",
  tiles: "https://images.unsplash.com/photo-1557929101-7ef521427d97?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTJ8MHwxfHNlYXJjaHw0fHxtaW5pbWFsJTIwZ2VvbWV0cmljJTIwdGlsZXMlMjB0ZXh0dXJlJTIwcGF0dGVybnxlbnwwfHx8fDE3NzI3NjMxOTl8MA&ixlib=rb-4.1.0&q=85",
  architecture: "https://images.unsplash.com/photo-1760360324472-3c833eaf2d1e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBjb25zdHJ1Y3Rpb24lMjBidWlsZGluZyUyMGZhY2FkZSUyMGFyY2hpdGVjdHVyZXxlbnwwfHx8fDE3NzI3NjMxOTB8MA&ixlib=rb-4.1.0&q=85",
  marble: "https://images.unsplash.com/photo-1762328941988-e584e6be5cae?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODR8MHwxfHNlYXJjaHwyfHxJdGFsaWFuJTIwbW9kZXJuJTIwYXJjaGl0ZWN0dXJlJTIwaW50ZXJpb3IlMjBtYXJibGUlMjBsdXh1cnl8ZW58MHx8fHwxNzcyNzYzMTg5fDA&ixlib=rb-4.1.0&q=85",
  showroom: "https://images.unsplash.com/photo-1771402382398-7210f67eb41b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA3MDR8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzaG93cm9vbSUyMGludGVyaW9yJTIwZGVzaWduJTIwbGlnaHRpbmclMjBtb2Rlcm58ZW58MHx8fHwxNzcyNzYzMTk4fDA&ixlib=rb-4.1.0&q=85"
};

// Animated Counter Component
const AnimatedCounter = ({ end, suffix = "", prefix = "", duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    
    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>;
};

// Section Reveal Animation
const SectionReveal = ({ children, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Navigation Component
const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass shadow-lg' : 'bg-transparent'
      }`}
      data-testid="main-navigation"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <img 
            src={scrolled ? WTF_LOGO_BLACK : WTF_LOGO_BLACK} 
            alt="WTF Agency" 
            className="h-10 w-auto"
          />
          <span className="hidden md:block text-xs font-mono tracking-[0.15em] text-gray-400 uppercase">
            × Barugel
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#diagnostico" className="text-xs font-mono tracking-[0.15em] uppercase hover:text-[#E65100] transition-colors" data-testid="nav-diagnostico">Diagnóstico</a>
          <a href="#solucion" className="text-xs font-mono tracking-[0.15em] uppercase hover:text-[#E65100] transition-colors" data-testid="nav-solucion">Solución</a>
          <a href="#inversion" className="text-xs font-mono tracking-[0.15em] uppercase hover:text-[#E65100] transition-colors" data-testid="nav-inversion">Inversión</a>
          <a href="#resultados" className="text-xs font-mono tracking-[0.15em] uppercase hover:text-[#E65100] transition-colors" data-testid="nav-resultados">Resultados</a>
        </div>
      </div>
    </motion.nav>
  );
};

// Hero Section
const HeroSection = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white" data-testid="hero-section">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/70 z-10" />
        <img 
          src={IMAGES.hero}
          alt="Luxury marble bathroom"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Heritage Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="inline-flex items-center gap-3 mb-8 px-4 py-2 border border-[#E65100] rounded-none"
            >
              <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#E65100]">90 Años de Historia</span>
              <span className="text-xs font-mono text-gray-400">+</span>
              <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#1A1A1A]">IA Como Core</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="font-playfair text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[0.9] mb-8"
            >
              <span className="text-[#1A1A1A]">Barugel</span>
              <br />
              <span className="text-[#E65100]">Agencia</span>
              <br />
              <span className="text-[#1A1A1A]">Integral</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="text-lg md:text-xl text-gray-600 font-light leading-relaxed max-w-xl mb-12"
            >
              Servicio integral de agencia con IA como core. 
              El nuevo modelo WTF Agency para dominar el sector construcción.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a 
                href="#diagnostico" 
                className="inline-flex items-center justify-center gap-3 bg-[#1A1A1A] text-white px-8 py-4 text-xs font-mono tracking-[0.15em] uppercase hover:bg-[#E65100] transition-all duration-300 group"
                data-testid="cta-ver-propuesta"
              >
                Ver Propuesta Completa
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Right - Logo Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="hidden lg:flex flex-col items-center justify-center"
          >
            <div className="relative">
              {/* Barugel Typography Logo */}
              <div className="text-center mb-8">
                <span className="font-playfair text-6xl font-medium tracking-wide text-[#1A1A1A]">BARUGEL</span>
                <p className="text-xs font-mono tracking-[0.3em] text-gray-400 mt-2">ARQUITECTURA Y TENDENCIAS</p>
              </div>
              
              {/* Partnership Indicator */}
              <div className="flex items-center justify-center gap-6 opacity-60">
                <div className="w-24 h-px bg-gray-300" />
                <span className="text-xs font-mono text-gray-400">×</span>
                <div className="w-24 h-px bg-gray-300" />
              </div>
              
              {/* WTF Agency */}
              <div className="mt-6 flex justify-center">
                <img src={WTF_LOGO} alt="WTF Agency" className="h-16 w-auto opacity-80" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          style={{ opacity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs font-mono tracking-[0.2em] uppercase text-gray-400">Explorar</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown className="w-5 h-5 text-[#E65100]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Diagnosis Section
const DiagnosisSection = () => {
  const diagnostics = [
    { label: "Heritage", sublabel: "90 años establecidos", status: true, icon: Building2 },
    { label: "Portfolio", sublabel: "Gama completa de productos", status: true, icon: Palette },
    { label: "Reconocimiento", sublabel: "Líder de mercado", status: true, icon: Target },
    { label: "Infraestructura Digital", sublabel: "Necesita integración IA", status: false, icon: Globe },
    { label: "E-commerce", sublabel: "Inexistente", status: false, icon: ShoppingCart },
    { label: "Customer Experience", sublabel: "Desactualizado", status: false, icon: Users },
  ];

  const metrics = [
    { value: "97K", label: "Seguidores Instagram", sublabel: "Base sólida pero suboptimizada" },
    { value: "Top 3", label: "Posición Competitiva", sublabel: "Brecha digital vs líderes" },
    { value: "0%", label: "E-commerce", sublabel: "Oportunidad de mercado" },
  ];

  return (
    <section id="diagnostico" className="py-32 bg-[#F5F5F5] relative grain-overlay" data-testid="diagnosis-section">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <SectionReveal>
          <div className="mb-20">
            <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#E65100] mb-4 block">01 — Diagnóstico</span>
            <h2 className="font-playfair text-4xl md:text-6xl font-medium tracking-tight mb-6">
              Situación Actual
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Un análisis profundo revela la brecha entre el potencial de Barugel y su presencia digital actual.
            </p>
          </div>
        </SectionReveal>

        {/* Metrics Grid */}
        <SectionReveal className="mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.1)" }}
                className="bg-white p-8 border-l-2 border-[#1A1A1A] transition-all duration-300"
                data-testid={`metric-card-${index}`}
              >
                <div className="text-4xl md:text-5xl font-playfair font-medium text-[#1A1A1A] mb-2">
                  {metric.value}
                </div>
                <div className="text-sm font-medium text-[#1A1A1A] mb-1">{metric.label}</div>
                <div className="text-xs text-gray-500">{metric.sublabel}</div>
              </motion.div>
            ))}
          </div>
        </SectionReveal>

        {/* Diagnostic Cards */}
        <SectionReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {diagnostics.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, borderColor: "#E65100" }}
                  className={`bg-white border border-gray-100 p-6 transition-all duration-500 group cursor-pointer ${
                    item.status ? '' : 'border-l-4 border-l-red-500'
                  }`}
                  data-testid={`diagnostic-card-${index}`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <Icon className={`w-6 h-6 ${item.status ? 'text-[#1A1A1A]' : 'text-red-500'}`} />
                    {item.status ? (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-500" />
                    )}
                  </div>
                  <h3 className="font-medium text-[#1A1A1A] mb-1 group-hover:text-[#E65100] transition-colors">
                    {item.label}
                  </h3>
                  <p className="text-sm text-gray-500">{item.sublabel}</p>
                </motion.div>
              );
            })}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};

// Competitive Landscape Section
const CompetitiveLandscape = () => {
  const competitors = [
    { name: "FV", followers: 118000, position: "Líder tradicional", color: "#666" },
    { name: "Cerro Negro", followers: 66000, position: "130 años heritage", color: "#888" },
    { name: "Blaisten", followers: 91000, position: "Líder e-commerce", color: "#999" },
    { name: "BARUGEL", followers: 97000, position: "OPORTUNIDAD", color: "#E65100", highlight: true },
  ];

  const gaps = [
    { area: "E-commerce", percentage: 90, label: "90% del mercado sin capturar" },
    { area: "AI Integration", percentage: 100, label: "0% competidores con IA" },
    { area: "Video Content", percentage: 90, label: "10% saturación del mercado" },
  ];

  return (
    <section className="py-32 bg-[#1A1A1A] text-white relative overflow-hidden" data-testid="competitive-section">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(255,255,255,0.1) 50px, rgba(255,255,255,0.1) 51px),
                           repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(255,255,255,0.1) 50px, rgba(255,255,255,0.1) 51px)`
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <SectionReveal>
          <div className="mb-20">
            <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#E65100] mb-4 block">02 — Panorama</span>
            <h2 className="font-playfair text-4xl md:text-6xl font-medium tracking-tight mb-6">
              Panorama Competitivo
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl">
              El mercado digital de construcción está subutilizado. La oportunidad de liderazgo está disponible.
            </p>
          </div>
        </SectionReveal>

        {/* Competitors Chart */}
        <SectionReveal className="mb-20">
          <div className="grid md:grid-cols-4 gap-4">
            {competitors.map((comp, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className={`p-6 border ${
                  comp.highlight 
                    ? 'border-[#E65100] bg-[#E65100]/10' 
                    : 'border-white/10 hover:border-white/30'
                } transition-all duration-300`}
                data-testid={`competitor-card-${index}`}
              >
                <div className={`text-3xl md:text-4xl font-playfair font-medium mb-2 ${
                  comp.highlight ? 'text-[#E65100]' : 'text-white'
                }`}>
                  {(comp.followers / 1000).toFixed(0)}K
                </div>
                <div className="text-sm font-medium mb-1">{comp.name}</div>
                <div className={`text-xs ${comp.highlight ? 'text-[#E65100]' : 'text-gray-500'}`}>
                  {comp.position}
                </div>
                {/* Bar */}
                <div className="mt-4 h-1 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(comp.followers / 118000) * 100}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className={`h-full ${comp.highlight ? 'bg-[#E65100]' : 'bg-white/30'}`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </SectionReveal>

        {/* Market Gaps */}
        <SectionReveal>
          <h3 className="font-playfair text-2xl mb-8">Brechas de Mercado — Oportunidades</h3>
          <div className="space-y-6">
            {gaps.map((gap, index) => (
              <motion.div 
                key={index} 
                className="flex items-center gap-6"
                data-testid={`market-gap-${index}`}
              >
                <div className="w-32 text-sm font-mono text-gray-400">{gap.area}</div>
                <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${gap.percentage}%` }}
                    transition={{ duration: 1.2, delay: index * 0.2 }}
                    className="h-full bg-gradient-to-r from-[#E65100] to-[#FF8A50]"
                  />
                </div>
                <div className="w-48 text-xs text-right text-gray-500">{gap.label}</div>
              </motion.div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};

// Solution Timeline Section
const SolutionSection = () => {
  const phases = [
    {
      number: "01",
      title: "Fundación IA",
      timeline: "Meses 1-3",
      items: [
        { icon: Globe, text: "Website rediseño completo + e-commerce" },
        { icon: Instagram, text: "Instagram optimización + estrategia contenido IA" },
        { icon: MessageSquare, text: "AI chatbot implementación" },
        { icon: Search, text: "SEO dominación (20+ keywords)" },
        { icon: BarChart3, text: "Analytics + CRM integración" },
      ],
      image: IMAGES.bathroom
    },
    {
      number: "02",
      title: "Liderazgo de Mercado",
      timeline: "Meses 4-6",
      items: [
        { icon: Palette, text: "Content factory IA: 100+ transformaciones" },
        { icon: Video, text: "Serie de contenido video (50+ videos)" },
        { icon: Users, text: "Partnerships influencers (15 arquitectos)" },
        { icon: Target, text: "Dominación multi-plataforma" },
        { icon: Zap, text: "Automatización customer experience" },
      ],
      image: IMAGES.showroom
    },
    {
      number: "03",
      title: "Innovación y Escala",
      timeline: "Meses 7-12",
      items: [
        { icon: Smartphone, text: "AR/VR diseñador de espacios (primero en Argentina)" },
        { icon: MessageSquare, text: "Recomendaciones AI-powered" },
        { icon: Smartphone, text: "Desarrollo app móvil" },
        { icon: TrendingUp, text: "Thought leadership industria" },
        { icon: Globe, text: "Preparación expansión regional" },
      ],
      image: IMAGES.architecture
    },
  ];

  return (
    <section id="solucion" className="py-32 bg-white relative" data-testid="solution-section">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <SectionReveal>
          <div className="mb-20 text-center">
            <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#E65100] mb-4 block">03 — Solución WTF</span>
            <h2 className="font-playfair text-4xl md:text-6xl font-medium tracking-tight mb-6">
              Servicio Integral + IA
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Un plan de 12 meses con IA como core para convertir a Barugel en el líder indiscutido del sector construcción.
            </p>
          </div>
        </SectionReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2" />

          {phases.map((phase, phaseIndex) => (
            <SectionReveal key={phaseIndex}>
              <div className={`relative grid md:grid-cols-2 gap-8 mb-24 ${
                phaseIndex % 2 === 1 ? 'md:direction-rtl' : ''
              }`}>
                {/* Timeline Marker */}
                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 -translate-x-1/2 bg-[#E65100] rounded-full border-4 border-white z-10 shadow-lg" />

                {/* Content Side */}
                <div className={`${phaseIndex % 2 === 1 ? 'md:col-start-2 md:pl-16' : 'md:pr-16'} pl-8 md:pl-0`}>
                  <div className="mb-6">
                    <span className="text-6xl font-playfair font-medium text-[#E65100]/20">{phase.number}</span>
                  </div>
                  <h3 className="font-playfair text-2xl md:text-3xl font-medium mb-2">{phase.title}</h3>
                  <span className="inline-block px-3 py-1 bg-[#F5F5F5] text-xs font-mono tracking-wider text-gray-600 mb-6">
                    {phase.timeline}
                  </span>
                  
                  <div className="space-y-4">
                    {phase.items.map((item, itemIndex) => {
                      const Icon = item.icon;
                      return (
                        <motion.div
                          key={itemIndex}
                          whileHover={{ x: 8 }}
                          className="flex items-center gap-4 group cursor-pointer"
                          data-testid={`phase-${phaseIndex}-item-${itemIndex}`}
                        >
                          <div className="w-10 h-10 flex items-center justify-center border border-gray-200 group-hover:border-[#E65100] group-hover:bg-[#E65100]/5 transition-all">
                            <Icon className="w-4 h-4 text-gray-600 group-hover:text-[#E65100] transition-colors" />
                          </div>
                          <span className="text-sm text-gray-600 group-hover:text-[#1A1A1A] transition-colors">
                            {item.text}
                          </span>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Image Side */}
                <div className={`${phaseIndex % 2 === 1 ? 'md:col-start-1 md:row-start-1 md:pr-16' : 'md:pl-16'} hidden md:block`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="aspect-[4/3] overflow-hidden"
                  >
                    <img 
                      src={phase.image} 
                      alt={phase.title}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                  </motion.div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// Investment Section
const InvestmentSection = () => {
  const comparison = [
    { method: "Agencia Tradicional", price: "USD 8,000+/mes", status: "Sin IA" },
    { method: "Equipo In-House", price: "USD 15,000+/mes", status: "Complejo" },
    { method: "WTF Agency", price: "USD 3,500/mes", status: "IA Integrada", highlight: true },
  ];

  return (
    <section id="inversion" className="py-32 bg-[#F5F5F5] relative grain-overlay" data-testid="investment-section">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <SectionReveal>
          <div className="mb-20">
            <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#E65100] mb-4 block">04 — Inversión</span>
            <h2 className="font-playfair text-4xl md:text-6xl font-medium tracking-tight mb-6">
              Estructura de Inversión
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Servicio integral de agencia con IA como core. Sin costos ocultos.
            </p>
          </div>
        </SectionReveal>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Pricing Card */}
          <SectionReveal>
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white p-10 border-2 border-[#1A1A1A] relative overflow-hidden"
            >
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#E65100]" style={{
                clipPath: 'polygon(100% 0, 0 0, 100% 100%)'
              }} />
              
              <span className="text-xs font-mono tracking-[0.2em] uppercase text-gray-500 mb-2 block">
                Fee Mensual
              </span>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="font-playfair text-6xl md:text-7xl font-medium text-[#1A1A1A]">
                  $3,500
                </span>
                <span className="text-lg text-gray-500">USD</span>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-sm text-gray-600">Compromiso Anual</span>
                  <span className="text-sm font-medium">USD 42,000</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-sm text-gray-600">Setup Fees</span>
                  <span className="text-sm font-medium text-[#E65100]">Sin costo</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-sm text-gray-600">IA Integrada</span>
                  <span className="text-sm font-medium text-[#E65100]">Incluida</span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="text-sm text-gray-600">Facturación</span>
                  <span className="text-sm font-medium">Mensual</span>
                </div>
              </div>

              <div className="p-4 bg-[#F5F5F5] text-center">
                <span className="text-xs font-mono tracking-wider text-gray-500">
                  SERVICIO INTEGRAL CON IA COMO CORE
                </span>
              </div>
            </motion.div>
          </SectionReveal>

          {/* Comparison */}
          <SectionReveal>
            <h3 className="font-playfair text-2xl mb-8">Comparativa de Alternativas</h3>
            <div className="space-y-4">
              {comparison.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: item.highlight ? 0 : 8 }}
                  className={`p-6 border ${
                    item.highlight 
                      ? 'border-[#E65100] bg-[#E65100]/5' 
                      : 'border-gray-200 bg-white'
                  } transition-all`}
                  data-testid={`comparison-card-${index}`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className={`text-lg font-medium ${item.highlight ? 'text-[#E65100]' : 'text-[#1A1A1A]'}`}>
                        {item.method}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">{item.status}</div>
                    </div>
                    <div className={`text-2xl font-playfair ${item.highlight ? 'text-[#E65100]' : 'text-gray-400 line-through'}`}>
                      {item.price}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-[#1A1A1A] text-white">
              <div className="flex items-center justify-between">
                <span className="text-sm">Ahorro vs. Agencia Tradicional</span>
                <span className="text-2xl font-playfair text-[#E65100]">56%+</span>
              </div>
              <p className="text-xs text-gray-400 mt-2">Con IA integrada y resultados superiores</p>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
};

// Results Dashboard Section
const ResultsSection = () => {
  const digitalMetrics = [
    { label: "Seguidores Instagram", current: "97K", projected: "300K", growth: "+209%" },
    { label: "Tráfico Website", current: "Base", projected: "+500%", growth: "5x" },
    { label: "Revenue E-commerce", current: "$0", projected: "$2M", growth: "Año 1" },
    { label: "Rankings SEO", current: "-", projected: "#1", growth: "20+ keywords" },
    { label: "Engagement Rate", current: "2%", projected: "8%", growth: "+300%" },
  ];

  const businessMetrics = [
    { value: 500, suffix: "%", label: "Aumento Generación Leads" },
    { value: 35, suffix: "%", label: "Ventas Digitales del Total" },
    { value: 200, suffix: "%", label: "Customer Lifetime Value" },
  ];

  return (
    <section id="resultados" className="py-32 bg-[#1A1A1A] text-white relative overflow-hidden" data-testid="results-section">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E65100]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E65100]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <SectionReveal>
          <div className="mb-20 text-center">
            <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#E65100] mb-4 block">05 — Resultados</span>
            <h2 className="font-playfair text-4xl md:text-6xl font-medium tracking-tight mb-6">
              Resultados Proyectados
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Métricas de impacto a 12 meses basadas en nuestra metodología probada.
            </p>
          </div>
        </SectionReveal>

        {/* Digital Performance Grid */}
        <SectionReveal className="mb-20">
          <h3 className="text-xs font-mono tracking-[0.2em] uppercase text-gray-500 mb-8">Performance Digital</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {digitalMetrics.map((metric, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02, borderColor: "#E65100" }}
                className="p-6 border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300"
                data-testid={`digital-metric-${index}`}
              >
                <div className="text-xs text-gray-500 mb-4">{metric.label}</div>
                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-gray-500 text-sm line-through mr-2">{metric.current}</span>
                    <span className="text-3xl font-playfair text-white">{metric.projected}</span>
                  </div>
                  <span className="text-[#E65100] font-mono text-sm">{metric.growth}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </SectionReveal>

        {/* Business Impact */}
        <SectionReveal>
          <h3 className="text-xs font-mono tracking-[0.2em] uppercase text-gray-500 mb-8">Impacto en Negocio</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {businessMetrics.map((metric, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="text-center p-10 border border-[#E65100] bg-[#E65100]/5"
                data-testid={`business-metric-${index}`}
              >
                <div className="text-6xl md:text-7xl font-playfair text-[#E65100] mb-4">
                  <AnimatedCounter end={metric.value} suffix={metric.suffix} prefix="+" />
                </div>
                <div className="text-sm text-gray-400">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};

// Footer Section
const Footer = () => {
  return (
    <footer className="py-32 bg-white relative" data-testid="footer-section">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <SectionReveal>
          <h2 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-8">
            Construyamos
            <br />
            <span className="text-[#E65100]">el Futuro</span>
          </h2>
          
          <div className="w-24 h-px bg-[#1A1A1A] mx-auto my-12" />
          
          <div className="flex flex-col items-center gap-6">
            <img src={WTF_LOGO} alt="WTF Agency" className="h-12 w-auto" />
            <p className="text-xs font-mono tracking-[0.15em] text-gray-400 uppercase">
              Brief Destroyers — 15 años transformando marcas
            </p>
            <p className="text-xs text-gray-400">
              Buenos Aires • Madrid • Santiago • Lima • México • Asunción
            </p>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-100">
            <p className="text-xs text-gray-400">
              © 2024 WTF Agency. Propuesta confidencial para Barugel.
            </p>
          </div>
        </SectionReveal>
      </div>
    </footer>
  );
};

// Main App Component
function App() {
  return (
    <div className="App" data-testid="app-container">
      <Navigation />
      <HeroSection />
      <DiagnosisSection />
      <CompetitiveLandscape />
      <SolutionSection />
      <InvestmentSection />
      <ResultsSection />
      <Footer />
    </div>
  );
}

export default App;

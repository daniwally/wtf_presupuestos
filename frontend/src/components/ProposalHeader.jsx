import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export const ProposalHeader = ({ clientName, accentColor }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/5' 
          : 'bg-transparent'
      }`}
      data-testid="proposal-header"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
          >
            <span 
              className="text-2xl font-heading font-bold tracking-tight"
              style={{ color: accentColor }}
              data-testid="wtf-logo"
            >
              WTF
            </span>
            <span className="text-zinc-400 text-sm font-body hidden sm:inline">Agency</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" data-testid="desktop-nav">
            {['overview', 'pricing', 'timeline', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-zinc-400 hover:text-white transition-colors duration-300 text-sm font-body capitalize"
                data-testid={`nav-${item}`}
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Client Name & CTA */}
          <div className="hidden md:flex items-center gap-6">
            <span className="text-zinc-500 text-sm font-body" data-testid="client-name-header">
              {clientName}
            </span>
            <Button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2 text-sm font-body font-medium transition-all duration-300 hover:scale-105"
              style={{ 
                backgroundColor: accentColor,
                color: '#FAFAFA'
              }}
              data-testid="header-contact-btn"
            >
              Let's Talk
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
            data-testid="mobile-menu-toggle"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ 
          height: menuOpen ? 'auto' : 0,
          opacity: menuOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-black/95 backdrop-blur-xl border-b border-white/5"
        data-testid="mobile-menu"
      >
        <nav className="px-6 py-4 flex flex-col gap-4">
          {['overview', 'pricing', 'timeline', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-zinc-400 hover:text-white transition-colors duration-300 text-left py-2 font-body capitalize"
              data-testid={`mobile-nav-${item}`}
            >
              {item}
            </button>
          ))}
          <Button
            onClick={() => scrollToSection('contact')}
            className="mt-2 py-3 font-body font-medium"
            style={{ backgroundColor: accentColor }}
            data-testid="mobile-contact-btn"
          >
            Let's Talk
          </Button>
        </nav>
      </motion.div>
    </motion.header>
  );
};

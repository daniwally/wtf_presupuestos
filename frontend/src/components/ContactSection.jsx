import { motion } from 'framer-motion';
import { Mail, Phone, ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';

export const ContactSection = ({ contact, accentColor, clientName }) => {
  return (
    <section 
      id="contact" 
      className="py-24 md:py-32 px-6 md:px-12 bg-[#050505] border-t border-zinc-900"
      data-testid="contact-section"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6"
            data-testid="contact-headline"
          >
            Ready to Proceed?
          </h2>
          <p className="text-zinc-400 font-body text-base md:text-lg max-w-xl mx-auto mb-12">
            Let's discuss how we can bring this vision to life for {clientName}
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Button
            className="px-8 py-6 text-base font-body font-medium flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:gap-3"
            style={{ backgroundColor: accentColor, color: '#FAFAFA' }}
            data-testid="accept-proposal-btn"
            onClick={() => window.location.href = `mailto:${contact.email}?subject=Proposal Acceptance - ${clientName}`}
          >
            Accept Proposal
            <ArrowRight size={18} />
          </Button>
          <Button
            variant="outline"
            className="px-8 py-6 text-base font-body font-medium flex items-center gap-2 border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 transition-all duration-300"
            data-testid="discuss-btn"
            onClick={() => window.location.href = `mailto:${contact.email}?subject=Discussion Request - ${clientName}`}
          >
            <MessageCircle size={18} />
            Schedule Discussion
          </Button>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass rounded-2xl p-8 md:p-10"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            {/* Contact Person */}
            <div className="text-center md:text-left">
              <p className="text-zinc-500 font-body text-xs tracking-widest uppercase mb-2">
                Your Contact
              </p>
              <h3 
                className="text-xl font-heading font-semibold text-white mb-1"
                data-testid="contact-name"
              >
                {contact.name}
              </h3>
              <p className="text-zinc-400 font-body text-sm" data-testid="contact-role">
                {contact.role}
              </p>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-16 bg-zinc-800" />

            {/* Contact Details */}
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <a 
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors group"
                data-testid="contact-email"
              >
                <div 
                  className="p-3 rounded-full bg-zinc-900 group-hover:bg-zinc-800 transition-colors"
                  style={{ color: accentColor }}
                >
                  <Mail size={18} />
                </div>
                <span className="font-body text-sm">{contact.email}</span>
              </a>
              <a 
                href={`tel:${contact.phone}`}
                className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors group"
                data-testid="contact-phone"
              >
                <div 
                  className="p-3 rounded-full bg-zinc-900 group-hover:bg-zinc-800 transition-colors"
                  style={{ color: accentColor }}
                >
                  <Phone size={18} />
                </div>
                <span className="font-body text-sm">{contact.phone}</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 pt-8 border-t border-zinc-900"
        >
          <p className="text-zinc-600 font-body text-sm">
            &copy; {new Date().getFullYear()} WTF Agency. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

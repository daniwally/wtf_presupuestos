import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

export const PricingTable = ({ pricing, accentColor }) => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="pricing" 
      className="py-24 md:py-32 px-6 md:px-12 bg-[#050505]"
      data-testid="pricing-section"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 
            className="text-3xl md:text-5xl font-heading font-bold text-white mb-6"
            data-testid="pricing-title"
          >
            Investment Options
          </h2>
          <p className="text-zinc-400 font-body text-base md:text-lg max-w-2xl mx-auto">
            Flexible engagement models designed to match your ambitions and timeline
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {pricing.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredCard(tier.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`relative group ${
                hoveredCard && hoveredCard !== tier.id ? 'opacity-50' : 'opacity-100'
              } transition-opacity duration-300`}
              data-testid={`pricing-card-${tier.id}`}
            >
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className={`relative h-full rounded-2xl p-8 border transition-all duration-500 ${
                  tier.recommended 
                    ? 'bg-noir-950 border-2' 
                    : 'bg-noir-950 border-zinc-800/50 hover:border-zinc-700'
                }`}
                style={{
                  borderColor: tier.recommended ? accentColor : undefined,
                  boxShadow: tier.recommended 
                    ? `0 0 60px ${accentColor}20, 0 0 100px ${accentColor}10` 
                    : undefined
                }}
              >
                {/* Recommended Badge */}
                {tier.recommended && (
                  <div 
                    className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-body font-medium flex items-center gap-1.5"
                    style={{ backgroundColor: accentColor, color: '#FAFAFA' }}
                    data-testid="recommended-badge"
                  >
                    <Sparkles size={12} />
                    Recommended
                  </div>
                )}

                {/* Tier Title */}
                <h3 
                  className="text-xl font-heading font-semibold text-white mb-2"
                  data-testid={`pricing-tier-title-${tier.id}`}
                >
                  {tier.title}
                </h3>

                {/* Description */}
                <p className="text-zinc-500 font-body text-sm mb-6">
                  {tier.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <span 
                    className="text-4xl md:text-5xl font-heading font-bold"
                    style={{ color: tier.recommended ? accentColor : '#FAFAFA' }}
                    data-testid={`pricing-price-${tier.id}`}
                  >
                    {tier.price}
                  </span>
                  <span className="text-zinc-500 font-body text-sm ml-2">
                    / {tier.duration}
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex}
                      className="flex items-start gap-3 text-zinc-300 font-body text-sm"
                    >
                      <Check 
                        size={18} 
                        className="flex-shrink-0 mt-0.5"
                        style={{ color: accentColor }}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  onClick={scrollToContact}
                  className={`w-full py-6 font-body font-medium text-sm transition-all duration-300 ${
                    tier.recommended 
                      ? 'hover:scale-[1.02]' 
                      : 'bg-zinc-800 hover:bg-zinc-700 text-white'
                  }`}
                  style={tier.recommended ? { 
                    backgroundColor: accentColor,
                    color: '#FAFAFA'
                  } : undefined}
                  data-testid={`pricing-cta-${tier.id}`}
                >
                  Select {tier.title}
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Custom Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-zinc-500 font-body text-sm mt-12"
        >
          Need a custom solution? We're happy to create a tailored proposal for your specific needs.
        </motion.p>
      </div>
    </section>
  );
};

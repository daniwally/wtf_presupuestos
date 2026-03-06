import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Clock } from 'lucide-react';

export const Timeline = ({ timeline, accentColor }) => {
  const [expandedPhase, setExpandedPhase] = useState(null);

  const togglePhase = (index) => {
    setExpandedPhase(expandedPhase === index ? null : index);
  };

  return (
    <section 
      id="timeline" 
      className="py-24 md:py-32 px-6 md:px-12 bg-noir-950"
      data-testid="timeline-section"
    >
      <div className="max-w-5xl mx-auto">
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
            data-testid="timeline-title"
          >
            Project Timeline
          </h2>
          <p className="text-zinc-400 font-body text-base md:text-lg max-w-2xl mx-auto">
            A structured approach to delivering exceptional results
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-zinc-800 md:-translate-x-1/2">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 origin-top"
              style={{ backgroundColor: accentColor }}
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-8 md:space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-start gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                data-testid={`timeline-item-${index}`}
              >
                {/* Node */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="w-4 h-4 rounded-full border-2 bg-noir-950"
                    style={{ borderColor: accentColor }}
                  />
                </div>

                {/* Content Card */}
                <div 
                  className={`ml-20 md:ml-0 md:w-[calc(50%-3rem)] ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}
                >
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="glass rounded-xl p-6 cursor-pointer"
                    onClick={() => togglePhase(index)}
                  >
                    {/* Phase Tag */}
                    <div className="flex items-center justify-between mb-3">
                      <span 
                        className="text-xs font-body font-medium tracking-widest uppercase"
                        style={{ color: accentColor }}
                        data-testid={`timeline-phase-${index}`}
                      >
                        {item.phase}
                      </span>
                      <motion.div
                        animate={{ rotate: expandedPhase === index ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown size={18} className="text-zinc-500" />
                      </motion.div>
                    </div>

                    {/* Title */}
                    <h3 
                      className="text-lg md:text-xl font-heading font-semibold text-white mb-2"
                      data-testid={`timeline-title-${index}`}
                    >
                      {item.title}
                    </h3>

                    {/* Duration */}
                    <div className="flex items-center gap-2 text-zinc-500 font-body text-sm mb-3">
                      <Clock size={14} />
                      <span data-testid={`timeline-duration-${index}`}>{item.duration}</span>
                    </div>

                    {/* Description (Expandable) */}
                    <motion.div
                      initial={false}
                      animate={{ 
                        height: expandedPhase === index ? 'auto' : 0,
                        opacity: expandedPhase === index ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p 
                        className="text-zinc-400 font-body text-sm leading-relaxed pt-2 border-t border-zinc-800"
                        data-testid={`timeline-description-${index}`}
                      >
                        {item.description}
                      </p>
                    </motion.div>

                    {/* Click hint when collapsed */}
                    {expandedPhase !== index && (
                      <p className="text-zinc-600 font-body text-xs mt-2">
                        Click to expand
                      </p>
                    )}
                  </motion.div>
                </div>

                {/* Spacer for alternating layout on desktop */}
                <div className="hidden md:block md:w-[calc(50%-3rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

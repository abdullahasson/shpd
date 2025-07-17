import { motion, useAnimationControls } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

interface Partner {
  src: string;
  alt: string;
  width: number;
  height?: number;
}

interface TranslationFunction {
  rich: (
    key: string,
    options: {
      span: (chunks: React.ReactNode) => React.ReactNode
    }
  ) => React.ReactNode;
}

interface PartnerSliderProps {
  partners: Partner[];
  t: TranslationFunction; // Replaced 'any' with proper type
}

const InfiniteMarquee = ({ partners }: { partners: Partner[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();
  const duration = 20; // Seconds for one full cycle

  useEffect(() => {
    const containerWidth = containerRef.current?.scrollWidth || 0;
    const contentWidth = containerWidth / 2; // Since we duplicate content
    
    controls.start({
      x: [0, -contentWidth],
      transition: {
        x: {
          repeat: Infinity,
          duration,
          ease: 'linear'
        }
      }
    });
  }, [controls, partners]);

  return (
    <div className="overflow-hidden py-4 relative">
      <motion.div 
        ref={containerRef}
        animate={controls}
        className="flex w-max"
      >
        {/* Original Set */}
        {partners.map((partner, i) => (
          <PartnerItem key={`original-${i}`} partner={partner} />
        ))}
        
        {/* Exact Duplicate */}
        {partners.map((partner, i) => (
          <PartnerItem key={`clone-${i}`} partner={partner} />
        ))}
      </motion.div>
    </div>
  );
};

const PartnerItem = ({ partner }: { partner: Partner }) => (
  <motion.div
    className="mx-4 flex-shrink-0"
    style={{ width: partner.width }}
    whileHover={{ scale: 1.05 }}
  >
    <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all">
      <Image
        src={partner.src}
        alt={partner.alt}
        width={partner.width}
        height={partner.height || 60}
        className="object-contain h-[40px] md:h-[60px]"
      />
    </div>
  </motion.div>
);

// Usage remains the same as before
export const PartnerSlider = ({ partners, t }: PartnerSliderProps) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="mt-16 md:mt-28"
  >
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <p className="text-lg md:text-xl font-medium text-gray-800">
          {t.rich('partnerText', {
            span: (chunks: React.ReactNode) => (
              <span className="font-bold text-primary">{chunks}</span>
            )
          })}
        </p>
      </div>
      
      <InfiniteMarquee partners={partners} />
    </div>
  </motion.div>
);
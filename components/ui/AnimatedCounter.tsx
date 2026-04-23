'use client';

import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

interface AnimatedCounterProps {
  finalValue: string;
}

export function AnimatedCounter({ finalValue }: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState(finalValue);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10px" });

  useEffect(() => {
    if (!isInView) return;

    const chars = '0123456789';
    const generateRandom = () => {
      return finalValue
        .split('')
        .map(char => {
          // Keep suffixes fixed during the animation
          if (char === '+' || char === 'B' || char === 'M' || char === 'k' || char === '.') {
            return char;
          }
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join('');
    };

    // Duration: Random between 2.0s and 3.0s as requested
    const duration = 2000 + Math.random() * 1000;
    
    // Scramble effect
    const intervalId = setInterval(() => {
      setDisplayValue(generateRandom());
    }, 50);

    // Stop and set to final value
    const timeoutId = setTimeout(() => {
      clearInterval(intervalId);
      setDisplayValue(finalValue);
    }, duration);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, [isInView, finalValue]);

  return <span ref={ref}>{displayValue}</span>;
}

'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Animate badge
    if (badgeRef.current) {
      gsap.fromTo(badgeRef.current,
        { opacity: 0, scale: 0.8, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
    }

    // Animate heading
    if (headingRef.current) {
      gsap.fromTo(headingRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          delay: 0.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
      <div className="bg-[#111116] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col items-center justify-center text-center border border-[#111116]">
        {/* Availability Badge */}
        <div ref={badgeRef} className="mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 bg-[#1a1a1a] rounded-full px-3 sm:px-4 py-1.5 sm:py-2 border border-[#111116]">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500"></div>
            <span className="text-white text-xs sm:text-sm font-medium">Available for work</span>
          </div>
        </div>

        {/* Main Heading */}
        <h2 ref={headingRef} className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium mb-6 sm:mb-8 leading-tight px-2">
          Let's create your<br />
          next big idea.
        </h2>
      </div>
    </section>
  );
}


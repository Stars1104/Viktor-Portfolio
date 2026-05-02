'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutMe() {
    const sectionRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        // Animate header
        if (headerRef.current) {
            gsap.fromTo(headerRef.current,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none none'
                    }
                }
            );
        }

        // Animate text
        if (textRef.current) {
            gsap.fromTo(textRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    ease: 'power3.out',
                    delay: 0.2,
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
        <section ref={sectionRef} className="pt-8 sm:pt-12 md:pt-20 pb-6 sm:pb-8 md:pb-10 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto text-center">
            <div ref={headerRef} className="flex items-center gap-2 justify-center mb-4 sm:mb-6 md:mb-12">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#b5ff6d] sm:w-5 sm:h-5">
                    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                </svg>  
                <h2 className="text-center text-[#b5ff6d] text-xs sm:text-sm md:text-base lg:text-lg font-medium tracking-wide">
                    ABOUT ME
                </h2>
            </div>
            <p ref={textRef} className="text-white text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl 2xl:text-3xl leading-relaxed max-w-7xl mx-auto text-center px-2 sm:px-4">
                I'm Viktor Karpenko, with over 6+ years of experience in development
                with strong focus on producing high quality & impactful digital experiences. I
                have worked with some of the most innovative industry leaders to help build
                their top-notch products
            </p>
        </section>
    );
}
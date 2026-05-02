'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LogoLoop from './components/logoLoop/LogoLoop';
import AboutMe from './components/AboutMe';
import MyWork from './components/MyWork';
import Speciality from './components/Speciality';
import Contact from './components/Contact';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const SparkleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="42" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkle text-gray-700/30" aria-hidden="true">
    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
  </svg>
);

const skills = ['Development', 'Mentor', 'Websites', 'Designing', 'Graphics', 'Animations'];

const skillItems = skills.flatMap((skill, index) => [
  { node: <span className="text-gray-700/40 text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium">{skill}</span> },
  { node: <span className="text-gray-700/30"><SparkleIcon /></span> }
]);

export default function Home() {
  const greetingRef = useRef<HTMLParagraphElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate greeting
    if (greetingRef.current) {
      gsap.fromTo(greetingRef.current, 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.2 }
      );
    }

    // Animate heading with word-by-word effect
    if (headingRef.current) {
      const spans = headingRef.current.querySelectorAll('span');
      gsap.fromTo(spans,
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          stagger: 0.1, 
          ease: 'power3.out',
          delay: 0.4
        }
      );
    }

    // Animate description
    if (descriptionRef.current) {
      gsap.fromTo(descriptionRef.current,
        { opacity: 0, x: 30 },
        { 
          opacity: 1, 
          x: 0, 
          duration: 1, 
          ease: 'power3.out',
          delay: 1.2,
          scrollTrigger: {
            trigger: descriptionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
    }

    // Animate line
    if (lineRef.current) {
      gsap.fromTo(lineRef.current,
        { scaleX: 0, transformOrigin: 'left' },
        { 
          scaleX: 1, 
          duration: 1.2, 
          ease: 'power3.out',
          delay: 1,
          scrollTrigger: {
            trigger: lineRef.current,
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
    <div className="min-h-screen" style={{ backgroundColor: '#0b0b0d' }}>
      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 md:pt-32 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        {/* Greeting */}
        <div className="mb-6 sm:mb-8 md:mb-16">
          <p ref={greetingRef} className="text-gray-400 text-xs sm:text-sm md:text-base lg:text-lg">
            Hey! It's me Rodin, <span className="inline-block ml-1">👋</span>
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="flex flex-col mb-8 sm:mb-12 md:mb-20">
          <div className="space-y-4 sm:space-y-6 md:space-y-12">
            <h1 ref={headingRef} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-medium leading-[1.1] tracking-tight">
              <span className="text-white">Crafting </span>
              <span className="text-[#b5ff6d]">purpose driven </span> <br className="hidden sm:block" />
              <span className="text-white">experiences </span>
              <span className="text-[#b5ff6d]">that inspire </span> <br className="hidden sm:block" />
              <span className="text-white">& engage.</span>
            </h1>
          </div>

          <div className="space-y-4 sm:space-y-6 md:space-y-8 lg:pt-8 mt-4 sm:mt-6 md:mt-0">
            {/* Description with horizontal line */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 md:gap-6">
              <div ref={lineRef} className="h-px bg-gray-800/50 flex-shrink-0 w-full sm:w-1/2"></div>
              <p ref={descriptionRef} className="text-[#9797a9] text-xs sm:text-sm md:text-base leading-relaxed flex-1">
                I work with brands globally to build pixel-perfect, engaging, and accessible digital experiences that drive results and achieve business goals.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="border-t border-b border-gray-800/30 py-4 sm:py-6 md:py-10 px-4 sm:px-6 md:px-8 overflow-hidden">
        <LogoLoop
          {...({
            logos: skillItems,
            speed: 60,
            direction: 'left',
            gap: 12,
            logoHeight: 32,
            className: 'text-gray-700/40'
          } as any)}
        />
      </div>
      <AboutMe />
      <MyWork />
      <Speciality />
      <Contact />
    </div>
  );
}

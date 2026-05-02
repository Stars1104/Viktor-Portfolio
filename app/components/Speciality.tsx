'use client';

import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import LogoLoop from './logoLoop/LogoLoop';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export default function Speciality() {
    const [activeIndex, setActiveIndex] = useState(0);
    const sectionRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const accordionRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const skillsRef = useRef<HTMLDivElement>(null);

    const specialties = [
        {
            id: 1,
            title: 'Development',
            icon: (
                <span className="text-white text-lg font-mono">&lt;/&gt;</span>
            ),
            content: 'Front-end development with modern technologies',
            image: '/assets/image/1.png'
        },
        {
            id: 2,
            title: 'UI/UX Design',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                </svg>
            ),
            content: 'Creating intuitive and beautiful user experiences',
            image: '/assets/image/2.png'
        },
        {
            id: 3,
            title: 'Branding',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                    <line x1="7" y1="7" x2="7.01" y2="7"></line>
                </svg>
            ),
            content: 'Building strong brand identities and visual systems',
            image: '/assets/image/3.png'
        }
    ];

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

        // Animate accordion items
        if (accordionRef.current) {
            const items = accordionRef.current.querySelectorAll('div[class*="rounded-lg"]');
            gsap.fromTo(items,
                { opacity: 0, x: -50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: accordionRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none none'
                    }
                }
            );
        }

        // Animate image panel
        if (imageRef.current) {
            gsap.fromTo(imageRef.current,
                { opacity: 0, x: 50, scale: 0.95 },
                {
                    opacity: 1,
                    x: 0,
                    scale: 1,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: imageRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none none'
                    }
                }
            );
        }

        // Animate skills loop section
        if (skillsRef.current) {
            gsap.fromTo(skillsRef.current,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: skillsRef.current,
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
        <section ref={sectionRef} className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto overflow-x-hidden">
            <div className="flex flex-col items-start w-full">
                {/* Header */}
                <div ref={headerRef} className="mb-6 sm:mb-8 w-full">
                    <div className="flex items-center gap-2 mb-4 sm:mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#b5ff6d] sm:w-5 sm:h-5">
                            <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                        </svg>
                        <h2 className="text-[#b5ff6d] text-sm sm:text-base md:text-lg font-medium tracking-wide uppercase">
                            SPECIALITY
                        </h2>
                    </div>
                    <h3 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium">
                        Areas of Expertise
                    </h3>
                </div>

                <div className='w-full flex flex-col lg:flex-row justify-center items-start gap-4 sm:gap-6'>
                    {/* Accordion Items */}
                    <div ref={accordionRef} className="w-full lg:w-1/2 space-y-3">
                        {specialties.map((specialty, index) => {
                            const isActive = activeIndex === index;
                            return (
                                <div
                                    key={specialty.id}
                                    className={`rounded-lg p-4 cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isActive
                                        ? 'bg-[#111116] border border-[#191920] shadow-lg'
                                        : 'bg-[#111116] border border-transparent hover:border-[#191920]/50'
                                        }`}
                                    onClick={() => setActiveIndex(index)}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <span
                                                className={`text-white transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isActive ? 'scale-110' : 'scale-100'
                                                    }`}
                                            >
                                                {specialty.icon}
                                            </span>
                                            <span className="text-white font-medium transition-colors duration-300">
                                                {specialty.title}
                                            </span>
                                        </div>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className={`text-white transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isActive ? 'rotate-180' : 'rotate-0'
                                                }`}
                                        >
                                            <path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </div>
                                    <div
                                        className={`grid transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                                            }`}
                                    >
                                        <div className="overflow-hidden">
                                            <p
                                                className={`text-gray-400 text-sm transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isActive
                                                    ? 'mt-3 pt-3 translate-y-0'
                                                    : 'mt-0 pt-0 -translate-y-2'
                                                    }`}
                                            >
                                                {specialty.content}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Right Panel - Visual Content */}
                    <div ref={imageRef} className="w-full lg:w-1/2 relative">
                        <div className="rounded-2xl bg-gray-800/30 overflow-hidden">
                            <div className="relative w-full h-full min-h-[250px] sm:min-h-[300px] md:min-h-[350px]">
                                {specialties.map((specialty, index) => (
                                    <div
                                        key={specialty.id}
                                        className={`absolute inset-0 transition-all duration-700 ease-in-out ${activeIndex === index
                                            ? 'opacity-100 scale-100 translate-x-0'
                                            : 'opacity-0 scale-95 translate-x-4 pointer-events-none'
                                            }`}
                                    >
                                        <Image
                                            src={specialty.image}
                                            alt={specialty.title}
                                            fill
                                            className=" object-cover"
                                            priority={index === 0}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Skills Loop */}
                <div ref={skillsRef} className="w-full mt-8 sm:mt-12 md:mt-16 overflow-x-hidden relative">
                    {/* Left fade shadow */}
                    <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-16 md:w-24 bg-gradient-to-r from-[#0b0b0d] to-transparent z-10 pointer-events-none"></div>
                    {/* Right fade shadow */}
                    <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-16 md:w-24 bg-gradient-to-l from-[#0b0b0d] to-transparent z-10 pointer-events-none"></div>
                    <LogoLoop
                        {...({
                            logos: [
                                { src: '/assets/skills/React.js.svg', alt: 'React.js', name: 'React.js' },
                                { src: '/assets/skills/Next.js.svg', alt: 'Next.js', name: 'Next.js' },
                                { src: '/assets/skills/TypeScript.svg', alt: 'TypeScript', name: 'TypeScript' },
                                { src: '/assets/skills/JavaScript.svg', alt: 'JavaScript', name: 'JavaScript' },
                                { src: '/assets/skills/Node.js.svg', alt: 'Node.js', name: 'Node.js' },
                                { src: '/assets/skills/Express.js.svg', alt: 'Express.js', name: 'Express.js' },
                                { src: '/assets/skills/MongoDB.svg', alt: 'MongoDB', name: 'MongoDB' },
                                { src: '/assets/skills/PostgreSQL.svg', alt: 'PostgreSQL', name: 'PostgreSQL' },
                                { src: '/assets/skills/MySQL.svg', alt: 'MySQL', name: 'MySQL' },
                                { src: '/assets/skills/Firebase.svg', alt: 'Firebase', name: 'Firebase' },
                                { src: '/assets/skills/AWS.svg', alt: 'AWS', name: 'AWS' },
                                { src: '/assets/skills/Docker.svg', alt: 'Docker', name: 'Docker' },
                                { src: '/assets/skills/HTML.svg', alt: 'HTML', name: 'HTML' },
                                { src: '/assets/skills/CSS.svg', alt: 'CSS', name: 'CSS' },
                                { src: '/assets/skills/TailwindCSS.svg', alt: 'TailwindCSS', name: 'TailwindCSS' },
                                { src: '/assets/skills/Redux.svg', alt: 'Redux', name: 'Redux' },
                                { src: '/assets/skills/FramerMotion.svg', alt: 'Framer Motion', name: 'Framer Motion' },
                                { src: '/assets/skills/GSAP.svg', alt: 'GSAP', name: 'GSAP' },
                                { src: '/assets/skills/Angular.svg', alt: 'Angular', name: 'Angular' },
                                { src: '/assets/skills/Figma.svg', alt: 'Figma', name: 'Figma' },
                                { src: '/assets/skills/GIT.svg', alt: 'Git', name: 'Git' },
                                { src: '/assets/skills/Cypress.svg', alt: 'Cypress', name: 'Cypress' }
                            ],
                            speed: 60,
                            direction: 'left',
                            gap: 16,
                            logoHeight: 56,
                            renderItem: (item: any) => (
                                <div className="flex items-center gap-3 bg-[#1a1a1a] rounded-lg px-4 py-2.5 h-full border border-gray-800/50">
                                    <div className="relative w-6 h-6 shrink-0">
                                        <Image
                                            src={item.src}
                                            alt={item.alt}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <span className="text-white text-sm font-medium whitespace-nowrap">
                                        {item.name}
                                    </span>
                                </div>
                            ),
                            className: ''
                        } as any)}
                    />
                </div>
            </div>
        </section>
    );
}


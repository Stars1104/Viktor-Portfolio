'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export default function MyWork() {
    const sectionRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const experiencesRef = useRef<HTMLDivElement>(null);

    const experiences = [
        {
            title: "Senior Full Stack | AI Developer",
            company: "Granit.AI",
            period: "November 2024 - December 2025"
        },
        {
            title: "Full Stack Developer",
            company: "DDI Development",
            period: "June 2021 - October 2024"
        },
        {
            title: "Full Stack Developer",
            company: "SourceX",
            period: "February 2020 - May 2021"
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

        // Animate experience entries with stagger
        if (experiencesRef.current) {
            const entries = experiencesRef.current.querySelectorAll('.experience-entry');
            gsap.fromTo(entries,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: experiencesRef.current,
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
        <section ref={sectionRef} className="py-8 sm:py-12 md:py-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
            {/* Header */}
            <div ref={headerRef} className="mb-6 sm:mb-8 md:mb-12">
                <h2 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 md:mb-8">
                    Employment History
                </h2>
            </div>

            {/* Employment History List */}
            <div ref={experiencesRef} className="space-y-0">
                {experiences.map((experience, index) => (
                    <div key={index} className="experience-entry">
                        <div className="flex flex-col sm:flex-row items-start sm:items-start sm:justify-between py-3 sm:py-4 gap-2 sm:gap-0">
                            <div className="flex-1 w-full">
                                <h3 className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-1">
                                    <span className="block sm:inline">{experience.title}</span>
                                    <span className="hidden sm:inline"> | </span>
                                    <span className="block sm:inline">{experience.company}</span>
                                </h3>
                                <p className="text-gray-400 text-xs sm:text-sm md:text-base mt-1">
                                    {experience.period}
                                </p>
                            </div>
                        </div>
                        {index < experiences.length - 1 && (
                            <div className="h-px bg-gray-700/50"></div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
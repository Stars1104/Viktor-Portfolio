'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const SparkleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#b5ff6d]">
    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
  </svg>
);

export default function ProjectsPage() {
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'Web' | 'Mobile'>('All');

  const projects = [
    {
      title: "Dat Drop (Battle Game)",
      image: "/assets/projects/14.png",
      live: "https://datdrop.com/",
      category: "Battle",
      description: "DatDrop is an online CS2 and CS:GO case-opening platform where players open virtual loot boxes and compete in battle modes to win in-game skins and rewards using a provably fair system."
    },
    {
      title: "Song Maker",
      image: "/assets/projects/12.png",
      live: "https://learning-music-five.vercel.app/",
      category: "Music",
      description: "This website is built based on Chrom Music Lab"
    },
    {
      title: "NEXA-UGC",
      image: "/assets/projects/13.png",
      live: "https://nextcreators.com.br/",
      category: "JOB SaaS",
      description: "This is a Job SAAS Platform that concludes contracts between brands and creators."
    },
    {
      title: "Company Website",
      image: "/assets/projects/1.png",
      live: "https://morningstar.ventures/",
      category: "Corporate",
      description: "A modern corporate website with clean design and seamless user experience."
    },
    {
      title: "Invoice Generator",
      image: "/assets/projects/2.png",
      live: "https://invoice-generator-react.netlify.app/",
      category: "React",
      description: "An Invoice creator project built with React. Add itemized items, configure quantity, prices, tax rates and discounts. Download Invoice as PDFs to your device. Uses jspdf-react to capture the data from the modal and covert it from canvas -> pdf."
    },
    {
      title: "Lusion",
      image: "/assets/projects/3.png",
      live: "https://lusion.co/",
      category: "Brand",
      description: "A cutting-edge brand website with stunning visuals and interactive elements."
    },
    {
      title: "Hotel Booking System",
      image: "/assets/projects/4.png",
      live: "https://hotel-booking-arnob.netlify.app/",
      category: "Booking",
      description: "A modern, responsive hotel booking frontend website built with React, Vite, TailwindCSS. This project demonstrates core React concepts (components, context API, hooks), advanced UI/UX with custom components, a mobile-friendly layout, and integration with third-party React libraries. It is designed both as a learning resource and a practical template for static hotel or accommodation websites."
    },
    {
      title: "Brainwave",
      image: "/assets/projects/5.png",
      live: "https://brainswave.netlify.app/",
      category: "AI",
      description: "A modern AI application built with React JS and Tailwind CSS, featuring smooth animations, unique design elements, and responsive layouts.Ideal for enhancing web development skills"
    },
    {
      title: "Portfolio / Freelance services site",
      image: "/assets/projects/6.png",
      live: "https://www.jordangilroy.com/",
      category: "Portfolio",
      description: "A creative portfolio website showcasing work and services beautifully."
    },
    {
      title: "Digital agency / Service provider website",
      image: "/assets/projects/7.png",
      live: "https://haspr.in/",
      category: "Agency",
      description: "A professional agency website highlighting services and expertise."
    },
    {
      title: "Real Estate Platform",
      image: "/assets/projects/8.png",
      live: "https://www.century21global.com/en/",
      category: "Real Estate",
      description: "A comprehensive real estate platform with property listings and search."
    },
    {
      title: "Commercial Real Estate Platform",
      image: "/assets/projects/9.png",
      live: "https://www.loopnet.com/",
      category: "Real Estate",
      description: "An advanced commercial real estate platform for property professionals."
    },
    {
      title: "Booking Platform - WeChalet",
      image: "/assets/projects/10.png",
      live: "https://wechalet.com/fr/",
      category: "Booking",
      description: "A vacation rental booking platform with intuitive search and booking flow."
    },
    {
      title: "Booking Platform - Plum Guide",
      image: "/assets/projects/11.png",
      live: "https://www.plumguide.com/",
      category: "Booking",
      description: "A curated booking platform for unique accommodations and experiences."
    },
    {
      title: "KE-FAS",
      image: "/assets/projects/ke-fas.png",
      live: "https://play.google.com/store/apps/details?id=com.kefas.user",
      category: "Mobile",
      description: "Ke-Fas is a user-friendly event management app designed to simplify your event experience. With Ke-Fas, you can explore a wide range of events, from concerts and festivals to workshops and conferences. The app allows you to browse event details, check schedules, and purchase tickets securely."
    },
    {
      title: "Tamworth '24",
      image: "/assets/projects/tamworth.png",
      live: "https://play.google.com/store/apps/details?id=com.tamworth.tamworth24&hl=en_NZ",
      category: "Mobile",
      description: "Step into the heart of country music with Tamworth '24, the must-have app for anyone attending the Tamworth Country Music Festival. Discover, plan, and immerse yourself in the vibrant world of live performances, events, and the rich cultural tapestry that defines this iconic festival. If you're a devoted country music fan or a first-time festivalgoer, Tamworth '24 is your passport to an unforgettable country music experience. Download now and get ready to soak in the sounds and spirit of Tamworth!"
    },
    {
      title: "BIFLE User",
      image: "/assets/projects/bifle-user.png",
      live: "https://play.google.com/store/apps/details?id=com.truckease.userapp",
      category: "Mobile",
      description: "BIFLE user app connects shippers or consignees with carriers all over Ethiopia and across the border, to and from Djibouti. The app allows users to easily view the estimated fare of their loads, book and track their shipments. The estimated price is calculated based on the distance then it will be confirmed by our dispatch team."
    },
    {
      title: "Pawfect",
      image: "/assets/projects/pawfect.png",
      live: "https://play.google.com/store/apps/details?id=com.eugene.pawfectapp",
      category: "Mobile",
      description: "Pawfect is your ultimate guide to pet-friendly cafes, restaurants, and more, making it easier than ever to plan memorable outings with your pet."
    },
    {
      title: "Tradespeoplehub for Trades",
      image: "/assets/projects/trade.png",
      live: "https://play.google.com/store/apps/details?id=com.tradesprovider&pli=1",
      category: "Mobile",
      description: "Tradespeoplehub makes the process of managing your construction business stress-free, seamless and debt free."
    },
    {
      title: "Single AF",
      image: "/assets/projects/single-af.png",
      live: "https://play.google.com/store/apps/details?id=com.singleaf.app&hl=en",
      category: "Mobile",
      description: "Single AF is the online dating & social media app for singles. Be a friend, find a date or simply hangout with a group of people who enjoy your taco Tuesday ritual just as much as you. Find your new football Sunday squad. Or, chat it up with someone whose ex is just as bad as yours is! LOL."
    }
  ];

  // Filter projects based on selected category
  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : selectedFilter === 'Mobile'
    ? projects.filter(project => project.category === 'Mobile' || project.category === 'Web and Mobile')
    : projects.filter(project => project.category !== 'Mobile' && project.category !== 'Web and Mobile');

  const heroRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Animate hero section
    if (heroRef.current) {
      const header = heroRef.current.querySelector('div:first-child');
      const heading = heroRef.current.querySelector('h1');

      if (header) {
        gsap.fromTo(header,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: heroRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none'
            }
          }
        );
      }

      if (heading) {
        const spans = heading.querySelectorAll('span');
        gsap.fromTo(spans,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            delay: 0.2,
            scrollTrigger: {
              trigger: heroRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none'
            }
          }
        );
      }
    }

    // Animate projects grid
    if (projectsRef.current) {
      const header = projectsRef.current.querySelector('div:first-child');
      const projectCards = projectsRef.current.querySelectorAll('a');

      if (header) {
        gsap.fromTo(header,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: projectsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none'
            }
          }
        );
      }

      gsap.fromTo(projectCards,
        { opacity: 0, y: 60, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          delay: 0.3,
          scrollTrigger: {
            trigger: projectsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
    }

    // Animate stats section
    if (statsRef.current) {
      const statItems = statsRef.current.querySelectorAll('div[class*="text-center"]');

      gsap.fromTo(statItems,
        { opacity: 0, y: 40, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
    }

    // Animate CTA section
    if (ctaRef.current) {
      const heading = ctaRef.current.querySelector('h2');
      const paragraph = ctaRef.current.querySelector('p');

      if (heading) {
        gsap.fromTo(heading,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: ctaRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none'
            }
          }
        );
      }

      if (paragraph) {
        gsap.fromTo(paragraph,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            delay: 0.2,
            scrollTrigger: {
              trigger: ctaRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none'
            }
          }
        );
      }
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen w-full" style={{ backgroundColor: '#0b0b0d' }}>
      {/* Hero Section */}
      <section ref={heroRef} className="pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-10 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto w-full">
        <div className="w-full text-start">
          <div className="flex items-center justify-start gap-2 mb-4 sm:mb-6">
            <SparkleIcon />
            <h2 className="text-[#b5ff6d] text-sm sm:text-base md:text-lg font-medium tracking-wide uppercase">
              PORTFOLIO
            </h2>
          </div>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium leading-[1.1] tracking-tight">
            <span className="text-white">Creating next level digital products</span>
            <br />
          </h1>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section ref={projectsRef} className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <div className="mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-medium mb-3 sm:mb-4">
            All Projects
          </h2>
          <p className="text-[#9797a9] text-sm sm:text-base max-w-2xl mb-6">
            Explore a diverse range of projects across different industries and platforms.
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3 sm:gap-4">
            {(['All', 'Web', 'Mobile'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
                  selectedFilter === filter
                    ? 'bg-[#b5ff6d] text-[#0b0b0d]'
                    : 'bg-gray-800/30 text-[#9797a9] border border-gray-700/50 hover:border-[#b5ff6d]/50 hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {filteredProjects.map((project) => (
            <Link
              key={project.title}
              href={project.live}
              target={project.live !== '#' ? "_blank" : undefined}
              rel={project.live !== '#' ? "noopener noreferrer" : undefined}
              className="group space-y-4"
            >
              {/* Project Card */}
              <div className="rounded-xl sm:rounded-2xl overflow-hidden bg-gray-800/30 border border-gray-700/50 hover:border-[#b5ff6d]/50 transition-all duration-300 relative">
                <div className="relative w-full aspect-video">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-[#b5ff6d]/0 group-hover:bg-[#b5ff6d]/10 transition-colors duration-300"></div>
                </div>
                {/* Category Badge */}
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
                  <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-[#0b0b0d]/90 backdrop-blur-sm border border-gray-700/50 rounded-full text-[#b5ff6d] text-[10px] sm:text-xs font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="space-y-1.5 sm:space-y-2">
                <h3 className="text-white text-lg sm:text-xl font-medium group-hover:text-[#b5ff6d] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#9797a9] text-xs sm:text-sm leading-relaxed line-clamp-2">
                  {project.description}
                </p>
                {project.live !== '#' && (
                  <div className="flex items-center gap-2 text-[#b5ff6d] text-xs sm:text-sm font-medium pt-1 sm:pt-2">
                    <span>View Live</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="group-hover:translate-x-1 transition-transform sm:w-4 sm:h-4"
                    >
                      <path d="M7 17L17 7"></path>
                      <path d="M7 7h10v10"></path>
                    </svg>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto border-t border-gray-800/30">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
          <div className="text-center space-y-1.5 sm:space-y-2">
            <div className="text-[#b5ff6d] text-3xl sm:text-4xl md:text-5xl font-medium">
              {filteredProjects.length}+
            </div>
            <div className="text-[#9797a9] text-sm sm:text-base">
              Projects Completed
            </div>
          </div>
          <div className="text-center space-y-1.5 sm:space-y-2">
            <div className="text-[#b5ff6d] text-3xl sm:text-4xl md:text-5xl font-medium">
              100%
            </div>
            <div className="text-[#9797a9] text-sm sm:text-base">
              Client Satisfaction
            </div>
          </div>
          <div className="text-center space-y-1.5 sm:space-y-2">
            <div className="text-[#b5ff6d] text-3xl sm:text-4xl md:text-5xl font-medium">
              6+
            </div>
            <div className="text-[#9797a9] text-sm sm:text-base">
              Years Experience
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto border-t border-gray-800/30">
        <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium">
            Have a project in mind?
          </h2>
          <p className="text-[#9797a9] text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>
      </section>
    </div>
  );
}


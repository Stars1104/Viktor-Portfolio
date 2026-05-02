'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import CircularText from '@/components/CircularText';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const SparkleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#b5ff6d]">
    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
  </svg>
);

export default function AboutPage() {
  const experiences = [
    {
      year: 'November 2024 - December 2025',
      title: 'Senior Full Stack | AI Developer',
      company: 'Granit.AI',
      description: 'Working with brands globally to build pixel-perfect, engaging, and accessible digital experiences that drive results and achieve business goals.',
      achievements: [
        'Delivered 50+ successful web projects',
        'Collaborated with industry-leading brands',
        'Maintained 100% client satisfaction rate'
      ]
    },
    {
      year: 'June 2021 - October 2024',
      title: 'Full Stack Developer',
      company: 'DDI Development',
      description: 'Led development initiatives, mentored junior developers, and contributed to architectural decisions.',
      achievements: [
        'Improved application performance by 40%',
        'Mentored team of 5+ developers',
        'Implemented modern design systems'
      ]
    },
    {
      year: 'February 2020 - May 2021',
      title: 'Full Stack Developer',
      company: 'SourceX',
      description: 'Developed responsive web applications and collaborated with designers to bring creative visions to life.',
      achievements: [
        'Built 13+ client websites',
        'Mastered modern JavaScript frameworks',
        'Enhanced UI/UX design skills'
      ]
    }
  ];

  const skills = [
    { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'Python', 'FastAPI', 'REST APIs', 'GraphQL'] },
    { category: 'AI & ML', items: ['OpenAI API', 'Claude API', 'LangChain', 'RAG', 'Prompt Engineering', 'Vector DBs'] },
    { category: 'Mobile', items: ['React Native', 'Expo'] },
    { category: 'Database', items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Pinecone', 'Supabase'] },
    { category: 'Tools & DevOps', items: ['Git', 'Docker', 'AWS', 'Vercel', 'Figma', 'Framer Motion'] }
  ];

  const heroRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Animate hero section
    if (heroRef.current) {
      if (imageRef.current) {
        gsap.fromTo(imageRef.current,
          { opacity: 0, x: -50, scale: 0.9 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: heroRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none'
            }
          }
        );
      }

      if (contentRef.current) {
        const heading = contentRef.current.querySelector('h1');
        const paragraph = contentRef.current.querySelector('p');
        
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

        if (paragraph) {
          gsap.fromTo(paragraph,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: 'power3.out',
              delay: 0.6,
              scrollTrigger: {
                trigger: heroRef.current,
                start: 'top 80%',
                toggleActions: 'play none none none'
              }
            }
          );
        }
      }
    }

    // Animate story section
    if (storyRef.current) {
      const header = storyRef.current.querySelector('div:first-child');
      const paragraphs = storyRef.current.querySelectorAll('p');
      
      if (header) {
        gsap.fromTo(header,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: storyRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none'
            }
          }
        );
      }

      gsap.fromTo(paragraphs,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          delay: 0.3,
          scrollTrigger: {
            trigger: storyRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
    }

    // Animate experience section
    if (experienceRef.current) {
      const header = experienceRef.current.querySelector('div:first-child');
      const items = experienceRef.current.querySelectorAll('div[class*="border-l-2"]');
      
      if (header) {
        gsap.fromTo(header,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: experienceRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none'
            }
          }
        );
      }

      gsap.fromTo(items,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          delay: 0.3,
          scrollTrigger: {
            trigger: experienceRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
    }

    // Animate skills section
    if (skillsRef.current) {
      const header = skillsRef.current.querySelector('div:first-child');
      const cards = skillsRef.current.querySelectorAll('div[class*="bg-\\[\\#111116\\]"]');
      
      if (header) {
        gsap.fromTo(header,
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

      gsap.fromTo(cards,
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          delay: 0.3,
          scrollTrigger: {
            trigger: skillsRef.current,
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
    <div className="min-h-screen" style={{ backgroundColor: '#0b0b0d' }}>
      {/* Hero Section */}
      <section ref={heroRef} className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
          {/* Left Side - Image */}
          <div ref={imageRef} className="relative w-full lg:w-auto">
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] aspect-square max-w-md mx-auto">
              <img src="/assets/me.png" alt="About Me" className="w-full h-full object-cover rounded-b-full" />
              <div className='hidden md:flex w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[180px] lg:w-[200px] lg:h-[200px] bottom-0 right-0 absolute rounded-full bg-[#0b0b0d] border border-[#1d1d1f] items-center justify-center overflow-hidden'>
                <CircularText
                  text="Viktor*Karpenko*Dev*"
                  onHover="speedUp"
                  spinDuration={20}
                  className="text-white text-sm sm:text-base md:text-lg lg:text-2xl font-medium"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div ref={contentRef} className="space-y-4 sm:space-y-6 w-full lg:w-auto text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium leading-[1.1] tracking-tight">
              <span className="text-white">A Proficient & Skilled</span>
              <br />
              <span className="text-[#b5ff6d]">Full-Stack & AI Developer</span>
            </h1>
            <p className="text-[#9797a9] text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              I collaborate with brands globally to design impactful, mission-focused websites & AI applications that drive results and achieve business goals.
            </p>
          </div>
        </div>
      </section>

      {/* About Content Section */}
      <section ref={storyRef} className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto border-t border-gray-800/30">
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          <div className="flex items-center gap-2 mb-6 sm:mb-8">
            <SparkleIcon />
            <h2 className="text-[#b5ff6d] text-sm sm:text-base md:text-lg font-medium tracking-wide uppercase">
              MY STORY
            </h2>
          </div>
          <div className="space-y-4 sm:space-y-6 text-[#9797a9] text-sm sm:text-base md:text-lg leading-relaxed">
            <p>
            I'm Viktor Karpenko, with over 6+ years of experience in Full-Stack & AI Development with strong focus on producing high quality & impactful digital experiences. I have worked with some of the most innovative industry leaders to help build their top-notch products.
            </p>
            <p>
            My journey began with a passion for creating beautiful, functional interfaces that not only look great but also solve real problems. Over the years, I've honed my skills in both Frontend/Backend & AI Development, allowing me to bridge the gap between creative vision and technical implementation.
            </p>
            <p>
            I believe in crafting purpose-driven experiences that inspire and engage users. Every project is an opportunity to push boundaries, learn something new, and deliver exceptional results that exceed expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section ref={experienceRef} className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto border-t border-gray-800/30">
        <div className="flex items-center gap-2 mb-8 sm:mb-10 md:mb-12">
          <SparkleIcon />
          <h2 className="text-[#b5ff6d] text-sm sm:text-base md:text-lg font-medium tracking-wide uppercase">
            EXPERIENCE
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-6 sm:pl-8 border-l-2 border-gray-800/50 pb-6 sm:pb-8 last:pb-0">
              <div className="absolute -left-[9px] sm:-left-2 top-0 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#b5ff6d] border-2 sm:border-4 border-[#0b0b0d]"></div>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold">{exp.title}</h3>
                    <p className="text-gray-400 text-xs sm:text-sm md:text-base mt-1">{exp.company}</p>
                  </div>
                  <span className="text-white text-xs sm:text-sm font-medium">{exp.year}</span>
                </div>
                <p className="text-white text-sm sm:text-base leading-relaxed">{exp.description}</p>
                <ul className="list-disc list-inside space-y-1 text-white text-xs sm:text-sm md:text-base ml-3 sm:ml-4">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto border-t border-gray-800/30">
        <div className="flex items-center gap-2 mb-8 sm:mb-10 md:mb-12">
          <SparkleIcon />
          <h2 className="text-[#b5ff6d] text-sm sm:text-base md:text-lg font-medium tracking-wide uppercase">
            SKILLS & TECHNOLOGIES
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {skills.map((skillGroup, index) => (
            <div key={index} className="bg-[#111116] border border-gray-800/50 rounded-lg p-4 sm:p-6 cursor-pointer">
              <h3 className="text-white text-base sm:text-lg font-medium mb-3 sm:mb-4">{skillGroup.category}</h3>
              <ul className="space-y-1.5 sm:space-y-2">
                {skillGroup.items.map((skill, i) => (
                  <li key={i} className="text-[#9797a9] text-xs sm:text-sm flex items-center gap-2">
                    <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#b5ff6d] flex-shrink-0"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto border-t border-gray-800/30">
        <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium">
            Let's work together
          </h2>
          <p className="text-[#9797a9] text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>
      </section>
    </div>
  );
}


'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const SparkleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#b5ff6d]">
    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
  </svg>
);

export default function AlbumPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Album images - Add your images here
  // Place your album images in /public/assets/album/ folder
  const albumImages = [
    {
      id: 1,
      src: '/assets/image/album1.png', // Replace with your album images
      title: 'Photo 1',
      description: 'A beautiful moment captured'
    },
    {
      id: 2,
      src: '/assets/image/album2.png', // Replace with your album images
      title: 'Photo 2',
      description: 'Another amazing shot'
    },
    {
      id: 3,
      src: '/assets/image/album3.png', // Replace with your album images
      title: 'Photo 3',
      description: 'Memorable experience'
    },
    {
      id: 4,
      src: '/assets/image/album4.png', // Replace with your album images
      title: 'Photo 4',
      description: 'Memorable experience'
    },
    {
      id: 5,
      src: '/assets/image/album5.png', // Replace with your album images
      title: 'Photo 5',
      description: 'Memorable experience'
    },
    // Add more images here following the same structure
  ];

  const heroRef = useRef<HTMLElement>(null);
  const galleryRef = useRef<HTMLElement>(null);

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

    // Animate gallery grid
    if (galleryRef.current) {
      const header = galleryRef.current.querySelector('div:first-child');
      const imageCards = galleryRef.current.querySelectorAll('div[class*="group"]');

      if (header) {
        gsap.fromTo(header,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: galleryRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none'
            }
          }
        );
      }

      // Animate each photo with different delays for visual interest
      gsap.fromTo(imageCards,
        { opacity: 0, y: 60, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          delay: 0.3,
          scrollTrigger: {
            trigger: galleryRef.current,
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
    <div className="min-h-screen w-full" style={{ backgroundColor: '#0b0b0d' }}>
      {/* Hero Section */}
      <section ref={heroRef} className="pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-10 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto w-full">
        <div className="w-full text-start">
          <div className="flex items-center justify-start gap-2 mb-4 sm:mb-6">
            <SparkleIcon />
            <h2 className="text-[#b5ff6d] text-sm sm:text-base md:text-lg font-medium tracking-wide uppercase">
              ALBUM
            </h2>
          </div>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium leading-[1.1] tracking-tight">
            <span className="text-white">Captured moments and memories</span>
            <br />
          </h1>
        </div>
      </section>

      {/* Gallery Section */}
      <section ref={galleryRef} className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <div className="mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-medium mb-3 sm:mb-4">
            My Album
          </h2>
          <p className="text-[#9797a9] text-sm sm:text-base max-w-2xl mb-6">
            A collection of photos and moments that tell my story.
          </p>
        </div>

        {/* Gallery - Asymmetric Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {/* Featured Large Photo - Photo 1 */}
          <div
            className="md:col-span-2 md:row-span-2 group cursor-pointer"
            onClick={() => setSelectedImage(albumImages[0].src)}
          >
            <div className="rounded-xl sm:rounded-2xl overflow-hidden bg-gray-800/30 border border-gray-700/50 hover:border-[#b5ff6d]/50 transition-all duration-300 relative h-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px]">
              <div className="relative w-full h-full">
                <Image
                  src={albumImages[0].src}
                  alt={albumImages[0].title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  style={{ objectPosition: 'center 25%' }}
                />
                <div className="absolute inset-0 bg-[#b5ff6d]/0 group-hover:bg-[#b5ff6d]/10 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-[#0b0b0d]/80 backdrop-blur-sm rounded-full p-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#b5ff6d"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  </div>
                </div>
                {/* Title overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-[#0b0b0d]/95 to-transparent">
                  <h3 className="text-white text-lg sm:text-xl md:text-2xl font-medium group-hover:text-[#b5ff6d] transition-colors">
                    {albumImages[0].title}
                  </h3>
                  <p className="text-[#9797a9] text-xs sm:text-sm mt-1 line-clamp-2">
                    {albumImages[0].description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Photo 2 - Top Right */}
          <div
            className="group cursor-pointer"
            onClick={() => setSelectedImage(albumImages[1].src)}
          >
            <div className="rounded-xl sm:rounded-2xl overflow-hidden bg-gray-800/30 border border-gray-700/50 hover:border-[#b5ff6d]/50 transition-all duration-300 relative h-full min-h-[250px] sm:min-h-[280px]">
              <div className="relative w-full h-full">
                <Image
                  src={albumImages[1].src}
                  alt={albumImages[1].title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  style={{ objectPosition: 'center 10%' }}
                />
                <div className="absolute inset-0 bg-[#b5ff6d]/0 group-hover:bg-[#b5ff6d]/10 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-[#0b0b0d]/80 backdrop-blur-sm rounded-full p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#b5ff6d"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-[#0b0b0d]/95 to-transparent">
                  <h3 className="text-white text-base sm:text-lg font-medium group-hover:text-[#b5ff6d] transition-colors">
                    {albumImages[1].title}
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Photo 3 - Bottom Right */}
          <div
            className="group cursor-pointer"
            onClick={() => setSelectedImage(albumImages[2].src)}
          >
            <div className="rounded-xl sm:rounded-2xl overflow-hidden bg-gray-800/30 border border-gray-700/50 hover:border-[#b5ff6d]/50 transition-all duration-300 relative h-full min-h-[250px] sm:min-h-[280px]">
              <div className="relative w-full h-full">
                <Image
                  src={albumImages[2].src}
                  alt={albumImages[2].title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  style={{ objectPosition: 'center 10%' }}
                />
                <div className="absolute inset-0 bg-[#b5ff6d]/0 group-hover:bg-[#b5ff6d]/10 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-[#0b0b0d]/80 backdrop-blur-sm rounded-full p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#b5ff6d"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-[#0b0b0d]/95 to-transparent">
                  <h3 className="text-white text-base sm:text-lg font-medium group-hover:text-[#b5ff6d] transition-colors">
                    {albumImages[2].title}
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Photo 4 - Bottom Left */}
          <div
            className="md:col-span-1 group cursor-pointer"
            onClick={() => setSelectedImage(albumImages[3].src)}
          >
            <div className="rounded-xl sm:rounded-2xl overflow-hidden bg-gray-800/30 border border-gray-700/50 hover:border-[#b5ff6d]/50 transition-all duration-300 relative h-full min-h-[300px] sm:min-h-[350px]">
              <div className="relative w-full h-full">
                <Image
                  src={albumImages[3].src}
                  alt={albumImages[3].title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  style={{ objectPosition: 'center 10%' }}
                />
                <div className="absolute inset-0 bg-[#b5ff6d]/0 group-hover:bg-[#b5ff6d]/10 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-[#0b0b0d]/80 backdrop-blur-sm rounded-full p-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#b5ff6d"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-[#0b0b0d]/95 to-transparent">
                  <h3 className="text-white text-lg sm:text-xl font-medium group-hover:text-[#b5ff6d] transition-colors">
                    {albumImages[3].title}
                  </h3>
                  <p className="text-[#9797a9] text-xs sm:text-sm mt-1 line-clamp-2">
                    {albumImages[3].description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Photo 5 - Bottom Right */}
          <div
            className="md:col-span-2 group cursor-pointer"
            onClick={() => setSelectedImage(albumImages[4].src)}
          >
            <div className="rounded-xl sm:rounded-2xl overflow-hidden bg-gray-800/30 border border-gray-700/50 hover:border-[#b5ff6d]/50 transition-all duration-300 relative h-full min-h-[300px] sm:min-h-[350px]">
              <div className="relative w-full h-full">
                <Image
                  src={albumImages[4].src}
                  alt={albumImages[4].title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  style={{ objectPosition: 'center 20%' }}
                />
                <div className="absolute inset-0 bg-[#b5ff6d]/0 group-hover:bg-[#b5ff6d]/10 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-[#0b0b0d]/80 backdrop-blur-sm rounded-full p-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#b5ff6d"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-[#0b0b0d]/95 to-transparent">
                  <h3 className="text-white text-lg sm:text-xl font-medium group-hover:text-[#b5ff6d] transition-colors">
                    {albumImages[4].title}
                  </h3>
                  <p className="text-[#9797a9] text-xs sm:text-sm mt-1 line-clamp-2">
                    {albumImages[4].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0b0b0d]/95 backdrop-blur-md p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-[#b5ff6d] transition-colors p-2 z-10 bg-[#0b0b0d]/80 rounded-full"
              aria-label="Close modal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            <div className="relative w-full h-full max-h-[90vh] flex items-center justify-center">
              <img
                src={selectedImage}
                alt="Selected image"
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface SmoothScrollProps {
  children: React.ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const scrollTween = useRef<gsap.core.Tween | null>(null);
  const currentScroll = useRef(0);
  const targetScroll = useRef(0);
  const isScrolling = useRef(false);

  useEffect(() => {
    // Get initial scroll position
    currentScroll.current = window.scrollY || 0;
    targetScroll.current = window.scrollY || 0;

    // Create an object to animate
    const scrollObj = { value: currentScroll.current };

    // Function to smoothly scroll to target position
    const smoothScrollTo = (target: number) => {
      // Clamp target to valid scroll range
      const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      target = Math.max(0, Math.min(target, maxScroll));
      targetScroll.current = target;

      // Kill existing tween if any
      if (scrollTween.current) {
        scrollTween.current.kill();
      }

      // Create GSAP animation for smooth scroll
      scrollTween.current = gsap.to(scrollObj, {
        value: target,
        duration: 0.8,
        ease: 'power2.out',
        onUpdate: function () {
          currentScroll.current = scrollObj.value;
          window.scrollTo(0, scrollObj.value);
        },
      });
    };

    // Continuous smooth scroll update using requestAnimationFrame
    let rafId: number | null = null;
    const updateScroll = () => {
      if (isScrolling.current) {
        const diff = targetScroll.current - currentScroll.current;
        if (Math.abs(diff) > 0.5) {
          smoothScrollTo(targetScroll.current);
        }
      }
      rafId = requestAnimationFrame(updateScroll);
    };
    rafId = requestAnimationFrame(updateScroll);

    // Handle wheel events for smooth scrolling
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      isScrolling.current = true;
      targetScroll.current += e.deltaY;
      smoothScrollTo(targetScroll.current);
      
      // Reset scrolling flag after a delay
      setTimeout(() => {
        isScrolling.current = false;
      }, 150);
    };

    // Handle scroll events (for programmatic scrolling, anchor links, etc.)
    const handleScroll = () => {
      if (!isScrolling.current) {
        targetScroll.current = window.scrollY || 0;
        currentScroll.current = window.scrollY || 0;
        scrollObj.value = window.scrollY || 0;
      }
    };

    // Handle touch events for mobile
    let touchStartY = 0;
    let touchStartScroll = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
      touchStartScroll = window.scrollY || 0;
      targetScroll.current = touchStartScroll;
      currentScroll.current = touchStartScroll;
      scrollObj.value = touchStartScroll;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const touchY = e.touches[0].clientY;
      const deltaY = (touchStartY - touchY) * 2;
      targetScroll.current = touchStartScroll + deltaY;
      smoothScrollTo(targetScroll.current);
    };

    // Handle keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        targetScroll.current += window.innerHeight * 0.8;
        smoothScrollTo(targetScroll.current);
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        targetScroll.current -= window.innerHeight * 0.8;
        smoothScrollTo(targetScroll.current);
      } else if (e.key === 'Home') {
        e.preventDefault();
        smoothScrollTo(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
        smoothScrollTo(maxScroll);
      }
    };

    // Add event listeners
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('keydown', handleKeyDown);

    // Cleanup
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('keydown', handleKeyDown);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
      if (scrollTween.current) {
        scrollTween.current.kill();
      }
    };
  }, []);

  return <>{children}</>;
}


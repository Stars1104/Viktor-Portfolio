import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Animation presets
export const animationPresets = {
  fadeInUp: {
    from: { opacity: 0, y: 60 },
    to: { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
  },
  fadeIn: {
    from: { opacity: 0 },
    to: { opacity: 1, duration: 1, ease: 'power2.out' }
  },
  fadeInLeft: {
    from: { opacity: 0, x: -60 },
    to: { opacity: 1, x: 0, duration: 1, ease: 'power3.out' }
  },
  fadeInRight: {
    from: { opacity: 0, x: 60 },
    to: { opacity: 1, x: 0, duration: 1, ease: 'power3.out' }
  },
  scaleIn: {
    from: { opacity: 0, scale: 0.8 },
    to: { opacity: 1, scale: 1, duration: 1, ease: 'back.out(1.7)' }
  }
};

// Animate text with split text effect
export const animateText = (
  selector: string,
  options: {
    delay?: number;
    duration?: number;
    stagger?: number;
    scrollTrigger?: ScrollTrigger.Vars;
  } = {}
) => {
  const { delay = 0, duration = 0.8, stagger = 0.1, scrollTrigger } = options;

  const elements = document.querySelectorAll(selector);
  
  elements.forEach((element) => {
    const text = element.textContent || '';
    const words = text.split(' ');
    
    // Clear existing content
    element.innerHTML = '';
    
    // Create spans for each word
    words.forEach((word, index) => {
      const span = document.createElement('span');
      span.textContent = word + ' ';
      span.style.display = 'inline-block';
      span.style.opacity = '0';
      span.style.transform = 'translateY(100%)';
      element.appendChild(span);
    });
    
    // Animate words
    const wordSpans = element.querySelectorAll('span');
    gsap.to(wordSpans, {
      opacity: 1,
      y: 0,
      duration,
      delay: delay + (stagger * 0),
      stagger: stagger,
      ease: 'power3.out',
      scrollTrigger: scrollTrigger ? {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none none',
        ...scrollTrigger
      } : undefined
    });
  });
};

// Animate section on scroll
export const animateSection = (
  selector: string,
  options: {
    preset?: keyof typeof animationPresets;
    delay?: number;
    duration?: number;
    stagger?: number;
    scrollTrigger?: ScrollTrigger.Vars;
  } = {}
) => {
  const { 
    preset = 'fadeInUp', 
    delay = 0, 
    duration, 
    stagger = 0.1,
    scrollTrigger: customScrollTrigger 
  } = options;

  const elements = document.querySelectorAll(selector);
  const presetConfig = animationPresets[preset];
  const finalDuration = duration || presetConfig.to.duration || 1;

  elements.forEach((element, index) => {
    gsap.fromTo(
      element,
      presetConfig.from,
      {
        ...presetConfig.to,
        duration: finalDuration,
        delay: delay + (index * stagger),
        ease: presetConfig.to.ease,
        scrollTrigger: customScrollTrigger ? {
          trigger: element,
          start: 'top 80%',
          toggleActions: 'play none none none',
          ...customScrollTrigger
        } : {
          trigger: element,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );
  });
};

// Animate list items with stagger
export const animateList = (
  selector: string,
  options: {
    preset?: keyof typeof animationPresets;
    delay?: number;
    stagger?: number;
    scrollTrigger?: ScrollTrigger.Vars;
  } = {}
) => {
  const { 
    preset = 'fadeInUp', 
    delay = 0, 
    stagger = 0.15,
    scrollTrigger: customScrollTrigger 
  } = options;

  const presetConfig = animationPresets[preset];
  const elements = document.querySelectorAll(selector);
  const container = elements[0]?.parentElement;

  if (!container) return;

  gsap.fromTo(
    elements,
    presetConfig.from,
    {
      ...presetConfig.to,
      delay,
      stagger,
      ease: presetConfig.to.ease,
      scrollTrigger: customScrollTrigger ? {
        trigger: container,
        start: 'top 80%',
        toggleActions: 'play none none none',
        ...customScrollTrigger
      } : {
        trigger: container,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    }
  );
};

// Animate grid items
export const animateGrid = (
  selector: string,
  options: {
    preset?: keyof typeof animationPresets;
    delay?: number;
    stagger?: number;
    scrollTrigger?: ScrollTrigger.Vars;
  } = {}
) => {
  const { 
    preset = 'fadeInUp', 
    delay = 0, 
    stagger = 0.1,
    scrollTrigger: customScrollTrigger 
  } = options;

  const presetConfig = animationPresets[preset];
  const elements = document.querySelectorAll(selector);
  const container = elements[0]?.parentElement;

  if (!container) return;

  gsap.fromTo(
    elements,
    presetConfig.from,
    {
      ...presetConfig.to,
      delay,
      stagger,
      ease: presetConfig.to.ease,
      scrollTrigger: customScrollTrigger ? {
        trigger: container,
        start: 'top 80%',
        toggleActions: 'play none none none',
        ...customScrollTrigger
      } : {
        trigger: container,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    }
  );
};

// Animate on mount (for client components)
export const animateOnMount = (
  selector: string,
  options: {
    preset?: keyof typeof animationPresets;
    delay?: number;
    duration?: number;
  } = {}
) => {
  const { preset = 'fadeInUp', delay = 0, duration } = options;
  const presetConfig = animationPresets[preset];
  const finalDuration = duration || presetConfig.to.duration || 1;

  const elements = document.querySelectorAll(selector);
  
  elements.forEach((element) => {
    gsap.fromTo(
      element,
      presetConfig.from,
      {
        ...presetConfig.to,
        duration: finalDuration,
        delay,
        ease: presetConfig.to.ease
      }
    );
  });
};


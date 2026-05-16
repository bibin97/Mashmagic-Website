import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const programs = [
  { img: "/courses/MagicRevision.png", subtitle: "Complete subject revision", link: "https://magic-revision.vercel.app/" },
  { img: "/courses/BrightBridge.png", subtitle: "Skill-building foundation", link: "https://bright-bridge-rho.vercel.app/" },
  { img: "/courses/classMate.png", subtitle: "Everyday learning support", link: "https://classmate-ashen.vercel.app/" },
  { img: "/courses/Crash45.png", subtitle: "Full subject mastery in 45 hours", link: "https://crash45.vercel.app/" },
  { img: "/courses/FinalTouch.png", subtitle: "Last-stage exam prep", link: "https://final-touch-psi.vercel.app/" },
  { img: "/courses/missionX.png", subtitle: "High-performance training", link: "https://mission-x-landing-page.vercel.app/" },
];

export default function OurProgramsMarquee() {
  const marqueeRef = useRef(null);
  const titleRefs = useRef([]);

  const isTouch =
    typeof window !== "undefined" &&
    ("ontouchstart" in window || navigator.maxTouchPoints > 0);

  /* =====================================================
     MARQUEE – MOBILE TOUCH SCROLL (FIXED)
  ===================================================== */
  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    let x = 0;
    const BASE_SPEED = 0.6; // increased slightly from 0.25
    let currentSpeed = BASE_SPEED;
    let targetSpeed = BASE_SPEED;

    let touchVelocity = 0;
    let mouseInfluence = 0;
    let pageScrollVelocity = 0;

    let lastScrollY = window.scrollY;
    const limit = marquee.scrollWidth / 2;

    const smoothness = 0.08;
    const decay = 0.92;

    /* ---------- MAIN LOOP ---------- */
    const tick = () => {
      pageScrollVelocity *= decay;
      
      if (isTouch) {
        // MOBILE: touch momentum + page scroll
        touchVelocity *= decay;
        targetSpeed = BASE_SPEED + touchVelocity + pageScrollVelocity;
      } else {
        // DESKTOP: base + mouse + page scroll
        targetSpeed = BASE_SPEED + mouseInfluence + pageScrollVelocity;
      }

      targetSpeed = gsap.utils.clamp(-5, 5, targetSpeed);
      currentSpeed += (targetSpeed - currentSpeed) * smoothness;

      x += currentSpeed;

      if (x >= 0) x -= limit;
      if (x <= -limit) x += limit;

      marquee.style.transform = `translateX(${x}px)`;
    };

    gsap.ticker.add(tick);

    /* =====================================================
       DESKTOP CONTROLS
    ===================================================== */
    const onMouseMove = (e) => {
      const center = window.innerWidth / 2;
      const delta = (e.clientX - center) / center;
      mouseInfluence = delta * 0.8;
    };

    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastScrollY;
      lastScrollY = y;
      // Whichever direction we scroll, rotation moves in that direction
      pageScrollVelocity = gsap.utils.clamp(-4, 4, delta * 0.15);
    };

    /* =====================================================
       MOBILE TOUCH CONTROLS (IMPORTANT)
    ===================================================== */
    let lastX = 0;

    const onTouchStart = (e) => {
      lastX = e.touches[0].clientX;
      touchVelocity = 0;
    };

    const onTouchMove = (e) => {
      const xNow = e.touches[0].clientX;
      const delta = xNow - lastX;
      lastX = xNow;

      // finger movement → marquee velocity
      touchVelocity = gsap.utils.clamp(-2, 2, delta * 0.12);
    };

    const onTouchEnd = () => {
      // momentum continues automatically
    };

    const wrapper = marquee.parentElement;

    // Attach scroll listener unconditionally for both mobile and desktop
    window.addEventListener("scroll", onScroll, { passive: true });

    if (!isTouch) {
      window.addEventListener("mousemove", onMouseMove);
    }

    if (isTouch && wrapper) {
      wrapper.addEventListener("touchstart", onTouchStart, { passive: true });
      wrapper.addEventListener("touchmove", onTouchMove, { passive: true });
      wrapper.addEventListener("touchend", onTouchEnd);
      wrapper.addEventListener("touchcancel", onTouchEnd);
    }

    return () => {
      gsap.ticker.remove(tick);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouseMove);

      if (wrapper) {
        wrapper.removeEventListener("touchstart", onTouchStart);
        wrapper.removeEventListener("touchmove", onTouchMove);
        wrapper.removeEventListener("touchend", onTouchEnd);
        wrapper.removeEventListener("touchcancel", onTouchEnd);
      }
    };
  }, [isTouch]);

  /* =====================================================
     TITLES ANIMATION
  ===================================================== */
  useEffect(() => {
    gsap.fromTo(
      titleRefs.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".marquee-wrapper",
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <section id="programs" className="py-10 overflow-hidden bg-white select-none">
      <h2 className="text-2xl md:text-5xl font-semibold text-center text-[#008080] mb-3">
        Explore Our Programs
      </h2>

      <p className="text-gray-600 text-center mb-10">
        Personalised learning programs designed for every student’s needs
      </p>

      <div className="relative w-full overflow-hidden marquee-wrapper">
        <div
          ref={marqueeRef}
          className="flex gap-12 whitespace-nowrap px-4 touch-pan-y"
        >
          {[...programs, ...programs].map((p, i) => (
            <div key={i} onClick={() => window.open(p.link, "_blank")} className="flex flex-col items-center min-w-[200px] cursor-pointer group">
              <img
                src={p.img}
                alt={p.subtitle}
                className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <p
                ref={(el) => (titleRefs.current[i] = el)}
                className="text-gray-700 text-sm font-medium mt-2 text-center group-hover:text-[#008080] transition-colors"
              >
                {p.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

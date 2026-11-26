import { useEffect, useRef, useState } from 'react';
import { gsap, ScrollTrigger, reduceMotion } from '../lib/scroll.js';
import { asset } from '../lib/assets.js';

const MOBILE_QUERY = '(max-width: 767px)';

const VIDEO_DESKTOP = 'images/new/slider/desk-slider.mp4';
const VIDEO_MOBILE = 'images/new/slider/mobile-slider.mp4';
const POSTER_DESKTOP = 'images/new/slider/pre-desk.webp';
const POSTER_MOBILE = 'images/new/slider/pre-mob.webp';

export default function Hero() {
  const secRef = useRef(null);
  const mediaRef = useRef(null);
  const videoRef = useRef(null);

  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(MOBILE_QUERY).matches
  );
  const [isMahaReraOpen, setIsMahaReraOpen] = useState(false);

  // Track viewport changes so the right video is used
  useEffect(() => {
    const mq = window.matchMedia(MOBILE_QUERY);
    const onChange = (e) => setIsMobile(e.matches);
    setIsMobile(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  // Scroll zoom effect (unchanged)
  useEffect(() => {
    if (reduceMotion()) return;
    const media = mediaRef.current;
    const sec = secRef.current;
    if (!media || !sec) return;

    const tween = gsap.fromTo(
      media,
      { y: 0, scale: 1 },
      {
        y: 0,
        scale: 1.08,
        ease: 'none',
        scrollTrigger: {
          trigger: sec,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.5,
          invalidateOnRefresh: true,
        },
      }
    );

    return () => {
      tween.scrollTrigger && tween.scrollTrigger.kill();
      tween.kill();
    };
  }, []);

  // Autoplay handling + reduced motion (re-runs when the source switches)
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (reduceMotion()) {
      v.pause();
    } else {
      v.play().catch(() => {});
    }
  }, [isMobile]);

  return (
    <section id="hero" className="hero-banner" ref={secRef}>
      <div id="home" style={{ position: 'absolute', top: 0 }}></div>
      <div className="hero-banner-media" ref={mediaRef}>
        <video
          key={isMobile ? 'mobile' : 'desktop'}
          ref={videoRef}
          className="hero-image"
          src={asset(isMobile ? VIDEO_MOBILE : VIDEO_DESKTOP)}
          poster={asset(isMobile ? POSTER_MOBILE : POSTER_DESKTOP)}
          autoPlay={!reduceMotion()}
          muted
          loop
          playsInline
          preload="auto"
          aria-label="Luxury residences"
          onLoadedData={() => ScrollTrigger && ScrollTrigger.refresh()}
        />
        {/* <span className="artist-tag">Artist's Impression</span> */}
      </div>

      {/* ================= MAHARERA BUTTON ================= */}
      <button
        type="button"
        onClick={() => setIsMahaReraOpen(true)}
        className="hero-maharera-btn"
      >
        MAHARERA DETAILS
      </button>

      {/* ================= MAHARERA PANEL ================= */}
      {isMahaReraOpen && (
        <div className="hero-maharera-panel">
          <button
            type="button"
            onClick={() => setIsMahaReraOpen(false)}
            className="hero-maharera-close"
            aria-label="Close MahaRERA details"
          >
            &times;
          </button>
          <h4>RUSTOMJEE BELLEVUE</h4>
          <div className="hero-maharera-body">
            <div className="hero-maharera-content">
              <img
                src={asset('images/new/QR-Code.webp')}
                alt="Rustomjee Bellevue MahaRERA QR Code"
                className="hero-maharera-qr"
              />
              <p className="hero-maharera-text">
                <span className="hero-maharera-label">RERA registration number</span>
                P51700077224
                <br />
                Rustomjee Bellevue
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
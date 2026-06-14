"use client";

import { useEffect, useRef, useState } from "react";

// Crossfades between two copies of the same clip just before it ends,
// so the loop point isn't a visible jump cut.
const CROSSFADE = 0.8;

export function HeroVideo({ src }: { src: string }) {
  const videoARef = useRef<HTMLVideoElement>(null);
  const videoBRef = useRef<HTMLVideoElement>(null);
  const [activeIndex, setActiveIndex] = useState<0 | 1>(0);

  useEffect(() => {
    const a = videoARef.current;
    const b = videoBRef.current;
    if (!a || !b) return;

    let active: 0 | 1 = 0;
    let switching = false;

    a.currentTime = 0;
    a.play().catch(() => {});

    const handleTimeUpdate = (e: Event) => {
      if (switching) return;
      const video = e.currentTarget as HTMLVideoElement;
      const current = active === 0 ? a : b;
      if (video !== current) return;
      if (!current.duration || current.duration - current.currentTime > CROSSFADE) return;

      switching = true;
      const next = active === 0 ? b : a;
      next.currentTime = 0;
      next.play().catch(() => {});
      active = active === 0 ? 1 : 0;
      setActiveIndex(active);

      setTimeout(() => {
        current.pause();
        switching = false;
      }, CROSSFADE * 1000);
    };

    a.addEventListener("timeupdate", handleTimeUpdate);
    b.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      a.removeEventListener("timeupdate", handleTimeUpdate);
      b.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  const base = "absolute inset-0 h-full w-full object-cover transition-opacity duration-[800ms]";

  return (
    <>
      <video ref={videoARef} muted playsInline className={`${base} ${activeIndex === 0 ? "opacity-100" : "opacity-0"}`}>
        <source src={src} type="video/mp4" />
      </video>
      <video ref={videoBRef} muted playsInline className={`${base} ${activeIndex === 1 ? "opacity-100" : "opacity-0"}`}>
        <source src={src} type="video/mp4" />
      </video>
    </>
  );
}

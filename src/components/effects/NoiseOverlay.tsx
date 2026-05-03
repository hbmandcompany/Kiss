"use client";

export function NoiseOverlay() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[60] h-full w-full opacity-[0.04] mix-blend-overlay"
      xmlns="http://www.w3.org/2000/svg"
    >
      <filter id="global-noise">
        <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#global-noise)" />
    </svg>
  );
}

import React from "react";

export const BackgroundDecor = () => {
  return (
    <>
      {/* Gradient Background */}
      <div className="fixed inset-0 -z-20 h-full w-full bg-gradient-to-br from-[#0F4C3A] via-[#1A6B52] to-[#2D5A4A]" />

      {/* Organic Pattern Overlay (SVG) */}
      <div className="fixed inset-0 -z-20 h-full w-full opacity-[0.08] pointer-events-none">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 1600"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="monstera" x="0" y="0" width="400" height="400" patternUnits="userSpaceOnUse">
              <path d="M 100 50 Q 120 40 140 50 Q 150 70 140 90 Q 120 100 100 90 Z" fill="#0f7a4d" />
              <path d="M 200 150 Q 230 130 260 150 Q 280 180 260 210 Q 230 220 200 210 Z" fill="#0f7a4d" />
              <path d="M 50 250 Q 80 230 110 250 Q 130 280 110 310 Q 80 320 50 310 Z" fill="#0f7a4d" />
            </pattern>

            <pattern id="growth" x="0" y="0" width="300" height="300" patternUnits="userSpaceOnUse">
              <path d="M 0 250 L 50 200 L 100 180 L 150 150 L 200 100 L 250 80 L 300 30" 
                    stroke="#CD853F" strokeWidth="1.5" fill="none" opacity="0.6" />
            </pattern>

            <pattern id="bio" x="0" y="0" width="250" height="250" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="3" fill="#0f7a4d" />
              <circle cx="150" cy="100" r="2.5" fill="#0f7a4d" />
              <circle cx="200" cy="180" r="3" fill="#0f7a4d" />
            </pattern>
          </defs>

          <rect width="1200" height="1600" fill="url(#monstera)" />
          <rect width="1200" height="1600" fill="url(#growth)" />
          <rect width="1200" height="1600" fill="url(#bio)" />
        </svg>
      </div>

      {/* Ambient Glow - Left (Mental/Green) */}
      <div className="fixed top-[30%] -left-32 w-96 h-96 bg-gradient-radial from-brand-primary/20 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />

      {/* Ambient Glow - Right (Finansial/Amber) */}
      <div className="fixed top-[50%] -right-40 w-96 h-96 bg-gradient-radial from-amber-500/15 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />
    </>
  );
};

export default BackgroundDecor;

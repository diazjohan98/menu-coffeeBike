import React from "react";

export function BackgroundBike() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none flex items-center opacity-15 overflow-hidden">
      <style>{`
        @keyframes cb-ride-bike {
          0% { transform: translateX(-85vw); }
          100% { transform: translateX(110vw); }
        }
        @keyframes cb-spin-wheel {
          100% { transform: rotate(360deg); }
        }
        .cb-bike-track {
          animation: cb-ride-bike 24s linear infinite;
          will-change: transform;
        }
        .cb-wheel-back {
          animation: cb-spin-wheel 2s linear infinite;
          transform-origin: 12px 42px;
        }
        .cb-wheel-front {
          animation: cb-spin-wheel 1.6s linear infinite;
          transform-origin: 56px 44px;
        }
        .cb-pedal-crank {
          animation: cb-spin-wheel 1.5s linear infinite;
          transform-origin: 22px 42px;
        }
      `}</style>

      <div className="cb-bike-track w-[80vw] md:w-[40vw] text-[#D4AF37]">
        <svg
          viewBox="0 0 70 64"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Llanta trasera */}
          <g className="cb-wheel-back">
            <circle cx="12" cy="42" r="10" />
            <line x1="12" y1="32" x2="12" y2="52" strokeWidth="0.5" />
            <line x1="2" y1="42" x2="22" y2="42" strokeWidth="0.5" />
            <line
              x1="4.93"
              y1="34.93"
              x2="19.07"
              y2="49.07"
              strokeWidth="0.5"
            />
            <line
              x1="4.93"
              y1="49.07"
              x2="19.07"
              y2="34.93"
              strokeWidth="0.5"
            />
          </g>

          {/* Llanta delantera */}
          <g className="cb-wheel-front">
            <circle cx="56" cy="44" r="8" />
            <line x1="56" y1="36" x2="56" y2="52" strokeWidth="0.5" />
            <line x1="48" y1="44" x2="64" y2="44" strokeWidth="0.5" />
            <line
              x1="50.34"
              y1="38.34"
              x2="61.66"
              y2="49.66"
              strokeWidth="0.5"
            />
            <line
              x1="50.34"
              y1="49.66"
              x2="61.66"
              y2="38.34"
              strokeWidth="0.5"
            />
          </g>

          {/* Marco de la bicicleta */}
          <line x1="12" y1="42" x2="22" y2="42" />
          <line x1="22" y1="42" x2="16" y2="24" />
          <line x1="22" y1="42" x2="32" y2="40" />
          <line x1="32" y1="40" x2="56" y2="44" />
          <line x1="32" y1="40" x2="30" y2="20" />

          {/* Sillín y manubrio */}
          <path
            d="M13 24 L19 24 L20 25.5 L14 25.5 Z"
            fill="currentColor"
            stroke="none"
          />
          <path d="M28 20 L32 18 L35 22" strokeWidth="1.5" />

          {/* Cajón delantero */}
          <path
            d="M33 26 L51 26 L53 38 L33 39 Z"
            fill="#D4AF37"
            fillOpacity="0.1"
          />
          <path d="M33 26 L51 26 L53 38 L33 39 Z" />

          {/* Toldo superior */}
          <path
            d="M31 10 L53 10 L51 26 L33 26 Z"
            fill="currentColor"
            fillOpacity="0.05"
            strokeDasharray="2 2"
            strokeWidth="0.8"
          />
          <line x1="31" y1="10" x2="33" y2="26" strokeWidth="0.8" />
          <line x1="53" y1="10" x2="51" y2="26" strokeWidth="0.8" />
          <path d="M31 10 L53 10" strokeWidth="2" />

          {/* Texto COFFEE BIKE grabado en el carrito */}
          <text
            x="42.5"
            y="32"
            fontSize="3.4"
            textAnchor="middle"
            fill="currentColor"
            stroke="none"
            fontFamily="Poppins, sans-serif"
            fontWeight="800"
            letterSpacing="0.4"
          >
            COFFEE
          </text>
          <text
            x="42.5"
            y="35.8"
            fontSize="2.5"
            textAnchor="middle"
            fill="currentColor"
            stroke="none"
            fontFamily="Poppins, sans-serif"
            fontWeight="600"
            letterSpacing="0.8"
          >
            BIKE
          </text>

          {/* Pedales */}
          <g className="cb-pedal-crank">
            <circle cx="22" cy="42" r="2.5" />
            <line x1="22" y1="37" x2="22" y2="47" strokeWidth="1.5" />
            <line x1="19" y1="37" x2="25" y2="37" strokeWidth="1.5" />
            <line x1="19" y1="47" x2="25" y2="47" strokeWidth="1.5" />
          </g>

          {/* Línea de suelo */}
          <line
            x1="0"
            y1="52"
            x2="70"
            y2="52"
            strokeWidth="0.5"
            strokeOpacity="0.3"
            strokeDasharray="4 4"
          />
        </svg>
      </div>
    </div>
  );
}

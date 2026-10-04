import { useId } from "react";

type DataLinesProps = {
  /** Grösse und Position kommen von aussen, z. B. "absolute bottom-0 left-0 w-2/3" */
  className?: string;
  /** Linien horizontal spiegeln, damit sie von rechts unten einlaufen. */
  flip?: boolean;
};

const COUNT = 28;
/** Diese Linien tragen den orangen Akzent – bewusst nur wenige. */
const ACCENTS = [7, 19];

/**
 * Bündel feiner, geschwungener Linien – Datenströme, die von unten links
 * nach oben rechts auffächern. Rein dekorativ, rechts weich ausgeblendet.
 */
const paths = Array.from({ length: COUNT }, (_, i) => {
  const startY = 330 + i * 2.6;
  const c1 = `260 ${(350 + i * 2.4).toFixed(1)}`;
  const c2 = `540 ${(190 + i * 5.2).toFixed(1)}`;
  const end = `820 ${(30 + i * 8.4).toFixed(1)}`;
  return `M-20 ${startY.toFixed(1)} C${c1} ${c2} ${end}`;
});

export default function DataLines({ className = "", flip = false }: DataLinesProps) {
  const id = useId().replace(/:/g, "");

  return (
    <svg
      viewBox="0 0 800 400"
      preserveAspectRatio="xMinYMax slice"
      fill="none"
      aria-hidden="true"
      className={`pointer-events-none ${flip ? "-scale-x-100" : ""} ${className}`}
    >
      <defs>
        <linearGradient id={`${id}-fade`} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#fff" stopOpacity="0.4" />
          <stop offset="0.25" stopColor="#fff" />
          <stop offset="0.6" stopColor="#fff" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <mask id={`${id}-mask`}>
          <rect width="800" height="400" fill={`url(#${id}-fade)`} />
        </mask>
      </defs>

      <g mask={`url(#${id}-mask)`} strokeLinecap="round">
        {paths.map((d, i) =>
          ACCENTS.includes(i) ? (
            <g key={i}>
              <path d={d} stroke="#E2571E" strokeOpacity="0.45" strokeWidth="0.8" />
              <path d={d} className="data-flow" stroke="#E2571E" strokeWidth="1.4" />
            </g>
          ) : (
            <path
              key={i}
              d={d}
              stroke="#AEB1B5"
              strokeOpacity={0.25 + (i % 4) * 0.1}
              strokeWidth={i % 5 === 0 ? 0.8 : 0.5}
            />
          ),
        )}
      </g>
    </svg>
  );
}

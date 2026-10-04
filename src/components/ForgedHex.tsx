import { useId } from "react";

type ForgedHexProps = {
  /** Grösse und Position kommen von aussen, z. B. "absolute -right-40 w-[40rem]" */
  className?: string;
  /** Rechte Flanke weglassen – das Hexagon wird zum "C" der Bildmarke. */
  open?: boolean;
  /** Flanken (0 = oben rechts, im Uhrzeigersinn), deren Innenkante orange glüht. */
  glow?: number[];
};

const C = 100;
const OUTER = 96;
const INNER = 60;

/** Spitz stehendes Hexagon: Ecke 0 oben, dann im Uhrzeigersinn. */
const corners = (r: number) =>
  Array.from({ length: 6 }, (_, i) => {
    const a = ((-90 + 60 * i) * Math.PI) / 180;
    return [C + r * Math.cos(a), C + r * Math.sin(a)] as const;
  });

const outer = corners(OUTER);
const inner = corners(INNER);
const pt = ([x, y]: readonly [number, number]) => `${x.toFixed(2)},${y.toFixed(2)}`;

/**
 * Licht fällt von oben links ein: Flanken, die dorthin zeigen, sind hell,
 * abgewandte gehen ins Silbergrau. So entsteht die Tiefe allein über Licht.
 */
function shade(face: number) {
  const normal = ((-60 + 60 * face) * Math.PI) / 180;
  const light = (-135 * Math.PI) / 180;
  const t = (1 + Math.cos(normal - light)) / 2;
  const mix = (from: number, to: number) => Math.round(from + (to - from) * t);
  return `rgb(${mix(218, 255)}, ${mix(220, 255)}, ${mix(222, 254)})`;
}

/**
 * Grosses, "geschmiedetes" Hexagon als abgeschrägter 3D-Rahmen –
 * das zentrale Bildelement des Visual-Systems. Reines SVG, dekorativ.
 */
export default function ForgedHex({
  className = "",
  open = false,
  glow = [3, 4],
}: ForgedHexProps) {
  const id = useId().replace(/:/g, "");
  const faces = [0, 1, 2, 3, 4, 5].filter((face) => !(open && face === 1));

  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      aria-hidden="true"
      className={`pointer-events-none ${className}`}
    >
      <defs>
        <filter id={`${id}-shadow`} x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="3" dy="6" stdDeviation="6" floodColor="#1C1C1C" floodOpacity="0.07" />
        </filter>
        <filter id={`${id}-glow`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2.4" />
        </filter>
      </defs>

      {/* Versetzte, transparente Platte dahinter – zweite Ebene für Tiefe */}
      <polygon
        points={corners(OUTER * 0.82).map(([x, y]) => pt([x + 26, y - 18])).join(" ")}
        fill="#FFFFFF"
        fillOpacity="0.35"
        stroke="#C9CBCD"
        strokeOpacity="0.7"
        strokeWidth="0.4"
      />

      {!open && (
        <polygon
          points={inner.map(pt).join(" ")}
          fill="#FFFFFF"
          fillOpacity="0.45"
        />
      )}

      <g filter={`url(#${id}-shadow)`}>
        {faces.map((face) => {
          const next = (face + 1) % 6;
          return (
            <polygon
              key={face}
              points={[outer[face], outer[next], inner[next], inner[face]].map(pt).join(" ")}
              fill={shade(face)}
              stroke="#FFFFFF"
              strokeOpacity="0.9"
              strokeWidth="0.35"
              strokeLinejoin="round"
            />
          );
        })}
      </g>

      {glow
        .filter((face) => faces.includes(face))
        .map((face) => {
          const d = `M${pt(inner[face])} L${pt(inner[(face + 1) % 6])}`;
          return (
            <g key={face}>
              <path d={d} stroke="#E2571E" strokeWidth="2.6" strokeOpacity="0.55" filter={`url(#${id}-glow)`} />
              <path d={d} stroke="#E2571E" strokeWidth="0.9" strokeLinecap="round" />
            </g>
          );
        })}
    </svg>
  );
}

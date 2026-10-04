type HexMarkProps = {
  /** Grösse kommt von aussen, z. B. "h-6 w-6" */
  className?: string;
};

/**
 * Bildmarke: ein spitz stehendes Hexagon, rechts offen – ein "C" –
 * mit glühendem Kern. Wiederkehrendes Motiv in Logo und Section-Headern.
 * Gleiche Geometrie wie `public/logo.svg`, aus dem die Favicons erzeugt sind.
 */
export default function HexMark({ className = "" }: HexMarkProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={`shrink-0 ${className}`}
    >
      <path d="M21.18 6.70 L12.00 1.40 L2.82 6.70 L2.82 17.30 L12.00 22.60 L21.18 17.30 L18.41 15.70 L12.00 19.40 L5.59 15.70 L5.59 8.30 L12.00 4.60 L18.41 8.30Z" fill="currentColor" />
      <path d="M12.00 8.70 L14.86 10.35 L14.86 13.65 L12.00 15.30 L9.14 13.65 L9.14 10.35Z" fill="#E2571E" />
    </svg>
  );
}

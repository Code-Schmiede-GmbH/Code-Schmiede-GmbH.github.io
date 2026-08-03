import Image from "next/image";

const SOURCE = { width: 800, height: 600 };

/**
 * Bildausschnitte in Pixeln von `public/tobias.jpg` (800 × 600).
 * Das Gesicht liegt bei ca. (445 | 198); beide Ausschnitte sind quadratisch,
 * damit runde und eckige Rahmen dieselbe Komponente nutzen können.
 */
const crops = {
  /** Eng am Gesicht – für kleine Avatare, wo Schultern nur stören würden. */
  face: { x: 288, y: 40, size: 315 },
  /** Kopf und Schultern – für grössere Darstellungen. */
  bust: { x: 221, y: 27, size: 449 },
};

type PortraitProps = {
  crop?: keyof typeof crops;
  /** Grösse und Form kommen von aussen, z. B. "h-10 w-10 rounded-full" */
  className?: string;
  priority?: boolean;
};

export default function Portrait({
  crop = "face",
  className = "",
  priority = false,
}: PortraitProps) {
  const { x, y, size } = crops[crop];

  return (
    <span
      className={`relative block shrink-0 overflow-hidden bg-sand-200 ${className}`}
    >
      <Image
        src="/tobias.jpg"
        alt="Tobias Walter"
        width={SOURCE.width}
        height={SOURCE.height}
        priority={priority}
        className="absolute max-w-none"
        style={{
          width: `${(SOURCE.width / size) * 100}%`,
          height: `${(SOURCE.height / size) * 100}%`,
          left: `${(-x / size) * 100}%`,
          top: `${(-y / size) * 100}%`,
        }}
      />
    </span>
  );
}

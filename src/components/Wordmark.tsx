type WordmarkProps = {
  /** "dark" = Anthrazit-Schrift auf hellem Grund, "light" = umgekehrt */
  tone?: "dark" | "light";
  size?: "sm" | "md";
  className?: string;
};

const sizes = {
  sm: "text-lg",
  md: "text-xl",
};

const tones = {
  dark: "text-anthracite",
  light: "text-sand",
};

export default function Wordmark({
  tone = "dark",
  size = "md",
  className = "",
}: WordmarkProps) {
  return (
    <span
      className={`inline-flex items-baseline gap-2 font-extrabold tracking-tight ${sizes[size]} ${tones[tone]} ${className}`}
    >
      <span aria-hidden="true" className="text-copper">
        {"{ }"}
      </span>
      Code Schmiede
    </span>
  );
}

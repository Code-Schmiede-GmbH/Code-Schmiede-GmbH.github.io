import HexMark from "./HexMark";

type WordmarkProps = {
  size?: "sm" | "md";
  className?: string;
};

const sizes = {
  sm: { text: "text-lg", mark: "h-5 w-5" },
  md: { text: "text-xl", mark: "h-6 w-6" },
};

export default function Wordmark({ size = "md", className = "" }: WordmarkProps) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 font-extrabold tracking-tight text-anthracite ${sizes[size].text} ${className}`}
    >
      <HexMark className={sizes[size].mark} />
      Code Schmiede
    </span>
  );
}

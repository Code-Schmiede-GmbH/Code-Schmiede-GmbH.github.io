import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  /** Anheben und orange glühende Oberkante beim Hover */
  interactive?: boolean;
  as?: "article" | "div";
};

/**
 * Helle Fläche mit feiner Kante. Interaktive Karten bekommen beim Hover
 * eine glühende Oberkante – derselbe Akzent wie an den Hexagon-Flanken.
 */
export default function Card({
  children,
  className = "",
  interactive = false,
  as: Tag = "div",
}: CardProps) {
  return (
    <Tag
      className={`relative rounded-xl2 border border-sand-300 bg-white/90 p-8 shadow-card ${
        interactive
          ? "group transition-all duration-300 hover:-translate-y-1 hover:border-ember/30 hover:shadow-card-hover"
          : ""
      } ${className}`}
    >
      {interactive && (
        <span
          aria-hidden="true"
          className="absolute inset-x-8 -top-px h-px bg-gradient-to-r from-transparent via-ember to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
      )}
      {children}
    </Tag>
  );
}

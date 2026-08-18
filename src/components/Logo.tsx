import React from "react";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light" | "auto";
}

export default function Logo({
  className = "h-12 w-auto",
  variant = "auto",
}: LogoProps) {
  const agencyColor =
    variant === "light"
      ? "#FFFFFF"
      : variant === "dark"
      ? "#1A1C1C"
      : "currentColor";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 240 100"
      className={className}
      aria-label="PRO LIVE. AGENCY Logo"
      fill="none"
    >
      <text
        x="120"
        y="50"
        fontFamily="var(--font-anton), system-ui, sans-serif"
        fontWeight="bold"
        fontSize="48"
        textAnchor="middle"
      >
        <tspan fill="#D4AF37">PRO</tspan>
        <tspan fill={agencyColor}> LIVE</tspan>
        <tspan fill="#D4AF37">.</tspan>
      </text>
      <text
        x="120"
        y="80"
        fontFamily="var(--font-hanken), system-ui, sans-serif"
        fontWeight="bold"
        fontSize="18"
        letterSpacing="6"
        fill="#D4AF37"
        textAnchor="middle"
      >
        - AGENCY -
      </text>
    </svg>
  );
}

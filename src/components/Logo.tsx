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
    <img
      src="/images/new_logo.png"
      alt="PRO LIVE. AGENCY Logo"
      className={className}
    />
  );
}

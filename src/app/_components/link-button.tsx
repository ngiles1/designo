import type { ReactNode } from "react";
import Link from "next/link";
import clsx from "clsx";

type LinkButtonProps = {
  href: string;
  variant?: "light" | "peach";
  children: ReactNode;
};

export default function LinkButton({ href, variant = "light", children }: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={clsx(
        "inline-block",
        "rounded-lg",
        "px-8",
        "py-4",
        "uppercase",
        "text-[15px]",
        "tracking-[1px]",
        "font-medium",
        "transition-colors",
        "hover:bg-light-peach",
        "hover:text-white",
        variant === "peach" ? "bg-peach text-white" : "bg-white text-black",
      )}
    >
      {children}
    </Link>
  )
};

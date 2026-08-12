"use client";

import { ViewTransition } from "react";
import { usePathname } from "next/navigation";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <ViewTransition
      key={pathname}
      enter="fade-in"
      exit="fade-out"
      default="none"
    >
      {children}
    </ViewTransition>
  );
}

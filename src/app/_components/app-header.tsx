"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { assetPath } from "@/lib/asset-path";

export default function AppHeader() {
  const [mobMenuOpen, setMobMenuOpen] = useState<boolean>(false);
  const toggleMobMenu = () => setMobMenuOpen(!mobMenuOpen);

  return (
    <header className="flex items-center justify-between h-18 max-sm:px-2 sm:py-12">
      <Link href="/">
        <Image
          src={assetPath("/assets/shared/desktop/logo-dark.svg")}
          alt="Designo"
          width={202}
          height={27}
          className="w-[196px]"
        />
      </Link>
      <div>
        <button
          onClick={toggleMobMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={mobMenuOpen}
          className="cursor-pointer sm:hidden relative z-10"
        >
          <Image
            src={assetPath(
              mobMenuOpen
                ? "/assets/shared/mobile/icon-close.svg"
                : "/assets/shared/mobile/icon-hamburger.svg"
            )}
            alt=""
            width={20}
            height={20}
          />
        </button>

        <nav className="max-sm:hidden">
          <ul
            className={clsx(
              "text-dark-grey",
              "text-[.875rem]",
              "uppercase",
              "tracking-[2px]",
              "flex",
              "gap-8",
            )}
          >
            <li className="hover:text-peach">
              <Link href="/about">Our company</Link>
            </li>
            <li className="hover:text-peach">
              <Link href="/locations">Locations</Link>
            </li>
            <li className="hover:text-peach">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div
        className={clsx(
          "fixed",
          "inset-x-0",
          "top-18",
          "bottom-0",
          "z-1",
          "bg-black/50",
          "transition-opacity",
          "sm:hidden",
          mobMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
        onClick={toggleMobMenu}
      >
        <nav
          data-testid="mobile-nav"
          className={clsx(
            "bg-black",
            "px-6",
            "py-12",
            "transition-transform",
            mobMenuOpen ? "translate-x-0" : "translate-x-full",
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <ul
            className={clsx(
              "text-white",
              "text-2xl",
              "uppercase",
              "tracking-[2px]",
              "flex",
              "flex-col",
              "gap-8",
            )}
          >
            <li className="hover:text-peach">
              <Link href="/about" onClick={toggleMobMenu}>Our company</Link>
            </li>
            <li className="hover:text-peach">
              <Link href="/locations" onClick={toggleMobMenu}>Locations</Link>
            </li>
            <li className="hover:text-peach">
              <Link href="/contact" onClick={toggleMobMenu}>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
};

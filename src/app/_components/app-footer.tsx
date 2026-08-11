import Link from "next/link";
import clsx from "clsx";

const socialLinks = [
  { name: "Facebook", icon: "/assets/shared/desktop/icon-facebook.svg" },
  { name: "Youtube", icon: "/assets/shared/desktop/icon-youtube.svg" },
  { name: "Twitter", icon: "/assets/shared/desktop/icon-twitter.svg" },
  { name: "Pinterest", icon: "/assets/shared/desktop/icon-pinterest.svg" },
  { name: "Instagram", icon: "/assets/shared/desktop/icon-instagram.svg" },
];

export default function AppFooter() {
  return (
    <footer className="bg-black text-white">
      <div
        className={clsx(
          "container",
          "mx-auto",
          "px-2",
          "pt-36",
          "pb-16",
          "flex",
          "flex-col",
          "items-center",
          "gap-10",
          "sm:gap-8",
        )}
      >
        <div
          className={clsx(
            "flex",
            "flex-col",
            "items-center",
            "gap-8",
            "sm:w-full",
            "sm:flex-row",
            "sm:items-center",
            "sm:justify-between",
          )}
        >
          <Link href="/" className="order-1">
            <img
              src="/assets/shared/desktop/logo-light.svg"
              alt="Designo"
              width="196"
              height="24"
              className="w-[172px] sm:w-[196px]"
            />
          </Link>

          <div className="order-2 h-px w-full bg-white/10 sm:hidden" />

          <nav className="order-3 sm:order-2">
            <ul
              className={clsx(
                "flex",
                "flex-col",
                "items-center",
                "gap-8",
                "text-[14px]",
                "uppercase",
                "tracking-[2px]",
                "sm:flex-row",
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

        <div className="hidden h-px w-full bg-white/10 sm:block" />

        <div
          className={clsx(
            "flex",
            "flex-col",
            "items-center",
            "gap-10",
            "text-center",
            "sm:w-full",
            "sm:flex-row",
            "sm:items-start",
            "sm:justify-between",
            "sm:text-left",
          )}
        >
          <div
            className={clsx(
              "flex",
              "flex-col",
              "items-center",
              "gap-8",
              "sm:flex-row",
              "sm:items-start",
            )}
          >
            <div className="text-white/50 leading-[26px]">
              <span className="font-bold">Designo Central Office</span>
              <br />
              3886 Wellington Street
              <br />
              Toronto, Ontario M9C 3J5
            </div>

            <div className="text-white/50 leading-[26px]">
              <span className="font-bold">Contact Us (Central Office)</span>
              <br />
              P : +1 253-863-8967
              <br />
              M : contact@designo.co
            </div>
          </div>

          <ul className="flex gap-4">
            {socialLinks.map(({ name, icon }) => (
              <li key={name}>
                <a href="/" aria-label={name} className="hover:opacity-70">
                  <img src={icon} alt="" width="24" height="24" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
};

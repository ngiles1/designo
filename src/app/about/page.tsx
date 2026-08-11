import clsx from "clsx";

export default function About() {
  return (
    <div>
      <section
        className={clsx(
          "flex",
          "flex-col",
          "lg:flex-row-reverse",
          "mb-18",
          "sm:rounded-2xl",
          "overflow-hidden",
        )}
      >
        <img
          src="/assets/about/mobile/image-about-hero.jpg"
          alt=""
          className="w-full h-80 object-cover sm:hidden"
        />
        <img
          src="/assets/about/tablet/image-about-hero.jpg"
          alt=""
          className="hidden w-full h-80 object-cover sm:block lg:hidden"
        />
        <img
          src="/assets/about/desktop/image-about-hero.jpg"
          alt=""
          className="hidden lg:block lg:w-1/2 h-auto object-cover"
        />

        <div
          className={clsx(
            "text-white",
            "text-center",
            "lg:text-left",
            "bg-peach",
            "flex",
            "items-center",
            "justify-center",
            "lg:justify-start",
            "lg:w-1/2",
            "p-16",
            "relative",
            "overflow-hidden",
          )}
        >
          <img
            src="/assets/about/mobile/bg-pattern-hero-about-mobile.svg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover lg:hidden"
          />
          <img
            src="/assets/about/desktop/bg-pattern-hero-about-desktop.svg"
            alt=""
            className="hidden lg:block absolute inset-0 w-full h-full object-cover"
          />
          <div className="z-1">
            <h1
              className={clsx(
                "font-medium",
                "text-[2.5rem]",
                "leading-[1]",
                "mb-6",
              )}
            >
              About Us
            </h1>
            <p className="leading-[1.625] max-w-[28rem]">
              Founded in 2010, we are a creative agency that produces lasting
              results for our clients. We&apos;ve partnered with many
              startups, corporations, and nonprofits alike to craft designs
              that make real impact. We&apos;re always looking forward to
              creating brands, products, and digital experiences that connect
              with our clients&apos; audiences.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
};

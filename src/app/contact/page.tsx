import clsx from "clsx";
import TriItem from "@/app/_components/tri-item";
import LinkButton from "@/app/_components/link-button";
import { assetPath } from "@/lib/asset-path";

const fieldClasses = clsx(
  "w-full",
  "bg-transparent",
  "border-b",
  "border-white/40",
  "placeholder-white",
  "placeholder:opacity-70",
  "text-white",
  "py-3",
  "focus:outline-none",
  "focus:border-white",
  "transition-colors",
);

export default function Contact() {
  return (
    <div>
      <section
        className={clsx(
          "text-white",
          "bg-peach",
          "sm:rounded-2xl",
          "overflow-hidden",
          "relative",
          "px-4",
          "py-16",
          "sm:p-16",
          "mb-18",
        )}
      >
        <picture>
          <source
            media="(min-width: 640px)"
            srcSet={assetPath("/assets/contact/desktop/bg-pattern-hero-desktop.svg")}
          />
          <img
            src={assetPath("/assets/contact/mobile/bg-pattern-hero-contact-mobile.svg")}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
        </picture>

        <div
          className={clsx(
            "relative",
            "z-1",
            "flex",
            "flex-col",
            "lg:flex-row",
            "lg:items-center",
            "gap-12",
            "text-center",
            "sm:text-left",
          )}
        >
          <div className="lg:w-1/2">
            <h1
              className={clsx(
                "font-medium",
                "text-[2rem]",
                "leading-[1.125]",
                "sm:text-[2.5rem]",
                "sm:leading-[1]",
                "mb-6",
              )}
            >
              Contact Us
            </h1>
            <p className="leading-[1.625] max-w-[28rem] mx-auto sm:mx-0">
              Ready to take it to the next level? Let&apos;s talk about your
              project or idea and find out how we can help your business
              grow. If you are looking for unique digital experiences
              that&apos;s relatable to your users, drop us a line.
            </p>
          </div>

          <form className="lg:w-1/2 flex flex-col gap-6 text-left">
            <input
              type="text"
              name="name"
              placeholder="Name"
              aria-label="Name"
              className={fieldClasses}
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              aria-label="Email Address"
              className={fieldClasses}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              aria-label="Phone"
              className={fieldClasses}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              aria-label="Your Message"
              rows={1}
              className={clsx(fieldClasses, "resize-none")}
            />

            <div className="flex justify-center sm:justify-end mt-2">
              <button
                type="submit"
                className={clsx(
                  "inline-block",
                  "rounded-lg",
                  "px-8",
                  "py-4",
                  "uppercase",
                  "text-[.9375rem]",
                  "tracking-[1px]",
                  "font-medium",
                  "bg-white",
                  "text-black",
                  "transition-colors",
                  "hover:bg-light-peach",
                  "hover:text-white",
                  "cursor-pointer"
                )}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>

      <section
        className={clsx(
          "flex",
          "flex-col",
          "gap-8",
          "lg:grid",
          "lg:grid-cols-3",
          "max-sm:px-2",
          "mb-18",
        )}
      >
        <TriItem
          bgRot={0}
          image={assetPath("/assets/shared/desktop/illustration-canada.svg")}
          title="Canada"
        >
          <LinkButton href="/locations" variant="peach">
            See location
          </LinkButton>
        </TriItem>

        <TriItem
          bgRot={270}
          image={assetPath("/assets/shared/desktop/illustration-australia.svg")}
          title="Australia"
        >
          <LinkButton href="/locations" variant="peach">
            See location
          </LinkButton>
        </TriItem>

        <TriItem
          bgRot={90}
          image={assetPath("/assets/shared/desktop/illustration-united-kingdom.svg")}
          title="United Kingdom"
        >
          <LinkButton href="/locations" variant="peach">
            See location
          </LinkButton>
        </TriItem>
      </section>
    </div>
  )
};

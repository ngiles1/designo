import Image from "next/image";
import clsx from "clsx";
import LinkButton from "./link-button";

export default function CtaBanner() {
  return (
    <section className="max-sm:px-2 relative -mb-24">
      <div
        className={clsx(
          "text-white",
          "text-center",
          "lg:text-left",
          "bg-peach",
          "flex",
          "flex-col",
          "items-center",
          "lg:flex-row",
          "lg:items-center",
          "lg:justify-between",
          "gap-8",
          "px-4",
          "py-16",
          "sm:p-16",
          "rounded-2xl",
          "relative",
          "overflow-hidden",
        )}
      >
        <Image
          src={"/assets/shared/desktop/bg-pattern-call-to-action.svg"}
          alt=""
          fill
          className="object-cover -z-1"
        />
        <div>
          <div
            className={clsx(
              "font-medium",
              "text-[2rem]",
              "sm:text-[2.5rem]",
              "leading-[1]",
              "max-w-[16.75rem]",
              "mx-auto",
              "lg:mx-0",
              "mb-6",
            )}
          >
            Let&apos;s talk about your project
          </div>
          <div className="max-w-[18.25rem] mx-auto lg:mx-0">
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </div>
        </div>

        <LinkButton href="/contact">Get in touch</LinkButton>
      </div>
    </section>
  );
}

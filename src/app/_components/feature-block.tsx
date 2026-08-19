import type { ReactNode } from "react";
import Image from "next/image";
import clsx from "clsx";

type FeatureBlockProps = {
  section: string;
  imageName: string;
  title: string;
  reverse?: boolean;
  children: ReactNode;
};

export default function FeatureBlock({
  section,
  imageName,
  title,
  reverse = false,
  children,
}: FeatureBlockProps) {
  return (
    <section
      className={clsx(
        "flex",
        "flex-col",
        reverse ? "lg:flex-row-reverse" : "lg:flex-row",
        "mb-18",
        "sm:rounded-2xl",
        "overflow-hidden",
      )}
    >
      <picture className="contents">
        <source
          media="(min-width: 1024px)"
          srcSet={`/assets/${section}/desktop/${imageName}`}
        />
        <source
          media="(min-width: 640px)"
          srcSet={`/assets/${section}/tablet/${imageName}`}
        />
        <img
          src={`/assets/${section}/mobile/${imageName}`}
          alt=""
          className="w-full h-80 object-cover lg:w-1/2 lg:h-auto"
        />
      </picture>

      <div
        className={clsx(
          "flex",
          "items-center",
          "lg:w-1/2",
          "bg-pale-peach",
          "p-16",
          "relative",
          "overflow-hidden",
        )}
      >
        <Image
          src={"/assets/shared/desktop/bg-pattern-two-circles.svg"}
          alt=""
          width={584}
          height={292}
          className={clsx("absolute", "bottom-0", reverse ? "left-0" : "right-0")}
        />
        <div className="z-1">
          <h2
            className={clsx(
              "text-peach",
              "font-medium",
              "text-[2rem]",
              "leading-[1.1]",
              "mb-6",
            )}
          >
            {title}
          </h2>
          <div className="text-dark-grey leading-[1.625] space-y-6">
            {children}
          </div>
        </div>
      </div>
    </section>
  )
};

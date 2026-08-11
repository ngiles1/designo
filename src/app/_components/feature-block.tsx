import type { ReactNode } from "react";
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
      <img
        src={`/assets/${section}/mobile/${imageName}`}
        alt=""
        className="w-full h-80 object-cover sm:hidden"
      />
      <img
        src={`/assets/${section}/tablet/${imageName}`}
        alt=""
        className="hidden w-full h-80 object-cover sm:block lg:hidden"
      />
      <img
        src={`/assets/${section}/desktop/${imageName}`}
        alt=""
        className="hidden lg:block lg:w-1/2 h-auto object-cover"
      />

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
        <img
          src="/assets/shared/desktop/bg-pattern-two-circles.svg"
          alt=""
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

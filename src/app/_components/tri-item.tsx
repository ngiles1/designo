import type { ReactNode } from "react";
import clsx from "clsx";

type TriItemProps = {
  bgRot?: number;
  image: string;
  title?: string;
  children?: ReactNode;
};

export default function TriItem({ bgRot = 0, image, title, children }: TriItemProps) {
  return (
    <div className="text-center">
      <div className="flex justify-center mb-8">
        <div className="relative">
          <img
            src="/assets/shared/desktop/bg-pattern-small-circle.svg"
            alt=""
            style={{ transform: `rotate(${bgRot}deg)` }}
          />
          <img src={image} className="absolute top-0"/>
        </div>
      </div>
      {title && (
        <div
          className={clsx(
            "text-dark-grey",
            "font-medium",
            "uppercase",
            "text-[1.25rem]",
            "tracking-[5px]",
            "leading-[1.3]",
            "mb-6",
          )}
        >
          {title}
        </div>
      )}
      {children && <div>{children}</div>}
    </div>
  )
};

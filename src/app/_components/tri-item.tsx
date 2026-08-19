import type { ReactNode } from "react";
import Image from "next/image";
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
          <Image
            src={"/assets/shared/desktop/bg-pattern-small-circle.svg"}
            alt=""
            width={202}
            height={202}
            style={{ transform: `rotate(${bgRot}deg)` }}
          />
          <Image src={image} alt="" width={202} height={202} className="absolute top-0" />
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

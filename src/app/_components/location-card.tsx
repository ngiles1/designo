import Image from "next/image";
import clsx from "clsx";
import { assetPath } from "@/lib/asset-path";

type LocationCardProps = {
  reverse?: boolean;
  desktopMap: string;
  tabletMap: string;
  country: string;
  officeName: string;
  addressLines: [string, string];
  phone: string;
  email: string;
};

export default function LocationCard({
  reverse = false,
  desktopMap,
  tabletMap,
  country,
  officeName,
  addressLines,
  phone,
  email,
}: LocationCardProps) {
  return (
    <section
      className={clsx(
        "flex",
        "flex-col",
        "gap-0",
        "sm:gap-8",
        reverse ? "lg:flex-row-reverse" : "lg:flex-row",
      )}
    >
      <picture>
        <source
          media="(min-width: 1024px)"
          srcSet={assetPath(`/assets/locations/desktop/${desktopMap}`)}
        />
        <img
          src={assetPath(`/assets/locations/tablet/${tabletMap}`)}
          alt=""
          className="w-full h-80 object-cover sm:rounded-2xl lg:w-[350px] lg:h-[326px] lg:max-w-[350px] lg:max-h-[326px]"
        />
      </picture>

      <div
        className={clsx(
          "flex",
          "items-center",
          "lg:flex-1",
          "bg-pale-peach",
          "p-8",
          "sm:p-16",
          "sm:rounded-2xl",
          "relative",
          "overflow-hidden",
        )}
      >
        <Image
          src={assetPath("/assets/shared/desktop/bg-pattern-two-circles.svg")}
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
            {country}
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-16">
            <div className="text-dark-grey leading-[1.625]">
              <div className="font-medium mb-1">{officeName}</div>
              <div>{addressLines[0]}</div>
              <div>{addressLines[1]}</div>
            </div>
            <div className="text-dark-grey leading-[1.625]">
              <div className="font-medium mb-1">Contact</div>
              <div>P : {phone}</div>
              <div>M : {email}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

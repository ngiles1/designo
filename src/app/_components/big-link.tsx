import Link from "next/link";
import clsx from "clsx";

type BigLinkProps = {
  image: string;
  title: string;
  href: string;
};

export default function BigLink({ image, title, href }: BigLinkProps) {
  return (
    <Link
      href="/"
      className={clsx(
        "text-white",
        "text-center",
        "flex",
        "items-center",
        "justify-center",
        "h-full",
        "py-32",
        "rounded-2xl",
        "relative",
        "overflow-hidden",
      )}
    >
      <img
        src={image}
        className="brightness-50 w-full h-full object-cover absolute -z-1"
      />
      <div>
        <div
          className={clsx(
            "uppercase",
            "font-medium",
            "text-[2.5rem]",
            "tracking-[2px]",
            "leading-[1.2]",
            "mb-6",
          )}
        >
          {title}
        </div>

        <div className="uppercase font-medium text-[15px] tracking-[5px]">
          View projects
        </div>
      </div>
    </Link>
  )
};

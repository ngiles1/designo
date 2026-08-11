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
      href={href}
      className={clsx(
        "group",
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
        alt=""
        className="w-full h-full object-cover absolute -z-2"
      />
      <div
        className={clsx(
          "absolute",
          "inset-0",
          "-z-1",
          "bg-black/50",
          "transition-colors",
          "group-hover:bg-peach/70",
        )}
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

        <div
          className={clsx(
            "uppercase",
            "font-medium",
            "text-[15px]",
            "tracking-[5px]",
            "flex",
            "items-center",
            "justify-center",
            "gap-3",
          )}
        >
          View projects
          <img src="/assets/shared/desktop/icon-right-arrow.svg" alt="" />
        </div>
      </div>
    </Link>
  )
};

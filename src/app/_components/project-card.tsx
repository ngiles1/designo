import clsx from "clsx";

type ProjectCardProps = {
  image: string;
  title: string;
  description: string;
};

export default function ProjectCard({ image, title, description }: ProjectCardProps) {
  return (
    <div className="rounded-2xl overflow-hidden">
      <img src={image} alt="" className="w-full h-auto" />
      <div className="text-center bg-pale-peach h-full px-8 py-10">
        <div
          className={clsx(
            "text-peach",
            "font-medium",
            "uppercase",
            "text-[1.25rem]",
            "tracking-[5px]",
            "leading-[1.3]",
            "mb-4",
          )}
        >
          {title}
        </div>
        <p className="text-dark-grey leading-[1.625]">
          {description}
        </p>
      </div>
    </div>
  )
};

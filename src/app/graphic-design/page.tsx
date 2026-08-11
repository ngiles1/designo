import clsx from "clsx";
import ProjectCard from "@/app/_components/project-card";

const projects = [
  {
    image: "/assets/graphic-design/desktop/image-change.jpg",
    title: "Tim Brown",
    description: "A book cover designed for Tim Brown's new release, 'Change'",
  },
  {
    image: "/assets/graphic-design/desktop/image-boxed-water.jpg",
    title: "Boxed Water",
    description: "A simple packaging concept made for Boxed Water",
  },
  {
    image: "/assets/graphic-design/desktop/image-science.jpg",
    title: "Science!",
    description: "A poster made in collaboration with the Federal Art Project",
  },
];

export default function GraphicDesign() {
  return (
    <div>
      <section
        className={clsx(
          "text-white",
          "text-center",
          "bg-peach",
          "flex",
          "flex-col",
          "items-center",
          "justify-center",
          "p-16",
          "mb-18",
          "sm:rounded-2xl",
          "overflow-hidden",
          "relative",
        )}
      >
        <img
          src="/assets/graphic-design/desktop/bg-pattern-intro-graphic.svg"
          alt=""
          className={clsx(
            "absolute",
            "inset-0",
            "w-full",
            "h-full",
            "object-cover",
          )}
        />
        <div className="z-1">
          <h1
            className={clsx(
              "font-medium",
              "text-[2.5rem]",
              "leading-[1]",
              "mb-6",
            )}
          >
            Graphic Design
          </h1>
          <p className="leading-[1.625] max-w-[28rem]">
            We deliver eye-catching branding materials that are tailored to
            meet your business objectives.
          </p>
        </div>
      </section>

      <section
        className={clsx(
          "grid",
          "grid-cols-1",
          "sm:grid-cols-2",
          "lg:grid-cols-3",
          "gap-8",
          "max-sm:px-2",
          "mb-18",
        )}
      >
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </section>
    </div>
  );
};

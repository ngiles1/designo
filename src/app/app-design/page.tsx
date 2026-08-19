import Image from "next/image";
import clsx from "clsx";
import ProjectCard from "@/app/_components/project-card";
import BigLink from "@/app/_components/big-link";
import CtaBanner from "@/app/_components/cta-banner";

const projects = [
  {
    image: "/assets/app-design/desktop/image-airfilter.jpg",
    title: "Airfilter",
    description: "Solving the problem of poor indoor air quality by filtering the air",
  },
  {
    image: "/assets/app-design/desktop/image-eyecam.jpg",
    title: "Eyecam",
    description: "Product that lets you edit your favorite photos and videos at any time",
  },
  {
    image: "/assets/app-design/desktop/image-faceit.jpg",
    title: "Faceit",
    description: "Get to meet your favorite internet superstar with the faceit app",
  },
  {
    image: "/assets/app-design/desktop/image-todo.jpg",
    title: "Todo",
    description: "A todo app that features cloud sync with light and dark mode",
  },
  {
    image: "/assets/app-design/desktop/image-loopstudios.jpg",
    title: "Loopstudios",
    description: "A VR experience app made for Loopstudios",
  },
];

export default function AppDesign() {
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
          "px-4",
          "py-16",
          "sm:p-16",
          "mb-18",
          "sm:rounded-2xl",
          "overflow-hidden",
          "relative",
        )}
      >
        <Image
          src={"/assets/app-design/desktop/bg-pattern-intro-app.svg"}
          alt=""
          fill
          className="object-cover"
        />
        <div className="z-1">
          <h1
            className={clsx(
              "font-medium",
              "text-[2rem]",
              "leading-[1.125]",
              "sm:text-[2.5rem]",
              "sm:leading-[1]",
              "mb-6",
            )}
          >
            App Design
          </h1>
          <p className="leading-[1.625] max-w-[28rem]">
            Our mobile designs bring intuitive digital solutions to your
            customers right at their fingertips.
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
          <ProjectCard key={project.title} {...project} image={project.image} />
        ))}
      </section>

      <section
        className={clsx(
          "grid",
          "grid-cols-1",
          "sm:grid-cols-2",
          "gap-8",
          "max-sm:px-2",
          "mb-18",
        )}
      >
        <BigLink
          image={"/assets/home/desktop/image-web-design-small.jpg"}
          title="Web Design"
          href="/web-design"
        />
        <BigLink
          image={"/assets/home/desktop/image-graphic-design.jpg"}
          title="Graphic Design"
          href="/graphic-design"
        />
      </section>

      <CtaBanner />
    </div>
  );
};

import clsx from "clsx";
import ProjectCard from "@/app/_components/project-card";

const projects = [
  {
    image: "/assets/web-design/desktop/image-express.jpg",
    title: "Express",
    description: "A multi-carrier shipping website for ecommerce businesses",
  },
  {
    image: "/assets/web-design/desktop/image-transfer.jpg",
    title: "Transfer",
    description: "Site for low-cost money transfers and sending money within seconds",
  },
  {
    image: "/assets/web-design/desktop/image-photon.jpg",
    title: "Photon",
    description: "A state-of-the-art music player with high-resolution audio and DSP effects",
  },
  {
    image: "/assets/web-design/desktop/image-builder.jpg",
    title: "Builder",
    description: "Connects users with local contractors based on their location",
  },
  {
    image: "/assets/web-design/desktop/image-blogr.jpg",
    title: "Blogr",
    description: "Blogr is a platform for creating an online blog or publication",
  },
  {
    image: "/assets/web-design/desktop/image-camp.jpg",
    title: "Camp",
    description: "Get expert training in coding, data, design, and digital marketing",
  },
];

export default function WebDesign() {
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
          src="/assets/web-design/desktop/bg-pattern-intro-web.svg"
          alt=""
          className={clsx(
            "absolute",
            "inset-0",
            "w-full",
            "h-full",
            "object-cover"
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
            Web Design
          </h1>
          <p className="leading-[1.625] max-w-[28rem]">
            We build websites that serve as powerful marketing tools and bring
            memorable brand experiences.
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

import Image from "next/image";
import clsx from "clsx";
import TriItem from "@/app/_components/tri-item";
import BigLink from "./_components/big-link";
import LinkButton from "./_components/link-button";
import CtaBanner from "./_components/cta-banner";

export default function Home() {
  return (
    <div>
      <section className={clsx(
        "text-white",
        "bg-peach",
        "flex",
        "flex-col",
        "lg:flex-row",
        "justify-center",
        "lg:justify-start",
        "items-center",
        "lg:h-156",
        "px-4",
        "py-16",
        "sm:p-16",
        "mb-18",
        "sm:rounded-2xl",
        "overflow-hidden",
        "relative"
      )}>
        <div className="text-center lg:text-left z-1">
          <h1
            className={clsx(
              "font-medium",
              "text-[2rem]",
              "leading-[1.125]",
              "sm:text-[3rem]",
              "sm:leading-[1]",
              "max-w-[33.75rem]",
              "mb-4",
            )}
          >
            Award-winning custom designs and digital branding solutions
          </h1>
          <p className="leading-[1.625] max-w-[28rem] max-lg:mx-auto mb-4">
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design and engaging brand
            experiences. Find out more about our services.
          </p>
          <LinkButton href="/">Learn more</LinkButton>
        </div>
        <img
          src="/assets/home/desktop/bg-pattern-hero-home.svg"
          width="496"
          height="495"
          alt=""
          className={clsx(
            "absolute",
            "-right-42",
            "sm:-right-12",
            "lg:w-192",
            "lg:right-0",
            "lg:top-12"
          )}
        />
        <img
          src="/assets/home/desktop/image-hero-phone.png"
          width="624"
          height="913"
          alt="Phone"
          className={clsx(
            "w-[360px]",
            "sm:w-[720px]",
            "min-w-[360px]",
            "lg:absolute",
            "lg:bottom-0",
            "lg:left-1/2",
            "lg:-translate-x-24",
            "lg:top-0",
            "lg:right-0",
            "-mt-12",
            "-mb-64",
            "sm:-mb-92",
            "pointer-events-none"
          )}
        />
      </section>

      <section
        className={clsx(
          "flex",
          "flex-col",
          "gap-8",
          "lg:grid",
          "lg:grid-cols-2",
          "max-sm:px-2",
          "mb-18",
        )}
      >
        <div className="lg:col-span-1">
          <BigLink
            image="/assets/home/desktop/image-web-design-large.jpg"
            title="Web Design" href="/web-design"
          />
        </div>

        <div className="flex flex-col gap-8 lg:col-span-1">
          <div>
            <BigLink
              image="/assets/home/desktop/image-app-design.jpg"
              title="App Design" href="/app-design"
            />
          </div>

          <div>
            <BigLink
              image="/assets/home/desktop/image-graphic-design.jpg"
              title="Graphic Design" href="/graphic-design"
            />
          </div>
        </div>
      </section>

      <section
        className={clsx(
          "flex",
          "flex-col",
          "gap-8",
          "lg:grid",
          "lg:grid-cols-3",
          "max-sm:px-2",
          "mb-12",
        )}
      >
        <div className="lg:col-span-1">
          <TriItem
            bgRot={0}
            image="/assets/home/desktop/illustration-passionate.svg"
            title="Passionate"
          >
            <p className="text-dark-grey leading-[1.625]">
              Each project starts with an in-depth brand research to ensure we
              only create products that serve a purpose. We merge art, design,
              and technology into exciting new solutions.
            </p>
          </TriItem>
        </div>

        <div className="lg:col-span-1">
          <TriItem
            bgRot={270}
            image="/assets/home/desktop/illustration-resourceful.svg"
            title="Resourceful"
          >
            <p className="text-dark-grey leading-[1.625]">
              Everything that we do has a strategic purpose. We use an agile
              approach in all of our projects and value customer collaboration.
              It guarantees superior results that fulfill our clients’ needs.
            </p>
          </TriItem>
        </div>

        <div className="lg:col-span-1">
          <TriItem
            bgRot={90}
            image="/assets/home/desktop/illustration-friendly.svg"
            title="Friendly"
          >
            <p className="text-dark-grey leading-[1.625]">
              Each project starts with an in-depth brand research to ensure we
              only create products that serve a purpose. We merge art, design
              and technology into exciting new solutions.
            </p>
          </TriItem>
        </div>
      </section>
      
      <CtaBanner />
    </div>
  );
}

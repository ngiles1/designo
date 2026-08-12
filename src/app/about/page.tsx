import clsx from "clsx";
import FeatureBlock from "@/app/_components/feature-block";
import TriItem from "@/app/_components/tri-item";
import LinkButton from "@/app/_components/link-button";
import CtaBanner from "@/app/_components/cta-banner";
import { assetPath } from "@/lib/asset-path";

export default function About() {
  return (
    <div>
      <section
        className={clsx(
          "flex",
          "flex-col",
          "lg:flex-row-reverse",
          "mb-18",
          "sm:rounded-2xl",
          "overflow-hidden",
        )}
      >
        <picture className="contents">
          <source
            media="(min-width: 1024px)"
            srcSet={assetPath("/assets/about/desktop/image-about-hero.jpg")}
          />
          <source
            media="(min-width: 640px)"
            srcSet={assetPath("/assets/about/tablet/image-about-hero.jpg")}
          />
          <img
            src={assetPath("/assets/about/mobile/image-about-hero.jpg")}
            alt=""
            className="w-full h-80 object-cover lg:w-1/2 lg:h-auto"
          />
        </picture>

        <div
          className={clsx(
            "text-white",
            "text-center",
            "lg:text-left",
            "bg-peach",
            "flex",
            "items-center",
            "justify-center",
            "lg:justify-start",
            "lg:w-1/2",
            "px-4",
            "py-16",
            "sm:p-16",
            "relative",
            "overflow-hidden",
          )}
        >
          <picture className="contents">
            <source
              media="(min-width: 1024px)"
              srcSet={assetPath("/assets/about/desktop/bg-pattern-hero-about-desktop.svg")}
            />
            <img
              src={assetPath("/assets/about/mobile/bg-pattern-hero-about-mobile.svg")}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
          </picture>
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
              About Us
            </h1>
            <p className="leading-[1.625] max-w-[28rem]">
              Founded in 2010, we are a creative agency that produces lasting
              results for our clients. We&apos;ve partnered with many
              startups, corporations, and nonprofits alike to craft designs
              that make real impact. We&apos;re always looking forward to
              creating brands, products, and digital experiences that connect
              with our clients&apos; audiences.
            </p>
          </div>
        </div>
      </section>

      <FeatureBlock
        section="about"
        imageName="image-world-class-talent.jpg"
        title="World-class talent"
      >
        <p>
          We are a crew of strategists, problem-solvers, and technologists.
          Every design is thoughtfully crafted from concept to launch,
          ensuring success in its given market. We are constantly updating
          our skills in a myriad of platforms.
        </p>
        <p>
          Our team is multi-disciplinary and we are not merely interested in
          form — content and meaning are just as important. We give great
          importance to craftsmanship, service, and prompt delivery. Clients
          have always been impressed with our high-quality outcomes that
          encapsulates their brand&apos;s story and mission.
        </p>
      </FeatureBlock>

      <section
        className={clsx(
          "flex",
          "flex-col",
          "gap-8",
          "lg:grid",
          "lg:grid-cols-3",
          "max-sm:px-2",
          "mb-18",
        )}
      >
        <TriItem
          bgRot={0}
          image={assetPath("/assets/shared/desktop/illustration-canada.svg")}
          title="Canada"
        >
          <LinkButton href="/locations" variant="peach">
            See location
          </LinkButton>
        </TriItem>

        <TriItem
          bgRot={270}
          image={assetPath("/assets/shared/desktop/illustration-australia.svg")}
          title="Australia"
        >
          <LinkButton href="/locations" variant="peach">
            See location
          </LinkButton>
        </TriItem>

        <TriItem
          bgRot={90}
          image={assetPath("/assets/shared/desktop/illustration-united-kingdom.svg")}
          title="United Kingdom"
        >
          <LinkButton href="/locations" variant="peach">
            See location
          </LinkButton>
        </TriItem>
      </section>

      <FeatureBlock
        section="about"
        imageName="image-real-deal.jpg"
        title="The real deal"
        reverse
      >
        <p>
          As strategic partners in our clients&apos; businesses, we are ready
          to take on any challenge as our own. Solving real problems require
          empathy and collaboration, and we strive to bring a fresh
          perspective to every opportunity. We make design and technology
          more accessible and give you tools to measure success.
        </p>
        <p>
          We are visual storytellers in appealing and captivating ways. By
          combining business and marketing strategies, we inspire audiences
          to take action and drive real results.
        </p>
      </FeatureBlock>

      <CtaBanner />
    </div>
  )
};

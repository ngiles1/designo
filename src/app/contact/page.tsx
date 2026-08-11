import clsx from "clsx";
import TriItem from "@/app/_components/tri-item";
import LinkButton from "@/app/_components/link-button";

export default function Contact() {
  return (
    <div>
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
          image="/assets/shared/desktop/illustration-canada.svg"
          title="Canada"
        >
          <LinkButton href="/locations" variant="peach">
            See location
          </LinkButton>
        </TriItem>

        <TriItem
          bgRot={270}
          image="/assets/shared/desktop/illustration-australia.svg"
          title="Australia"
        >
          <LinkButton href="/locations" variant="peach">
            See location
          </LinkButton>
        </TriItem>

        <TriItem
          bgRot={90}
          image="/assets/shared/desktop/illustration-united-kingdom.svg"
          title="United Kingdom"
        >
          <LinkButton href="/locations" variant="peach">
            See location
          </LinkButton>
        </TriItem>
      </section>
    </div>
  )
};

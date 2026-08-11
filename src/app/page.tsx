import Image from "next/image";
import Link from "next/link";
import TriItem from "@/app/_components/tri-item";
import BigLink from "./_components/big-link";

export default function Home() {
  return (
    <div>
      <section className="text-white bg-peach sm:rounded-2xl p-16 mb-18">
        <h1 className="font-medium text-[3rem] leading-[1] max-w-[33.75rem] mb-4">
          Award-winning custom designs and digital branding solutions
        </h1>
        <p className="leading-[1.625] max-w-[28rem] mb-4">
          With over 10 years in the industry, we are experienced in creating
          fuly responsive websites, app design and engaging brand experiences.
          Find out more about our services.
        </p>
        <Link href="/">Learn more</Link>
      </section>

      <section className="grid grid-cols-2 gap-8 max-sm:px-2 mb-18">
        <div className="col-span-1">
          <BigLink
            image="/assets/home/desktop/image-web-design-large.jpg"
            title="Web Design" href="/"
          />
        </div>
        
        <div className="col-span-1 flex flex-col gap-8">
          <div>
            <BigLink
              image="/assets/home/desktop/image-app-design.jpg"
              title="App Design" href="/"
            />
          </div>

          <div>
            <BigLink
              image="/assets/home/desktop/image-graphic-design.jpg"
              title="Graphic Design" href="/"
            />
          </div>
        </div>
      </section>

      <section className="grid grid-cols-3 gap-8 max-sm:px-2 mb-12">
        <div className="col-span-1">
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

        <div className="col-span-1">
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

        <div className="col-span-1">
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
      
      <section className="max-sm:px-2">
        <div className="text-white bg-peach flex items-center justify-between p-16 rounded-2xl">
          <div>
            <div className="font-medium text-[2.5rem] leading-[1] max-w-[16.75rem] mb-6">
              Let's talk about your project
            </div>
            <div className="max-w-[18.25rem]">
              Ready to take it to the next level? Contact us today and find out
              how our expertise can help your business grow.
            </div>
          </div>

          <Link href="/">Get in touch</Link>
        </div>
      </section>
    </div>
  );
}

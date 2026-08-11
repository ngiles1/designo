import clsx from "clsx";

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
          "p-16",
          "mb-18",
          "sm:rounded-2xl",
          "overflow-hidden",
          "relative",
        )}
      >
        <img
          src="/assets/app-design/desktop/bg-pattern-intro-app.svg"
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
            App Design
          </h1>
          <p className="leading-[1.625] max-w-[28rem]">
            Our mobile designs bring intuitive digital solutions to your
            customers right at their fingertips.
          </p>
        </div>
      </section>
    </div>
  );
};

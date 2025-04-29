import React from "react";

const ChooseProduct = () => {
  return (
    <section className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full">
      {/* Grid */}
      <div className="lg:grid lg:grid-cols-12 lg:items-center lg:gap-16">
        {/* Image */}
        <div className="lg:col-span-7">
          <img
            src="https://screwfast.uk/_astro/features-image.BEGIe8fA_Z1QXS5J.webp"
            alt="Mockup of floating boxes"
            width="4375"
            height="2369"
            loading="lazy"
            decoding="async"
            className="rounded-xl"
          />
        </div>

        {/* Text content */}
        <div className="mt-5 sm:mt-10 lg:col-span-5 lg:mt-0">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-2 md:space-y-4">
              <h2 className="text-balance text-3xl font-bold text-neutral-800 dark:text-neutral-200 lg:text-4xl">
                Why Choose ScrewFast?
              </h2>
              <p className="text-pretty text-neutral-600 dark:text-neutral-400">
                Transform your ideas into tangible results with ScrewFast tools.
                Whether you're starting with a sketch on a napkin or diving into
                a comprehensive construction project, our tools are engineered
                to help you build with confidence.
              </p>
            </div>

            <ul className="space-y-2 sm:space-y-4">
              {[
                "Robust and reliable tools for long-lasting performance.",
                "Innovative solutions tailored to modern construction needs.",
                "Customer support dedicated to your project's success.",
              ].map((text, index) => (
                <li className="flex space-x-3" key={index}>
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="mt-0.5 h-6 w-6 text-orange-400 dark:text-orange-300 flex-none"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15L15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0Z"
                    />
                  </svg>
                  <span className="text-pretty text-base font-medium text-neutral-600 dark:text-neutral-400">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseProduct;

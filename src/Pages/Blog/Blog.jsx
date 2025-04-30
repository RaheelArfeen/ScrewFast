import React, { useEffect } from "react";


const Blog = () => {
  useEffect(() => {
      window.scrollTo(0, 0);
    })
  return (
    <main className="px-2">
      <section className="mx-auto max-w-[85rem] space-y-8 px-4 pt-16 sm:px-6 lg:px-8 2xl:max-w-full">
        <div className="mx-auto max-w-3xl text-left sm:text-center">
          <h1 className="block text-balance text-4xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200 md:text-5xl lg:text-6xl">
            Your Gateway to Construction Excellence
          </h1>
          <p className="mt-4 text-pretty text-lg text-neutral-600 dark:text-neutral-400">
            Explore the latest news, tips, and insights from ScrewFast to
            enhance your construction projects. From product spotlights to
            project management strategies, our blog is your go-to resource for
            all things hardware and construction.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full">
        <div className="grid gap-6 lg:grid-cols-2">
          <a className="group relative block rounded-xl outline-hidden ring-zinc-500 transition duration-500 focus-visible:ring-3 dark:ring-zinc-200 dark:focus:outline-hidden">
            <div className="relative h-[350px] w-full shrink-0 overflow-hidden rounded-xl before:absolute before:inset-x-0 before:z-1 before:size-full before:bg-linear-to-t before:from-neutral-900/[.7]">
              <img
                src="https://screwfast.uk/_astro/post-2.D_u0v5R3_1LPz0T.avif"
                alt="Man in black sweatpants using DEWALT circular saw and cutting a wood plank"
                draggable="false"
                loading="eager"
                width="1500"
                height="1000"
                decoding="async"
                className="absolute start-0 top-0 size-full object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-x-0 top-0 z-10">
              <div className="flex h-full flex-col p-4 sm:p-6">
                <div className="flex items-center">
                  <div className="shrink-0">
                    <img
                      src="https://screwfast.uk/_astro/brad.DxbZHamT_Z16wX1Q.avif"
                      alt="Avatar Description"
                      draggable="false"
                      width="320"
                      height="320"
                      loading="lazy"
                      decoding="async"
                      className="size-[46px] rounded-full border-2 border-neutral-50"
                    />
                  </div>
                  <div className="ms-2.5 sm:ms-4">
                    <h4 className="font-bold text-neutral-50">Brad</h4>
                    <p className="text-xs text-neutral-50/[.8]">Feb 10, 2024</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 z-10">
              <div className="flex h-full flex-col p-4 sm:p-6">
                <h3 className="text-balance text-lg font-bold text-neutral-50 group-hover:text-neutral-50/[.8] sm:text-3xl">
                  Enhancing Safety and Workmanship with ScrewFast Construction
                  Services
                </h3>
                <p className="mt-2 text-pretty text-neutral-50/[.8]">
                  Quality construction services for lasting results
                </p>
              </div>
            </div>
          </a>

          <a className="group relative block rounded-xl outline-hidden ring-zinc-500 transition duration-500 focus-visible:ring-3 dark:ring-zinc-200 dark:focus:outline-hidden">
            <div className="relative h-[350px] w-full shrink-0 overflow-hidden rounded-xl before:absolute before:inset-x-0 before:z-1 before:size-full before:bg-linear-to-t before:from-neutral-900/[.7]">
              <img
                src="https://screwfast.uk/_astro/post-1.BI8NM3Uo_Z28emr0.avif"
                alt="Top view mechanical tools arrangement"
                draggable="false"
                loading="eager"
                width="1500"
                height="1001"
                decoding="async"
                className="absolute start-0 top-0 size-full object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-x-0 top-0 z-10">
              <div className="flex h-full flex-col p-4 sm:p-6">
                <div className="flex items-center">
                  <div className="shrink-0">
                    <img
                      src="https://screwfast.uk/_astro/jacob.BfQgWSmi_OW6f2.avif"
                      alt="Avatar Description"
                      draggable="false"
                      width="320"
                      height="320"
                      loading="lazy"
                      decoding="async"
                      className="size-[46px] rounded-full border-2 border-neutral-50"
                    />
                  </div>
                  <div className="ms-2.5 sm:ms-4">
                    <h4 className="font-bold text-neutral-50">Jacob</h4>
                    <p className="text-xs text-neutral-50/[.8]">Feb 6, 2024</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 z-10">
              <div className="flex h-full flex-col p-4 sm:p-6">
                <h3 className="text-balance text-lg font-bold text-neutral-50 group-hover:text-neutral-50/[.8] sm:text-3xl">
                  Maximizing Efficiency with ScrewFast's Cutting-Edge Tools
                </h3>
                <p className="mt-2 text-pretty text-neutral-50/[.8]">
                  Innovating Construction Efficiency with Precision Tools &
                  Support
                </p>
              </div>
            </div>
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full">
        <div className="grid gap-8 sm:grid-cols-2 sm:items-center">
          <div className="sm:order-2">
            <div className="relative rounded-lg pt-[50%] sm:pt-[100%]">
              <img
                src="https://screwfast.uk/_astro/post-3.DBR9zkA__Z2luj0m.avif"
                alt="Side view worker wearing gloves"
                draggable="false"
                loading="eager"
                width="1920"
                height="1080"
                decoding="async"
                className="absolute start-0 top-0 size-full rounded-xl object-cover"
              />
            </div>
          </div>
          <div className="sm:order-1">
            <h2 className="text-balance text-2xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200 md:text-3xl lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight">
              <a className="outline-hidden ring-zinc-500 transition duration-300 hover:text-[#FA5A15] focus-visible:ring-3 dark:text-neutral-300 dark:ring-zinc-200 dark:hover:text-neutral-50 dark:focus:outline-hidden">
                Affordable, durable tools for efficient construction projects
              </a>
            </h2>
            <div className="mt-6 flex items-center sm:mt-10">
              <div className="shrink-0">
                <img
                  src="https://screwfast.uk/_astro/anna.DKqT6LjU_2gURK6.avif"
                  alt="Avatar Description"
                  draggable="false"
                  width="320"
                  height="320"
                  loading="lazy"
                  decoding="async"
                  className="size-10 rounded-full sm:h-14 sm:w-14"
                />
              </div>
              <div className="ms-3 sm:ms-4">
                <p className="font-bold text-neutral-800 dark:text-neutral-200 sm:mb-1">
                  Olga Zabegina
                </p>
                <p className="text-xs text-neutral-500">
                  Strategic Marketing Manager
                </p>
              </div>
            </div>
            <div className="mt-5">
              <a className="group inline-flex items-center justify-center gap-x-2 rounded-lg px-4 py-3 text-sm font-bold text-neutral-50 ring-zinc-500 transition duration-300 focus-visible:ring-3 outline-hidden border border-transparent bg-[#FA5A15] hover:bg-orange-500 active:bg-orange-500 dark:focus:outline-hidden disabled:pointer-events-none disabled:opacity-50 2xl:text-base dark:ring-zinc-200">
                Read More
                <svg
                  className="h-4 w-4 shrink-0 transition duration-300 group-hover:translate-x-1"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full">
        <div className="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
          <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 md:text-4xl md:leading-tight">
            Insights
          </h2>
          <p className="mt-1 text-pretty text-neutral-600 dark:text-neutral-400">
            Stay up-to-date with the latest trends and developments in the construction industry with insights from ScrewFast's team of industry experts.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <a className="group rounded-xl outline-hidden ring-zinc-500 transition duration-300 focus-visible:ring-3 dark:ring-zinc-200 dark:focus:outline-hidden">
            <div className="relative overflow-hidden rounded-xl pt-[50%] sm:pt-[70%]">
              <img
                src="https://screwfast.uk/_astro/insight-1.BPZxcJVp_VHoCp.avif"
                alt="Top view mechanical tools arrangement"
                draggable="false"
                width="1500"
                height="841"
                loading="lazy"
                decoding="async"
                className="absolute start-0 top-0 size-full rounded-xl object-cover transition duration-500 ease-in-out group-hover:scale-105"
              />
            </div>
            <div className="mt-7">
              <h3 className="text-xl font-bold text-neutral-800 group-hover:text-neutral-600 dark:text-neutral-200 dark:group-hover:text-neutral-400">
                The Future of Construction Technology
              </h3>
              <p className="mt-3 text-neutral-600 dark:text-neutral-400">
                Explore ScrewFast's pioneering role in revolutionizing construction through advanced technology and innovative solutions.
              </p>
              <p className="mt-5 inline-flex items-center gap-x-1 font-medium text-[#FA5A15] decoration-2 group-hover:underline dark:text-[#FB713B]">
                Read more
                <svg className="size-4 shrink-0" height="24" viewBox="0 0 24 24" width="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </p>
            </div>
          </a>

          <a className="group rounded-xl outline-hidden ring-zinc-500 transition duration-300 focus-visible:ring-3 dark:ring-zinc-200 dark:focus:outline-hidden">
            <div className="relative overflow-hidden rounded-xl pt-[50%] sm:pt-[70%]">
              <img
                src="https://screwfast.uk/_astro/insight-2.ePExg0Pg_Z2aiI9E.avif"
                alt="Top view mechanical tools arrangement"
                draggable="false"
                width="1920"
                height="1280"
                loading="lazy"
                decoding="async"
                className="absolute start-0 top-0 size-full rounded-xl object-cover transition duration-500 ease-in-out group-hover:scale-105"
              />
            </div>
            <div className="mt-7">
              <h3 className="text-xl font-bold text-neutral-800 group-hover:text-neutral-600 dark:text-neutral-200 dark:group-hover:text-neutral-400">
                The Importance of Collaboration
              </h3>
              <p className="mt-3 text-neutral-600 dark:text-neutral-400">
                Explore how collaboration is central to ScrewFast's construction approach, driving effective communication and teamwork to achieve outstanding outcomes.
              </p>
              <p className="mt-5 inline-flex items-center gap-x-1 font-medium text-[#FA5A15] decoration-2 group-hover:underline dark:text-[#FB713B]">
                Read more
                <svg className="size-4 shrink-0" height="24" viewBox="0 0 24 24" width="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </p>
            </div>
          </a>

          <a className="group rounded-xl outline-hidden ring-zinc-500 transition duration-300 focus-visible:ring-3 dark:ring-zinc-200 dark:focus:outline-hidden">
            <div className="relative overflow-hidden rounded-xl pt-[50%] sm:pt-[70%]">
              <img
                src="https://screwfast.uk/_astro/insight-3.CLIJrwtZ_MMbyK.avif"
                alt="Top view mechanical tools arrangement"
                draggable="false"
                width="1500"
                height="1000"
                loading="lazy"
                decoding="async"
                className="absolute start-0 top-0 size-full rounded-xl object-cover transition duration-500 ease-in-out group-hover:scale-105"
              />
            </div>
            <div className="mt-7">
              <h3 className="text-xl font-bold text-neutral-800 group-hover:text-neutral-600 dark:text-neutral-200 dark:group-hover:text-neutral-400">
                The Impact of Sustainable Practices
              </h3>
              <p className="mt-3 text-neutral-600 dark:text-neutral-400">
                Discover how ScrewFast is leading the charge in promoting sustainability within the construction industry
              </p>
              <p className="mt-5 inline-flex items-center gap-x-1 font-medium text-[#FA5A15] decoration-2 group-hover:underline dark:text-[#FB713B]">
                Read more
                <svg className="size-4 shrink-0" height="24" viewBox="0 0 24 24" width="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </p>
            </div>
          </a>
        </div>
      </section>
    </main>
  );
};

export default Blog;

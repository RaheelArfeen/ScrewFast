import React from "react";

const Customers = () => {
  return (
    <div>
      <section
        className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"
        id="testimonials"
      >
        <div className="mb-6 w-3/4 max-w-2xl sm:mb-10 md:mb-16 lg:w-1/2">
          <h2 className="text-balance text-2xl font-bold text-neutral-800 dark:text-neutral-200 sm:text-3xl lg:text-4xl">
            What Our Customers Say
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex h-auto">
            <div className="flex flex-col rounded-xl bg-neutral-50 dark:bg-neutral-700">
              <div className="flex-auto p-4 md:p-6">
                <p className="text-pretty text-base italic text-neutral-600 dark:text-neutral-300 md:text-lg">
                  "Since switching to ScrewFast's hardware tools, the efficiency
                  on our construction sites has skyrocketed. The durability of
                  the hex bolts and precision of the machine screws are simply
                  unmatched. It's refreshing to work with a company that truly
                  understands the daily demands of the industry."
                </p>
              </div>
              <div className="rounded-b-xl bg-neutral-300/30 p-4 dark:bg-neutral-900/30 md:px-7">
                <div className="flex items-center">
                  <div className="shrink-0">
                    <img
                      className="size-8 rounded-full sm:h-[2.875rem] sm:w-[2.875rem]"
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=1374&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=320&amp;h=320&amp;q=80"
                      alt="Image Description"
                      loading="lazy"
                    />
                  </div>
                  <div className="ms-3 grow">
                    <p className="text-sm font-bold text-neutral-800 dark:text-neutral-200 sm:text-base">
                      Jason Clark
                    </p>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400">
                      Site Foreman | TopBuild
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex h-auto">
            <div className="flex flex-col rounded-xl bg-neutral-50 dark:bg-neutral-700">
              <div className="flex-auto p-4 md:p-6">
                <p className="text-pretty text-base italic text-neutral-600 dark:text-neutral-300 md:text-lg">
                  "As an interior designer, I'm always looking for high-quality
                  materials and tools that help bring my visions to life.
                  ScrewFast's mixed screws assortment has been a game-changer
                  for my projects, providing the perfect blend of quality and
                  variety. The outstanding customer support was just the cherry
                  on top!"
                </p>
              </div>
              <div className="rounded-b-xl bg-neutral-300/30 p-4 dark:bg-neutral-900/30 md:px-7">
                <div className="flex items-center">
                  <div className="shrink-0">
                    <img
                      className="size-8 rounded-full sm:h-[2.875rem] sm:w-[2.875rem]"
                      src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=1376&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D8&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=320&amp;h=320&amp;q=80"
                      alt="Image Description"
                      loading="lazy"
                    />
                  </div>
                  <div className="ms-3 grow">
                    <p className="text-sm font-bold text-neutral-800 dark:text-neutral-200 sm:text-base">
                      Maria Gonzalez
                    </p>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400">
                      Interior Designer | Creative Spaces
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex h-auto">
            <div className="flex flex-col rounded-xl bg-neutral-50 dark:bg-neutral-700">
              <div className="flex-auto p-4 md:p-6">
                <p className="text-pretty text-base italic text-neutral-600 dark:text-neutral-300 md:text-lg">
                  "I’ve been a professional carpenter for over 15 years, and I
                  can sincerely say that ScrewFast’s tap bolts and nuts are some
                  of the best I've used. They grip like no other, and I have
                  full confidence in every joint and fixture. Plus, the service
                  is impeccable – they truly care about my project's success."
                </p>
              </div>
              <div className="rounded-b-xl bg-neutral-300/30 p-4 dark:bg-neutral-900/30 md:px-7">
                <div className="flex items-center">
                  <div className="shrink-0">
                    <img
                      className="size-8 rounded-full sm:h-[2.875rem] sm:w-[2.875rem]"
                      src="https://images.unsplash.com/photo-1474176857210-7287d38d27c6?q=80&amp;w=1470&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D8&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=320&amp;h=320&amp;q=80"
                      alt="Image Description"
                      loading="lazy"
                    />
                  </div>
                  <div className="ms-3 grow">
                    <p className="text-sm font-bold text-neutral-800 dark:text-neutral-200 sm:text-base">
                      Richard Kim
                    </p>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400">
                      Master Carpenter | WoodWright
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Customers;

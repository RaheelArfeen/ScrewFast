import React, { useEffect } from "react";

const Services = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    })

  return (
    <main className="px-2">
        <section className="mx-auto mt-10 max-w-[85rem] px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-14 2xl:max-w-full">
            <div className="max-w-[--breakpoint-md]">
            <h1 className="mb-4 text-balance text-4xl font-extrabold tracking-tight text-neutral-800 dark:text-neutral-200">
                Uniting Expertise with Your Vision
            </h1>
            <p className="mb-8 max-w-prose text-pretty font-normal text-neutral-600 dark:text-neutral-400 sm:text-xl">
                At ScrewFast, we take pride in providing comprehensive solutions and
                exceptional service in the hardware and construction industry. Our
                experienced team is dedicated to supporting your project from
                inception to completion with a range of specialized services.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <a
                className="group inline-flex items-center justify-center gap-x-2 rounded-lg px-4 py-3 text-sm font-bold text-neutral-50 ring-zinc-500 transition duration-300 focus-visible:ring-3 outline-hidden border border-transparent bg-[#FA5A15] hover:bg-orange-500 active:bg-orange-500 dark:focus:outline-hidden disabled:pointer-events-none disabled:opacity-50 2xl:text-base dark:ring-zinc-200"
                href="#"
                >
                Schedule a Consultation
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
                    <path d="M9 18L15 12L9 6" />
                </svg>
                </a>
            </div>
            </div>
        </section>

        {/* Section 2: Expert Guidance */}
        <section className="mx-auto max-w-[85rem] items-center gap-16 px-4 py-10 sm:px-6 lg:grid lg:grid-cols-2 lg:px-8 lg:py-14 2xl:max-w-full">
            <div>
            <h2 className="mb-4 text-balance text-4xl font-extrabold tracking-tight text-neutral-800 dark:text-neutral-200">
                Delivering Expert Guidance
            </h2>
            <p className="mb-4 max-w-prose text-pretty font-normal text-neutral-600 dark:text-neutral-400 sm:text-lg">
                Embarking on a construction project can be overwhelming. With our
                professional consultation services, we guide you through every
                stage, ensuring you make informed decisions. Whether you are a DIY
                enthusiast or a skilled contractor, our experts are on hand to offer
                tailored advice on product selection, project scope, and compliance
                with local regulations.
            </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4">
            <img
                src="https://screwfast.uk/_astro/blueprints-image.DxAt2gto_ZWTTNw.avif"
                alt="Blueprints and digital tablet with construction plans."
                className="w-full rounded-xl"
                draggable={false}
                loading="lazy"
                decoding="async"
            />
            <img
                src="https://screwfast.uk/_astro/person-working.aUGgRiE__1hU8Vn.avif"
                alt="Person working in the office"
                className="mt-4 w-full rounded-xl lg:mt-10"
                draggable={false}
                loading="lazy"
                decoding="async"
            />
            </div>
        </section>

        {/* Section 3: Designs to Reality */}
        <section className="mx-auto max-w-[85rem] items-center gap-8 px-4 py-10 sm:px-6 sm:py-16 md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 lg:px-8 lg:py-14 xl:gap-16 2xl:max-w-full">
            <img
            src="https://screwfast.uk/_astro/before-after.BntBToq6_Z1At7FE.avif"
            alt="Construction site before and after"
            className="w-full rounded-xl"
            draggable={false}
            loading="lazy"
            decoding="async"
            />
            <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-balance text-4xl font-extrabold tracking-tight text-neutral-800 dark:text-neutral-200">
                Transforming Designs into Reality
            </h2>
            <p className="mb-4 max-w-prose text-pretty font-normal text-neutral-600 dark:text-neutral-400 sm:text-lg">
                Our skilled craftsmen bring precision and excellence to every
                construction project. From minor installations to substantial
                structural work, ScrewFast offers reliable construction services to
                turn your plans into tangible outcomes. We ensure the highest
                standards of safety and workmanship, utilizing top-quality tools and
                materials from our extensive inventory.
            </p>
            <a
                className="group inline-flex items-center justify-center gap-x-2 rounded-lg px-4 py-3 text-sm font-bold text-neutral-50 ring-zinc-500 transition duration-300 focus-visible:ring-3 outline-hidden border border-transparent bg-[#FA5A15] hover:bg-orange-500 active:bg-orange-500 dark:focus:outline-hidden disabled:pointer-events-none disabled:opacity-50 2xl:text-base dark:ring-zinc-200"
                href="#"
            >
                Learn More
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
                <path d="M9 18L15 12L9 6" />
                </svg>
            </a>
            </div>
        </section>

        {/* Section 4: Professional Oversight */}
        <section className="mx-auto max-w-[85rem] items-center gap-16 px-4 py-10 sm:px-6 lg:grid lg:grid-cols-2 lg:px-8 lg:py-14 2xl:max-w-full">
            <div>
            <h2 className="mb-4 text-balance text-4xl font-extrabold tracking-tight text-neutral-800 dark:text-neutral-200">
                Navigating Projects with Professional Oversight
            </h2>
            <p className="mb-4 max-w-prose text-pretty font-normal text-neutral-600 dark:text-neutral-400 sm:text-lg">
                Effective project management is at the heart of any successful build.
                ScrewFast provides thorough planning and robust management services
                that keep your project on time and within budget. Let us handle the
                complexities of workflow coordination, resource allocation, and
                stakeholder communication while you focus on your vision.
            </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4">
            <img
                src="https://screwfast.uk/_astro/construction-workers.XhU7Ouf4_Z1H75eJ.avif"
                alt="Construction workers orchestrating a project"
                className="w-full rounded-xl"
                draggable={false}
                loading="lazy"
                decoding="async"
            />
            <img
                src="https://screwfast.uk/_astro/aerial-view.CeV30CXX_2rY3aA.avif"
                alt="Aerial view of managed construction"
                className="mt-4 w-full rounded-xl lg:mt-10"
                draggable={false}
                loading="lazy"
                decoding="async"
            />
            </div>
        </section>

        {/* Section 5: Maintenance */}
        <section className="mx-auto max-w-[85rem] items-center gap-8 px-4 py-10 sm:px-6 sm:py-16 md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 lg:px-8 lg:py-14 xl:gap-16 2xl:max-w-full">
            <img
            src="https://screwfast.uk/_astro/using-tools.BrEE8t5H_1azizS.avif"
            alt="Man in orange and black vest wearing white helmet holding yellow and black power tool"
            className="w-full rounded-xl"
            draggable={false}
            loading="lazy"
            decoding="async"
            />
            <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-balance text-4xl font-extrabold tracking-tight text-neutral-800 dark:text-neutral-200">
                Ensuring Long-lasting Performance
            </h2>
            <p className="mb-4 max-w-prose text-pretty font-normal text-neutral-600 dark:text-neutral-400 sm:text-lg">
                Our commitment to your project doesn't end at completion. ScrewFast
                offers ongoing maintenance and support services to ensure your
                construction's longevity and performance. From regular check-ups to
                emergency assistance, our responsive team is there to provide
                seamless support.
            </p>
            </div>
        </section>
        <section className="mx-auto max-w-[85rem] items-center gap-16 px-4 py-10 sm:px-6 lg:grid lg:grid-cols-2 lg:px-8 lg:py-14 2xl:max-w-full">
        <div>
            <h2 className="mb-4 text-balance text-4xl font-extrabold tracking-tight text-neutral-800 dark:text-neutral-200">
            Crafting Bespoke Strategies for Unique Challenges
            </h2>
            <p className="mb-4 max-w-prose text-pretty font-normal text-neutral-600 dark:text-neutral-400 sm:text-lg">
            For our larger enterprise clients, ScrewFast offers custom solutions designed to meet specific industry challenges. By understanding your unique needs, we engineer tailored strategies aimed at optimizing your operations, enhancing efficiency, and driving your business forward.
            </p>
            <a
            className="group inline-flex items-center justify-center gap-x-2 rounded-lg px-4 py-3 text-sm font-bold text-neutral-50 ring-zinc-500 transition duration-300 focus-visible:ring-3 outline-hidden border border-transparent bg-[#FA5A15] hover:bg-orange-500 active:bg-orange-500 dark:focus:outline-hidden disabled:pointer-events-none disabled:opacity-50 2xl:text-base dark:ring-zinc-200"
            href="#"
            >
            Read more
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
        <div className="mt-8 grid grid-cols-2 gap-4">
            <img
            src="https://screwfast.uk/_astro/progress-building.Cjca0suI_1Tx3VL.avif"
            alt="In progress building structure"
            draggable="false"
            width="1920"
            height="2560"
            loading="lazy"
            decoding="async"
            className="w-full rounded-xl"
            />
            <img
            src="https://screwfast.uk/_astro/under-construction.DfISh1yq_2puemO.avif"
            alt="Brown and gray building under construction"
            draggable="false"
            width="1920"
            height="2876"
            loading="lazy"
            decoding="async"
            className="mt-4 w-full rounded-xl lg:mt-10"
            />
        </div>
        </section>
        <section className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full">
            <div className="max-w-[var(--breakpoint-md)]">
                <h2 className="mb-4 text-balance text-3xl font-extrabold tracking-tight text-neutral-800 dark:text-neutral-200">
                By the Numbers
                </h2>
                <p className="mb-16 max-w-prose text-pretty font-normal text-neutral-600 dark:text-neutral-400 sm:text-xl">
                Our commitment to quality and reliability is evident in every project we undertake. At ScrewFast, we are dedicated to delivering industry-leading services that ensure your construction projects are built to last.
                </p>
            </div>
            <div className="grid items-center gap-6 lg:grid-cols-12 lg:gap-12">
                <div className="lg:col-span-4">
                <div className="lg:pe-6 xl:pe-12">
                    <p className="text-6xl font-bold leading-10 text-[#FA5A15] dark:text-[#FB713B]">96%</p>
                    <p className="mt-2 text-neutral-600 dark:text-neutral-400 sm:mt-3">
                    of our clients rate their experience with ScrewFast as exceptional
                    </p>
                </div>
                </div>
                <div className="relative lg:col-span-8 lg:before:absolute lg:before:-start-12 lg:before:top-0 lg:before:h-full lg:before:w-px lg:before:bg-neutral-300 lg:dark:before:bg-neutral-700">
                <div className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4 lg:grid-cols-3">
                    <div>
                    <p className="text-3xl font-bold text-[#FA5A15] dark:text-[#FB713B]">99.8%</p>
                    <p className="mt-1 text-neutral-600 dark:text-neutral-400">project completion rate</p>
                    </div>
                    <div>
                    <p className="text-3xl font-bold text-[#FA5A15] dark:text-[#FB713B]">5,000+</p>
                    <p className="mt-1 text-neutral-600 dark:text-neutral-400">successful installations</p>
                    </div>
                    <div>
                    <p className="text-3xl font-bold text-[#FA5A15] dark:text-[#FB713B]">85%</p>
                    <p className="mt-1 text-neutral-600 dark:text-neutral-400">client growth year-over-year</p>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </main>
  );
};

export default Services;

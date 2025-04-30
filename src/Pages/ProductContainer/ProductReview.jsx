import React from 'react';

const ProductReview = () => {
  return (
    <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full">
      <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
        <div className="flex items-center gap-12 max-w-[800px]">
          <h1 className="text-balance text-2xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200 md:text-4xl md:leading-tight">
            Products
          </h1>
          <p className="hidden max-w-[--breakpoint-sm] text-pretty text-neutral-600 dark:text-neutral-400 md:block">
            Explore the durability and precision of ScrewFast tools, designed for both professionals and enthusiasts. Each of our products is crafted with precision and built to last, ensuring you have the right tool for every job.
          </p>
        </div>
        <a
          className="group inline-flex items-center justify-center gap-x-2 rounded-lg px-4 py-3 text-sm font-bold text-neutral-50 ring-zinc-500 transition duration-300 focus-visible:ring-3 outline-hidden border border-transparent bg-orange-400 hover:bg-orange-500 active:bg-orange-500 dark:focus:outline-hidden disabled:pointer-events-none disabled:opacity-50 2xl:text-base dark:ring-zinc-200"
          href="#testimonials"
        >
          Customer Stories
        </a>
      </div>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
        <a
          className="group relative flex h-48 items-end overflow-hidden rounded-xl shadow-lg outline-hidden ring-zinc-500 focus-visible:ring-3 dark:ring-zinc-200 dark:focus:outline-hidden md:h-80"
        >
          <img
            src="https://screwfast.uk/_astro/product-image-1.Dqz5fi0L_Z32Nvh.avif"
            alt="Mockup boxes of machine screws set"
            draggable="false"
            width="1458"
            height="1042"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-[600ms] ease-[cubic-bezier(0.45,0,0.55,1)] group-hover:scale-110"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-800 via-transparent to-transparent opacity-50"></div>
          <span className="relative mb-3 ml-4 inline-block text-sm font-bold text-neutral-50 transition duration-[600ms] ease-[cubic-bezier(0.45,0,0.55,1)] group-hover:scale-110 md:ml-5 md:text-lg">
            Machine Screws
            <svg
              className="ml-0.5 w-3 h-3 md:w-4 md:h-4 inline pb-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </span>
        </a>

        <a
          className="group relative flex h-48 items-end overflow-hidden rounded-lg shadow-xl outline-hidden ring-zinc-500 focus-visible:ring-3 dark:ring-zinc-200 dark:focus:outline-hidden md:col-span-2 md:h-80"
        >
          <img
            src="https://screwfast.uk/_astro/product-image-2.BcjkuUps_Z9aU2M.avif"
            alt="Mockup boxes of assorted screw set"
            draggable="false"
            width="1458"
            height="1042"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-[600ms] ease-[cubic-bezier(0.45,0,0.55,1)] group-hover:scale-110"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-800 via-transparent to-transparent opacity-50"></div>
          <span className="relative mb-3 ml-4 inline-block text-sm font-bold text-neutral-50 transition duration-[600ms] ease-[cubic-bezier(0.45,0,0.55,1)] group-hover:scale-110 md:ml-5 md:text-lg">
            Assorted Screw Set
            <svg
              className="ml-0.5 w-3 h-3 md:w-4 md:h-4 inline pb-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </span>
        </a>

        <a
          className="group relative flex h-48 items-end overflow-hidden rounded-lg shadow-xl outline-hidden ring-zinc-500 focus-visible:ring-3 dark:ring-zinc-200 dark:focus:outline-hidden md:col-span-2 md:h-80"
        >
          <img
            src="https://screwfast.uk/_astro/product-image-3.BNT8XmJo_1TKWbQ.avif"
            alt="Mockup boxes of a tap bolts and nuts set"
            draggable="false"
            width="1458"
            height="1042"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-[600ms] ease-[cubic-bezier(0.45,0,0.55,1)] group-hover:scale-110"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-800 via-transparent to-transparent opacity-50"></div>
          <span className="relative mb-3 ml-4 inline-block text-sm font-bold text-neutral-50 transition duration-[600ms] ease-[cubic-bezier(0.45,0,0.55,1)] group-hover:scale-110 md:ml-5 md:text-lg">
            Tap Bolts and Nuts Set
            <svg
              className="ml-0.5 w-3 h-3 md:w-4 md:h-4 inline pb-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </span>
        </a>

        <a
          className="group relative flex h-48 items-end overflow-hidden rounded-xl shadow-lg outline-hidden ring-zinc-500 focus-visible:ring-3 dark:ring-zinc-200 dark:focus:outline-hidden md:h-80"
        >
          <img
            src="https://screwfast.uk/_astro/product-image-4.D9xSELbd_Z2kcBkw.avif"
            alt="Mockup boxes of hex bolts"
            draggable="false"
            width="1458"
            height="1042"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-[600ms] ease-[cubic-bezier(0.45,0,0.55,1)] group-hover:scale-110"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-800 via-transparent to-transparent opacity-50"></div>
          <span className="relative mb-3 ml-4 inline-block text-sm font-bold text-neutral-50 transition duration-[600ms] ease-[cubic-bezier(0.45,0,0.55,1)] group-hover:scale-110 md:ml-5 md:text-lg">
            Hex Bolts
            <svg
              className="ml-0.5 w-3 h-3 md:w-4 md:h-4 inline pb-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </span>
        </a>
      </section>
    </div>
  );
};

export default ProductReview;

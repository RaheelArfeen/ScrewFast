import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      // If the clicked FAQ is already open, close it
      setActiveIndex(null);
    } else {
      // Open the clicked FAQ and close the previous one at the same time
      setActiveIndex(index);
    }
  };

  return (
    <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full">
      <div className="grid gap-10 md:grid-cols-5">
        <div className="md:col-span-2">
          <div className="max-w-xs">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 md:text-4xl md:leading-tight">
              Frequently
              <br />
              asked questions
            </h2>
            <p className="mt-1 hidden text-neutral-600 dark:text-neutral-400 md:block">
              Ask us anything about our brand and products, and get factual responses.
            </p>
          </div>
        </div>

        {/* FAQ accordion items */}
        <div className="md:col-span-3">
          <div className="divide-y divide-neutral-200 dark:divide-neutral-700">
            {faqData.map((item, index) => (
              <div className="pt-6 pb-3" key={index}>
                <button
                  className="group inline-flex w-full items-center cursor-pointer justify-between gap-x-3 text-balance rounded-lg pb-3 text-start font-bold text-neutral-800 outline-none ring-zinc-500 transition hover:text-neutral-500 focus-visible:ring dark:text-neutral-200 dark:ring-zinc-200 dark:hover:text-neutral-400 dark:focus:outline-none md:text-lg"
                  onClick={() => toggleFAQ(index)}
                >
                  {item.question}
                  <svg
                    className={`block h-5 w-5 flex-shrink-0 text-neutral-600 group-hover:text-neutral-500 transition-transform duration-300 ${
                      activeIndex === index ? 'rotate-180' : ''
                    }`}
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 easet ${
                    activeIndex === index ? 'max-h-[500px]' : 'max-h-0'
                  }`}
                >
                  <div className="hs-accordion-content px-4 pb-4">
                    <p className="text-pretty text-neutral-600 dark:text-neutral-400">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const faqData = [
  {
    question: 'What types of tools are included in the Starter Kit?',
    answer:
      "The Starter Kit features essential hand and power tools for diverse DIY projects, including hammers, drills, screwdrivers, and a variety of fasteners. It's a curated selection to help beginners and experienced DIYers alike tackle most home improvement tasks.",
  },
  {
    question: 'Can I upgrade from the Starter Kit to the Professional Toolbox?',
    answer:
      "Absolutely! You can upgrade to the Professional Toolbox at any time to access a wider range of high-quality tools, enjoy priority customer support, and receive exclusive content. Contact our support team for a seamless transition.",
  },
  {
    question: 'What discounts are available for bulk orders through the Professional Toolbox plan?',
    answer:
      'Professional Toolbox members are entitled to exclusive discounts on bulk orders, the percentage of which may vary depending on the order volume. Get in touch with us to discuss your needs, and we\'ll provide a tailored discount structure.',
  },
  {
    question: 'What kind of customer support can I expect?',
    answer:
      'All our customers receive dedicated email support. With the Starter Kit, you\'ll receive our standard support, while the Professional Toolbox plan upgrades you to priority support, meaning faster response times and specialized assistance.',
  },
  {
    question: 'How current are the online resources and tutorials?',
    answer:
      'We regularly update our online resources and tutorials to reflect the latest trends in DIY and construction, as well as introductions to new tools and techniques. Our material aims to be comprehensive and user-friendly for all skill levels.',
  },
  {
    question: 'Does ScrewFast offer services for large-scale construction projects?',
    answer:
      'Yes, our Enterprise Solutions are designed for larger companies requiring comprehensive services. We provide consultation, planning, and supply of high-grade tools and materials, as well as staffing solutions for substantial construction needs. Contact us for a customized quote.',
  },
];

export default FAQ;

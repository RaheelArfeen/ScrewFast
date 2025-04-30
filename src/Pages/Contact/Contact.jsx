import React, { useEffect } from 'react';

const Contact = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    return (
        <section className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <div className="text-center">
            <h1 className="text-balance text-2xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200 md:text-4xl md:leading-tight">
                Contact us
            </h1>
            <p className="mt-1 text-pretty text-neutral-600 dark:text-neutral-400">
                Have questions or want to discuss a project? Reach out, and let's craft the perfect solution with our tools and services.
            </p>
            </div>

            <div className="mt-12 grid items-center gap-6 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col rounded-xl p-4 sm:p-6 lg:p-8">
                <h2 className="mb-8 text-xl font-bold text-neutral-700 dark:text-neutral-300">
                Fill in the form below
                </h2>
                <form>
                <div className="grid gap-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                        <label htmlFor="hs-firstname-contacts" className="sr-only">First Name</label>
                        <input
                        type="text"
                        name="hs-firstname-contacts"
                        id="hs-firstname-contacts"
                        className="block w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700 placeholder:text-neutral-500 focus:border-neutral-200 focus:outline-hidden focus:ring-3 focus:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-600 dark:bg-neutral-700/30 dark:text-neutral-300 dark:placeholder:text-neutral-400 dark:focus:ring-1"
                        placeholder="First Name"
                        />
                    </div>
                    <div>
                        <label htmlFor="hs-lastname-contacts" className="sr-only">Last Name</label>
                        <input
                        type="text"
                        name="hs-lastname-contacts"
                        id="hs-lastname-contacts"
                        className="block w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700 placeholder:text-neutral-500 focus:border-neutral-200 focus:outline-hidden focus:ring-3 focus:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-600 dark:bg-neutral-700/30 dark:text-neutral-300 dark:placeholder:text-neutral-400 dark:focus:ring-1"
                        placeholder="Last Name"
                        />
                    </div>
                    </div>
                    <div>
                    <label htmlFor="hs-email-contacts" className="sr-only">Email</label>
                    <input
                        type="email"
                        name="hs-email-contacts"
                        id="hs-email-contacts"
                        autoComplete="email"
                        className="block w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700 placeholder:text-neutral-500 focus:border-neutral-200 focus:outline-hidden focus:ring-3 focus:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-600 dark:bg-neutral-700/30 dark:text-neutral-300 dark:placeholder:text-neutral-400 dark:focus:ring-1"
                        placeholder="Email"
                    />
                    </div>
                    <div>
                    <label htmlFor="hs-phone-number" className="sr-only">Phone Number</label>
                    <input
                        type="tel"
                        name="hs-phone-number"
                        id="hs-phone-number"
                        className="block w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700 placeholder:text-neutral-500 focus:border-neutral-200 focus:outline-hidden focus:ring-3 focus:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-600 dark:bg-neutral-700/30 dark:text-neutral-300 dark:placeholder:text-neutral-400 dark:focus:ring-1"
                        placeholder="Phone Number"
                    />
                    </div>
                    <div>
                    <label htmlFor="hs-about-contacts" className="sr-only">Details</label>
                    <textarea
                        id="hs-about-contacts"
                        name="hs-about-contacts"
                        rows="4"
                        className="block w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700 placeholder:text-neutral-500 focus:border-neutral-200 focus:outline-hidden focus:ring-3 focus:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-600 dark:bg-neutral-700/30 dark:text-neutral-300 dark:placeholder:text-neutral-400 dark:focus:ring-1"
                        placeholder="Details"
                    ></textarea>
                    </div>
                </div>
                <div className="mt-4 grid">
                    <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-x-2 rounded-lg px-4 py-3 text-sm font-bold text-neutral-700 focus-visible:ring-3 outline-hidden transition duration-300 border border-transparent bg-yellow-400 dark:focus:outline-hidden hover:bg-yellow-500 2xl:text-base disabled:pointer-events-none disabled:opacity-50 ring-zinc-500 dark:ring-zinc-200"
                    >
                    Send Message
                    </button>
                </div>
                <div className="mt-3 text-center">
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    We'll get back to you in 1-2 business days.
                    </p>
                </div>
                </form>
            </div>

            <div className="divide-y divide-neutral-300 dark:divide-neutral-700">
                <div className="flex gap-x-7 py-6">
                <svg className="mt-1.5 h-6 w-6 shrink-0 text-neutral-600 dark:text-neutral-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                </svg>
                <div className="grow">
                    <h3 className="font-bold text-neutral-700 dark:text-neutral-300">Knowledgebase</h3>
                    <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">Browse through all of our knowledgebase articles.</p>
                    <a href="#" className="group mt-2 inline-flex items-center gap-x-2 rounded-lg text-sm font-medium text-zinc-600 outline-hidden ring-zinc-500 transition duration-300 hover:text-zinc-800 focus-visible:ring-3 dark:text-zinc-400 dark:ring-zinc-200 dark:hover:text-zinc-200 dark:focus:outline-hidden dark:focus:ring-1">
                    Visit guides &amp; tutorials
                    <svg className="h-4 w-4 shrink-0 transition ease-in-out group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                    </a>
                </div>
                </div>

                <div className="flex gap-x-7 py-6">
                <svg className="mt-1.5 h-6 w-6 shrink-0 text-neutral-600 dark:text-neutral-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                </svg>
                <div className="grow">
                    <h3 className="font-bold text-neutral-700 dark:text-neutral-300">FAQ</h3>
                    <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">Explore our FAQ for quick, clear answers to common queries.</p>
                    <a href="#" className="group mt-2 inline-flex items-center gap-x-2 rounded-lg text-sm font-medium text-zinc-600 outline-hidden ring-zinc-500 transition duration-300 hover:text-zinc-800 focus-visible:ring-3 dark:text-zinc-400 dark:ring-zinc-200 dark:hover:text-zinc-200 dark:focus:outline-hidden dark:focus:ring-1">
                    Visit FAQ
                    <svg className="h-4 w-4 shrink-0 transition ease-in-out group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                    </a>
                </div>
                </div>

                <div className="flex gap-x-7 py-6">
                <svg className="mt-1.5 h-6 w-6 shrink-0 text-neutral-600 dark:text-neutral-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <div className="grow">
                    <h3 className="font-bold text-neutral-700 dark:text-neutral-300">Visit our office</h3>
                    <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">UK ScrewFast</p>
                    <p className="mt-1 text-sm italic text-neutral-500">72 Union Terrace, E10 4PE London</p>
                </div>
                </div>

                <div className="flex gap-x-7 py-6">
                <svg className="mt-1.5 h-6 w-6 shrink-0 text-neutral-600 dark:text-neutral-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z" />
                </svg>
                <div className="grow">
                    <h3 className="font-bold text-neutral-700 dark:text-neutral-300">Contact us by email</h3>
                    <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">Prefer the written word? Drop us an email at</p>
                    <a href="#" className="group mt-2 inline-flex items-center gap-x-2 rounded-lg text-sm font-medium text-zinc-600 outline-hidden ring-zinc-500 transition duration-300 hover:text-zinc-800 focus-visible:ring-3 dark:text-zinc-400 dark:ring-zinc-200 dark:hover:text-zinc-200 dark:focus:outline-hidden dark:focus:ring-1">
                    support@screwfast.uk
                    </a>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    );
};

export default Contact;

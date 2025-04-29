import React, { useState } from 'react';

const Constructions = () => {
    const [activeTab, setActiveTab] = useState('tabs-with-card-1');

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <div>
            <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full">
                <div className="relative p-6 md:p-16">
                    <div className="relative z-10 lg:grid lg:grid-cols-12 lg:items-center lg:gap-16">
                        <div className="mb-10 lg:order-2 lg:col-span-6 lg:col-start-8 lg:mb-0">
                            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 sm:text-3xl">
                                Customize <span className="text-yellow-500 dark:text-yellow-400">ScrewFast</span>
                                's offerings to perfectly suit your hardware and construction needs. 
                            </h2>
                            <nav className="mt-5 grid gap-4 md:mt-10" aria-label="Tabs" role="tablist">
                                <button
                                    type="button"
                                    className={`${activeTab === 'tabs-with-card-1' ? 'dark:bg-[#3c3c3c] bg-[#fafafa] hover:bg-[#fafafa] dark:hover:bg-[#3c3c3c] shadow-md' : ''} cursor-pointer rounded-xl p-4 text-start outline-none ring-zinc-500 transition duration-300 hover:bg-[#fafafa] dark:hover:bg-[#3c3c3c] md:p-5`}
                                    onClick={() => handleTabClick('tabs-with-card-1')}
                                    role="tab"
                                >
                                    <span className="flex">
                                        <svg className={`mt-2 h-6 w-6 flex-shrink-0 ${activeTab === 'tabs-with-card-1' ? 'fill-[#FB713B]' : 'fill-neutral-700'} dark:${activeTab === 'tabs-with-card-1' ? 'fill-orange-300' : 'fill-neutral-300'} md:h-7 md:w-7`} height="48" viewBox="0 -960 960 960" width="48">
                                            <path d="M764-80q-6 0-11-2t-10-7L501-331q-5-5-7-10t-2-11q0-6 2-11t7-10l85-85q5-5 10-7t11-2q6 0 11 2t10 7l242 242q5 5 7 10t2 11q0 6-2 11t-7 10l-85 85q-5 5-10 7t-11 2Zm0-72 43-43-200-200-43 43 200 200ZM195-80q-6 0-11.5-2T173-89l-84-84q-5-5-7-10.5T80-195q0-6 2-11t7-10l225-225h85l38-38-175-175h-57L80-779l99-99 125 125v57l175 175 130-130-67-67 56-56H485l-18-18 128-128 18 18v113l56-56 169 169q15 15 23.5 34.5T870-600q0 20-6.5 38.5T845-528l-85-85-56 56-52-52-211 211v84L216-89q-5 5-10 7t-11 2Zm0-72 200-200v-43h-43L152-195l43 43Zm0 0-43-43 22 21 21 22Zm569 0 43-43-43 43Z" className=""></path>
                                        </svg>
                                        <span className={`ms-6 grow ${activeTab === 'tabs-with-card-1' ? 'text-[#FB713B]' : 'text-neutral-800'} dark:${activeTab === 'tabs-with-card-1' ? 'text-orange-500' : 'text-neutral-200'}`}>
                                            <span className="block text-lg font-bold">Cutting-Edge Tools</span>
                                            <span className="mt-1 block text-neutral-500 dark:text-neutral-400">Empower your projects with ScrewFast &#39;s cutting-edge tools. Experience enhanced efficiency in construction management with our sophisticated automated solutions.</span>
                                        </span>
                                    </span>
                                </button>
                                <button
                                    type="button"
                                    className={`${activeTab === 'tabs-with-card-2' ? 'dark:bg-[#3c3c3c] bg-[#fafafa] hover:bg-[#fafafa] dark:hover:bg-[#3c3c3c] shadow-md' : ''} cursor-pointer rounded-xl p-4 text-start outline-none ring-zinc-500 transition duration-300 hover:bg-[#fafafa] dark:hover:bg-[#3c3c3c] md:p-5`}
                                    onClick={() => handleTabClick('tabs-with-card-2')}
                                    role="tab"
                                >
                                    <span className="flex">
                                        <svg className={`mt-2 h-6 w-6 flex-shrink-0 ${activeTab === 'tabs-with-card-2' ? 'fill-[#FB713B]' : 'fill-neutral-700'} dark:${activeTab === 'tabs-with-card-2' ? 'fill-orange-300' : 'fill-neutral-300'} md:h-7 md:w-7`} height="48" viewBox="0 -960 960 960" width="48">
                                            <path d="M510-570v-270h330v270H510ZM120-450v-390h330v390H120Zm390 330v-390h330v390H510Zm-390 0v-270h330v270H120Zm60-390h210v-270H180v270Zm390 330h210v-270H570v270Zm0-450h210v-150H570v150ZM180-180h210v-150H180v150Zm210-330Zm180-120Zm0 180ZM390-330Z" className=""></path>
                                        </svg>
                                        <span className={`ms-6 grow ${activeTab === 'tabs-with-card-2' ? 'text-[#FB713B]' : 'text-neutral-800'} dark:${activeTab === 'tabs-with-card-2' ? 'text-orange-500' : 'text-neutral-200'}`}>
                                            <span className="block text-lg font-bold">Intuitive Dashboards</span>
                                            <span className="mt-1 block text-neutral-500 dark:text-neutral-400">Navigate with ease using ScrewFast &#39;s intuitive dashboards. Set up and oversee your projects seamlessly, with user-friendly interfaces designed for quick and effective workflow management.</span>
                                        </span>
                                    </span>
                                </button>
                                <button
                                    type="button"
                                    className={`${activeTab === 'tabs-with-card-3' ? 'dark:bg-[#3c3c3c] bg-[#fafafa] hover:bg-[#fafafa] dark:hover:bg-[#3c3c3c] shadow-md' : ''} cursor-pointer rounded-xl p-4 text-start outline-none ring-zinc-500 transition duration-300 hover:bg-[#fafafa] dark:hover:bg-[#3c3c3c] md:p-5`}
                                    onClick={() => handleTabClick('tabs-with-card-3')}
                                    role="tab"
                                >
                                    <span className="flex">
                                        <svg className={`h-6 w-6 flex-shrink-0 ${activeTab === 'tabs-with-card-3' ? 'stroke-[#FB713B]' : 'dark:stroke-[#D4D4D4] stroke-[#404040]'} dark:${activeTab === 'tabs-with-card-3' ? 'fill-orange-300' : 'dark:text-neutral-300'} md:h-7 md:w-7`} height="24" viewBox="0 0 24 24" width="24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" className=""></path>
                                        </svg>
                                        <span className={`ms-6 grow ${activeTab === 'tabs-with-card-3' ? 'text-[#FB713B]' : 'text-neutral-800'} dark:${activeTab === 'tabs-with-card-3' ? 'text-orange-500' : 'text-neutral-200'}`}>
                                            <span className="block text-lg font-bold">Robust Features</span>
                                            <span className="mt-1 block text-neutral-500 dark:text-neutral-400">Minimize complexity, maximize productivity. ScrewFast &#39;s robust features are engineered to streamline your construction process, delivering results that stand out for their excellence.</span>
                                        </span>
                                    </span>
                                </button>
                            </nav>
                        </div>
                        <div className="lg:col-span-6">
                            <div className="relative">
                                <div>
                                    <div id="tabs-with-card-1" role="tabpanel" className={`${activeTab === 'tabs-with-card-1' ? '' : 'hidden'}`} aria-labelledby="tabs-with-card-item-1">
                                        <img src="https://screwfast.uk/_astro/automated-tools.NvGNhe84_tdPd.avif" alt="Yellow and black heavy equipment on brown grass field" width="1920" height="2560" decoding="async" className="shadow-xl aspect-[3/2] object-cover lg:aspect-auto shadow-neutral-200 rounded-xl dark:shadow-neutral-900/[.2]" />
                                    </div>
                                    <div id="tabs-with-card-2" role="tabpanel" className={`${activeTab === 'tabs-with-card-2' ? '' : 'hidden'}`} aria-labelledby="tabs-with-card-item-2">
                                        <img src="https://screwfast.uk/_astro/dashboard-image.DUm-YPUR_ZU5xNk.avif" alt="A screenshot or graphic representation of the intuitive dashboard" width="1920" height="1920" decoding="async" className="shadow-xl aspect-[5/4] bg-neutral-300 dark:bg-neutral-600 object-cover p-3 lg:aspect-auto shadow-neutral-200 rounded-xl dark:shadow-neutral-900/[.2]" />
                                    </div>
                                    <div id="tabs-with-card-3" role="tabpanel" className={`${activeTab === 'tabs-with-card-3' ? '' : 'hidden'}`} aria-labelledby="tabs-with-card-item-3">
                                        <img src="https://screwfast.uk/_astro/construction-image.6K-xbeL4_Z18iUgT.avif" alt="Robust features of ScrewFast shown on display" width="1920" height="1200" decoding="async" className="shadow-xl aspect-[3/2] bg-neutral-300 dark:bg-neutral-600 object-cover lg:aspect-auto shadow-neutral-200 rounded-xl dark:shadow-neutral-900/[.2]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="absolute inset-0 grid h-full w-full grid-cols-12">
                        <div class="col-span-full h-5/6 w-full rounded-xl bg-neutral-100 dark:bg-white/[.075] sm:h-3/4 lg:col-span-7 lg:col-start-6 lg:h-full"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Constructions;





{/* <div class="absolute inset-0 grid h-full w-full grid-cols-12">
                        <div class="col-span-full h-5/6 w-full rounded-xl bg-neutral-100 dark:bg-white/[.075] sm:h-3/4 lg:col-span-7 lg:col-start-6 lg:h-full"></div>
                    </div> */}
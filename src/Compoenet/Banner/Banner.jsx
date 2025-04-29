import React from 'react';
import { NavLink } from 'react-router';

const Banner = () => {
    return (
        <div>
            <div className="mx-auto grid max-w-[85rem] gap-4 py-14 px-4 lg:px-10 sm:px-6 md:grid-cols-2 md:items-center md:gap-8  2xl:max-w-full">
                
                <div>
                    <h1 className="block text-balance text-3xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200 sm:text-4xl lg:text-6xl lg:leading-tight">Equip Your Projects with <span className="text-yellow-500 dark:text-yellow-400">ScrewFast</span>
                    </h1>
                    <p className="mt-3 text-pretty text-lg leading-relaxed text-neutral-700 dark:text-neutral-400 lg:w-4/5">Top-quality hardware tools and expert construction services for every project need. </p>
                    <div className="mt-7 grid w-full gap-3 sm:inline-flex">
                        <NavLink to='/products' className="group inline-flex items-center justify-center gap-x-2 rounded-lg px-4 py-3 text-sm font-bold text-neutral-50 transition duration-300 focus-visible:ring outline-none border border-transparent bg-orange-600 hover:bg-orange-500 dark:focus:outline-none disabled:pointer-events-none disabled:opacity-50 2xl:text-base dark:ring-zinc-200">
                            Start Exploring 
                            <svg className="h-4 w-4 flex-shrink-0 transition duration-300 group-hover:translate-x-1" height="24" viewBox="0 0 24 24" width="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                
                                <path d="m9 18 6-6-6-6" className></path>
                            </svg>
                        </NavLink>
                        <NavLink to='/contact' className="inline-flex items-center justify-center gap-x-2 rounded-lg px-4 py-3 text-center text-sm font-medium text-neutral-600 shadow-sm outline-none focus-visible:ring transition duration-300 border border-neutral-200 bg-neutral-300 hover:bg-neutral-400/50 hover:text-neutral-600 dark:hover:text-zinc-300 active:text-neutral-700 disabled:pointer-events-none disabled:opacity-50 2xl:text-base dark:hover:bg-zinc-600 dark:border-neutral-700 dark:bg-zinc-700 dark:text-zinc-300" >Contact Sales Team </NavLink>
                    </div>
                    
                    <div className="mt-6 lg:mt-10">
                        <div className="py-5">
                            <div className="text-center sm:flex sm:items-center sm:text-start">
                                <div className="flex-shrink-0 pb-5 sm:flex sm:pb-0 sm:pe-5">
                                    
                                    <div className="flex justify-center -space-x-3">
                                        <img src="https://screwfast.uk/_astro/photo-1568602471122-7832951cc4c5_Z1gTFu5.webp" width="300" height="300" className="inline-block h-8 w-8 rounded-full ring-2 ring-neutral-50 dark:ring-zinc-800"/>
                                        <img src="https://screwfast.uk/_astro/photo-1531927557220-a9e23c1e4794_Z2eM9SL.webp" width="300" height="300" className="inline-block h-8 w-8 rounded-full ring-2 ring-neutral-50 dark:ring-zinc-800"/>
                                        <img src="https://screwfast.uk/_astro/photo-1541101767792-f9b2b1c4f127_Zt29WV.webp" width="300" height="300" className="inline-block h-8 w-8 rounded-full ring-2 ring-neutral-50 dark:ring-zinc-800"/>
                                        <img src="https://screwfast.uk/_astro/photo-1492562080023-ab3db95bfbce_MUp7W.webp" width="300" height="300" className="inline-block h-8 w-8 rounded-full ring-2 ring-neutral-50 dark:ring-zinc-800"/>
                                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800 ring-2 ring-white dark:bg-zinc-900 dark:ring-zinc-800">
                                            <span className="text-xs font-medium uppercase leading-none text-white">7k+</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="mx-auto h-px w-32 border-t border-neutral-400 dark:border-neutral-500 sm:mx-0 sm:h-8 sm:w-auto sm:border-s sm:border-t-0"></div>

                                <div className="flex flex-col items-center sm:items-start">
                                    <div className="flex items-baseline space-x-1 pt-5 sm:ps-5 sm:pt-0">
                                        <div className="flex space-x-1">

                                            <svg className="h-4 w-4 text-yellow-500 dark:text-yellow-400" width="51" height="51" viewBox="0 0 51 51" fill="none">
                                                <path d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z" fill="currentColor"></path>
                                            </svg>
                                            <svg className="h-4 w-4 text-yellow-500 dark:text-yellow-400" width="51" height="51" viewBox="0 0 51 51" fill="none">
                                                <path d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z" fill="currentColor"></path>
                                            </svg>
                                            <svg className="h-4 w-4 text-yellow-500 dark:text-yellow-400" width="51" height="51" viewBox="0 0 51 51" fill="none">
                                                <path d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z" fill="currentColor"></path>
                                            </svg>
                                            <svg className="h-4 w-4 text-yellow-500 dark:text-yellow-400" width="51" height="51" viewBox="0 0 51 51" fill="none">
                                                <path d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z" fill="currentColor"></path>
                                            </svg>
                                            
                                            <svg className="h-4 w-4 text-yellow-500 dark:text-yellow-400" width="51" height="51" viewBox="0 0 51 51" fill="none">
                                                <path d="M49.6867 20.0305C50.2889 19.3946 49.9878 18.1228 49.0846 18.1228L33.7306 15.8972C33.4296 15.8972 33.1285 15.8972 32.8275 15.2613L25.9032 0.317944C25.6021 0 25.3011 0 25 0V42.6046C25 42.6046 25.3011 42.6046 25.6021 42.6046L39.7518 49.9173C40.3539 50.2352 41.5581 49.5994 41.2571 48.6455L38.5476 32.4303C38.5476 32.1124 38.5476 31.7944 38.8486 31.4765L49.6867 20.0305Z" fill="transparent"></path>
                                                <path d="M0.313299 20.0305C-0.288914 19.3946 0.0122427 18.1228 0.915411 18.1228L16.2694 15.8972C16.5704 15.8972 16.8715 15.8972 17.1725 15.2613L24.0968 0.317944C24.3979 0 24.6989 0 25 0V42.6046C25 42.6046 24.6989 42.6046 24.3979 42.6046L10.2482 49.9173C9.64609 50.2352 8.44187 49.5994 8.74292 48.6455L11.4524 32.4303C11.4524 32.1124 11.4524 31.7944 11.1514 31.4765L0.313299 20.0305Z" fill="currentColor"></path>
                                            </svg>
                                        </div>
                                        <p className="text-neutral-800 dark:text-neutral-200">
                                            <span className="font-bold">4.8</span> / 5 
                                        </p>
                                    </div>
                                    <div className="text-sm text-neutral-800 dark:text-neutral-200 sm:ps-5">
                                        <p>
                                            From Over <span className="font-bold">12.8k</span> Reviews
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex w-full">
                    <div className="top-12 overflow-hidden">
                        <img src="https://screwfast.uk/_astro/hero-image.DRPoHq2O_ZF5ci7.avif" alt="Stack of ScrewFast product boxes containing assorted hardware tools"  width="4067" height="2576" className="h-full w-full scale-110 object-cover object-center"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
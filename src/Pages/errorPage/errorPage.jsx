import React, { useEffect } from 'react';
import { Link } from 'react-router';
import Header from '../../Compoenet/Header/Header';
import Footer from '../../Compoenet/Footer/Footer';

const ErrorPage = () => {

    useEffect(() => {
        document.title = "Page Not Found | ScrewFast";
        window.scrollTo(0, 0);
      
        // Just apply the saved theme without changing the value
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }, []);
      

  return (
    <div className='text-center overflow-hidden flex justify-between flex-col min-h-screen'>
      <div className='2xl:container mx-auto sticky top-4 inset-x-0 z-50'>
        <Header />
      </div>
      <div className="mx-auto py-32 text-center"> 
        <h1 className="text-dark mb-4 text-7xl font-extrabold text-yellow-500 dark:text-yellow-400 lg:text-9xl">404</h1> 
        <p id="subtitle" className="mb-4 text-balance text-3xl font-bold tracking-tight text-neutral-700 dark:text-neutral-300 md:text-4xl">Oops, this isn't the tool you were looking for!</p> 
        <p id="content" className="mb-4 text-pretty text-lg text-neutral-600 dark:text-neutral-400">Don't let this hiccup slow you down. Let's get you back to building your masterpiece.</p> 
        <Link to='/' className="group inline-flex items-center justify-center gap-x-2 rounded-lg px-4 py-3 text-sm font-bold text-neutral-50 ring-zinc-500 transition duration-300 focus-visible:ring-3 outline-hidden border border-transparent bg-orange-400 hover:bg-orange-500 active:bg-orange-500 dark:focus:outline-hidden disabled:pointer-events-none disabled:opacity-50 2xl:text-base dark:ring-zinc-200" id="go-back">
          Go Back
          <svg className="h-4 w-4 shrink-0 transition duration-300 group-hover:translate-x-1" height="24" viewBox="0 0 24 24" width="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"></path></svg>
        </Link> 
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;

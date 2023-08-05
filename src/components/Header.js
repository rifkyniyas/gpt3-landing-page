"use client";
import { useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  return (
    <header className="main-container relative pt-8 lg:pt-16 flex items-center">
      <a href="/" className="relative h-4 w-16 mr-16">
        <Image src="/images/logo.svg" fill={true} />
      </a>

      <button
        className="text-primary ml-auto lg:hidden"
        onClick={() => setIsNavbarOpen((prevState) => !prevState)}
      >
        <Icon
          icon={`${
            isNavbarOpen ? "material-symbols:close" : "ci:hamburger-md"
          }`}
          className="w-6 h-6"
        />
      </button>
      <nav
        className={`${isNavbarOpen ? "flex" : "hidden"}
        absolute inset-x-0  top-full flex-col box-content mt-3 px-5 py-8 z-50 bg-blue-bg gap-y-5 text-lg font-medium  
        lg:flex lg:relative lg:flex-row grow lg:items-center lg:mt-0 lg:p-0 lg:bg-transparent`}
      >
        <ul className="flex flex-col lg:flex-row lg:items-center gap-y-5 gap-x-9">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">What is GPT?</a>
          </li>
          <li>
            <a href="#">Open AI</a>
          </li>
          <li>
            <a href="#">Case Studies</a>
          </li>
          <li>
            <a href="#">Library</a>
          </li>
        </ul>
        <ul className="flex flex-col lg:flex-row lg:items-center lg:ml-auto gap-y-5 gap-x-6 ">
          <li>
            <a href="#">Sign in</a>
          </li>
          <li>
            <a
              href="#"
              className="inline-block py-4 px-10 bg-primary hover:no-underline rounded-md"
            >
              Sign up
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

{
  /* <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-pink-500 mb-3">
  <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
      <a
        className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
        href="#pablo"
      >
        pink Tailwind Starter Kit
      </a>
      <button
        className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
        type="button"
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        <i className="fas fa-bars"></i>
      </button>
    </div>
    <div
      className={
        "lg:flex flex-grow items-center" + (navbarOpen ? " flex" : " hidden")
      }
      id="example-navbar-danger"
    >
      <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
        <li className="nav-item">
          <a
            className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
            href="#pablo"
          >
            <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
            <span className="ml-2">Share</span>
          </a>
        </li>
        <li className="nav-item">
          <a
            className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
            href="#pablo"
          >
            <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
            <span className="ml-2">Tweet</span>
          </a>
        </li>
        <li className="nav-item">
          <a
            className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
            href="#pablo"
          >
            <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
            <span className="ml-2">Pin</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>; */
}

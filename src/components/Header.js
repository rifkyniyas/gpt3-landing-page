"use client";
import { useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  return (
    <header className="main-container pt-5 lg:pt-16 flex items-center">
      <a href="/" className="relative h-4 w-16 mr-16">
        <Image src="/images/logo.svg" fill={true} />
      </a>

      <button
        className="text-primary ml-auto lg:hidden"
        onClick={() => setIsNavbarOpen((prevState) => !prevState)}
      >
        <Icon icon="ci:hamburger-md" className="w-6 h-6" />
      </button>
      <nav
        className={`${isNavbarOpen ? "flex" : " hidden"}
              lg:flex grow items-center text-lg font-medium`}
      >
        <ul className="flex items-center gap-x-9">
          <li>
            <a href="#" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              What is GPT?
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Open AI
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Case Studies
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Library
            </a>
          </li>
        </ul>
        <ul className="flex items-center gap-x-6 ml-auto">
          <li>
            <a href="#" className="hover:underline">
              Sign in
            </a>
          </li>
          <li>
            <a href="#" className="py-4 px-10 bg-primary rounded-md">
              Sign up
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

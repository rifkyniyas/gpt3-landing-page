"use client";
import { useState } from "react";
import Image from "next/image";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <header className="main-container pt-16 flex items-center">
      <a href="/" className="relative h-4 w-16 mr-16">
        <Image src="/images/logo.svg" fill={true} />
      </a>
      <nav
        // className={`${navbarOpen ? "flex" : " hidden"}
        //       lg:flex flex-grow items-center`}
        className="flex items-center grow text-lg font-medium"
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

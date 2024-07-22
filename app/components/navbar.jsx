// @flow strict
"use client"; // This line makes the component a Client Component

import { useState } from "react";
import Link from "next/link";
import { MenuIcon, XIcon } from "@heroicons/react/outline"; // Icons for mobile menu

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link href="/" className="text-base font-bold text-gradient">
            SWAPNEEL CHAUDHURI
          </Link>
        </div>
        <div className="block md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <XIcon className="h-6 w-6 text-pink-600" />
            ) : (
              <MenuIcon className="h-6 w-6 text-pink-600" />
            )}
          </button>
        </div>
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } mt-4 flex w-full flex-col space-y-2 text-base font-bold md:mt-0 md:flex md:flex-row md:space-x-4 md:space-y-0`}
        >
          {["ABOUT", "EXPERIENCE", "SKILLS", "EDUCATION", "BLOGS", "PROJECTS"].map((item) => (
            <li key={item}>
              <Link
                className="block px-5 py-3 text-gradient transition-colors duration-300 hover:underline"
                href={`/#${item.toLowerCase()}`}
              >
                <span className="hover:text-pink-600">{item}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <style jsx>{`
        .text-gradient {
          background: linear-gradient(to right, #ec4899, #8b5cf6); /* Tailwind colors as hex values */
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block; /* Ensure the gradient shows correctly */
        }
      `}</style>
    </nav>
  );
}

export default Navbar;

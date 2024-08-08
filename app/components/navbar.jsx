// @flow strict
"use client"; // This line makes the component a Client Component

import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className="text-base font-bold text-gradient" // Gradient for the name
          >
          </Link>
        </div>

        <ul className="mt-4 flex w-full justify-center space-x-4 text-base font-bold md:mt-0 md:flex-row md:space-x-1">
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

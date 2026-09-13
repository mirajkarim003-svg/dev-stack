import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
          aria-label="Open menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {menuOpen ? (
              <>
                <line x1="6" x2="18" y1="6" y2="18" />
                <line x1="18" x2="6" y1="6" y2="18" />
              </>
            ) : (
              <>
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </>
            )}
          </svg>
        </button>

        {/* Brand */}
        <a href="#" className="flex items-center md:mr-auto">
          <img
            src="/assets/logo-text.png"
            alt="Dev Stack"
            className="h-9 w-auto object-contain"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex md:mx-auto">
          <a href="#" className="text-sm font-medium text-pink-500">
            Home
          </a>

          <a
            href="#technologies"
            className="text-sm font-medium text-gray-600 transition hover:text-pink-500"
          >
            Technologies
          </a>

          <a
            href="#projects"
            className="text-sm font-medium text-gray-600 transition hover:text-pink-500"
          >
            Projects
          </a>

          <a
            href="#about"
            className="text-sm font-medium text-gray-600 transition hover:text-pink-500"
          >
            About
          </a>

          <a
            href="#contact"
            className="text-sm font-medium text-gray-600 transition hover:text-pink-500"
          >
            Contact
          </a>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-1 md:ml-auto md:gap-2">
          <button className="px-2 py-2 text-xs font-medium text-gray-600 sm:px-3 sm:text-sm">
            Sign In
          </button>

          <button className="brand-gradient rounded-full px-4 py-2 text-xs font-semibold text-white transition hover:opacity-90 sm:px-5 sm:text-sm">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-gray-100 bg-white px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <a
              href="#"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-pink-500"
            >
              Home
            </a>

            <a
              href="#technologies"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-gray-600"
            >
              Technologies
            </a>

            <a
              href="#projects"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-gray-600"
            >
              Projects
            </a>

            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-gray-600"
            >
              About
            </a>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-gray-600"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
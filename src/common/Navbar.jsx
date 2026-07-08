import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import logo from "../assets/logo.png";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdown(false);
      }
    };

    if (dropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdown]);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-yellow-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-5">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center"
          onClick={() => setMobileOpen(false)}
        >
          <img
            src={logo}
            alt="JG University"
            className="h-18 sm:h-20 lg:h-22 w-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-10 text-gray-800 font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-red-700 font-semibold"
                : "hover:text-red-700 duration-300"
            }
          >
            Home
          </NavLink>

          <NavLink to="/about" className="hover:text-red-700 duration-300">
            About
          </NavLink>

          <NavLink to="/speakers" className="hover:text-red-700 duration-300">
            KeyStone Speakers
          </NavLink>

          <NavLink to="/committees" className="hover:text-red-700 duration-300">
            Committees
          </NavLink>

          {/* Dropdown - Click Based */}
          <li className="relative list-none" ref={dropdownRef}>
            <button
              className="flex items-center gap-1 hover:text-red-700 transition-colors duration-300 text-gray-800 font-medium hover:font-semibold"
              onClick={toggleDropdown}
            >
              Call For Paper
              <MdArrowDropDown
                size={18}
                className={`transition-transform duration-500 ${dropdown ? "rotate-180" : ""}`}
              />
            </button>

            {/* Smooth Dropdown Menu */}
            <div
              className={`absolute top-12 left-0 bg-white rounded-xl shadow-2xl w-72 overflow-hidden z-40 transition-all duration-300 ease-in-out transform origin-top-left ${dropdown
                ? "opacity-100 visible scale-100 translate-y-0"
                : "opacity-0 invisible scale-95 -translate-y-3 pointer-events-none"
                }`}
            >
              <div className="bg-gradient-to-r from-red-700 to-red-600 text-white px-5 py-3">
                <p className="font-bold text-sm">Submission & Publication</p>
              </div>

              <NavLink
                to="/call-for-paper"
                className="block px-5 py-3 hover:bg-yellow-50 transition-colors duration-200 border-b border-gray-100 text-gray-800"
                onClick={() => setDropdown(false)}
              >
                Call For Papers
              </NavLink>

              <NavLink
                to="/guidelines"
                className="block px-5 py-3 hover:bg-yellow-50 transition-colors duration-200 border-b border-gray-100 text-gray-800"
                onClick={() => setDropdown(false)}
              >
                Guidelines
              </NavLink>

              <NavLink
                to="/submission"
                className="block px-5 py-3 hover:bg-yellow-50 transition-colors duration-200 border-b border-gray-100 text-gray-800"
                onClick={() => setDropdown(false)}
              >
                Submission
              </NavLink>

              {/* Fixed path capitalization mapping to match App.jsx routing */}
              <NavLink
                to="/impdates"
                className="block px-5 py-3 hover:bg-yellow-50 transition-colors duration-200 border-b border-gray-100 text-gray-800"
                onClick={() => setDropdown(false)}
              >
                Important Dates
              </NavLink>

              <NavLink
                to="/publication"
                className="block px-5 py-3 hover:bg-yellow-50 transition-colors duration-200 border-b border-gray-100 text-gray-800"
                onClick={() => setDropdown(false)}
              >
                Publication
              </NavLink>
            </div>
          </li>

          <NavLink to="/tracks" className="hover:text-red-700 duration-300">
            Tracks
          </NavLink>
        </ul>

        {/* Register Button */}
        <Link
          to="/registration"
          className="hidden lg:block bg-red-700 text-white px-7 py-3 rounded-lg hover:bg-yellow-500 hover:text-black duration-300"
        >
          Register Now
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-xl p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Container */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t max-h-[70vh] overflow-y-auto">
          <NavLink
            className="block px-6 py-4 border-b"
            to="/"
            onClick={() => setMobileOpen(false)}
          >
            Home
          </NavLink>

          <NavLink
            className="block px-6 py-4 border-b"
            to="/about"
            onClick={() => setMobileOpen(false)}
          >
            About
          </NavLink>

          <NavLink
            className="block px-6 py-4 border-b"
            to="/committees"
            onClick={() => setMobileOpen(false)}
          >
            Committees
          </NavLink>

          <NavLink
            className="block px-6 py-4 border-b"
            to="/call-for-paper"
            onClick={() => setMobileOpen(false)}
          >
            Call For Paper
          </NavLink>

          <NavLink
            className="block px-6 py-4 border-b"
            to="/impdates"
            onClick={() => setMobileOpen(false)}
          >
            Important Dates
          </NavLink>

          <NavLink
            className="block px-6 py-4 border-b"
            to="/guidelines"
            onClick={() => setMobileOpen(false)}
          >
            Guidelines
          </NavLink>

          <NavLink
            className="block px-6 py-4 border-b"
            to="/publication"
            onClick={() => setMobileOpen(false)}
          >
            Publication
          </NavLink>

          <NavLink
            className="block px-6 py-4 border-b"
            to="/tracks"
            onClick={() => setMobileOpen(false)}
          >
            Tracks
          </NavLink>

          <NavLink
            className="block px-6 py-4 border-b"
            to="/speakers"
            onClick={() => setMobileOpen(false)}
          >
            Speakers
          </NavLink>

          <NavLink
            className="block px-6 py-4 border-b"
            to="/paper-status"
            onClick={() => setMobileOpen(false)}
          >
            Paper Status
          </NavLink>
        </div>
      )}
    </header>
  );
}

export default Navbar;
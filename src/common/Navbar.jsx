import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import logo from "../assets/logo.png";

const CALL_FOR_PAPER_ROUTES = [
  "/call-for-paper",
  "/guidelines",
  "/submission",
  "/impDates",
  "/publication",
];

// shared classes for desktop links: red text + underline when active
const navLinkClasses = ({ isActive }) =>
  `pb-1 border-b-2 duration-300 ${isActive
    ? "text-red-700 font-semibold border-red-700"
    : "text-gray-800 border-transparent hover:text-red-700"
  }`;

// shared classes for mobile links
const mobileLinkClasses = ({ isActive }) =>
  `block px-6 py-4 border-b ${isActive
    ? "text-red-700 font-semibold bg-yellow-50 border-l-4 border-l-red-700"
    : "text-gray-800 border-gray-50"
  }`;

// shared classes for mobile submenu (Call For Paper accordion) links
const mobileSubLinkClasses = ({ isActive }) =>
  `block pl-11 pr-6 py-3 text-sm duration-300 ${isActive
    ? "text-red-700 font-semibold"
    : "text-gray-600 hover:text-red-700"
  }`;


function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [mobileCFPOpen, setMobileCFPOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const isCallForPaperActive = CALL_FOR_PAPER_ROUTES.includes(
    location.pathname
  );

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  // Close the mobile drawer whenever the route changes
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);
  const isHomeActive =
    location.pathname === "/" && location.hash !== "#about";

  const isAboutActive =
    location.pathname === "/" && location.hash === "#about";

  // Lock body scroll while the mobile drawer is open, and auto-expand
  // the Call For Paper accordion if the user is already on one of those pages
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      setMobileCFPOpen(isCallForPaperActive);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

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
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
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
          <Link
            to="/"
            className={`pb-1 border-b-2 duration-300 ${isHomeActive
              ? "text-red-700 font-semibold border-red-700"
              : "text-gray-800 border-transparent hover:text-red-700"
              }`}
          >
            Home
          </Link>

          <Link
            to="/#about"
            className={`pb-1 border-b-2 duration-300 ${isAboutActive
              ? "text-red-700 font-semibold border-red-700"
              : "text-gray-800 border-transparent hover:text-red-700"
              }`}
          >
            About
          </Link>

          <NavLink to="/speakers" className={navLinkClasses}>
            Speakers
          </NavLink>

          <NavLink to="/committees" className={navLinkClasses}>
            Committees
          </NavLink>

          {/* Dropdown - Click Based */}

          <li className="relative list-none" ref={dropdownRef}>
            <button
              className={`flex items-center gap-1 pb-1 border-b-2 duration-300 font-medium ${isCallForPaperActive
                ? "text-red-700 font-semibold border-red-700"
                : "text-gray-800 border-transparent hover:text-red-700"
                }`}
              onClick={toggleDropdown}
            >
              Call For Paper
              <MdArrowDropDown
                size={18}
                className={`transition-transform duration-500 ${dropdown ? "rotate-180" : ""}`}
              />
            </button>

            {/* Smooth Dropdown Menu - Click Based */}
            <div
              className={`absolute top-12 left-0 bg-white rounded-xl shadow-2xl w-72 overflow-hidden z-40 transition-all duration-300 ease-in-out transform origin-top-left ${dropdown
                ? "opacity-100 visible scale-100 translate-y-0"
                : "opacity-0 invisible scale-95 -translate-y-3 pointer-events-none"
                }`}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-red-700 to-red-600 text-white px-5 py-3">
                <p className="font-bold text-sm">Submission & Publication</p>
              </div>

              <NavLink
                to="/call-for-paper"
                className="block px-5 py-3 hover:bg-yellow-50 transition-colors duration-200 border-b border-gray-100 text-gray-800"
                onClick={() => {
                  setDropdown(false);
                }}
              >
                Call For Papers
              </NavLink>

              <NavLink
                to="/guidelines"
                className="block px-5 py-3 hover:bg-yellow-50 transition-colors duration-200 border-b border-gray-100 text-gray-800"
                onClick={() => {
                  setDropdown(false);
                }}
              >
                Guidelines
              </NavLink>

              <NavLink
                to="/submission"
                className="block px-5 py-3 hover:bg-yellow-50 transition-colors duration-200 border-b border-gray-100 text-gray-800"
                onClick={() => {
                  setDropdown(false);
                }}
              >
                Submission
              </NavLink>

              <NavLink
                to="/impDates"
                className="block px-5 py-3 hover:bg-yellow-50 transition-colors duration-200 border-b border-gray-100 text-gray-800"
                onClick={() => {
                  setDropdown(false);
                }}
              >
                Important Dates
              </NavLink>

              <NavLink
                to="/publication"
                className="block px-5 py-3 hover:bg-yellow-50 transition-colors duration-200 border-b border-gray-100 text-gray-800"
                onClick={() => {
                  setDropdown(false);
                }}
              >
                Publication
              </NavLink>
            </div>
          </li>

          <NavLink to="/tracks" className={navLinkClasses}>
            Tracks
          </NavLink>
        </ul>

        {/* Button */}

        <Link
          to="/registration"
          className="hidden lg:block bg-red-700 text-white px-7 py-3 rounded-lg hover:bg-yellow-500 hover:text-black duration-300"
        >
          Register Now
        </Link>

        {/* Mobile */}

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-full text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors duration-300"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
        </button>
      </div>

      {/* Mobile Menu Backdrop */}
      <div
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
        className={`lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
      />

      {/* Mobile Menu Drawer */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-50 shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out ${mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 flex-shrink-0">
          <img src={logo} alt="JG University" className="h-12 w-auto" />
          <button
            onClick={() => setMobileOpen(false)}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-700 transition-colors duration-300"
            aria-label="Close menu"
          >
            <FaTimes size={16} />
          </button>
        </div>

        {/* Drawer Links */}
        <nav className="flex-1 overflow-y-auto">
          <Link
            to="/"
            onClick={() => setMobileOpen(false)}
            className={`block px-6 py-4 border-b ${isHomeActive
              ? "text-red-700 font-semibold bg-yellow-50 border-l-4 border-l-red-700"
              : "text-gray-800 border-gray-50"
              }`}
          >
            Home
          </Link>

          <Link
            to="/#about"
            onClick={() => setMobileOpen(false)}
            className={`block px-6 py-4 border-b ${isAboutActive
                ? "text-red-700 font-semibold bg-yellow-50 border-l-4 border-l-red-700"
                : "text-gray-800 border-gray-50"
              }`}
          >
            About
          </Link>
          <NavLink className={mobileLinkClasses} to="/speakers">
            Speakers
          </NavLink>

          <NavLink className={mobileLinkClasses} to="/committees">
            Committees
          </NavLink>

          {/* Call For Paper accordion */}
          <div className="border-b border-gray-50">
            <button
              onClick={() => setMobileCFPOpen(!mobileCFPOpen)}
              className={`w-full flex items-center justify-between px-6 py-4 text-base duration-300 ${isCallForPaperActive
                ? "text-red-700 font-semibold bg-yellow-50"
                : "text-gray-800 font-medium hover:bg-gray-50"
                }`}
              aria-expanded={mobileCFPOpen}
            >
              Call For Paper
              <FaChevronDown
                size={12}
                className={`text-gray-400 transition-transform duration-300 ${mobileCFPOpen ? "rotate-180 text-red-700" : ""
                  }`}
              />
            </button>

            <div
              className={`overflow-hidden bg-gray-50/70 transition-all duration-300 ease-in-out ${mobileCFPOpen ? "max-h-96" : "max-h-0"
                }`}
            >
              <NavLink className={mobileSubLinkClasses} to="/call-for-paper">
                Call For Papers
              </NavLink>
              <NavLink className={mobileSubLinkClasses} to="/guidelines">
                Guidelines
              </NavLink>
              <NavLink className={mobileSubLinkClasses} to="/submission">
                Submission
              </NavLink>
              <NavLink className={mobileSubLinkClasses} to="/impDates">
                Important Dates
              </NavLink>
              <NavLink className={mobileSubLinkClasses} to="/publication">
                Publication
              </NavLink>
            </div>
          </div>

          <NavLink className={mobileLinkClasses} to="/tracks">
            Tracks
          </NavLink>
        </nav>

        {/* Drawer Footer CTA */}
        <div className="p-6 border-t border-gray-100 flex-shrink-0">
          <Link
            to="/registration"
            onClick={() => setMobileOpen(false)}
            className="block w-full text-center bg-red-700 text-white font-semibold py-3.5 rounded-lg hover:bg-yellow-500 hover:text-black transition-colors duration-300"
          >
            Register Now
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
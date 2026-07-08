import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { MdMailOutline, MdPhone, MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
function Footer() {
  return (
    <footer className="bg-red-900 text-white mt-20">
      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-4 md:grid-cols-2 gap-12">
        {/* Logo */}
        <div>
          <img
            src={logo}
            alt="JG University"
            className="w-56 bg-white rounded-lg p-2"
          />
          <p className="mt-6 text-gray-200 leading-7">
            International Conference on Smart Innovation for
            Sustainable Development Goals (ICSISDG 2026).
            Bringing together researchers,
            academicians and industry professionals from
            around the globe.
          </p>
        </div>
        {/* Quick Links */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-400 mb-6">
            Quick Links
          </h2>
          <ul className="space-y-3">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/committees">Committees</Link></li>
            <li><Link to="/tracks">Core Tracks</Link></li>
            <li><Link to="/speakers">Speakers</Link></li>
            <li><Link to="/registration">Registration</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        {/* Conference */}

        <div>
          <h2 className="text-2xl font-bold text-yellow-400 mb-6">
            Conference
          </h2>
          <ul className="space-y-3">
            <li><Link to="/guidelines">Guidelines</Link></li>
            <li><Link to="/review-process">Review Process</Link></li>
            <li><Link to="/publication">Publication</Link></li>
            <li><Link to="/downloads">Downloads</Link></li>
            <li><Link to="/paper-status">Paper Status</Link></li>
          </ul>
        </div>
        {/* Contact */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-400 mb-6">
            Contact Us
          </h2>
          <div className="space-y-5">
            <div className="flex gap-3">
              <MdLocationOn className="text-yellow-400 text-xl" />
              <p>
                JG University,
                Ahmedabad,
                Gujarat,
                India
              </p>
            </div>
            <div className="flex gap-3">
              <MdPhone className="text-yellow-400 text-xl" />
              <p>+91 9876543210</p>
            </div>
            <div className="flex gap-3">

              <MdMailOutline className="text-yellow-400 text-xl" />

              <p>conference@jgu.edu.in</p>

            </div>
          </div>
        </div>
      </div>
      {/* Divider */}

      <div className="border-t border-red-700"></div>

      {/* Bottom Footer */}

      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-300 text-center">
          © 2026 JG University |
          International Conference |
          All Rights Reserved.
        </p>
        {/* Social */}
        <div className="flex gap-4 mt-5 md:mt-0">
          <a
            href="#"
            className="bg-white p-2 rounded-full text-red-700 hover:bg-yellow-400 duration-300"
          >
            <FaGithub size={20} />
          </a>

          <a
            href="#"
            className="bg-white p-2 rounded-full text-red-700 hover:bg-yellow-400 duration-300"
          >
            <FaInstagram size={20} />
          </a>

          <a
            href="#"
            className="bg-white p-2 rounded-full text-red-700 hover:bg-yellow-400 duration-300"
          >
            <FaLinkedin size={20} />
          </a>

          <a
            href="#"
            className="bg-white p-2 rounded-full text-red-700 hover:bg-yellow-400 duration-300"
          >
            <FaYoutube size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
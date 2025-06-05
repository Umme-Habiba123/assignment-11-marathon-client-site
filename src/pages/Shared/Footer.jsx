import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="bg-[#FDF4FF] text-[#4B3F72] px-6 py-12 border-t border-purple-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo & Description */}
        <div>
          <h1 className="text-3xl font-bold edu-nsw-act-cursive-font">
            Race<span className="text-purple-400">Clock</span>
          </h1>
          <p className="mt-3 text-sm fira-sans-extralight text-purple-500">
            A lightweight platform for marathon registration, timing & tracking – made for real racers.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
          <ul className="space-y-2 text-sm text-purple-500 fira-sans-extralight">
            <li><Link to="/">🏁 Home</Link></li>
            <li><Link to="/about">📘 About</Link></li>
            <li><Link to="/races">🕒 Races</Link></li>
            <li><Link to="/contact">📬 Contact</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-semibold mb-2 fira-sans-extralight">Stay Connected</h2>
          <div className="flex space-x-4 text-purple-400 text-xl">
            <a target="_blank" href="https://www.facebook.com/mahiya.rahman.540132/"><FaFacebookF /></a>
            <a target="_blank" href="https://www.instagram.com/mahiya_mimu/"><FaInstagram /></a>
            <a target="_blank" href="https://x.com/mahiya_rehman"><FaTwitter /></a>

            <a target="_blank" href="https://www.linkedin.com/in/mahiya-rehman-mim-a9b3a7210/"><CiLinkedin size={25}/></a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-sm text-purple-400 fira-sans-extralight">
          <p>© {new Date().getFullYear()} <span className="edu-nsw-act-cursive-font font-bold">RaceClock.</span> All rights reserved.</p>
          <p className="mt-2">Run softly, run far 🏃‍♀️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

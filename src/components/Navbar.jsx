import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Facebook, Twitter, Youtube } from "lucide-react";

// Do NOT change
const navLinks = [
  { name: "Home", href: "/" },
  { name: "About SAN", href: "/about" },
  { name: "Our Work", href: "/ourwork" },
  { name: "Network Member ", href: "/network-members" },
  { name: "Product Evaluation", href: "product" },
  { name: "Impact", href: "/impact" },
  { name: "Resources", href: "/resource" },
  { name: "Contact Us", href: "/contact" },
];

const SocialIcons = () => (
  <div className="flex space-x-2">
    <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-[#122e18] flex items-center justify-center">
      <Facebook size={20} className="text-white" />
    </a>
    <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full bg-[#122e18] flex items-center justify-center">
      <Twitter size={20} className="text-white" />
    </a>
    <a href="#" aria-label="Youtube" className="w-10 h-10 rounded-full bg-[#122e18] flex items-center justify-center">
      <Youtube size={20} className="text-white" />
    </a>
  </div>
);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [atTop, setAtTop] = useState(true);
  const lastY = useRef(0);
  const ticking = useRef(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    lastY.current = window.scrollY;

    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      window.requestAnimationFrame(() => {
        const currentY = window.scrollY;
        const delta = currentY - lastY.current;

        // Show when scrolling up, hide when scrolling down
        if (Math.abs(delta) > 6) {
          if (delta > 0) {
            setVisible(false); // scrolling down
          } else {
            setVisible(true); // scrolling up
          }
        }

        setAtTop(currentY < 10);
        lastY.current = currentY;
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  const chromeClasses = atTop
    ? "bg-prime"
    : "bg-prime backdrop-blur border-b border-white/10 shadow-sm";

  return (
    <nav
      className={[
        "fixed z-50 w-full md:px-10 top-0 h-20 transition-transform duration-300 ease-out",
        visible ? "translate-y-0" : "-translate-y-full",
        chromeClasses,
      ].join(" ")}
    >
      <div className="mx-auto max-w-[1600px] flex justify-between items-center h-full px-4 md:px-2">
        {/* Left - Logo */}
        <Link to="/" className="flex items-center">
          <div className="mr-2 p-4 flex items-center justify-center">
            <img className="w-28 h-22" src="/1000102584-removebg-preview (1).png" alt="SAN logo" />
          </div>
        </Link>

        {/* Center - NavLinks (hide on mobile) */}
        <ul className="hidden md:flex items-center space-x-8 font-medium text-base text-white h-full">
          {navLinks.map((link) => (
            <li key={link.name} className="h-full flex items-center">
              <Link
                to={link.href}
                className="flex items-center font-parkinsans h-full transition-colors duration-150 hover:text-green-200 px-1"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right - Social Icons and CTA (hide on mobile) */}
        <div className="hidden md:flex items-center space-x-4 h-full">
          {/* <SocialIcons /> */}
          <button className="ml-4 bg-yellow-400 tracking-wide font-parkinsans text-white cursor-pointer font-semibold text-md rounded py-2 px-10 transition-colors hover:bg-green-700">
            Login
          </button>
        </div>

        {/* Hamburger Menu Button (mobile only) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none z-50"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={[
          "md:hidden bg-white shadow-sm border-t absolute left-0 w-full transition-[max-height,opacity] duration-300 ease-out overflow-hidden",
          menuOpen ? "top-20 max-h-[70vh] opacity-100" : "top-20 max-h-0 opacity-0",
        ].join(" ")}
      >
        <ul className="flex flex-col space-y-2 px-4 py-4 font-medium text-gray-800">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.href}
                className="block py-2 px-2 hover:text-green-700 transition-colors duration-150"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li className="mt-4">
            <Link
              to="/quote"
              className="block bg-green-700 text-white text-center font-semibold text-base rounded py-3 transition-colors hover:bg-green-800"
            >
              Get A Quote
            </Link>
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;

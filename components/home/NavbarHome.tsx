"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  variant?: "transparent" | "solid";
}

const Navbar: React.FC<NavbarProps> = ({ variant = "solid" }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle scroll for navbar background transition and visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Update scrolled state for background change
      setIsScrolled(currentScrollY > 20);

      // Show navbar when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "unset";
      document.body.style.position = "unset";
      document.body.style.width = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.position = "unset";
      document.body.style.width = "unset";
    };
  }, [isMobileMenuOpen]);

  // Navigation links configuration - easily customizable
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/programs", label: "Programs" },
    { href: "/faculty", label: "Faculty" },
    { href: "/facilities", label: "Facilities" },
    { href: "/admissions", label: "Admissions" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  // Dynamic navbar background based on scroll and variant
  const navbarBg =
    variant === "transparent" && !isScrolled
      ? "bg-transparent"
      : "bg-white/90 backdrop-blur-md shadow-md";

  const textColor =
    variant === "transparent" && !isScrolled ? "text-white" : "text-primary";

  const logoFilter =
    variant === "transparent" && !isScrolled ? "brightness-0 invert" : "";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navbarBg} ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo Section */}
          <Link
            href="/"
            className="flex items-center space-x-3 z-[70]"
            aria-label="IMCG-Humak Home"
          >
            {/* Logo Image */}
            <Image
              src="/logo.png"
              alt="IMCG-Humak"
              width={60}
              height={60}
              className={`transition-all duration-300 my-1 sm:my-2 ${logoFilter}`}
              priority
            />
            {/* Title Text */}
            <div
              className={`text-base md:text-xl lg:text-2xl font-bold ${textColor} transition-colors duration-300`}
            >
              <span className="text-gradient-brand">IMCG, Humak</span>
            </div>
          </Link>

          {/* Desktop Navigation Links - Right-Center */}
          <ul className="hidden md:flex items-center space-x-1 lg:space-x-1.5 ml-auto mr-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`px-2.5 lg:px-3 py-2 rounded-lg text-sm lg:text-base font-medium transition-all duration-200 
                    ${textColor} hover:bg-gray-100 hover-text-primary focus-ring-primary`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            {/* Desktop CTA Button */}
            <Link
              href="/get-started"
              className="hidden md:inline-flex items-center px-5 py-2 bg-gradient-brand 
                text-white text-sm font-semibold rounded-full hover:bg-gradient-brand-hover 
                transition-all duration-300 transform hover:scale-105 focus-ring-accent 
                shadow-lg hover:shadow-xl"
              aria-label="Get started with IMCG-Humak"
            >
              Get Started
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg transition-colors duration-200 focus-ring-primary 
                text-primary hover:bg-gray-100 relative z-[60]"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ top: 0, height: "100vh" }}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="flex flex-col h-full pt-20 px-6 pb-6 overflow-y-auto">
          {/* Mobile Navigation Links */}
          <ul className="space-y-2 mb-8" role="menu">
            {navLinks.map((link) => (
              <li key={link.href} role="none">
                <Link
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-lg font-medium text-primary hover:bg-gray-100 
                    hover-text-primary rounded-lg transition-colors duration-200 focus-ring-primary"
                  role="menuitem"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile CTA Button */}
          <Link
            href="/get-started"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center justify-center px-6 py-3 bg-gradient-brand 
              text-white font-semibold rounded-full hover:bg-gradient-brand-hover 
              transition-all duration-300 shadow-lg text-lg focus-ring-accent"
            aria-label="Get started with IMCG-Humak"
          >
            Get Started
          </Link>

          {/* Optional: Login/Signup Links for Mobile */}
          <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
            <Link
              href="/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-center px-4 py-2 text-gray-600 font-medium hover-text-primary 
                transition-colors duration-200"
            >
              Login
            </Link>
            <Link
              href="/signup"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-center px-4 py-2 border-2 border-current text-primary 
                font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Menu, X } from "lucide-react";

// interface NavbarProps {
//   variant?: "transparent" | "solid";
// }

// const Navbar: React.FC<NavbarProps> = ({ variant = "solid" }) => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isVisible, setIsVisible] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   // Handle scroll for navbar background transition and visibility
//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;

//       // Update scrolled state for background change
//       setIsScrolled(currentScrollY > 20);

//       // Show navbar when scrolling up, hide when scrolling down
//       if (currentScrollY < lastScrollY || currentScrollY < 100) {
//         setIsVisible(true);
//       } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
//         setIsVisible(false);
//       }

//       setLastScrollY(currentScrollY);
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY]);

//   // Prevent body scroll when mobile menu is open
//   useEffect(() => {
//     if (isMobileMenuOpen) {
//       document.body.style.overflow = "hidden";
//       document.body.style.position = "fixed";
//       document.body.style.width = "100%";
//     } else {
//       document.body.style.overflow = "unset";
//       document.body.style.position = "unset";
//       document.body.style.width = "unset";
//     }
//     return () => {
//       document.body.style.overflow = "unset";
//       document.body.style.position = "unset";
//       document.body.style.width = "unset";
//     };
//   }, [isMobileMenuOpen]);

//   // Navigation links configuration - easily customizable
//   const navLinks = [
//     { href: "/", label: "Home" },
//     { href: "/programs", label: "Programs" },
//     { href: "/faculty", label: "Faculty" },
//     { href: "/facilities", label: "Facilities" },
//     { href: "/admissions", label: "Admissions" },
//     { href: "/about", label: "About" },
//     { href: "/contact", label: "Contact" },
//   ];

//   // Dynamic navbar background based on scroll and variant
//   const navbarBg =
//     variant === "transparent" && !isScrolled
//       ? "bg-transparent"
//       : "bg-white/90 backdrop-blur-md shadow-md";

//   const textColor =
//     variant === "transparent" && !isScrolled ? "text-white" : "text-primary";

//   const logoFilter =
//     variant === "transparent" && !isScrolled ? "brightness-0 invert" : "";

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navbarBg} ${
//         isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
//       }`}
//       role="navigation"
//       aria-label="Main navigation"
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16 md:h-20">
//           {/* Logo Section */}
//           <Link
//             href="/"
//             className="flex items-center space-x-3 z-50"
//             aria-label="IMCG-Humak Home"
//           >
//             {/* Logo Image */}
//             <Image
//               src="/logo.png"
//               alt="IMCG-Humak"
//               width={60}
//               height={60}
//               className={`transition-all duration-300 my-1 sm:my-2 ${logoFilter}`}
//               priority
//             />
//             {/* Title Text */}
//             <div
//               className={`text-base md:text-xl lg:text-2xl font-bold ${textColor} transition-colors duration-300`}
//             >
//               <span className="text-gradient-brand">IMCG, Humak</span>
//             </div>
//           </Link>

//           {/* Desktop Navigation Links - Right-Center */}
//           <ul className="hidden md:flex items-center space-x-1 lg:space-x-1.5 ml-auto mr-3">
//             {navLinks.map((link) => (
//               <li key={link.href}>
//                 <Link
//                   href={link.href}
//                   className={`px-2.5 lg:px-3 py-2 rounded-lg text-sm lg:text-base font-medium transition-all duration-200
//                     ${textColor} hover:bg-gray-100 hover-text-primary focus-ring-primary`}
//                 >
//                   {link.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>

//           {/* CTA Button & Mobile Menu Toggle */}
//           <div className="flex items-center space-x-4">
//             {/* Desktop CTA Button */}
//             <Link
//               href="/get-started"
//               className="hidden md:inline-flex items-center px-5 py-2 bg-gradient-brand
//                 text-white text-sm font-semibold rounded-full hover:bg-gradient-brand-hover
//                 transition-all duration-300 transform hover:scale-105 focus-ring-accent
//                 shadow-lg hover:shadow-xl"
//               aria-label="Get started with IMCG-Humak"
//             >
//               Get Started
//             </Link>

//             {/* Mobile Menu Toggle Button */}
//             <button
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className="md:hidden p-2 rounded-lg transition-colors duration-200 focus-ring-primary
//                 text-primary hover:bg-gray-100 relative z-[60]"
//               aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
//               aria-expanded={isMobileMenuOpen}
//               aria-controls="mobile-menu"
//             >
//               {isMobileMenuOpen ? (
//                 <X className="h-6 w-6" aria-hidden="true" />
//               ) : (
//                 <Menu className="h-6 w-6" aria-hidden="true" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu Overlay */}
//       <div
//         id="mobile-menu"
//         className={`md:hidden fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
//           isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//         style={{ top: 0, height: "100vh" }}
//         aria-hidden={!isMobileMenuOpen}
//       >
//         <div className="flex flex-col h-full pt-20 px-6 pb-6 overflow-y-auto">
//           {/* Mobile Navigation Links */}
//           <ul className="space-y-2 mb-8" role="menu">
//             {navLinks.map((link) => (
//               <li key={link.href} role="none">
//                 <Link
//                   href={link.href}
//                   onClick={() => setIsMobileMenuOpen(false)}
//                   className="block px-4 py-3 text-lg font-medium text-primary hover:bg-gray-100
//                     hover-text-primary rounded-lg transition-colors duration-200 focus-ring-primary"
//                   role="menuitem"
//                 >
//                   {link.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>

//           {/* Mobile CTA Button */}
//           <Link
//             href="/get-started"
//             onClick={() => setIsMobileMenuOpen(false)}
//             className="flex items-center justify-center px-6 py-3 bg-gradient-brand
//               text-white font-semibold rounded-full hover:bg-gradient-brand-hover
//               transition-all duration-300 shadow-lg text-lg focus-ring-accent"
//             aria-label="Get started with IMCG-Humak"
//           >
//             Get Started
//           </Link>

//           {/* Optional: Login/Signup Links for Mobile */}
//           <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
//             <Link
//               href="/login"
//               onClick={() => setIsMobileMenuOpen(false)}
//               className="block text-center px-4 py-2 text-gray-600 font-medium hover-text-primary
//                 transition-colors duration-200"
//             >
//               Login
//             </Link>
//             <Link
//               href="/signup"
//               onClick={() => setIsMobileMenuOpen(false)}
//               className="block text-center px-4 py-2 border-2 border-current text-primary
//                 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200"
//             >
//               Sign Up
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

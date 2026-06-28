import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

  const handleNavClick = () => setMenuOpen(false);

  return (
    <>
      <motion.nav
        className={`navbar sketch-box ${scrolled ? "glass" : ""}`}
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="logo">Sanket Raj</h2>

        {/* Desktop Links */}
        <div className="nav-links desktop-links">
          {navItems.map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ y: -2, rotate: -1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.a>
          ))}
        </div>

        {/* Hamburger Button (mobile only) */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <motion.span
            className="ham-line"
            animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="ham-line"
            animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="ham-line"
            animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
        </button>
      </motion.nav>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              className="mobile-menu sketch-box"
              initial={{ opacity: 0, y: -10, rotate: 0 }}
              animate={{ opacity: 1, y: 0, rotate: -0.5 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {navItems.map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="mobile-nav-link"
                  onClick={handleNavClick}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.25 }}
                  whileHover={{ x: 6, color: "var(--blue)" }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="mobile-nav-number">0{i + 1}.</span>
                  {item}
                </motion.a>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { navLinks, company } from "../../data/content";
import { Button } from "../ui/Button";

const navLinkVariants = {
  hover: { scale: 1.05, transition: { type: "spring" as const, stiffness: 300, damping: 15 } },
  tap: { scale: 0.95 },
};

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  const handleLogoClick = (e: React.MouseEvent) => {
    if (isHome) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const navBg =
    scrolled || !isHome
      ? "glass-light shadow-lg shadow-navy/5"
      : "bg-navy/60 backdrop-blur-sm border-b border-white/10";

  const textColor = scrolled || !isHome ? "text-navy" : "text-white";

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${navBg}`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <Link to="/" onClick={handleLogoClick} className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt={`${company.name} logo`}
            className="h-10 w-auto md:h-12"
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <motion.div
              key={link.path}
              variants={navLinkVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Link
                to={link.path}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-teal ${textColor} ${
                  location.pathname === link.path ? "text-teal" : ""
                }`}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="hidden md:block">
          <Link to="/contact">
            <Button variant={scrolled || !isHome ? "primary" : "ghost"}>
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <button
          type="button"
          className={`md:hidden ${textColor}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="glass-light border-t border-teal/10 md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-base font-medium ${
                    location.pathname === link.path
                      ? "text-teal"
                      : "text-navy"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/contact">
                <Button variant="primary" className="w-full">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

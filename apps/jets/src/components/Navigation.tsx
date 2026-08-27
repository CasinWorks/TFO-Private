import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

const LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'specialty', label: 'Our Specialty' },
  { id: 'team', label: 'Our Team' },
] as const;

interface NavigationProps {
  activeView?: 'home' | 'about';
  onGoHome: () => void;
  onOpenAbout: () => void;
  onOpenContact: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  activeView = 'home',
  onGoHome,
  onOpenAbout,
  onOpenContact,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    if (activeView !== 'home') {
      onGoHome();
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 80);
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#080B0E]/80 backdrop-blur-xl border-b border-white/8 py-3.5'
            : 'bg-transparent py-5 sm:py-6'
        }`}
      >
        <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 flex items-center justify-between">
          <button
            type="button"
            onClick={() => {
              setMobileOpen(false);
              onGoHome();
            }}
            className="text-left cursor-pointer group"
          >
            <span className="font-serif-luxury text-2xl sm:text-[1.75rem] font-semibold tracking-[0.18em] text-white leading-none group-hover:text-[#C5A880] transition-colors">
              TFO
            </span>
            <span className="block text-[9px] sm:text-[10px] font-sans tracking-[0.4em] text-[#C5A880] uppercase font-light leading-tight mt-1">
              Jets
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-[11px] tracking-[0.2em] font-medium text-slate-300/90 uppercase">
            {LINKS.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => scrollTo(link.id)}
                className="relative hover:text-white transition-colors cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-[#C5A880] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onOpenAbout();
              }}
              className={`relative hover:text-white transition-colors cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-px after:bg-[#C5A880] after:transition-all after:duration-300 ${
                activeView === 'about' ? 'text-[#C5A880] after:w-full' : 'after:w-0 hover:after:w-full'
              }`}
            >
              About
            </button>
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onOpenContact();
              }}
              className="hidden sm:inline-flex bg-[#C5A880] hover:bg-[#d6ba94] text-[#080B0E] font-semibold text-[11px] tracking-[0.2em] uppercase px-5 py-2.5 transition-colors cursor-pointer"
            >
              Contact
            </button>
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-white p-1.5"
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#080B0E]/98 backdrop-blur-xl pt-28 px-8 md:hidden"
          >
            <div className="space-y-8 text-sm tracking-[0.22em] uppercase text-slate-200">
              {LINKS.map((link, i) => (
                <motion.button
                  key={link.id}
                  type="button"
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  onClick={() => scrollTo(link.id)}
                  className="block w-full text-left hover:text-[#C5A880] text-xl font-serif-luxury tracking-normal normal-case"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                type="button"
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * LINKS.length }}
                onClick={() => {
                  setMobileOpen(false);
                  onOpenAbout();
                }}
                className="block w-full text-left hover:text-[#C5A880] text-xl font-serif-luxury tracking-normal normal-case"
              >
                About Us
              </motion.button>
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  onOpenContact();
                }}
                className="inline-flex mt-4 bg-[#C5A880] text-[#080B0E] font-semibold tracking-[0.2em] uppercase px-6 py-3"
              >
                Contact us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

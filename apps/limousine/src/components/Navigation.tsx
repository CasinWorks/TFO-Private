import React, { useEffect, useState } from 'react';
import { Menu, X, Lock } from 'lucide-react';
import { SiteNavLinks } from './SiteNavLinks';

interface NavigationProps {
  activeView?: 'home' | 'about';
  onOpenBooking: () => void;
  onOpenEnquiry: (topic?: string) => void;
  onOpenStaff: () => void;
  staffSignedIn: boolean;
  onGoHome: () => void;
  onOpenAbout: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  activeView = 'home',
  onOpenBooking,
  onOpenEnquiry,
  onOpenStaff,
  staffSignedIn,
  onGoHome,
  onOpenAbout,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    onGoHome();
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#080B0E]/95 backdrop-blur-md border-b border-white/10 py-4'
            : 'bg-gradient-to-b from-[#080B0E]/90 via-[#080B0E]/40 to-transparent py-5 sm:py-6'
        }`}
      >
        <div className="site-shell flex items-center justify-between">
          <button
            type="button"
            onClick={onGoHome}
            className="text-left group flex items-center space-x-3.5 sm:space-x-4"
          >
            <div className="flex flex-col">
              <span className="font-serif-luxury text-xl sm:text-2xl font-semibold tracking-[0.12em] text-white leading-none">
                ICELAND
              </span>
              <span className="text-[9px] sm:text-[10px] font-sans tracking-[0.35em] text-white uppercase font-light leading-tight mt-0.5">
                LIMOUSINE
              </span>
            </div>
            <div className="h-6 w-px bg-white/20 hidden sm:block" />
            <span className="hidden sm:block text-[10px] sm:text-[11px] font-sans font-medium tracking-[0.22em] text-[#C5A880] uppercase">
              Luxury Ground Transport
            </span>
          </button>

          <nav className="hidden md:flex items-center space-x-7 lg:space-x-9 text-xs tracking-[0.22em] font-medium text-slate-300 uppercase">
            <button onClick={() => scrollTo('fleet')} className="hover:text-[#C5A880] transition-colors cursor-pointer">
              Fleet
            </button>
            <button onClick={() => scrollTo('tours')} className="hover:text-[#C5A880] transition-colors cursor-pointer">
              Tours
            </button>
            <button onClick={() => scrollTo('services')} className="hover:text-[#C5A880] transition-colors cursor-pointer">
              Services
            </button>
            <button
              onClick={() => {
                setMobileOpen(false);
                onOpenAbout();
              }}
              className={`hover:text-[#C5A880] transition-colors cursor-pointer ${
                activeView === 'about' ? 'text-[#C5A880]' : ''
              }`}
            >
              About
            </button>
            <SiteNavLinks variant="nav" />
            <button
              onClick={onOpenStaff}
              className="hover:text-[#C5A880] transition-colors cursor-pointer inline-flex items-center gap-1.5 text-slate-500"
              title="Staff only"
            >
              <Lock className="w-3 h-3" />
              {staffSignedIn ? 'Inquiries' : 'Staff'}
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={onOpenBooking}
              className="bg-[#C5A880] hover:bg-[#d6ba94] text-[#080B0E] font-semibold text-xs tracking-[0.2em] uppercase px-5 sm:px-6 py-2.5 transition-all cursor-pointer"
            >
              Book
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-white p-1.5"
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[#080B0E]/98 pt-28 px-6 md:hidden">
          <div className="space-y-6 text-sm tracking-[0.2em] uppercase text-slate-200">
            <button onClick={() => scrollTo('fleet')} className="block w-full text-left hover:text-[#C5A880]">
              Fleet
            </button>
            <button onClick={() => scrollTo('tours')} className="block w-full text-left hover:text-[#C5A880]">
              Tours
            </button>
            <button onClick={() => scrollTo('services')} className="block w-full text-left hover:text-[#C5A880]">
              Services
            </button>
            <button
              onClick={() => {
                setMobileOpen(false);
                onOpenAbout();
              }}
              className="block w-full text-left hover:text-[#C5A880]"
            >
              About Us
            </button>
            <button
              onClick={() => {
                setMobileOpen(false);
                onOpenEnquiry('Iceland Limousine Concierge');
              }}
              className="block w-full text-left hover:text-[#C5A880]"
            >
              Concierge
            </button>
            <button
              onClick={() => {
                setMobileOpen(false);
                onOpenStaff();
              }}
              className="block w-full text-left hover:text-[#C5A880] inline-flex items-center gap-2"
            >
              <Lock className="w-3.5 h-3.5" />
              {staffSignedIn ? 'Inquiries' : 'Staff login'}
            </button>
            <div className="pt-4 border-t border-white/10 space-y-4">
              <SiteNavLinks variant="mobile" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

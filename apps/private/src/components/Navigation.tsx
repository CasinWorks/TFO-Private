import React, { useState, useEffect } from 'react';
import { ActiveDivision } from '../types';
import { Menu, X } from 'lucide-react';
import { SiteNavLinks } from './SiteNavLinks';

interface NavigationProps {
  activeDivision: ActiveDivision;
  goDivision: (division: ActiveDivision) => void;
  onOpenEnquiry: (serviceHint?: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  activeDivision,
  goDivision,
  onOpenEnquiry,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const scrollToJourneys = () => {
    setMobileMenuOpen(false);
    if (activeDivision !== 'parent') {
      goDivision('parent');
      setTimeout(() => {
        document.getElementById('journeys-section')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById('journeys-section')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goPortal = () => {
    setMobileMenuOpen(false);
    goDivision('parent');
  };

  const goAbout = () => {
    setMobileMenuOpen(false);
    goDivision('about');
  };

  const openContact = () => {
    setMobileMenuOpen(false);
    onOpenEnquiry('General Contact');
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#080B0E]/95 backdrop-blur-md border-b border-white/10 shadow-2xl py-4'
            : 'bg-gradient-to-b from-[#080B0E]/90 via-[#080B0E]/40 to-transparent py-5 sm:py-6'
        }`}
      >
        <div className="site-shell flex items-center justify-between">
          <button
            id="brand-logo-button"
            type="button"
            onClick={goPortal}
            className="text-left group flex items-center space-x-3.5 sm:space-x-4 cursor-pointer focus:outline-none"
          >
            <div className="flex flex-col">
              <span className="font-serif-luxury text-2xl sm:text-3xl font-semibold tracking-[0.15em] text-white leading-none">
                TFO
              </span>
              <span className="text-[9px] sm:text-[10px] font-sans tracking-[0.35em] text-white uppercase font-light leading-tight mt-0.5">
                PRIVATE
              </span>
            </div>
            <div className="h-6 w-px bg-white/20 hidden sm:block" />
            <div className="hidden sm:block">
              <span className="text-[10px] sm:text-[11px] font-sans font-medium tracking-[0.22em] text-[#C5A880] uppercase block">
                PRIVATE AVIATION &amp; LUXURY TRAVEL
              </span>
            </div>
          </button>

          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-xs tracking-[0.22em] font-medium text-slate-300 uppercase">
            <SiteNavLinks variant="nav" onGoPortal={goPortal} portalActive={activeDivision === 'parent'} />
            <span className="w-px h-4 bg-white/15" aria-hidden />
            <button
              id="nav-link-journeys"
              type="button"
              onClick={scrollToJourneys}
              className="hover:text-[#C5A880] transition-colors cursor-pointer"
            >
              Journeys
            </button>
            <button
              id="nav-link-about"
              type="button"
              onClick={goAbout}
              className={`hover:text-[#C5A880] transition-colors cursor-pointer ${
                activeDivision === 'about' ? 'text-[#C5A880]' : ''
              }`}
            >
              About
            </button>
            <button
              id="nav-link-contact"
              type="button"
              onClick={openContact}
              className="hover:text-[#C5A880] transition-colors cursor-pointer"
            >
              Contact
            </button>
          </nav>

          <div className="flex items-center space-x-4 sm:space-x-5">
            <button
              id="nav-enquire-gold-btn"
              type="button"
              onClick={() => onOpenEnquiry('Runway to Road VIP Inquiry')}
              className="hidden sm:inline-flex bg-[#C5A880] hover:bg-[#d6ba94] text-[#080B0E] font-semibold text-xs tracking-[0.2em] uppercase px-5 sm:px-6 py-2.5 transition-all shadow-md cursor-pointer"
            >
              Enquire
            </button>
            <button
              id="nav-hamburger-menu-btn"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white hover:text-[#C5A880] p-1.5 transition-colors cursor-pointer focus:outline-none"
              aria-label="Open Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 stroke-[1.5]" />}
            </button>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#080B0E]/98 backdrop-blur-xl pt-28 px-6 lg:hidden overflow-y-auto">
          <div className="site-shell max-w-lg space-y-6 text-sm tracking-[0.2em] uppercase text-slate-200">
            <div className="space-y-4 pb-4 border-b border-white/10">
              <span className="text-[10px] text-[#C5A880] tracking-[0.28em] block mb-2">Our websites</span>
              <SiteNavLinks variant="mobile" onGoPortal={goPortal} portalActive={activeDivision === 'parent'} />
            </div>
            <button type="button" onClick={scrollToJourneys} className="block w-full text-left hover:text-[#C5A880] text-lg font-serif-luxury tracking-normal normal-case">
              Journeys
            </button>
            <button type="button" onClick={goAbout} className="block w-full text-left hover:text-[#C5A880] text-lg font-serif-luxury tracking-normal normal-case">
              About
            </button>
            <button type="button" onClick={openContact} className="block w-full text-left hover:text-[#C5A880] text-lg font-serif-luxury tracking-normal normal-case">
              Contact
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry('Runway to Road VIP Inquiry');
              }}
              className="inline-flex mt-4 bg-[#C5A880] text-[#080B0E] font-semibold tracking-[0.2em] uppercase px-6 py-3"
            >
              Enquire
            </button>
          </div>
        </div>
      )}
    </>
  );
};

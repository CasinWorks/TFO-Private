import React, { useState, useEffect } from 'react';
import { ActiveDivision } from '../types';
import { SITES } from '../config/sites';
import { 
  Menu, 
  X, 
  Plane, 
  Car, 
  Layers, 
  FileCode,
  Phone,
  Mail,
  ArrowRight
} from 'lucide-react';

interface NavigationProps {
  activeDivision: ActiveDivision;
  setActiveDivision: (division: ActiveDivision) => void;
  onOpenEnquiry: (serviceHint?: string) => void;
  onOpenAbout?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  activeDivision,
  setActiveDivision,
  onOpenEnquiry,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToJourneys = () => {
    if (activeDivision !== 'parent') {
      setActiveDivision('parent');
      setTimeout(() => {
        const el = document.getElementById('journeys-section');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById('journeys-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#080B0E]/95 backdrop-blur-md border-b border-white/10 shadow-2xl py-4' 
          : 'bg-gradient-to-b from-[#080B0E]/90 via-[#080B0E]/40 to-transparent py-5 sm:py-6'
      }`}>
        <div className="site-shell flex items-center justify-between">
          
          <button 
            id="brand-logo-button"
            onClick={() => {
              setActiveDivision('parent');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
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

          <nav className="hidden md:flex items-center space-x-7 lg:space-x-9 text-xs tracking-[0.22em] font-medium text-slate-300 uppercase">
            <a
              id="nav-link-aviation"
              href={SITES.jets}
              className="hover:text-[#C5A880] transition-colors"
            >
              AVIATION
            </a>

            <a
              id="nav-link-iceland"
              href={SITES.limousine}
              className="hover:text-[#C5A880] transition-colors"
            >
              ICELAND
            </a>

            <button
              id="nav-link-journeys"
              onClick={scrollToJourneys}
              className="hover:text-[#C5A880] transition-colors cursor-pointer"
            >
              JOURNEYS
            </button>

            <button
              id="nav-link-about"
              onClick={() => {
                setActiveDivision('about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`hover:text-[#C5A880] transition-colors cursor-pointer ${
                activeDivision === 'about' ? 'text-[#C5A880]' : ''
              }`}
            >
              ABOUT
            </button>

            <button
              id="nav-link-contact"
              onClick={() => onOpenEnquiry('General Contact')}
              className="hover:text-[#C5A880] transition-colors cursor-pointer"
            >
              CONTACT
            </button>
          </nav>

          <div className="flex items-center space-x-4 sm:space-x-5">
            <button
              id="nav-enquire-gold-btn"
              onClick={() => onOpenEnquiry('Runway to Road VIP Inquiry')}
              className="bg-[#C5A880] hover:bg-[#d6ba94] text-[#080B0E] font-semibold text-xs tracking-[0.2em] uppercase px-5 sm:px-6 py-2.5 rounded-none transition-all shadow-md cursor-pointer"
            >
              ENQUIRE
            </button>

            <button
              id="nav-hamburger-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-[#C5A880] p-1.5 transition-colors cursor-pointer focus:outline-none"
              aria-label="Open Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 stroke-[1.5]" />}
            </button>
          </div>

        </div>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#080B0E]/98 pt-24 pb-12 px-6 sm:px-12 flex flex-col justify-between overflow-y-auto backdrop-blur-xl">
          <div className="max-w-4xl mx-auto w-full space-y-8">
            <div className="flex justify-between items-center border-b border-white/10 pb-4">
              <div>
                <span className="text-[11px] uppercase tracking-[0.25em] text-[#C5A880] font-semibold">
                  TFO PRIVATE DIGITAL ECOSYSTEM
                </span>
                <h2 className="font-serif-luxury text-2xl text-white">Three Distinct Websites</h2>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-slate-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div 
                onClick={() => {
                  setActiveDivision('parent');
                  setMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`p-6 border cursor-pointer transition-all ${
                  activeDivision === 'parent'
                    ? 'bg-[#C5A880]/15 border-[#C5A880]'
                    : 'bg-white/5 border-white/10 hover:border-white/30'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold">Website 1</span>
                  <Layers className="w-4 h-4 text-[#C5A880]" />
                </div>
                <h3 className="font-serif-luxury text-xl text-white">TFO Private Portal</h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  The flagship umbrella brand connecting private aviation and luxury travel.
                </p>
                <div className="mt-4 text-[11px] font-semibold uppercase tracking-wider text-[#C5A880] flex items-center gap-1">
                  View Portal <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>

              <a 
                href={SITES.jets}
                className="p-6 border cursor-pointer transition-all bg-white/5 border-white/10 hover:border-white/30 block"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold">Website 2</span>
                  <Plane className="w-4 h-4 text-[#C5A880]" />
                </div>
                <h3 className="font-serif-luxury text-xl text-white">TFO Jets</h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Aircraft delivery, ferry flights, oceanic planning, and VIP jet charters worldwide.
                </p>
                <div className="mt-4 text-[11px] font-semibold uppercase tracking-wider text-[#C5A880] flex items-center gap-1">
                  Visit Aviation Site <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </a>

              <a 
                href={SITES.limousine}
                className="p-6 border cursor-pointer transition-all bg-white/5 border-white/10 hover:border-white/30 block"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold">Website 3</span>
                  <Car className="w-4 h-4 text-[#C5A880]" />
                </div>
                <h3 className="font-serif-luxury text-xl text-white">Iceland Limousine</h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Private chauffeurs, airport transfers &amp; bespoke Iceland tours.
                </p>
                <div className="mt-4 text-[11px] font-semibold uppercase tracking-wider text-[#C5A880] flex items-center gap-1">
                  Visit Ground Site <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </a>
            </div>

            <div className="p-4 bg-amber-950/20 border border-amber-500/30 rounded flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FileCode className="w-5 h-5 text-amber-400" />
                <div>
                  <div className="text-xs font-semibold text-amber-200">Architecture &amp; Digital Blueprint</div>
                  <div className="text-[11px] text-amber-300/70">Technical architecture and UI/UX design specifications for the 3 sites</div>
                </div>
              </div>
              <button
                onClick={() => {
                  setActiveDivision('blueprint');
                  setMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-amber-600 hover:bg-amber-500 text-white text-xs font-semibold px-4 py-2 uppercase tracking-wider"
              >
                View Blueprint
              </button>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
              <div className="flex items-center gap-4 flex-wrap justify-center">
                <button
                  onClick={() => {
                    setActiveDivision('about');
                    setMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#C5A880] uppercase tracking-[0.2em]"
                >
                  About Us
                </button>
                <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-[#C5A880]" /> +354 588 5522</span>
                <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-[#C5A880]" /> concierge@tfoprivate.com</span>
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry('Runway to Road VIP Inquiry');
                }}
                className="bg-[#C5A880] text-[#080B0E] font-semibold px-6 py-2.5 uppercase tracking-wider text-xs"
              >
                Open VIP Enquiry
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

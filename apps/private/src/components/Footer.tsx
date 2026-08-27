import React from 'react';
import { ActiveDivision } from '../types';
import { SITES } from '../config/sites';
import { ShieldCheck, Plane, Car, Phone, Mail, MapPin, Award } from 'lucide-react';

interface FooterProps {
  setActiveDivision: (division: ActiveDivision) => void;
  onOpenEnquiry: (topic?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveDivision, onOpenEnquiry }) => {
  return (
    <footer className="bg-[#05070A] border-t border-white/10 text-slate-400 text-sm">
      <div className="site-shell py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="border border-[#C5A880]/50 p-2 rounded bg-black/60">
                <span className="font-display-luxury text-xl font-bold tracking-widest text-white">TFO</span>
              </div>
              <div>
                <span className="font-display-luxury text-lg tracking-[0.2em] font-semibold text-white block">
                  TFO PRIVATE
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#C5A880]">
                  Private Aviation & Luxury Travel
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Two specialist divisions united under one seamless standard of discreet excellence. Connecting private jet aviation, transatlantic aircraft delivery, and bespoke luxury chauffeur journeys across the volcanic landscapes of Iceland.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 text-slate-300 text-xs px-3 py-1 rounded">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C5A880]" />
                100% Confidential VIP Protocol
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 text-slate-300 text-xs px-3 py-1 rounded">
                <Award className="w-3.5 h-3.5 text-[#C5A880]" />
                Certified Ground Handler
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-display-luxury text-xs uppercase tracking-widest text-white font-semibold border-b border-white/10 pb-2">
              Ecosystem Divisions
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => {
                    setActiveDivision('parent');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#C5A880] transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]"></span>
                  TFO Private Portal
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveDivision('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#C5A880] transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]"></span>
                  About Us
                </button>
              </li>
              <li>
                <a
                  href={SITES.limousine}
                  className="hover:text-[#C5A880] transition-colors flex items-center gap-2"
                >
                  <Car className="w-3 h-3 text-[#C5A880]" />
                  Iceland Limousine
                </a>
              </li>
              <li>
                <a
                  href={SITES.jets}
                  className="hover:text-[#C5A880] transition-colors flex items-center gap-2"
                >
                  <Plane className="w-3 h-3 text-[#C5A880]" />
                  TFO Jets Aviation
                </a>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveDivision('blueprint');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                  System Blueprint Specs
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-display-luxury text-xs uppercase tracking-widest text-white font-semibold border-b border-white/10 pb-2">
              Specialist Services
            </h3>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li><button onClick={() => onOpenEnquiry('KEF Airport Transfer')} className="hover:text-white transition-colors">KEF Airport VIP Transfer</button></li>
              <li><button onClick={() => onOpenEnquiry('FBO Tarmac Escort')} className="hover:text-white transition-colors">Tarmac Airside Escort</button></li>
              <li><button onClick={() => onOpenEnquiry('Golden Circle Tour')} className="hover:text-white transition-colors">Golden Circle Private Tour</button></li>
              <li><button onClick={() => onOpenEnquiry('Transatlantic Ferry Flight')} className="hover:text-white transition-colors">Transatlantic Aircraft Ferry</button></li>
              <li><a href={SITES.limousine} className="hover:text-white transition-colors">Chauffeur &amp; Day Tours</a></li>
              <li><a href={SITES.jets} className="hover:text-white transition-colors">On-Demand Jet Charter</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-display-luxury text-xs uppercase tracking-widest text-white font-semibold border-b border-white/10 pb-2">
              24/7 Operations Hub
            </h3>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <span>Reykjavík Airport (BIRK) & Keflavík FBO (BIKF), Iceland</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                <a href="tel:+3545885522" className="text-slate-200 hover:text-[#C5A880] font-sans font-medium">
                  +354 588 5522
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                <a href="mailto:concierge@tfoprivate.com" className="text-slate-200 hover:text-[#C5A880]">
                  concierge@tfoprivate.com
                </a>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => onOpenEnquiry()}
                  className="w-full bg-white/5 hover:bg-[#C5A880] hover:text-[#080B0E] text-slate-200 text-xs font-semibold py-2 px-3 rounded border border-white/10 transition-all uppercase tracking-wider text-center"
                >
                  Direct VIP Request
                </button>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <div className="flex items-center space-x-6">
            <span>© {new Date().getFullYear()} TFO Private Ecosystem. All rights reserved.</span>
            <span className="hidden sm:inline-block">|</span>
            <span className="hidden sm:inline-block">Licensed Tour Operator & Chauffeur Service (Icelandic Transport Authority #2024-918)</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href={SITES.limousine} className="text-slate-400 hover:text-[#C5A880]">icelandlimousine.com</a>
            <span>•</span>
            <a href={SITES.jets} className="text-slate-400 hover:text-[#C5A880]">tfojets.com</a>
            <span>•</span>
            <span className="text-amber-300">Runway to Road</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

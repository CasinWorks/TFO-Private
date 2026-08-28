import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { SiteNavLinks } from './SiteNavLinks';
import { DemoFooterLinks } from './DemoFooterLinks';
import { CONTACT, IMAGES } from '../data/content';

interface FooterProps {
  onOpenAbout?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAbout }) => {
  return (
    <footer className="bg-[#05070A] border-t border-white/8 text-slate-400">
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 py-14">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <div className="space-y-4">
            <span className="font-serif-luxury text-3xl tracking-[0.16em] text-white">TFO JETS</span>
            <p className="text-xs max-w-sm leading-relaxed text-slate-500">
              Aircraft delivery, demo flights and ferry service worldwide.
            </p>
            <a
              href="https://nbaa.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white rounded-sm px-2 py-1.5 hover:opacity-90 transition-opacity"
              aria-label="Member of NBAA — National Business Aviation Association"
            >
              <img src={IMAGES.nbaa} alt="Member of NBAA" className="h-11 w-auto" />
            </a>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-xs">
            {onOpenAbout && (
              <button
                type="button"
                onClick={onOpenAbout}
                className="inline-flex items-center gap-2 hover:text-[#C5A880] transition-colors"
              >
                About Us
              </button>
            )}
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center gap-2 hover:text-[#C5A880] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A880]" /> {CONTACT.phone}
            </a>
            <a
              href={CONTACT.emailHref}
              className="inline-flex items-center gap-2 hover:text-[#C5A880] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#C5A880]" /> {CONTACT.email}
            </a>
            <SiteNavLinks variant="footer" />
          </div>
        </div>
        <DemoFooterLinks />
        <div className="mt-8 pt-6 border-t border-white/8 text-[10px] tracking-[0.2em] uppercase text-slate-600">
          © {new Date().getFullYear()} TFO Jets · Member of NBAA
        </div>
      </div>
    </footer>
  );
};

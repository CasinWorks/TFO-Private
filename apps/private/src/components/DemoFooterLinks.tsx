import React from 'react';
import { FileCode, Layers } from 'lucide-react';
import { ActiveDivision } from '../types';

interface DemoFooterLinksProps {
  goDivision: (division: ActiveDivision) => void;
}

/** Demo-only strip — remove when client moves to production. */
export const DemoFooterLinks: React.FC<DemoFooterLinksProps> = ({ goDivision }) => (
  <div className="mt-8 pt-6 border-t border-amber-500/20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
    <span className="text-[10px] uppercase tracking-[0.22em] text-amber-400/80 font-semibold">
      Demo · internal only
    </span>
    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs">
      <button
        type="button"
        onClick={() => goDivision('parent')}
        className="inline-flex items-center gap-2 text-slate-400 hover:text-[#C5A880] transition-colors"
      >
        <Layers className="w-3.5 h-3.5 text-[#C5A880]" />
        Digital Ecosystem
      </button>
      <button
        type="button"
        onClick={() => goDivision('blueprint')}
        className="inline-flex items-center gap-2 text-amber-400/90 hover:text-amber-300 transition-colors"
      >
        <FileCode className="w-3.5 h-3.5" />
        Digital Blueprint
      </button>
    </div>
  </div>
);

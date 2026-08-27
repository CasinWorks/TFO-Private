/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ActiveDivision } from './types';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { ParentPortalView } from './components/ParentPortal/ParentPortalView';
import { ArchitectureBlueprintView } from './components/Architecture/ArchitectureBlueprintView';
import { AboutView } from './components/About/AboutView';
import { EnquiryModal } from './components/Modals/EnquiryModal';

/**
 * Parent brand portal only.
 * Aviation → TFO Jets sibling site; Iceland → Iceland Limousine sibling site.
 */
export default function App() {
  const [activeDivision, setActiveDivision] = useState<ActiveDivision>('parent');
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [enquiryTopic, setEnquiryTopic] = useState('General Runway to Road VIP Service');

  const handleOpenEnquiry = (topic?: string) => {
    setEnquiryTopic(topic || 'General Runway to Road VIP Service');
    setEnquiryOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#080B0E] text-[#F3F4F6] flex flex-col justify-between selection:bg-[#C5A880] selection:text-[#080B0E]">
      <Navigation
        activeDivision={activeDivision}
        setActiveDivision={setActiveDivision}
        onOpenEnquiry={handleOpenEnquiry}
      />

      <main className="flex-1">
        {activeDivision === 'parent' && (
          <ParentPortalView
            setActiveDivision={setActiveDivision}
            onOpenEnquiry={handleOpenEnquiry}
          />
        )}

        {activeDivision === 'about' && (
          <AboutView
            onOpenEnquiry={handleOpenEnquiry}
            onBackHome={() => {
              setActiveDivision('parent');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activeDivision === 'blueprint' && <ArchitectureBlueprintView />}
      </main>

      <Footer setActiveDivision={setActiveDivision} onOpenEnquiry={handleOpenEnquiry} />

      <EnquiryModal
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        defaultTopic={enquiryTopic}
      />
    </div>
  );
}

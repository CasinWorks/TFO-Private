import React from 'react';
import { ActiveDivision } from '../../types';
import { SITES } from '../../config/sites';
import heroBgImage from '../../assets/hero-jet.jpg';
import limousineCarImage from '../../assets/limousine-car.jpg';
import tfoJetsImage from '../../assets/tfo-jets-division.jpg';
import chauffeurImage from '../../assets/chauffeur.jpg';
import bespokeIcelandImage from '../../assets/bespoke-iceland.jpg';
import aviationJourneyImage from '../../assets/aviation-journey.jpg';
import vipArrivalImage from '../../assets/vip-arrival.jpg';
import bottomCtaBgImage from '../../assets/bottom-cta-bg.jpg';
import { 
  ArrowRight, 
  Globe, 
  User, 
  Gem, 
  Mountain, 
  Plane, 
  MapPin, 
  Briefcase
} from 'lucide-react';

interface ParentPortalViewProps {
  setActiveDivision: (division: ActiveDivision) => void;
  currency?: string;
  onOpenEnquiry: (subject?: string) => void;
  onNavigateToBooking?: (opts?: any) => void;
}

export const ParentPortalView: React.FC<ParentPortalViewProps> = ({
  onOpenEnquiry
}) => {
  const goJets = () => {
    window.location.href = SITES.jets;
  };
  const goLimousine = () => {
    window.location.href = SITES.limousine;
  };
  return (
    <div className="w-full bg-[#080B0E] text-slate-200 selection:bg-[#C5A880] selection:text-[#080B0E]">
      
      {/* 1. HERO SECTION & INTEGRATED TRUST INDICATORS (Seamless Single-Hero Canvas) */}
      <section className="relative min-h-screen flex flex-col justify-between pt-24 sm:pt-28 pb-0 overflow-hidden">
        {/* Background Image: Full Bleed Jet on Tarmac Runway */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBgImage} 
            alt="Private Aviation & Luxury Travel Runway" 
            className="w-full h-full object-cover object-right md:object-center brightness-[0.80] scale-100"
          />
          {/* Subtle Vignettes & Lighting Gradients matching mockup */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#080B0E]/90 via-[#080B0E]/60 to-transparent w-full md:w-3/4" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#080B0E]/70 via-transparent to-[#080B0E]/80" />
        </div>

        {/* Hero Top Content (Left Aligned) */}
        <div className="relative z-10 max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 w-full my-auto py-12 sm:py-16">
          <div className="max-w-2xl space-y-6 sm:space-y-7">
            
            {/* Overline */}
            <div className="text-[11px] sm:text-xs font-sans font-semibold tracking-[0.25em] uppercase text-[#C5A880]">
              THE JOURNEY, HANDLED.
            </div>

            {/* Main Headline */}
            <h1 className="font-serif-luxury text-5xl sm:text-6xl md:text-7xl font-normal text-white leading-[1.08] tracking-tight">
              Private Aviation<br />
              <span className="text-[#C5A880] font-serif-luxury font-light mr-3">&amp;</span>
              <span className="text-white font-serif-luxury font-light">Luxury Travel</span>
            </h1>

            {/* Subtitle Paragraph */}
            <p className="text-slate-300 text-sm sm:text-base font-light max-w-lg leading-relaxed">
              From the aircraft to the road, we take care of every detail so you can enjoy the journey.
            </p>

            {/* Dual CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                id="hero-btn-private-aviation"
                onClick={goJets}
                className="inline-flex items-center gap-2.5 bg-[#C5A880] hover:bg-[#d6ba94] text-[#080B0E] font-semibold text-xs tracking-[0.18em] uppercase px-6 sm:px-7 py-3.5 rounded-none transition-all duration-200 shadow-xl cursor-pointer"
              >
                <span>PRIVATE AVIATION</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                id="hero-btn-experience-iceland"
                onClick={goLimousine}
                className="inline-flex items-center gap-2.5 bg-black/40 hover:bg-black/70 text-white border border-white/40 hover:border-white font-semibold text-xs tracking-[0.18em] uppercase px-6 sm:px-7 py-3.5 rounded-none backdrop-blur-sm transition-all duration-200 cursor-pointer"
              >
                <span>EXPERIENCE ICELAND</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>

        {/* 2. 4 TRUST INDICATORS ROW (Transparent & seamlessly resting on tarmac background) */}
        <div className="relative z-20 w-full border-t border-white/15 bg-gradient-to-t from-[#080B0E]/90 via-[#080B0E]/40 to-transparent backdrop-blur-[2px] py-10 sm:py-14 px-6 sm:px-10 lg:px-16 xl:px-20">
          <div className="max-w-[1720px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/15">
            
            {/* Pillar 1: Worldwide Operations */}
            <div className="flex flex-col items-center text-center py-6 sm:py-2 sm:px-6 lg:px-8 first:pl-0 space-y-3">
              <div className="text-[#C5A880]">
                <Globe className="w-8 h-8 sm:w-9 sm:h-9 stroke-[1.2]" />
              </div>
              <h3 className="font-serif-luxury text-xl sm:text-2xl font-medium text-white tracking-wide">
                Worldwide Operations
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed max-w-xs">
                Aviation services and luxury travel, wherever you need us.
              </p>
            </div>

            {/* Pillar 2: Personal Service */}
            <div className="flex flex-col items-center text-center py-6 sm:py-2 sm:px-6 lg:px-8 space-y-3">
              <div className="text-[#C5A880]">
                <User className="w-8 h-8 sm:w-9 sm:h-9 stroke-[1.2]" />
              </div>
              <h3 className="font-serif-luxury text-xl sm:text-2xl font-medium text-white tracking-wide">
                Personal Service
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed max-w-xs">
                A dedicated team, available 24/7 to support your journey.
              </p>
            </div>

            {/* Pillar 3: Discretion & Trust */}
            <div className="flex flex-col items-center text-center py-6 sm:py-2 sm:px-6 lg:px-8 space-y-3">
              <div className="text-[#C5A880]">
                <Gem className="w-8 h-8 sm:w-9 sm:h-9 stroke-[1.2]" />
              </div>
              <h3 className="font-serif-luxury text-xl sm:text-2xl font-medium text-white tracking-wide">
                Discretion &amp; Trust
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed max-w-xs">
                Your privacy is our priority. Always.
              </p>
            </div>

            {/* Pillar 4: Iceland Experts */}
            <div className="flex flex-col items-center text-center py-6 sm:py-2 sm:px-6 lg:px-8 last:pr-0 space-y-3">
              <div className="text-[#C5A880]">
                <Mountain className="w-8 h-8 sm:w-9 sm:h-9 stroke-[1.2]" />
              </div>
              <h3 className="font-serif-luxury text-xl sm:text-2xl font-medium text-white tracking-wide">
                Iceland Experts
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed max-w-xs">
                Local knowledge and access to extraordinary experiences.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. TWO SPECIALIST DIVISIONS SECTION (CRISP LIGHT OFF-WHITE BACKGROUND) */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 xl:px-20 bg-[#F6F7F9] text-[#1A202C]">
        <div className="max-w-[1720px] mx-auto">
          
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-[11px] font-sans font-semibold tracking-[0.25em] uppercase text-[#C5A880] block">
              TWO SPECIALIST DIVISIONS. ONE SEAMLESS EXPERIENCE.
            </span>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl font-normal text-[#0F172A]">
              From runway to road.
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed max-w-xl mx-auto">
              Whether you arrive by private jet or explore Iceland from the ground, our team is here to deliver a seamless journey, start to finish.
            </p>
          </div>

          {/* Two Split Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 xl:gap-14">
            
            {/* Card 1: TFO JETS → sibling site */}
            <div 
              id="card-tfo-jets-division"
              onClick={goJets}
              className="group bg-white border border-slate-200/80 rounded-none shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div className="relative h-64 sm:h-72 md:h-80 overflow-visible bg-slate-900">
                <div className="w-full h-full overflow-hidden">
                  <img 
                    src={tfoJetsImage} 
                    alt="TFO Jets Private Aviation"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                {/* Floating Dark Circular Badge overlapping exactly between the image and the lower content card */}
                <div className="absolute -bottom-8 left-8 sm:left-10 z-20 w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-[#111827] border-2 border-[#C5A880]/70 text-[#C5A880] flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110">
                  <Plane className="w-8 h-8 sm:w-9 sm:h-9 stroke-[1.5]" />
                </div>
              </div>

              <div className="pt-12 pb-8 px-8 sm:px-10 space-y-4 flex-1 flex flex-col justify-between bg-white relative z-10">
                <div className="space-y-1">
                  <h3 className="font-serif-luxury text-2xl sm:text-3xl font-medium text-[#0F172A]">
                    TFO JETS
                  </h3>
                  <div className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-[#C5A880]">
                    PRIVATE AVIATION
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-2">
                    Aircraft delivery, ferry flights, demo crews and aviation consulting worldwide.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A880] group-hover:text-[#a88960] transition-colors inline-flex items-center gap-2">
                    EXPLORE AVIATION
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2: ICELAND LIMOUSINE → sibling site */}
            <div 
              id="card-iceland-limousine-division"
              onClick={goLimousine}
              className="group bg-white border border-slate-200/80 rounded-none shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div className="relative h-64 sm:h-72 md:h-80 overflow-visible bg-slate-900">
                <div className="w-full h-full overflow-hidden">
                  <img 
                    src={limousineCarImage} 
                    alt="Iceland Limousine Luxury Fleet on Road"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                {/* Floating Dark Circular Badge overlapping exactly between the image and the lower content card */}
                <div className="absolute -bottom-8 left-8 sm:left-10 z-20 w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-[#111827] border-2 border-[#C5A880]/70 text-[#C5A880] flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110">
                  <Mountain className="w-8 h-8 sm:w-9 sm:h-9 stroke-[1.5]" />
                </div>
              </div>

              <div className="pt-12 pb-8 px-8 sm:px-10 space-y-4 flex-1 flex flex-col justify-between bg-white relative z-10">
                <div className="space-y-1">
                  <h3 className="font-serif-luxury text-2xl sm:text-3xl font-medium text-[#0F172A]">
                    ICELAND LIMOUSINE
                  </h3>
                  <div className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-[#C5A880]">
                    LUXURY TRANSPORTATION
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-2">
                    Private chauffeur, airport transfers and tailor-made experiences across Iceland.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A880] group-hover:text-[#a88960] transition-colors inline-flex items-center gap-2">
                    EXPLORE ICELAND
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. "JOURNEYS DESIGNED AROUND YOU" 4-CARD FEATURE MATRIX (DARK BACKGROUND) */}
      <section id="journeys-section" className="py-24 px-6 sm:px-10 lg:px-16 xl:px-20 bg-[#080B0E]">
        <div className="max-w-[1720px] w-full mx-auto">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16 sm:mb-20">
            <span className="text-[11px] sm:text-xs font-sans font-semibold tracking-[0.25em] uppercase text-[#C5A880]">
              JOURNEYS DESIGNED AROUND YOU
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal text-white">
              More than a service. A complete experience.
            </h2>
          </div>

          {/* 4-column matrix fitting the full grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 lg:gap-6 xl:gap-8">
            
            {/* Card 1: PRIVATE CHAUFFEUR */}
            <div 
              onClick={goLimousine}
              className="group cursor-pointer flex flex-col space-y-0"
            >
              <div className="aspect-[16/10] w-full overflow-visible relative bg-[#0D1219]">
                <div className="w-full h-full overflow-hidden">
                  <img 
                    src={chauffeurImage} 
                    alt="Private Chauffeur Luxury Interior"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Floating Centered Bottom Badge */}
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#0D1219] border-2 border-[#C5A880]/70 text-[#C5A880] flex items-center justify-center shadow-xl transition-transform duration-300 group-hover:scale-110">
                  <User className="w-5 h-5 stroke-[1.5]" />
                </div>
              </div>

              <div className="flex flex-col items-center text-center space-y-2 pt-8 sm:pt-9 px-2">
                <h3 className="font-serif-luxury text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold text-white">
                  PRIVATE CHAUFFEUR
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed max-w-[240px]">
                  Travel in comfort with your own professional driver.
                </p>
              </div>
            </div>

            {/* Card 2: BESPOKE ICELAND */}
            <div 
              onClick={goLimousine}
              className="group cursor-pointer flex flex-col space-y-0"
            >
              <div className="aspect-[16/10] w-full overflow-visible relative bg-[#0D1219]">
                <div className="w-full h-full overflow-hidden">
                  <img 
                    src={bespokeIcelandImage} 
                    alt="Bespoke Iceland Glacier Lagoon"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Floating Centered Bottom Badge */}
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#0D1219] border-2 border-[#C5A880]/70 text-[#C5A880] flex items-center justify-center shadow-xl transition-transform duration-300 group-hover:scale-110">
                  <MapPin className="w-5 h-5 stroke-[1.5]" />
                </div>
              </div>

              <div className="flex flex-col items-center text-center space-y-2 pt-8 sm:pt-9 px-2">
                <h3 className="font-serif-luxury text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold text-white">
                  BESPOKE ICELAND
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed max-w-[240px]">
                  Tell us what you want to see. We'll create the perfect journey.
                </p>
              </div>
            </div>

            {/* Card 3: PRIVATE AVIATION */}
            <div 
              onClick={goJets}
              className="group cursor-pointer flex flex-col space-y-0"
            >
              <div className="aspect-[16/10] w-full overflow-visible relative bg-[#0D1219]">
                <div className="w-full h-full overflow-hidden">
                  <img 
                    src={aviationJourneyImage} 
                    alt="Private Jet Aviation Services"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Floating Centered Bottom Badge */}
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#0D1219] border-2 border-[#C5A880]/70 text-[#C5A880] flex items-center justify-center shadow-xl transition-transform duration-300 group-hover:scale-110">
                  <Plane className="w-5 h-5 stroke-[1.5]" />
                </div>
              </div>

              <div className="flex flex-col items-center text-center space-y-2 pt-8 sm:pt-9 px-2">
                <h3 className="font-serif-luxury text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold text-white">
                  PRIVATE AVIATION
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed max-w-[240px]">
                  Specialist aircraft services delivered by experienced professionals.
                </p>
              </div>
            </div>

            {/* Card 4: VIP ARRIVAL */}
            <div 
              onClick={goLimousine}
              className="group cursor-pointer flex flex-col space-y-0"
            >
              <div className="aspect-[16/10] w-full overflow-visible relative bg-[#0D1219]">
                <div className="w-full h-full overflow-hidden">
                  <img 
                    src={vipArrivalImage} 
                    alt="VIP Arrival Lounge Terminal"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Floating Centered Bottom Badge */}
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#0D1219] border-2 border-[#C5A880]/70 text-[#C5A880] flex items-center justify-center shadow-xl transition-transform duration-300 group-hover:scale-110">
                  <Briefcase className="w-5 h-5 stroke-[1.5]" />
                </div>
              </div>

              <div className="flex flex-col items-center text-center space-y-2 pt-8 sm:pt-9 px-2">
                <h3 className="font-serif-luxury text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold text-white">
                  VIP ARRIVAL
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed max-w-[240px]">
                  From touchdown to destination, everything is taken care of.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. BOTTOM CALL-TO-ACTION (Exact 1:1 Match to Mockup) */}
      <section className="relative py-28 px-6 sm:px-10 lg:px-16 xl:px-20 overflow-hidden">
        {/* Dark Icelandic Horizon Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={bottomCtaBgImage} 
            alt="Atmospheric Journey Horizon"
            className="w-full h-full object-cover brightness-60 contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080B0E] via-[#080B0E]/60 to-[#080B0E]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <h2 className="font-serif-luxury text-4xl sm:text-5xl font-normal text-white">
            Your journey, perfectly managed.
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm font-light max-w-lg mx-auto leading-relaxed">
            One team across aviation and ground services, committed to delivering exceptional journeys every time.
          </p>

          <div className="pt-2 flex justify-center">
            <button
              id="cta-bottom-enquire-now-btn"
              onClick={() => onOpenEnquiry('Runway to Road Complete VIP Itinerary')}
              className="inline-flex items-center gap-2.5 bg-[#C5A880] hover:bg-[#d6ba94] text-[#080B0E] font-semibold text-xs tracking-[0.2em] uppercase px-8 py-4 rounded-none transition-all duration-200 shadow-xl cursor-pointer"
            >
              <span>ENQUIRE NOW</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

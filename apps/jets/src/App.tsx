import React from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';

export default function App() {
  return (
    <div className="min-h-screen bg-[#080B0E] text-[#F3F4F6] flex flex-col justify-between selection:bg-[#C5A880] selection:text-[#080B0E]">
      <Navigation />
      <main className="flex-1">
        <HomeView />
      </main>
      <Footer />
    </div>
  );
}

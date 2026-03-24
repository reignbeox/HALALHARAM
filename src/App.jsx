import React, { useState, useEffect } from 'react';

// Import your components
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

// Import your views
import HeroSection from './views/HeroSection';
import DirectoryView from './views/DirectoryView';
import RamadanView from './views/RamadanView';
import MarriageView from './views/MarriageView';
import ControversiesView from './views/ControversiesView';

export default function App() {
  const [isLightMode, setIsLightMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // App Navigation State
  const [currentView, setCurrentView] = useState('home');
  const [activeTopic, setActiveTopic] = useState(null);

  const navigateTo = (view, topic = null) => {
    setCurrentView(view);
    setActiveTopic(topic);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Add event listener to open sidebar from Header
  useEffect(() => {
    const handleOpenSidebar = () => setIsSidebarOpen(true);
    document.addEventListener('open-sidebar', handleOpenSidebar);
    return () => document.removeEventListener('open-sidebar', handleOpenSidebar);
  }, []);

  return (
    <div className={`min-h-screen bg-[#050505] font-sans text-white flex flex-col selection:bg-[#ccff00] selection:text-black ${isLightMode ? 'light-mode' : ''}`}>
      
      {/* Light Mode CSS stays in the root to apply globally */}
      <style>{`
        .light-mode.bg-\\[\\#050505\\], .light-mode .bg-\\[\\#050505\\] { background-color: #fafafa !important; }
        .light-mode.bg-\\[\\#0a0a0a\\], .light-mode .bg-\\[\\#0a0a0a\\] { background-color: #ffffff !important; }
        .light-mode .bg-zinc-900 { background-color: #f4f4f5 !important; }
        .light-mode .bg-zinc-800 { background-color: #e4e4e7 !important; }
        .light-mode .bg-zinc-900\\/50 { background-color: #f4f4f5 !important; }
        .light-mode.text-white, .light-mode .text-white { color: #050505 !important; }
        .light-mode .text-zinc-300 { color: #3f3f46 !important; }
        .light-mode .text-zinc-400 { color: #52525b !important; }
        .light-mode .text-zinc-500 { color: #71717a !important; }
        .light-mode .border-zinc-800 { border-color: #e4e4e7 !important; }
        .light-mode .border-zinc-700 { border-color: #d4d4d8 !important; }
        .light-mode .border-white { border-color: #050505 !important; }
        .light-mode .bg-white { background-color: #050505 !important; }
        .light-mode .text-black { color: #ffffff !important; }
        .light-mode .bg-gradient-to-r.from-white.to-zinc-600 { background-image: linear-gradient(to right, #050505, #71717a) !important; }
        .light-mode .bg-black { background-color: #ffffff !important; }
        .light-mode .border-black { border-color: #e4e4e7 !important; } 
        .light-mode .text-zinc-800 { color: #d4d4d8 !important; }
        .light-mode .text-zinc-600 { color: #a1a1aa !important; }
        .light-mode .bg-zinc-100 { background-color: #18181b !important; }
        .light-mode .border-zinc-300 { border-color: #3f3f46 !important; }
        .light-mode .bg-\\[\\#ccff00\\] { color: #050505 !important; }
        .light-mode .bg-\\[\\#ccff00\\] .text-black, .light-mode .bg-\\[\\#ccff00\\] .text-zinc-900 { color: #050505 !important; }
        .light-mode .text-\\[\\#ccff00\\] { color: #ccff00 !important; }
        .light-mode .border-\\[\\#ccff00\\] { border-color: #ccff00 !important; }
        .light-mode .group:hover .group-hover\\:text-\\[\\#ccff00\\] { color: #ccff00 !important; }
        .light-mode .hover\\:border-\\[\\#ccff00\\]:hover { border-color: #ccff00 !important; }
        .light-mode .hover\\:text-\\[\\#ccff00\\]:hover { color: #ccff00 !important; }
        .light-mode svg.text-\\[\\#ccff00\\], .light-mode .group:hover svg.group-hover\\:text-\\[\\#ccff00\\] { color: #ccff00 !important; }
        .light-mode .menu-btn:hover { background-color: #ccff00 !important; color: #ffffff !important; }
        .light-mode .menu-btn:hover svg { color: #ffffff !important; }
        .light-mode .query-form:focus-within { border-color: #ccff00 !important; }
        .light-mode .query-form:focus-within > div, .light-mode .query-form:focus-within > button { border-color: #ccff00 !important; }
        .light-mode .bg-\\[\\#111111\\] { background-color: #f4f4f5 !important; }
        .light-mode .bg-\\[\\#1a1a1a\\] { background-color: #e4e4e7 !important; }
        .light-mode .border-\\[\\#333333\\] { border-color: #d4d4d8 !important; }
        .light-mode .text-\\[\\#a3a3a3\\] { color: #52525b !important; }
        .light-mode .shadow-\\[8px_8px_0_\\#ccff00\\] { box-shadow: 8px 8px 0 #ccff00 !important; }
      `}</style>

      <Header navigateTo={navigateTo} />
      
      <Sidebar 
        isSidebarOpen={isSidebarOpen} 
        setIsSidebarOpen={setIsSidebarOpen}
        isLightMode={isLightMode}
        setIsLightMode={setIsLightMode}
        currentView={currentView}
        navigateTo={navigateTo}
      />

      <main className="flex-grow relative flex flex-col">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '4rem 4rem' }}></div>

        {currentView === 'home' && <HeroSection navigateTo={navigateTo} />}
        {currentView === 'directory' && <DirectoryView activeTopic={activeTopic} navigateTo={navigateTo} />}
        {currentView === 'ramadan' && <RamadanView activeTopic={activeTopic} navigateTo={navigateTo} />}
        {currentView === 'marriage' && <MarriageView />}
        {currentView === 'controversies' && <ControversiesView />}
      </main>

      <Footer />
    </div>
  );
}
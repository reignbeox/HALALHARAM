import React, { useState, useEffect } from 'react';

// Import modular components
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

// Import modular views
import HeroSection from './views/HeroSection';
import DirectoryView from './views/DirectoryView';
import RamadanView from './views/RamadanView';
import MarriageView from './views/MarriageView';
import ControversiesView from './views/ControversiesView';
import AboutView from './views/AboutView';
import MethodologyView from './views/MethodologyView';

export default function App() {
  const [isLightMode, setIsLightMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // App Navigation State
  const [currentView, setCurrentView] = useState('home');
  const [activeTopic, setActiveTopic] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  /**
   * Navigation with Snappy Exit/Entry Logic
   */
  const navigateTo = (view, topic = null) => {
    // Guard clause: Only block if exactly the same view and topic
    if (view === currentView && topic === activeTopic) return;
    
    // Trigger Exit Transition
    setIsTransitioning(true);
    
    // Wait for exit animation (300ms) before swapping content
    setTimeout(() => {
      setCurrentView(view);
      setActiveTopic(topic);
      setIsTransitioning(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 300);
  };

  // Listen for Header's custom event to trigger Sidebar
  useEffect(() => {
    const handleOpenSidebar = () => setIsSidebarOpen(true);
    document.addEventListener('open-sidebar', handleOpenSidebar);
    return () => document.removeEventListener('open-sidebar', handleOpenSidebar);
  }, []);

  return (
    <div className={`min-h-screen bg-[#050505] font-sans text-white flex flex-col selection:bg-[#ccff00] selection:text-black ${isLightMode ? 'light-mode' : ''}`}>
      
{/* Centralized Style Block for Transitions and Light Mode */}
<style>{`
        /* Force permanent vertical scrollbar to prevent layout shift */
        html {
          overflow-y: scroll;
        }

        /* NEW: Flip hero gradient to dark for light mode */
        .light-mode .hero-gradient {
          background-image: linear-gradient(to right, #000000, #52525b) !important;
        }

/* HIGHLIGHT MARKER STYLE: Lime text becomes black text on a lime box in light mode */
        .light-mode .text-\\[\\#ccff00\\] { 
          color: #000000 !important; 
          background-color: #ccff00 !important;
          /* Pro-trick: Using box-shadow acts like padding to make the box look slightly bigger without breaking your page layout! */
          box-shadow: 0 0 0 0px #ccff00 !important; 
          border-radius: 0px !important;
        }
        
/* Flips the pitch-black controversy boxes to light gray in light mode */
        .light-mode .controversy-header {
          background-color: #f4f4f5 !important; /* Light zinc-100 */
        }
        .light-mode .controversy-pill {
          background-color: #e4e4e7 !important; /* Slightly darker zinc-200 */
          color: #3f3f46 !important; /* Dark gray text for readability */
          border-color: #d4d4d8 !important;
        }

        /* Ensure any borders that were lime stay lime, but get a bit thicker so they don't look flimsy next to the boxes */
        .light-mode .border-\\[\\#ccff00\\] {
          border-color: #ccff00 !important;
        }

        /* Light Mode Theming */
        .light-mode.bg-\\[\\#050505\\], .light-mode .bg-\\[\\#050505\\] { background-color: #fafafa !important; }
        .light-mode.bg-\\[\\#0a0a0a\\], .light-mode .bg-\\[\\#0a0a0a\\] { background-color: #ffffff !important; }
        .light-mode.text-white, .light-mode .text-white { color: #050505 !important; }
        .light-mode .border-zinc-800 { border-color: #e4e4e7 !important; }

        /* NEW: Grid inversion for Light Mode */
        .light-mode .visual-grid {
          background-image: linear-gradient(to right, #000000 1px, transparent 1px), linear-gradient(to bottom, #000000 1px, transparent 1px) !important;
          opacity: 0.06 !important;
        }

        /* Snappy View Entry Animation */
        @keyframes viewEntry {
          0% { opacity: 0; transform: translateY(15px) scale(0.99); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        
        /* Snappy View Exit Animation */
        @keyframes viewExit {
          0% { opacity: 1; transform: translateY(0) scale(1); }
          100% { opacity: 0; transform: translateY(-10px) scale(0.99); }
        }

        .animate-view-snappy {
          animation: viewEntry 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-view-exit {
          animation: viewExit 0.3s cubic-bezier(0.7, 0, 0.84, 0) forwards;
        }
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

      {/* Main Content Area with Transition classes */}
      <main className={`flex-grow relative flex flex-col ${isTransitioning ? 'animate-view-exit' : 'animate-view-snappy'}`}>
{/* Visual Grid Overlay */}
<div className="visual-grid absolute inset-0 z-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '4rem 4rem' }}></div>

        {/* View Routing */}
        {currentView === 'home' && <HeroSection navigateTo={navigateTo} />}
        {currentView === 'directory' && <DirectoryView activeTopic={activeTopic} navigateTo={navigateTo} />}
        {currentView === 'ramadan' && <RamadanView activeTopic={activeTopic} navigateTo={navigateTo} />}
        {currentView === 'marriage' && <MarriageView />}
        {currentView === 'controversies' && <ControversiesView />}
        
        {/* Animated Footer Views */}
        {currentView === 'about' && (
          <div className="flex-grow flex flex-col">
            <AboutView navigateTo={navigateTo} />
          </div>
        )}
        
        {currentView === 'methodology' && (
          <div className="flex-grow flex flex-col">
            <MethodologyView navigateTo={navigateTo} />
          </div>
        )}
      </main>

      <Footer navigateTo={navigateTo} />
    </div>
  );
}
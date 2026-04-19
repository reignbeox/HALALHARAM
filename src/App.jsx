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
  
  const [currentView, setCurrentView] = useState('home');
  const [activeTopic, setActiveTopic] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const navigateTo = (view, topic = null) => {
    if (view === currentView && topic === activeTopic) return;
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentView(view);
      setActiveTopic(topic);
      setIsTransitioning(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 300);
  };

  useEffect(() => {
    const handleOpenSidebar = () => setIsSidebarOpen(true);
    document.addEventListener('open-sidebar', handleOpenSidebar);
    return () => document.removeEventListener('open-sidebar', handleOpenSidebar);
  }, []);

  return (
    <div className={`min-h-screen bg-[#050505] font-sans text-white flex flex-col selection:bg-[#ccff00] selection:text-black ${isLightMode ? 'light-mode' : ''}`}>
      
      <style>{`
        /* Core System Styles */
        html { overflow-y: scroll; }

        @keyframes viewEntry {
          0% { opacity: 0; transform: translateY(15px) scale(0.99); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes viewExit {
          0% { opacity: 1; transform: translateY(0) scale(1); }
          100% { opacity: 0; transform: translateY(-10px) scale(0.99); }
        }
        .animate-view-snappy { animation: viewEntry 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-view-exit { animation: viewExit 0.3s cubic-bezier(0.7, 0, 0.84, 0) forwards; }

        /* --- LIGHT MODE GLOBAL OVERRIDES --- */
        .light-mode.bg-\\[\\#050505\\], .light-mode .bg-\\[\\#050505\\] { background-color: #fafafa !important; }
        .light-mode.bg-\\[\\#0a0a0a\\], .light-mode .bg-\\[\\#0a0a0a\\] { background-color: #ffffff !important; }
        .light-mode.text-white, .light-mode .text-white { color: #050505 !important; }
        .light-mode .border-zinc-800, .light-mode .border-zinc-700 { border-color: #e4e4e7 !important; }
        
        .light-mode .visual-grid {
          background-image: linear-gradient(to right, #000000 1px, transparent 1px), linear-gradient(to bottom, #000000 1px, transparent 1px) !important;
          opacity: 0.06 !important;
        }

        /* Header & Logo */
        .light-mode header.header-main { background-color: #ffffff !important; border-color: #e4e4e7 !important; }
        .light-mode .logo-text { color: #000000 !important; }
        .light-mode .moon-icon, .light-mode .star-icon { color: #000000 !important; fill: #000000 !important; }

        /* --- Add to the Default (Dark) section of App.jsx --- */
header.header-main {
  background-color: #050505 !important;
}

        /* Directory UI Elements */
        .light-mode .btn-return { background-color: #f4f4f5 !important; border-color: #d4d4d8 !important; color: #18181b !important; }
        .light-mode .btn-return:hover { background-color: #ccff00 !important; color: #000000 !important; }
        
        .light-mode .source-card { background-color: #fafafa !important; border-color: #e4e4e7 !important; }
        .light-mode .source-icon-bg { background-color: #ffffff !important; border-color: #d4d4d8 !important; }
        .light-mode .source-title, .light-mode .title-text, .light-mode .body-text, .light-mode .section-title { color: #18181b !important; }

        /* Table & Rulings */
        .light-mode .table-container, .light-mode .table-container table, 
        .light-mode .table-container tr, .light-mode .table-container td, 
        .light-mode .table-container th { border-color: #e4e4e7 !important; }
        
        .light-mode .table-header-row { background-color: #f4f4f5 !important; border-bottom-color: #e4e4e7 !important; }
        .light-mode .table-header-row th { color: #71717a !important; }
        .light-mode .table-body { background-color: #ffffff !important; }
        .light-mode .cell-text { color: #18181b !important; }
        
        .light-mode .table-body tr:hover { background-color: #f9f9fb !important; transition: background-color 0.2s ease; }
        .light-mode .table-header-row:hover, .light-mode .table-header-row th:hover { background-color: #f4f4f5 !important; }

        /* Differing Opinions */
        .light-mode .differing-btn { color: #71717a !important; }
        .light-mode .icon-box { background-color: #f4f4f5 !important; color: #18181b !important; }

        /* Brand Elements */
        .light-mode .hero-gradient { background-image: linear-gradient(to right, #000000, #52525b) !important; }
        .light-mode .text-\\[\\#ccff00\\] { color: #000000 !important; background-color: #ccff00 !important; box-shadow: none !important; }
        .light-mode .border-\\[\\#ccff00\\] { border-color: #ccff00 !important; }
        .light-mode .marker-dot { background-color: #18181b !important; }

        /* Controversies */
        .light-mode .controversy-header { background-color: #f4f4f5 !important; }
        .light-mode .controversy-pill { background-color: #e4e4e7 !important; color: #3f3f46 !important; border-color: #d4d4d8 !important; }

        /* --- Add to the Light Mode section of your App.jsx style block --- */
        
        /* --- Add to the Light Mode section of your App.jsx --- */

        /* 1. Base state of the icon box in Light Mode (replaces bg-black) */
        .light-mode .source-icon-bg {
          background-color: #f4f4f5 !important; /* Light Zinc */
          border-color: #e4e4e7 !important;
        }

        /* 2. Base state of the icon itself (replaces text-zinc-500) */
        .light-mode .source-icon-bg svg {
          color: #a1a1aa !important; /* Zinc-400 */
        }
          

        /* 3. INDIVIDUAL HOVER: When mouse is ONLY on the icon box */
        .light-mode .source-icon-bg:hover {
          background-color: #ccff00 !important;
          border-color: #ccff00 !important;
        }
        .light-mode .source-icon-bg:hover svg {
          color: #000000 !important;
        }

        /* 4. GROUP HOVER: When mouse is on the source box, highlight the box border & title */
        .light-mode .source-card:hover {
          border-color: #ccff00 !important;
        }
        .light-mode .source-card:hover .source-title {
          color: #000000 !important;
        }
        
         /* 3. Ensure the title text also highlights correctly on hover */
        .light-mode .source-card:hover .source-title {
          color: #000000 !important;
        }

        /* 4. Fix the static (non-hover) state for the icon box so it's not a black void */
        .light-mode .source-icon-bg {
          background-color: #f4f4f5 !important; /* Zinc-100 */
          border-color: #e4e4e7 !important;
        }
        
        /* Add this to the .light-mode section of App.jsx */
        .light-mode .bg-zinc-900.border-l-4.border-\\[\\#ff8800\\] {
          background-color: #fff7ed !important; /* Very light orange bg */
          color: #000000 !important; /* Deep burnt orange text */
          border-color: #ff8800 !important;
        }
        
        /* --- Add to the .light-mode section of App.jsx --- */

        /* Marriage Cards & Detail Panels */
        .light-mode .marriage-card, 
        .light-mode .detail-panel {
          background-color: #ffffff !important;
          border-color: #ccff00 !important; /* Keep the Lime frame */
        }

        /* Detail Text Colors */
        .light-mode .detail-text {
          color: #18181b !important; /* Dark Zinc text */
        }

        .light-mode .marriage-item-title {
          color: #000000 !important; /* Slightly darker lime for readability on white */
        }

        .light-mode .marriage-item-title:hover {
          color: #000000 !important;
        }

        /* Source Items in Marriage View */
        .light-mode .source-item {
          background-color: #f4f4f5 !important; /* Zinc-100 */
          border-color: #e4e4e7 !important;
        }

        .light-mode .source-item .source-title {
          color: #18181b !important;
        }

        .light-mode .marriage-divider {
          border-color: #e4e4e7 !important;
        }

        /* Back button text */
        .light-mode .detail-panel button {
          color: #71717a !important;
        }

        .light-mode .detail-panel button:hover {
          color: #000000 !important;
        }

        /* --- Add to .light-mode section of App.jsx --- */

/* --- Add to the .light-mode section of App.jsx --- */

/* 1. Contemporary Perspective Box - Hover State */
.light-mode .contemporary-box {
  background-color: #f9f9fb !important; 
  border-color: #e4e4e7 !important;
  transition: border-color 0.2s ease, box-shadow 0.2s ease !important;
}

.light-mode .contemporary-box:hover {
  border-color: #a1a1aa !important; /* Subtle darken on hover (Zinc-400) */
  box-shadow: 0 4px 12px rgba(0,0,0,0.03) !important;
}

/* 2. Scholar Link (The small ExternalLink button) - Base & Hover */
.light-mode .scholar-link {
  background-color: #ffffff !important;
  border-color: #d4d4d8 !important;
  color: #71717a !important;
  transition: all 0.2s ease !important;
}

/* 3. The Specific Green Highlight you asked for */
.light-mode .scholar-link:hover {
  background-color: #ccff00 !important;
  border-color: #ccff00 !important;
  color: #000000 !important;
}

/* 4. Ensure the Icon inside the button also turns black on hover */
.light-mode .scholar-link:hover svg {
  color: #000000 !important;
}

/* 5. Supporting Source Cards (The other link boxes) Hover */
.light-mode .source-card:hover {
  border-color: #ccff00 !important;
  background-color: #ffffff !important;
}
.light-mode .source-card:hover .source-title {
  color: #000000 !important;
}
.light-mode .source-card:hover svg {
  color: #ccff00 !important;
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

      <main className={`flex-grow relative flex flex-col ${isTransitioning ? 'animate-view-exit' : 'animate-view-snappy'}`}>
        <div className="visual-grid absolute inset-0 z-0 pointer-events-none opacity-[0.03]" 
             style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '4rem 4rem' }}>
        </div>

        {currentView === 'home' && <HeroSection navigateTo={navigateTo} />}
        {currentView === 'directory' && <DirectoryView activeTopic={activeTopic} navigateTo={navigateTo} />}
        {currentView === 'ramadan' && <RamadanView activeTopic={activeTopic} navigateTo={navigateTo} />}
        {currentView === 'marriage' && <MarriageView />}
        {currentView === 'controversies' && <ControversiesView />}
        
        {(currentView === 'about' || currentView === 'methodology') && (
          <div className="flex-grow flex flex-col">
            {currentView === 'about' ? <AboutView navigateTo={navigateTo} /> : <MethodologyView navigateTo={navigateTo} />}
          </div>
        )}
      </main>

      <Footer navigateTo={navigateTo} />
    </div>
  );
}
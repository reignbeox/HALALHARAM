import React from 'react';
import { Moon, Star, Menu } from 'lucide-react';

export default function Header({ navigateTo }) {
  return (
    <header className="header-main border-t-2 border-zinc-800 sticky top-0 z-50 transition-colors duration-300">
      <div className="bg-[#ccff00] text-black font-mono text-[9px] font-black uppercase tracking-[0.2em] px-6 py-1 flex justify-between items-center">
        <span>HALALVERIFY // SYSTEM</span>
        <span className="hidden sm:inline">SECURE CONNECTION</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div 
          className="flex items-center gap-4 cursor-pointer group" 
          onClick={() => navigateTo('home')}
        >
          <div className="flex items-center gap-1">
            <div className="relative flex items-center justify-center w-10 h-10 transition-colors duration-200">
              <div className="relative w-8 h-8 transition-transform duration-300 group-hover:rotate-[-12deg]">
                <Moon 
                  className="moon-icon w-8 h-8 fill-current" 
                  strokeWidth={0} 
                />
                <Star 
                  size={18} 
                  strokeWidth={0} 
                  className="star-icon absolute -right-2 -top-2 fill-current transition-transform duration-500 ease-in-out group-hover:rotate-[180deg]" 
                />
              </div>
            </div>
          </div>
          <h1 className="logo-text text-2xl font-black tracking-tighter uppercase leading-none hidden sm:block">
            HALAL<br/>VERIFY
          </h1>
        </div>
        
        <button 
          onClick={() => document.dispatchEvent(new CustomEvent('open-sidebar'))}
          className="menu-btn flex items-center gap-2 px-4 py-2 border-2 border-[#ccff00] text-[#ccff00] font-mono font-bold text-xs uppercase tracking-widest hover:bg-[#ccff00] hover:text-black transition-colors group"
        >
          <span>[ MENU ]</span>
          <Menu className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </button>
      </div>
    </header>
  );
}
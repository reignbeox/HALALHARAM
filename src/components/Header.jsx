import React from 'react';
import { Moon, Check, Menu } from 'lucide-react';

export default function Header({ navigateTo }) {
    return (
      <header className="bg-[#050505] border-t-2 border-zinc-800 sticky top-0 z-50">
        <div className="bg-[#ccff00] text-black font-mono text-[9px] font-black uppercase tracking-[0.2em] px-6 py-1 flex justify-between items-center">
          <span>HALALVERIFY // SYSTEM</span>
          <span className="hidden sm:inline">SECURE CONNECTION</span>
        </div>
  
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div 
            className="flex items-center gap-4 cursor-pointer group" 
            onClick={() => navigateTo('home')}
          >
            <div className="relative flex items-center justify-center w-12 h-12 bg-white group-hover:bg-[#ccff00] transition-colors duration-0">
              <Moon className="w-8 h-8 text-black absolute -translate-x-1" strokeWidth={2} />
              <Check className="w-5 h-5 text-[#ccff00] absolute right-1 bottom-1 bg-black p-0.5" strokeWidth={4} />
            </div>
            <h1 className="text-2xl font-black tracking-tighter uppercase leading-none hidden sm:block">
              HALAL_<br/>VERIFY
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
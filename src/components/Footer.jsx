import React from 'react';
import { Crosshair } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t-2 border-zinc-800 py-8 px-6 mt-auto relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        <div className="flex flex-col gap-3 min-w-[200px]">
          <h4 className="text-[#ccff00] font-mono text-[10px] font-bold tracking-widest uppercase">[ DIRECTIVES ]</h4>
          <nav className="flex flex-col gap-2 text-xs font-mono font-bold tracking-widest text-zinc-400 uppercase">
            <a href="#" className="hover:text-[#ccff00] transition-colors flex items-center gap-2 group"><span className="text-[#ccff00] opacity-0 group-hover:opacity-100">&gt;</span> ABOUT</a>
            <a href="#" className="hover:text-[#ccff00] transition-colors flex items-center gap-2 group"><span className="text-[#ccff00] opacity-0 group-hover:opacity-100">&gt;</span> METHODOLOGY</a>
          </nav>
        </div>

        <div className="flex-grow max-w-xl">
          <h4 className="text-[#ccff00] font-mono text-[10px] font-bold tracking-widest uppercase mb-2">[ CONTACT / SUBMIT REQUEST ]</h4>
          <p className="text-zinc-500 font-mono text-[10px] mb-3 uppercase tracking-widest leading-relaxed">
            Can't find a topic? Submit a query for manual research review or send us a message.
          </p>
          <form className="flex flex-col sm:flex-row gap-0 shadow-[2px_2px_0_#000]" onSubmit={(e) => e.preventDefault()}>
            <div className="flex-grow flex relative border-2 border-zinc-700 bg-[#050505]">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 font-mono font-black text-xs">&gt;</span>
              <input type="text" placeholder="ENTER TOPIC OR MESSAGE..." className="w-full pl-8 pr-3 py-2 bg-transparent text-white font-mono text-[10px] placeholder-zinc-600 focus:outline-none focus:bg-zinc-900 uppercase font-bold transition-colors" required />
            </div>
            <button type="submit" className="px-5 py-2 bg-zinc-800 text-white font-black font-mono text-[10px] uppercase tracking-widest hover:bg-[#ccff00] hover:text-black transition-colors border-y-2 border-r-2 border-zinc-700 whitespace-nowrap">SEND</button>
          </form>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto mt-8 pt-4 border-t border-zinc-800 text-[9px] font-mono text-zinc-500 font-bold uppercase tracking-[0.2em] flex flex-col md:flex-row justify-between items-center gap-3">
         <div className="flex items-center gap-2"><Crosshair className="w-3 h-3 text-[#ccff00]" /><span>HALALVERIFY PLATFORM</span></div>
         <p>© {new Date().getFullYear()} HALALVERIFY. EDUCATIONAL PURPOSES ONLY.</p>
      </div>
    </footer>
  );
}
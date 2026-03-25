import React from 'react';
import { Scale, BookOpen, Zap } from 'lucide-react';

export default function MethodologyView({ navigateTo }) {
  return (
    <section className="px-6 py-16 relative z-10 bg-[#0a0a0a] flex-grow">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <div className="inline-block px-4 py-1 border border-[#ccff00] text-[#ccff00] font-mono text-[10px] uppercase tracking-[0.3em] mb-4 font-bold bg-[#ccff00]/10">
            JURISPRUDENCE_LOGIC
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4">THE METHODOLOGY</h2>
        </div>

        <div className="space-y-12">
          <div className="relative pl-12 border-l-2 border-zinc-800">
            <div className="absolute -left-4 top-0 w-8 h-8 bg-[#ccff00] text-black flex items-center justify-center font-black font-mono text-sm">01</div>
            <h3 className="text-xl font-black text-white uppercase mb-4 flex items-center gap-3">
              <BookOpen className="w-5 h-5 text-[#ccff00]" /> SOURCE HIERARCHY
            </h3>
            <p className="font-mono text-zinc-400 text-sm leading-relaxed uppercase mb-4">
              Our data retrieval follows the strict hierarchy of Usul al-Fiqh:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {['The Quran', 'Authentic Sunnah (Hadith)', 'Ijma (Scholarly Consensus)', 'Qiyas (Analogical Reasoning)'].map((step, i) => (
                <li key={i} className="bg-zinc-900 p-3 border border-zinc-800 font-mono text-[10px] text-white font-bold tracking-widest">
                  &gt; {step}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative pl-12 border-l-2 border-zinc-800">
            <div className="absolute -left-4 top-0 w-8 h-8 bg-[#ccff00] text-black flex items-center justify-center font-black font-mono text-sm">02</div>
            <h3 className="text-xl font-black text-white uppercase mb-4 flex items-center gap-3">
              <Zap className="w-5 h-5 text-[#ccff00]" /> AI SYNTHESIS LOOP
            </h3>
            <p className="font-mono text-zinc-400 text-sm leading-relaxed uppercase">
              When a query is initiated, the system performs a vector search across our internal databank of verified rulings. Gemini 2.5 Flash then synthesizes this context to provide a clear explanation while highlighting differing madhhab perspectives.
            </p>
          </div>

          <div className="relative pl-12 border-l-2 border-zinc-800">
            <div className="absolute -left-4 top-0 w-8 h-8 bg-[#ccff00] text-black flex items-center justify-center font-black font-mono text-sm">03</div>
            <h3 className="text-xl font-black text-white uppercase mb-4 flex items-center gap-3">
              <Scale className="w-5 h-5 text-[#ccff00]" /> STATUS CLASSIFICATION
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-[10px] uppercase font-bold tracking-widest">
              <div className="border border-[#ccff00] p-4 bg-[#ccff00]/5">
                <span className="text-[#ccff00] block mb-2">HALAL / PERMITTED</span>
                <p className="text-zinc-500 font-normal leading-tight">Explicitly allowed or falls under original permissibility.</p>
              </div>
              <div className="border border-[#ff8800] p-4 bg-[#ff8800]/5">
                <span className="text-[#ff8800] block mb-2">MAKRUH / DISPUTED</span>
                <p className="text-zinc-500 font-normal leading-tight">Disliked or contains significant scholarly disagreement.</p>
              </div>
              <div className="border border-[#ff003c] p-4 bg-[#ff003c]/5">
                <span className="text-[#ff003c] block mb-2">HARAM / FORBIDDEN</span>
                <p className="text-zinc-500 font-normal leading-tight">Strictly prohibited via clear textual evidence.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <button 
            onClick={() => navigateTo('home')} 
            className="px-6 py-3 border border-zinc-700 text-zinc-500 font-mono text-xs uppercase hover:text-[#ccff00] hover:border-[#ccff00] transition-colors bg-zinc-900/50"
          >
            [ DISMISS PROTOCOL ]
          </button>
        </div>
      </div>
    </section>
  );
}
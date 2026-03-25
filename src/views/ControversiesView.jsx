import React, { useState } from 'react';
import { AlertTriangle, ExternalLink, ChevronUp, ChevronDown } from 'lucide-react';
import { CONTROVERSIES_DATA } from '../data/database';
export default function ControversiesView() {
    const [activeControversy, setActiveControversy] = useState(null);
  
    return (
      <section className="px-6 py-16 relative z-10 bg-[#0a0a0a] flex-grow">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <div className="inline-block px-4 py-1 border border-[#ccff00] text-[#ccff00] font-mono text-[10px] uppercase tracking-[0.3em] mb-4 font-bold bg-[#ccff00]/10">THE TOUGH QUESTIONS</div>
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4">QURANIC CONTROVERSIES</h2>
            <p className="font-mono text-zinc-400 uppercase tracking-widest text-sm border-l-4 border-[#ccff00] pl-4">Addressing common critiques with verified scholarly context.</p>
          </div>
  
          <div className="space-y-6">
            {CONTROVERSIES_DATA.map((item, idx) => (
              <div key={idx} className={`border-2 border-zinc-700 bg-[#050505] transition-all duration-300 ${activeControversy === idx ? 'shadow-[8px_8px_0_#ccff00] border-[#ccff00]' : 'hover:border-zinc-500'}`}>
                <button onClick={() => setActiveControversy(activeControversy === idx ? null : idx)} className="w-full bg-[#111111] p-5 border-b-2 border-zinc-700 flex items-center justify-between group">
                  <div className="flex items-center gap-4">
                    <AlertTriangle className={`w-6 h-6 transition-colors ${activeControversy === idx ? 'text-[#ccff00]' : 'text-zinc-500 group-hover:text-[#ccff00]'}`} />
                    <h3 className="text-2xl font-black tracking-tighter uppercase text-white">{item.topic}</h3>
                  </div>
                  <div className={`p-1 bg-[#050505] border transition-colors ${activeControversy === idx ? 'border-[#ccff00] text-[#ccff00]' : 'border-zinc-700 text-zinc-500 group-hover:border-zinc-500'}`}>
                    {activeControversy === idx ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>
  
                <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#0a0a0a]">
                  <div className="flex flex-col gap-3">
                    <div className="inline-block bg-[#1a1a1a] text-[#a3a3a3] border border-[#333333] font-mono text-[9px] font-bold uppercase tracking-widest px-2 py-1 w-fit">[ THE CLAIM / CRITIQUE ]</div>
                    <p className="font-mono text-zinc-300 text-base leading-relaxed italic">{item.claim}</p>
                  </div>
                  <div className="flex flex-col gap-3 border-l-2 border-[#ccff00] pl-6">
                    <div className="inline-block bg-[#ccff00]/20 text-[#ccff00] border border-[#ccff00] font-mono text-[9px] font-bold uppercase tracking-widest px-2 py-1 w-fit">[ THE NUANCE / CONTEXT ]</div>
                    <p className="font-mono text-white text-sm leading-relaxed">{item.context.replace('Context: ', '')}</p>
                  </div>
                </div>
  
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeControversy === idx ? 'max-h-[1000px] border-t-2 border-zinc-800 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="p-6 md:p-8 bg-[#050505]">
                    <h4 className="font-mono text-[#ccff00] text-[10px] font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#ccff00] inline-block"></span>DETAILED SCHOLARLY ELABORATION
                    </h4>
                    <p className="font-mono text-zinc-300 text-sm leading-relaxed mb-8 border-l border-zinc-800 pl-4">{item.elaboration}</p>
                    <div>
                      <span className="block font-mono text-[9px] text-zinc-500 uppercase tracking-widest mb-3">SUPPORTING TEXTS & FATWAS:</span>
                      <div className="flex flex-wrap gap-3">
                        {item.sources.map((s, i) => (
                          <button key={i} className="inline-flex items-center gap-3 px-4 py-3 bg-zinc-900 border border-zinc-700 hover:border-[#ccff00] transition-colors text-left group">
                            <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-[#ccff00]" />
                            <div>
                              <span className="block font-bold text-xs text-white uppercase tracking-wider group-hover:text-[#ccff00] transition-colors">{s.title}</span>
                              <span className="block text-[9px] font-mono text-zinc-500 uppercase tracking-widest">AUTHOR: {s.author}</span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
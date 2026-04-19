import React, { useState } from 'react';
import { ShieldAlert, ChevronDown, ChevronUp, ExternalLink, Zap } from 'lucide-react';
import { CONTROVERSIES_DATA } from '../data/database';

export default function ControversiesView() {
  const [activeControversy, setActiveControversy] = useState(null);

  return (
    <section className="px-6 py-16 relative z-10 bg-transparent flex-grow">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <div className="inline-block px-4 py-1 border border-[#ccff00] text-[#ccff00] font-mono text-[10px] uppercase tracking-[0.3em] mb-4 font-bold bg-[#ccff00]/10">THE TOUGH QUESTIONS</div>
          <h2 className="section-title text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4">QURANIC CONTROVERSIES</h2>
          <p className="font-mono text-zinc-500 uppercase tracking-widest text-sm border-l-4 border-[#ccff00] pl-4">Addressing common critiques with verified scholarly context.</p>
        </div>

        <div className="space-y-6">
          {CONTROVERSIES_DATA.map((item, idx) => (
            <div key={idx} className={`controversy-card border-2 border-zinc-700 bg-[#050505] transition-all duration-300 ${activeControversy === idx ? 'shadow-[8px_8px_0_#ccff00] border-[#ccff00]' : 'hover:border-zinc-500'}`}>
              
              <button onClick={() => setActiveControversy(activeControversy === idx ? null : idx)} className="controversy-header w-full bg-[#111111] p-5 border-b-2 border-zinc-700 flex items-center justify-between group transition-colors">
                <div className="flex items-center gap-4 text-left">
                  <ShieldAlert className={`w-6 h-6 flex-shrink-0 transition-colors ${activeControversy === idx ? 'text-[#ccff00]' : 'text-zinc-500 group-hover:text-[#ccff00]'}`} />
                  <h3 className="controversy-title text-xl md:text-2xl font-black tracking-tighter uppercase text-white">{item.topic}</h3>
                </div>
                <div className={`expand-icon p-1 bg-[#050505] border transition-colors flex-shrink-0 ${activeControversy === idx ? 'border-[#ccff00] text-[#ccff00]' : 'border-zinc-700 text-zinc-500 group-hover:border-zinc-500'}`}>
                  {activeControversy === idx ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </div>
              </button>

              <div className="context-area p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#0a0a0a]">
                <div className="flex flex-col gap-3">
                  <div className="controversy-pill inline-block bg-[#1a1a1a] text-[#a3a3a3] border border-[#333333] font-mono text-[9px] font-bold uppercase tracking-widest px-2 py-1 w-fit transition-colors">
                    [ THE CLAIM / CRITIQUE ]
                  </div>
                  <p className="font-mono text-zinc-500 text-base leading-relaxed italic">{item.claim}</p>
                </div>
                <div className="flex flex-col gap-3 border-l-2 border-[#ccff00] pl-6">
                  <div className="inline-block bg-[#ccff00]/20 text-[#ccff00] border border-[#ccff00] font-mono text-[9px] font-bold uppercase tracking-widest px-2 py-1 w-fit">
                    [ THE NUANCE / CONTEXT ]
                  </div>
                  <p className="context-text font-mono text-white text-sm leading-relaxed">{item.context.replace('Context: ', '')}</p>
                </div>
              </div>

              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeControversy === idx ? 'max-h-[2000px] border-t-2 border-zinc-800 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="elaboration-area p-6 md:p-8 bg-[#050505]">
                  <h4 className="font-mono text-[#ccff00] text-[10px] font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#ccff00] inline-block"></span>DETAILED SCHOLARLY ELABORATION
                  </h4>
                  <p className="font-mono text-zinc-500 text-sm leading-relaxed mb-8 border-l border-zinc-800 pl-4">{item.elaboration}</p>
                  
                  {/* Classical Sources */}
                  <div>
                    <span className="block font-mono text-[9px] text-zinc-500 uppercase tracking-widest mb-3">SUPPORTING TEXTS & FATWAS:</span>
                    <div className="flex flex-wrap gap-3">
                  {/* Supporting Texts Mapping */}
{item.sources.map((s, i) => (
  <button 
    key={i} 
    onClick={() => s.link && window.open(s.link, '_blank', 'noopener,noreferrer')}
    className="source-card group inline-flex items-center gap-3 px-4 py-3 bg-zinc-900 border border-zinc-700 text-left transition-all hover:border-[#ccff00]"
  >
    <ExternalLink className="w-4 h-4 text-zinc-500 transition-colors group-hover:text-[#ccff00]" />
    <div>
      <span className="source-title block font-bold text-xs uppercase tracking-wider text-white transition-colors">
        {s.title}
      </span>
      <span className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
        AUTHOR: {s.author}
      </span>
    </div>
  </button>
))}
                    </div>
                  </div>

                  {/* Contemporary Perspective Section */}
                  {item.contemporaryScholars && item.contemporaryScholars.length > 0 && (
                    <div className="mt-8 pt-8 border-t border-zinc-800 divider-line">
                      <h4 className="font-mono text-[#ccff00] text-[10px] font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                        <Zap className="w-3 h-3 text-[#ccff00]" /> CONTEMPORARY PERSPECTIVES
                      </h4>
                      <div className="space-y-4">
                        {item.contemporaryScholars.map((scholar, sIdx) => (
                          <div key={sIdx} className="contemporary-box bg-[#111111] border border-zinc-800 p-5 hover:border-zinc-600 transition-colors">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-3 border-b border-zinc-800 pb-3 inner-divider">
                              <span className="scholar-name font-black text-white uppercase tracking-wider">{scholar.name}</span>
                              {scholar.source && (
                                <button 
                                  onClick={() => scholar.source.link && window.open(scholar.source.link, '_blank', 'noopener,noreferrer')}
                                  className={`scholar-link inline-flex items-center gap-2 px-3 py-1.5 bg-[#050505] border border-zinc-700 text-[9px] font-mono uppercase tracking-widest transition-colors ${scholar.source.link ? 'text-zinc-500 hover:border-[#ccff00] hover:text-[#ccff00] cursor-pointer' : 'text-zinc-600 cursor-default'}`}
                                >
                                  <ExternalLink className="w-3 h-3" />
                                  {scholar.source.title}
                                </button>
                              )}
                            </div>
                            <p className="font-mono text-zinc-500 text-sm leading-relaxed">
                              "{scholar.opinion}"
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
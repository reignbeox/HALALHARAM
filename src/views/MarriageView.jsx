import React, { useState } from 'react';
import { ShieldAlert, Scale, Users, ExternalLink } from 'lucide-react';
import { MARRIAGE_DATA } from '../data/database';

export default function MarriageView() {
    const [activeItem, setActiveItem] = useState(null); // { category: 'husband'|'wife'|'shared', index: 0 }
  
    return (
      <section className="px-6 py-16 relative z-10 bg-[#0a0a0a] flex-grow">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="inline-block px-4 py-1 border border-[#ccff00] text-[#ccff00] font-mono text-[10px] uppercase tracking-[0.3em] mb-4 font-bold bg-[#ccff00]/10">SOCIAL FRAMEWORK</div>
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4">MARRIAGE: RIGHTS & RESPONSIBILITIES</h2>
            <p className="font-mono text-zinc-400 uppercase tracking-widest text-sm border-l-4 border-[#ccff00] pl-4">A side-by-side comparison of duties within the Islamic framework.</p>
          </div>
  
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Husband's Col */}
            <div className="border-2 border-[#ccff00] bg-[#050505] flex flex-col overflow-hidden relative min-h-[400px]">
              <div className="bg-[#ccff00] text-black p-4 border-b-2 border-[#ccff00] flex items-center gap-3 relative z-20">
                <ShieldAlert className="w-5 h-5" />
                <h3 className="font-black text-xl tracking-tighter uppercase">THE HUSBAND (QIWAMAH)</h3>
              </div>
              
              <div className={`p-6 flex flex-col gap-6 flex-grow relative z-10 transition-opacity duration-300 ${activeItem?.category === 'husband' ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                {MARRIAGE_DATA.husband.map((item, idx) => (
                  <button key={idx} onClick={() => setActiveItem({ category: 'husband', index: idx })} className="relative text-left group">
                    <div className="absolute -left-2 top-1.5 w-1 h-1 bg-[#ccff00] group-hover:scale-[2] transition-transform"></div>
                    <h4 className="font-mono font-bold text-[#ccff00] group-hover:text-white transition-colors text-sm uppercase tracking-widest mb-2 pl-2">{item.title}</h4>
                    <p className="font-mono text-zinc-400 text-xs leading-relaxed pl-2 line-clamp-2">{item.desc}</p>
                    <div className="pl-2 mt-2 font-mono text-[9px] text-[#ccff00] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">[ VIEW DETAILS ]</div>
                  </button>
                ))}
              </div>
  
              <div className={`absolute inset-x-0 bottom-0 top-[60px] bg-[#050505] z-30 p-6 flex flex-col transition-transform duration-300 ease-in-out ${activeItem?.category === 'husband' ? 'translate-y-0' : 'translate-y-full'}`}>
                <button onClick={() => setActiveItem(null)} className="mb-6 flex items-center gap-2 font-mono text-[10px] text-zinc-400 hover:text-[#ccff00] uppercase tracking-widest w-fit">
                  <span>&lt;</span> BACK TO LIST
                </button>
                {activeItem?.category === 'husband' && (
                  <div className="flex-grow overflow-y-auto">
                    <h4 className="font-black text-2xl text-[#ccff00] uppercase tracking-tighter mb-4 leading-none">{MARRIAGE_DATA.husband[activeItem.index].title}</h4>
                    <p className="font-mono text-zinc-300 text-sm leading-relaxed mb-6">{MARRIAGE_DATA.husband[activeItem.index].elaboration}</p>
                    <div className="border-t border-zinc-800 pt-4">
                      <span className="block font-mono text-[9px] text-zinc-500 uppercase tracking-widest mb-3">SOURCES:</span>
                      {MARRIAGE_DATA.husband[activeItem.index].sources.map((s, i) => (
                        <div key={i} className="bg-zinc-900 border border-zinc-800 p-3 mb-2 flex items-center gap-3">
                          <ExternalLink className="w-3 h-3 text-[#ccff00] flex-shrink-0" />
                          <div>
                            <div className="font-mono font-bold text-white text-[10px] uppercase tracking-wider">{s.title}</div>
                            <div className="font-mono text-zinc-500 text-[9px] uppercase tracking-widest">{s.author}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
  
            {/* Shared Col (Inverted) */}
            <div className="border-2 border-white bg-white text-black flex flex-col lg:-mt-4 lg:-mb-4 z-10 shadow-[8px_8px_0_#ccff00] overflow-hidden relative min-h-[400px]">
              <div className="bg-black text-white p-4 border-b-2 border-black flex items-center justify-center gap-3 text-center relative z-20">
                <Scale className="w-5 h-5" />
                <h3 className="font-black text-xl tracking-tighter uppercase">SHARED RIGHTS</h3>
              </div>
  
              <div className={`p-6 flex flex-col gap-8 flex-grow justify-center relative z-10 transition-opacity duration-300 ${activeItem?.category === 'shared' ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                {MARRIAGE_DATA.shared.map((item, idx) => (
                  <button key={idx} onClick={() => setActiveItem({ category: 'shared', index: idx })} className="text-center group w-full">
                    <h4 className="font-black text-lg uppercase tracking-tight mb-2 border-b-2 border-black pb-1 inline-block group-hover:text-[#ccff00] group-hover:border-[#ccff00] transition-colors">{item.title}</h4>
                    <p className="font-mono text-zinc-800 text-sm leading-relaxed max-w-xs mx-auto line-clamp-2">{item.desc}</p>
                    <div className="mt-2 font-mono text-[9px] text-[#ccff00] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">[ VIEW DETAILS ]</div>
                  </button>
                ))}
              </div>
  
              <div className={`absolute inset-x-0 bottom-0 top-[60px] bg-white z-30 p-6 flex flex-col transition-transform duration-300 ease-in-out ${activeItem?.category === 'shared' ? 'translate-y-0' : 'translate-y-full'}`}>
                <button onClick={() => setActiveItem(null)} className="mb-6 flex items-center gap-2 font-mono text-[10px] text-zinc-500 hover:text-black font-bold uppercase tracking-widest w-fit">
                  <span>&lt;</span> BACK TO LIST
                </button>
                {activeItem?.category === 'shared' && (
                  <div className="flex-grow overflow-y-auto text-left">
                    <h4 className="font-black text-2xl text-black uppercase tracking-tighter mb-4 leading-none border-b-4 border-[#ccff00] inline-block pb-1">{MARRIAGE_DATA.shared[activeItem.index].title}</h4>
                    <p className="font-mono text-zinc-800 text-sm leading-relaxed mb-6">{MARRIAGE_DATA.shared[activeItem.index].elaboration}</p>
                    <div className="border-t border-zinc-300 pt-4">
                      <span className="block font-mono text-[9px] text-zinc-500 uppercase tracking-widest mb-3 font-bold">SOURCES:</span>
                      {MARRIAGE_DATA.shared[activeItem.index].sources.map((s, i) => (
                        <div key={i} className="bg-zinc-100 border border-zinc-300 p-3 mb-2 flex items-center gap-3">
                          <ExternalLink className="w-3 h-3 text-black flex-shrink-0" />
                          <div>
                            <div className="font-mono font-black text-black text-[10px] uppercase tracking-wider">{s.title}</div>
                            <div className="font-mono text-zinc-600 text-[9px] uppercase tracking-widest">{s.author}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
  
            {/* Wife's Col */}
            <div className="border-2 border-[#ccff00] bg-[#050505] flex flex-col overflow-hidden relative min-h-[400px]">
              <div className="bg-[#ccff00] text-black p-4 border-b-2 border-[#ccff00] flex items-center gap-3 relative z-20">
                <Users className="w-5 h-5" />
                <h3 className="font-black text-xl tracking-tighter uppercase">THE WIFE</h3>
              </div>
              
              <div className={`p-6 flex flex-col gap-6 flex-grow relative z-10 transition-opacity duration-300 ${activeItem?.category === 'wife' ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                {MARRIAGE_DATA.wife.map((item, idx) => (
                  <button key={idx} onClick={() => setActiveItem({ category: 'wife', index: idx })} className="relative text-left group">
                    <div className="absolute -left-2 top-1.5 w-1 h-1 bg-[#ccff00] group-hover:scale-[2] transition-transform"></div>
                    <h4 className="font-mono font-bold text-[#ccff00] group-hover:text-white transition-colors text-sm uppercase tracking-widest mb-2 pl-2">{item.title}</h4>
                    <p className="font-mono text-zinc-400 text-xs leading-relaxed pl-2 line-clamp-2">{item.desc}</p>
                    <div className="pl-2 mt-2 font-mono text-[9px] text-[#ccff00] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">[ VIEW DETAILS ]</div>
                  </button>
                ))}
              </div>
  
              <div className={`absolute inset-x-0 bottom-0 top-[60px] bg-[#050505] z-30 p-6 flex flex-col transition-transform duration-300 ease-in-out ${activeItem?.category === 'wife' ? 'translate-y-0' : 'translate-y-full'}`}>
                <button onClick={() => setActiveItem(null)} className="mb-6 flex items-center gap-2 font-mono text-[10px] text-zinc-400 hover:text-[#ccff00] uppercase tracking-widest w-fit">
                  <span>&lt;</span> BACK TO LIST
                </button>
                {activeItem?.category === 'wife' && (
                  <div className="flex-grow overflow-y-auto">
                    <h4 className="font-black text-2xl text-[#ccff00] uppercase tracking-tighter mb-4 leading-none">{MARRIAGE_DATA.wife[activeItem.index].title}</h4>
                    <p className="font-mono text-zinc-300 text-sm leading-relaxed mb-6">{MARRIAGE_DATA.wife[activeItem.index].elaboration}</p>
                    <div className="border-t border-zinc-800 pt-4">
                      <span className="block font-mono text-[9px] text-zinc-500 uppercase tracking-widest mb-3">SOURCES:</span>
                      {MARRIAGE_DATA.wife[activeItem.index].sources.map((s, i) => (
                        <div key={i} className="bg-zinc-900 border border-zinc-800 p-3 mb-2 flex items-center gap-3">
                          <ExternalLink className="w-3 h-3 text-[#ccff00] flex-shrink-0" />
                          <div>
                            <div className="font-mono font-bold text-white text-[10px] uppercase tracking-wider">{s.title}</div>
                            <div className="font-mono text-zinc-500 text-[9px] uppercase tracking-widest">{s.author}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
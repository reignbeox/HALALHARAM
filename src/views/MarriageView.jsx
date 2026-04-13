import React, { useState } from 'react';
import { Scale, ExternalLink } from 'lucide-react';
import { MARRIAGE_DATA } from '../data/database';

// Custom perfectly-matched SVG for the Greek Male (Mars) Symbol
const MarsIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="10" cy="14" r="5"></circle>
    <line x1="13.54" y1="10.46" x2="21" y2="3"></line>
    <polyline points="16 3 21 3 21 8"></polyline>
  </svg>
);

// Custom perfectly-matched SVG for the Greek Female (Venus) Symbol
const VenusIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="9" r="5"></circle>
    <line x1="12" y1="14" x2="12" y2="22"></line>
    <line x1="9" y1="19" x2="15" y2="19"></line>
  </svg>
);

export default function MarriageView() {
    const [activeItem, setActiveItem] = useState(null); // { category: 'husband'|'wife'|'shared', index: 0 }
  
    return (
      <section className="px-6 py-16 relative z-10 bg-transparent flex-grow">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4">MARRIAGE: RIGHTS & RESPONSIBILITIES</h2>
            <p className="font-mono text-zinc-500 uppercase tracking-widest text-sm border-l-4 border-[#ccff00] pl-4">A side-by-side comparison of duties within the Islamic framework.</p>
          </div>
  
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Husband's Col */}
            <div className="border-2 border-[#ccff00] bg-[#050505] flex flex-col overflow-hidden relative min-h-[400px]">
              <div className="bg-[#ccff00] text-black p-4 border-b-2 border-[#ccff00] flex items-center gap-3 relative z-20">
                <MarsIcon className="w-5 h-5" />
                <h3 className="font-black text-xl tracking-tighter uppercase">THE HUSBAND (QIWAMAH)</h3>
              </div>
              
              <div className={`p-6 flex flex-col gap-6 flex-grow relative z-10 transition-opacity duration-300 ${activeItem?.category === 'husband' ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                {MARRIAGE_DATA.husband.map((item, idx) => (
                  <button key={idx} onClick={() => setActiveItem({ category: 'husband', index: idx })} className="relative text-left group">
                    <div className="absolute -left-2 top-1.5 w-1 h-1 bg-[#ccff00] group-hover:scale-[2] transition-transform"></div>
                    <h4 className="font-mono font-bold text-[#ccff00] group-hover:text-white transition-colors text-sm uppercase tracking-widest mb-2 pl-2">{item.title}</h4>
                    <p className="font-mono text-zinc-500 text-xs leading-relaxed pl-2 line-clamp-2">{item.desc}</p>
                    <div className="pl-2 mt-2 font-mono text-[9px] text-[#ccff00] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">[ VIEW DETAILS ]</div>
                  </button>
                ))}
              </div>
  
              <div className={`absolute inset-x-0 bottom-0 top-[60px] bg-[#050505] z-30 p-6 flex flex-col transition-transform duration-300 ease-in-out ${activeItem?.category === 'husband' ? 'translate-y-0' : 'translate-y-full'}`}>
                <button onClick={() => setActiveItem(null)} className="mb-6 flex items-center gap-2 font-mono text-[10px] text-zinc-500 hover:text-[#ccff00] uppercase tracking-widest w-fit">
                  <span>&lt;</span> BACK TO LIST
                </button>
                {activeItem?.category === 'husband' && (
                  <div className="flex-grow overflow-y-auto">
                    <h4 className="font-black text-2xl text-[#ccff00] uppercase tracking-tighter mb-4 leading-none">{MARRIAGE_DATA.husband[activeItem.index].title}</h4>
                    <p className="font-mono text-white text-sm leading-relaxed mb-6">{MARRIAGE_DATA.husband[activeItem.index].elaboration}</p>
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
  
            {/* Shared Col */}
            <div className="border-2 border-[#ccff00] bg-[#050505] flex flex-col lg:-mt-4 lg:-mb-4 z-20 overflow-hidden relative min-h-[400px]">
              <div className="bg-[#ccff00] text-black p-4 border-b-2 border-[#ccff00] flex items-center gap-3 relative z-20">
                <Scale className="w-5 h-5" />
                <h3 className="font-black text-xl tracking-tighter uppercase">SHARED RIGHTS</h3>
              </div>
  
              <div className={`p-6 flex flex-col gap-6 flex-grow justify-start relative z-10 transition-opacity duration-300 ${activeItem?.category === 'shared' ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                {MARRIAGE_DATA.shared.map((item, idx) => (
                  <button key={idx} onClick={() => setActiveItem({ category: 'shared', index: idx })} className="text-left group w-full flex flex-col items-start">
                    <h4 className="font-mono font-bold text-[#ccff00] group-hover:text-white transition-colors text-lg uppercase tracking-widest mb-2">{item.title}</h4>
                    <p className="font-mono text-zinc-500 text-xs leading-relaxed text-justify w-full line-clamp-2">{item.desc}</p>
                    <div className="mt-2 font-mono text-[9px] text-[#ccff00] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">[ VIEW DETAILS ]</div>
                  </button>
                ))}
              </div>
  
              <div className={`absolute inset-x-0 bottom-0 top-[60px] bg-[#050505] z-30 p-6 flex flex-col transition-transform duration-300 ease-in-out ${activeItem?.category === 'shared' ? 'translate-y-0' : 'translate-y-full'}`}>
                <button onClick={() => setActiveItem(null)} className="mb-6 flex items-center gap-2 font-mono text-[10px] text-zinc-500 hover:text-[#ccff00] uppercase tracking-widest w-fit">
                  <span>&lt;</span> BACK TO LIST
                </button>
                {activeItem?.category === 'shared' && (
                  <div className="flex-grow overflow-y-auto text-left">
                    <h4 className="font-black text-2xl text-[#ccff00] uppercase tracking-tighter mb-4 leading-none">{MARRIAGE_DATA.shared[activeItem.index].title}</h4>
                    <p className="font-mono text-white text-sm leading-relaxed mb-6">{MARRIAGE_DATA.shared[activeItem.index].elaboration}</p>
                    <div className="border-t border-zinc-800 pt-4">
                      <span className="block font-mono text-[9px] text-zinc-500 uppercase tracking-widest mb-3 font-bold">SOURCES:</span>
                      {MARRIAGE_DATA.shared[activeItem.index].sources.map((s, i) => (
                        <div key={i} className="bg-zinc-900 border border-zinc-800 p-3 mb-2 flex items-center gap-3 text-left">
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
  
            {/* Wife's Col */}
            <div className="border-2 border-[#ccff00] bg-[#050505] flex flex-col overflow-hidden relative min-h-[400px]">
              <div className="bg-[#ccff00] text-black p-4 border-b-2 border-[#ccff00] flex items-center gap-3 relative z-20">
                <VenusIcon className="w-5 h-5" />
                <h3 className="font-black text-xl tracking-tighter uppercase">THE WIFE</h3>
              </div>
              
              <div className={`p-6 flex flex-col gap-6 flex-grow relative z-10 transition-opacity duration-300 ${activeItem?.category === 'wife' ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                {MARRIAGE_DATA.wife.map((item, idx) => (
                  <button key={idx} onClick={() => setActiveItem({ category: 'wife', index: idx })} className="relative text-left group">
                    <div className="absolute -left-2 top-1.5 w-1 h-1 bg-[#ccff00] group-hover:scale-[2] transition-transform"></div>
                    <h4 className="font-mono font-bold text-[#ccff00] group-hover:text-white transition-colors text-sm uppercase tracking-widest mb-2 pl-2">{item.title}</h4>
                    <p className="font-mono text-zinc-500 text-xs leading-relaxed pl-2 line-clamp-2">{item.desc}</p>
                    <div className="pl-2 mt-2 font-mono text-[9px] text-[#ccff00] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">[ VIEW DETAILS ]</div>
                  </button>
                ))}
              </div>
  
              <div className={`absolute inset-x-0 bottom-0 top-[60px] bg-[#050505] z-30 p-6 flex flex-col transition-transform duration-300 ease-in-out ${activeItem?.category === 'wife' ? 'translate-y-0' : 'translate-y-full'}`}>
                <button onClick={() => setActiveItem(null)} className="mb-6 flex items-center gap-2 font-mono text-[10px] text-zinc-500 hover:text-[#ccff00] uppercase tracking-widest w-fit">
                  <span>&lt;</span> BACK TO LIST
                </button>
                {activeItem?.category === 'wife' && (
                  <div className="flex-grow overflow-y-auto">
                    <h4 className="font-black text-2xl text-[#ccff00] uppercase tracking-tighter mb-4 leading-none">{MARRIAGE_DATA.wife[activeItem.index].title}</h4>
                    <p className="font-mono text-white text-sm leading-relaxed mb-6">{MARRIAGE_DATA.wife[activeItem.index].elaboration}</p>
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
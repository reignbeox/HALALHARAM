import React, { useState } from 'react';
import { ShieldAlert, ChevronDown, ChevronUp, ExternalLink, Zap } from 'lucide-react';
import { DATABASE } from '../data/database';
import { getStatusConfig, getStatusDot, getTabDot } from '../utils/helpers';

export default function DirectoryView({ activeTopic, navigateTo }) {
    const [directoryFilter, setDirectoryFilter] = useState("ALL");
    const [expandedDiffering, setExpandedDiffering] = useState({});
  
    const directoryData = DATABASE.filter(item => {
      const isDisputedOrMakruh = item.status.toUpperCase() === 'MAKRUH' || item.status.toUpperCase() === 'DISPUTED';
      return directoryFilter === "ALL" || 
             item.status.toUpperCase() === directoryFilter || 
             (directoryFilter === "MAKRUH / DISPUTED" && isDisputedOrMakruh);
    });
  
    const getStatusWeight = (status) => {
      const s = status.toUpperCase();
      if (s === 'HALAL') return 1;
      if (s === 'MAKRUH' || s === 'DISPUTED') return 2;
      if (s === 'HARAM') return 3;
      return 4;
    };
  
    const sortedDirectory = [...directoryData].sort((a, b) => {
      if (directoryFilter === "ALL") {
        const weightDiff = getStatusWeight(a.status) - getStatusWeight(b.status);
        if (weightDiff !== 0) return weightDiff;
      }
      return a.topic.localeCompare(b.topic);
    });
    
    const emergingMatters = DATABASE.filter(item => item.isNew);
    const activeItem = activeTopic ? DATABASE.find(i => i.topic === activeTopic) : null;
  
    return (
      <section className="px-6 py-16 relative z-10 bg-[#0a0a0a] flex-grow">
        <div className="max-w-7xl mx-auto">
          {!activeItem ? (
            <>
              <div className="mb-12">
                <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4">THE LIVING DIRECTORY</h2>
                <p className="font-mono text-zinc-400 uppercase tracking-widest text-sm border-l-4 border-[#ccff00] pl-4">A comprehensive index of modern and traditional rulings.</p>
              </div>
  
              <div className="flex flex-col lg:flex-row gap-12">
                <div className="flex-grow">
                  <div className="flex flex-wrap gap-2 mb-10 border-b-2 border-zinc-800 pb-8">
                    {['ALL', 'HALAL', 'MAKRUH / DISPUTED', 'HARAM'].map((filterItem) => (
                      <button 
                        key={filterItem}
                        onClick={() => setDirectoryFilter(filterItem)}
                        className={`px-5 py-2 font-mono text-xs font-bold uppercase tracking-widest border-2 transition-all ${directoryFilter === filterItem ? 'bg-white text-black border-white' : 'bg-transparent text-zinc-500 border-zinc-800 hover:border-[#ccff00] hover:text-[#ccff00]'}`}
                      >
                        {getTabDot(filterItem)}{filterItem}
                      </button>
                    ))}
                  </div>
  
                  {sortedDirectory.length === 0 ? (
                    <div className="py-20 text-center border border-zinc-800 font-mono text-zinc-500 uppercase tracking-widest">[ NO RECORDS FOUND FOR THIS FILTER ]</div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {sortedDirectory.map(item => (
                        <button key={item.id} onClick={() => navigateTo('directory', item.topic)} className="w-full text-left p-5 bg-[#050505] border border-zinc-800 hover:border-[#ccff00] group transition-all flex flex-col justify-between">
                          <div className="mb-4">
                            <h4 className="font-bold text-white group-hover:text-[#ccff00] transition-colors uppercase tracking-tight mb-2 text-lg leading-tight">{item.topic}</h4>
                            <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest">TAGS: {item.category}</span>
                          </div>
                          <div className="flex items-center gap-2 font-mono text-xs bg-zinc-900 px-3 py-1.5 border border-zinc-800 w-fit">
                            <span>{getStatusDot(item.status)}</span>
                            <span className="uppercase tracking-widest font-bold text-zinc-400">{item.status}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
  
                <div className="lg:w-80 flex-shrink-0 flex flex-col gap-10">
                  <div className="border-2 border-[#ccff00] bg-[#ccff00]/5 p-6 relative">
                    <div className="absolute top-0 right-0 bg-[#ccff00] text-black font-black font-mono text-[9px] px-2 py-1 uppercase tracking-widest">[ UPDATED_30_DAYS ]</div>
                    <div className="flex items-center gap-3 mb-6">
                      <Zap className="w-6 h-6" color="#ccff00" fill="#ccff00" />
                      <h3 className="font-black text-xl text-white uppercase tracking-tighter">EMERGING MATTERS</h3>
                    </div>
                    <ul className="space-y-4">
                      {emergingMatters.map(item => (
                        <li key={item.id} className="border-l-2 border-zinc-700 pl-4 hover:border-[#ccff00] transition-colors">
                          <button onClick={() => navigateTo('directory', item.topic)} className="text-left group">
                            <span className="block text-[#ccff00] font-mono text-[9px] uppercase tracking-widest mb-1">LATEST RULING ON</span>
                            <span className="font-bold text-sm text-zinc-300 uppercase group-hover:text-white transition-colors">{item.topic}</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="max-w-4xl mx-auto space-y-8">
              <button onClick={() => navigateTo('directory')} className="mb-8 flex items-center gap-3 px-4 py-2 bg-zinc-900 border border-zinc-700 text-zinc-400 hover:text-black hover:bg-[#ccff00] hover:border-[#ccff00] font-mono text-[10px] font-bold uppercase tracking-[0.2em] transition-all w-fit">
                <span className="text-lg leading-none mb-0.5">&lt;</span><span>RETURN TO DIRECTORY</span>
              </button>
  
              <div className="bg-[#0a0a0a] border-2 border-zinc-800 relative group transition-colors hover:border-zinc-700">
                <div className={`h-4 w-full ${getStatusConfig(activeItem.status).color}`}></div>
                <div className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-6 border-b border-zinc-800 pb-8">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="w-2 h-2 bg-white"></span>
                        <p className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-[0.3em]">TAGS: {activeItem.category}</p>
                      </div>
                      <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase leading-none">{activeItem.topic}</h2>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-3 flex-shrink-0">
                      <span className={`inline-flex items-center px-6 py-2 text-sm font-black border-2 uppercase tracking-[0.2em] ${getStatusConfig(activeItem.status).bg} ${getStatusConfig(activeItem.status).text} ${getStatusConfig(activeItem.status).border}`}>
                        STATUS: {activeItem.status}
                      </span>
                    </div>
                  </div>
  
                  <div className="mb-12 relative">
                    <div className="absolute -left-6 top-0 bottom-0 w-1 bg-zinc-800"></div>
                    <h3 className="text-xs font-mono font-bold text-[#ccff00] uppercase tracking-widest mb-4">CORE REASONING</h3>
                    <p className="text-zinc-300 leading-relaxed text-lg font-mono">{activeItem.coreReasoning}</p>
                  </div>
  
                  <div className="mb-12 border-2 border-zinc-800">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-zinc-900 border-b-2 border-zinc-800">
                          <th className="py-4 px-6 text-xs font-mono font-bold text-zinc-400 uppercase tracking-widest w-1/3 border-r border-zinc-800">SCHOOL OF THOUGHT</th>
                          <th className="py-4 px-6 text-xs font-mono font-bold text-zinc-400 uppercase tracking-widest">RULING</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-zinc-800 bg-[#050505]">
                        {activeItem.schoolsOfThought.map((school, idx) => (
                          <tr key={idx} className="hover:bg-zinc-900/50 transition-colors">
                            <td className="py-5 px-6 text-sm font-mono font-bold text-white uppercase tracking-wider border-r border-zinc-800">{school.school}</td>
                            <td className="py-5 px-6 text-sm font-mono text-zinc-400">{school.ruling}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="pt-8 border-t-2 border-zinc-800">
                    <h3 className="text-xs font-mono font-bold text-white uppercase tracking-widest mb-6">[ PRIMARY SOURCES & FATWAS ]</h3>
                    <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-8">
                      {activeItem.sources.map((source, idx) => (
                        <button 
                          key={idx} 
                          onClick={() => source.link && window.open(source.link, '_blank', 'noopener,noreferrer')}
                          className={`inline-flex items-center gap-4 px-5 py-4 bg-zinc-900 border border-zinc-700 hover:border-[#ccff00] transition-colors text-left group ${source.link ? 'cursor-pointer' : 'cursor-default'}`}
                        >
                          <div className="bg-black p-2 border border-zinc-700 group-hover:border-[#ccff00] transition-colors"><ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-[#ccff00]" /></div>
                          <div>
                            <span className="block font-bold text-sm text-white uppercase tracking-wider mb-1 group-hover:text-[#ccff00] transition-colors">{source.title}</span>
                            <span className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest">AUTHOR: {source.author}</span>
                          </div>
                        </button>
                      ))}
                    </div>
  
                    {activeItem.differingOpinions && (
                      <div className="mt-6 border-t border-zinc-800 pt-6">
                        <button onClick={() => setExpandedDiffering(p => ({ ...p, [activeItem.id]: !p[activeItem.id] }))} className="flex items-center gap-3 text-xs font-mono font-bold text-zinc-400 hover:text-white transition-colors uppercase tracking-widest">
                          <span className="p-1 bg-zinc-800 text-white">{expandedDiffering[activeItem.id] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}</span>
                          VIEW DIFFERING OPINIONS
                        </button>
                        {expandedDiffering[activeItem.id] && (
                          <div className="mt-6 p-6 bg-zinc-900 border-l-4 border-[#ff8800] text-zinc-300 text-sm font-mono leading-relaxed relative">
                            <span className="absolute top-0 right-0 bg-[#ff8800] text-black text-[9px] px-2 py-1 font-bold tracking-widest uppercase">DIFFERING OPINIONS</span>
                            <strong className="text-white uppercase block mb-2">Alternative Perspectives:</strong> {activeItem.differingOpinions}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    );
  }
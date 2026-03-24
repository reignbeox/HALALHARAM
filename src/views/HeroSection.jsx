import React, { useState } from 'react';
import { Cpu, Zap, ShieldAlert } from 'lucide-react';
import { DATABASE, RAMADAN_DATABASE } from '../data/database';
import { getStatusConfig} from '../utils/helpers';

export default function HeroSection({ navigateTo }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [isSynthesizing, setIsSynthesizing] = useState(false);
    const [aiResult, setAiResult] = useState(null);
  
    const handleAiQuerySubmit = (e) => {
      e.preventDefault();
      if (!searchTerm.trim()) return;
  
      setIsSynthesizing(true);
      setAiResult(null);
  
      setTimeout(() => {
        const allData = [...DATABASE, ...RAMADAN_DATABASE];
        const match = allData.find(item => 
          item.topic.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.coreReasoning.toLowerCase().includes(searchTerm.toLowerCase())
        );
  
        if (match) {
          const isRamadan = match.id?.toString().startsWith('r');
          const actionWord = isRamadan ? "is classified as" : "is generally considered";
          
          setAiResult({
              ...match,
              aiGeneratedSummary: `Based on current scholarly consensus, **${match.topic}** ${actionWord} **${match.status}**. ${match.coreReasoning.split('.')[0]}. For a detailed breakdown of different schools of thought, please refer to the full scholarly record below.`
          });
        } else {
          setAiResult('NOT_FOUND');
        }
        setIsSynthesizing(false);
      }, 1500); 
    };
  
    const handleOpenAiRecord = () => {
      if (!aiResult || aiResult === 'NOT_FOUND') return;
      const isRamadan = aiResult.id?.toString().startsWith('r');
      navigateTo(isRamadan ? 'ramadan' : 'directory', aiResult.topic);
    };
  
    const clearAiSearch = () => {
      setSearchTerm("");
      setAiResult(null);
      setIsSynthesizing(false);
    };
  
    return (
      <section className="relative z-10 flex flex-col justify-center pt-24 pb-20 flex-grow px-6 text-center">
        <div className="max-w-4xl mx-auto w-full">
          {(!isSynthesizing && !aiResult) && (
            <div className="mb-12">
              <div className="inline-block px-4 py-1 border border-[#ccff00] text-[#ccff00] font-mono text-[10px] uppercase tracking-[0.3em] mb-6 font-bold">
                AI SYNTHESIS PROTOCOL
              </div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6 uppercase leading-[0.9]">
                ASK A QUESTION <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-600">GET SCHOLARLY CONSENSUS.</span>
              </h2>
            </div>
          )}
          
          <form onSubmit={handleAiQuerySubmit} className="query-form relative max-w-3xl mx-auto mb-6 group flex border-2 border-zinc-700 focus-within:border-[#ccff00] transition-colors bg-[#ffffff]">
            <div className="bg-[#ccff00] px-4 flex items-center justify-center text-[#000000] font-black border-r-2 border-zinc-700 group-focus-within:border-[#ccff00] transition-colors">
              <Cpu className="h-6 w-6" strokeWidth={2} />
            </div>
            <input
              type="text"
              className="block w-full px-6 py-5 md:py-6 bg-transparent text-[#000000] text-lg font-mono placeholder-zinc-500 focus:outline-none uppercase font-bold"
              placeholder="E.G. 'IS LAB-GROWN MEAT HALAL?'"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              disabled={isSynthesizing}
            />
            <button 
              type="submit" 
              disabled={isSynthesizing || !searchTerm.trim()}
              className="bg-[#000000] text-[#ffffff] px-6 py-5 md:py-6 border-l-2 border-zinc-700 group-focus-within:border-[#ccff00] font-mono font-black uppercase tracking-widest hover:bg-[#222222] transition-colors disabled:opacity-50"
            >
              {isSynthesizing ? '...' : 'QUERY'}
            </button>
          </form>
  
          {isSynthesizing && (
            <div className="max-w-3xl mx-auto mt-12 p-8 border-2 border-[#ccff00] bg-[#ccff00]/5 flex flex-col items-center text-center">
              <div className="flex gap-2 mb-4">
                <span className="w-3 h-3 bg-[#ccff00] animate-ping"></span>
                <span className="w-3 h-3 bg-[#ccff00] animate-ping delay-75"></span>
                <span className="w-3 h-3 bg-[#ccff00] animate-ping delay-150"></span>
              </div>
              <p className="font-mono text-sm text-[#ccff00] font-bold tracking-widest uppercase">
                SCANNING JURISPRUDENCE DATABANKS...
              </p>
            </div>
          )}
  
          {(!isSynthesizing && aiResult) && (
            <div className="max-w-3xl mx-auto mt-12 text-left">
              {aiResult === 'NOT_FOUND' ? (
                <div className="p-8 border-2 border-[#ff003c] bg-[#ff003c]/10 text-center">
                  <ShieldAlert className="w-12 h-12 text-[#ff003c] mx-auto mb-4" />
                  <h3 className="font-black text-2xl text-white uppercase tracking-tighter mb-2">NO DEFINITIVE MATCH</h3>
                  <p className="font-mono text-zinc-400 text-sm uppercase tracking-widest">
                    The AI could not synthesize a consensus for this query. Please search using different terms or browse the directory manually.
                  </p>
                </div>
              ) : (
                <div className="border-2 border-zinc-700 bg-[#0a0a0a] p-8 md:p-10 shadow-[8px_8px_0_#ccff00]">
                  <div className="flex items-center gap-3 mb-6 border-b border-zinc-800 pb-4">
                    <Zap className="w-5 h-5" color="#ccff00" />
                    <span className="font-mono text-[10px] font-bold text-[#ccff00] uppercase tracking-[0.3em]">AI SYNTHESIS COMPLETE</span>
                  </div>
                  
                  <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-2 leading-none">
                    {aiResult.topic}
                  </h3>
                  
                  <div className="flex items-center gap-2 mb-8">
                    <span className={`px-3 py-1 font-mono text-xs font-bold uppercase border ${getStatusConfig(aiResult.status).border} ${getStatusConfig(aiResult.status).text} ${getStatusConfig(aiResult.status).bg}`}>
                      STATUS: {aiResult.status}
                    </span>
                  </div>
  
                  <div className="mb-8">
                    <h3 className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest mb-3">[ SYNTHESIZED TL;DR ]</h3>
                    <div className="bg-zinc-900 border-l-4 border-[#ccff00] p-6 relative">
                      <span className="absolute top-0 right-0 bg-[#ccff00] text-black font-mono text-[9px] px-2 py-1 font-bold tracking-widest uppercase">AI_GENERATED</span>
                      <p className="font-mono text-white leading-relaxed text-sm">{aiResult.aiGeneratedSummary}</p>
                    </div>
                  </div>
  
                  <div className="mb-8">
                    <h3 className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest mb-3">[ SCHOLARLY CONTEXT ]</h3>
                    <p className="font-mono text-zinc-400 leading-relaxed text-sm">{aiResult.coreReasoning}</p>
                  </div>
  
                  <button onClick={handleOpenAiRecord} className="w-full py-4 mt-4 bg-[#ccff00] text-black font-black font-mono uppercase tracking-widest hover:bg-white transition-colors border-2 border-[#ccff00]">
                    [ ACCESS FULL SCHOLARLY RECORD ]
                  </button>
                </div>
              )}
  
              <button onClick={clearAiSearch} className="mt-8 mx-auto flex font-mono text-xs text-zinc-500 hover:text-white uppercase tracking-widest transition-colors">
                [ CLEAR QUERY ]
              </button>
            </div>
          )}
          
          {(!isSynthesizing && !aiResult) && (
            <div className="flex flex-col items-center mt-12 gap-4">
              <p className="text-zinc-500 font-mono text-[10px] font-bold tracking-[0.2em] uppercase">OR BROWSE MANUALLY</p>
              <button onClick={() => navigateTo('directory')} className="px-6 py-3 border border-zinc-700 text-zinc-400 font-mono text-xs uppercase tracking-widest hover:border-[#ccff00] hover:text-[#ccff00] transition-colors bg-zinc-900/50 hover:bg-zinc-900">
                [ VIEW FULL DIRECTORY ]
              </button>
            </div>
          )}
        </div>
      </section>
    );
  }
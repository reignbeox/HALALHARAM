import React, { useState } from 'react';
import { Cpu, Zap, ShieldAlert, AlertTriangle } from 'lucide-react';

// Fallback data and logic kept for preview safety
const MOCK_DB = [
  { id: 'h1', topic: "All Seafood", status: "Halal", coreReasoning: "Game of the sea is permitted (5:96)." },
  { id: 'h2', topic: "Equity Investing", status: "Halal", coreReasoning: "Permissible with financial screening." },
  { id: 'hr9', topic: "Carnivorous Animals", status: "Haram", coreReasoning: "Animals with fangs/talons are forbidden in Sahih Hadith." }
];
const MOCK_RAMADAN = [
  { id: 'r1', topic: "Swallowing Saliva", status: "DOES NOT BREAK", coreReasoning: "Natural swallowing is permissible." }
];

const DATABASE = MOCK_DB;
const RAMADAN_DATABASE = MOCK_RAMADAN;
const getStatusConfig = (status) => {
  const s = status?.toUpperCase();
  if (s === 'HALAL' || s === 'DOES NOT BREAK') return { color: 'bg-[#ccff00]', text: 'text-[#ccff00]', bg: 'bg-[#ccff00]/10', border: 'border-[#ccff00]' };
  if (s === 'HARAM' || s === 'BREAKS FAST') return { color: 'bg-[#ff003c]', text: 'text-[#ff003c]', bg: 'bg-[#ff003c]/10', border: 'border-[#ff003c]' };
  return { color: 'bg-[#ff8800]', text: 'text-[#ff8800]', bg: 'bg-[#ff8800]/10', border: 'border-[#ff8800]' };
};

export default function HeroSection({ navigateTo }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [lastSubmittedQuery, setLastSubmittedQuery] = useState(""); 
  const [isSynthesizing, setIsSynthesizing] = useState(false);
  const [aiResult, setAiResult] = useState(null); 
  const [matchedRecord, setMatchedRecord] = useState(null); 
  const [error, setError] = useState(null);

  const fetchWithRetry = async (url, options, retries = 5) => {
    const delays = [1000, 2000, 4000, 8000, 16000];
    for (let i = 0; i < retries; i++) {
      try {
        const res = await fetch(url, options);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return await res.json();
      } catch (err) {
        if (i === retries - 1) throw err;
        await new Promise(r => setTimeout(r, delays[i]));
      }
    }
  };

  const handleAiQuerySubmit = async (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    setIsSynthesizing(true);
    setAiResult(null);
    setMatchedRecord(null);
    setError(null);
    setLastSubmittedQuery(searchTerm);

    try {
      const allData = [...DATABASE, ...RAMADAN_DATABASE];
      const allTopics = allData.map(d => d.topic);
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY || ""; 
      
      if (!apiKey) {
        setIsSynthesizing(false);
        setError("API_KEY_MISSING");
        return;
      }

      const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
      
      const systemPrompt = `You are HalalVerify assistant. Return JSON: {"analysis": "...", "sourceTopic": "..."}`;

      const response = await fetchWithRetry(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: searchTerm }] }],
          systemInstruction: { parts: [{ text: systemPrompt }] },
          generationConfig: { responseMimeType: "application/json" }
        })
      });

      const responseText = response.candidates?.[0]?.content?.parts?.[0]?.text;
      if (responseText) {
        const result = JSON.parse(responseText);
        setAiResult(result.analysis);
        if (result.sourceTopic) {
          const match = allData.find(d => d.topic === result.sourceTopic);
          if (match) setMatchedRecord(match);
        }
      } else { setError("AI_FAILED"); }
    } catch (err) { setError("AI_FAILED"); } finally { setIsSynthesizing(false); }
  };

  const clearAiSearch = () => {
    setSearchTerm("");
    setLastSubmittedQuery("");
    setAiResult(null);
    setMatchedRecord(null);
    setError(null);
  };

  return (
    <section className="relative z-10 flex flex-col justify-center pt-24 pb-20 flex-grow px-6 text-center">
      <div className="max-w-4xl mx-auto w-full">
        {(!isSynthesizing && !aiResult && !error) && (
          <div className="mb-12">
            <div className="inline-block px-4 py-1 border border-[#ccff00] text-[#ccff00] font-mono text-[10px] uppercase tracking-[0.3em] mb-6 font-bold bg-[#ccff00]/5">
              GEMINI 2.0 SYNTHESIS ACTIVE
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6 uppercase leading-[0.9]">
              ASK A QUESTION <br/>
              <span className="hero-gradient text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-600">GET SCHOLARLY CONSENSUS.</span>
            </h2>
          </div>
        )}
        
{/* ... inside the HeroSection return ... */}

<form onSubmit={handleAiQuerySubmit} className="query-form relative max-w-3xl mx-auto mb-6 group flex border-2 border-zinc-700 focus-within:border-[#ccff00] transition-all bg-[#ffffff]">
  <div className="bg-[#ccff00] px-4 flex items-center justify-center text-[#000000] font-black border-r-2 border-zinc-700 group-focus-within:border-[#ccff00] transition-colors">
    <Cpu className="h-6 w-6" strokeWidth={2} />
  </div>
  
  <input
    type="text"
    className="block w-full px-6 py-5 md:py-6 bg-transparent text-[#000000] text-lg font-mono placeholder-zinc-500 focus:outline-none uppercase font-bold"
    placeholder="E.G. 'IS IT HALAL TO EAT LOBSTER?'"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    disabled={isSynthesizing}
  />

  <button 
    type="submit" 
    disabled={isSynthesizing} // Still disabled logic-wise, but we removed the visual fade
    className="bg-zinc-900 text-[#ccff00] px-8 py-5 md:py-6 border-l-2 border-zinc-700 group-focus-within:border-[#ccff00] font-mono font-black uppercase tracking-widest hover:bg-[#ccff00] hover:text-black transition-all min-w-[140px]"
  >
    {isSynthesizing ? (
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-[#ccff00] animate-pulse"></div>
        <span>...</span>
      </div>
    ) : 'QUERY'}
  </button>
</form>

{/* ... rest of the file ... */}

        {/* The rest of the AI result displays remain the same for functionality... */}
        {isSynthesizing && (
          <div className="max-w-3xl mx-auto mt-12 p-8 border-2 border-[#ccff00] bg-[#ccff00]/5 flex flex-col items-center text-center">
            <div className="flex gap-2 mb-4">
              <span className="w-3 h-3 bg-[#ccff00] animate-ping"></span>
              <span className="w-3 h-3 bg-[#ccff00] animate-ping delay-75"></span>
              <span className="w-3 h-3 bg-[#ccff00] animate-ping delay-150"></span>
            </div>
            <p className="font-mono text-sm text-[#ccff00] font-bold tracking-widest uppercase">
              UPLINKING TO GEMINI 2.0 DATABANKS...
            </p>
          </div>
        )}

        {aiResult && !isSynthesizing && (
          <div className="max-w-3xl mx-auto mt-12 text-left">
            <div className="border-2 border-zinc-700 bg-[#0a0a0a] p-8 md:p-10 shadow-[8px_8px_0_#ccff00]">
               <div className="flex items-center gap-3 mb-6 border-b border-zinc-800 pb-4">
                 <Zap className="w-5 h-5 text-[#ccff00]" />
                 <span className="font-mono text-[10px] font-bold text-[#ccff00] uppercase tracking-[0.3em]">SYNTHESIS COMPLETE</span>
               </div>
               <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-6 leading-none">{lastSubmittedQuery}</h3>
               <div className="bg-zinc-900 border-l-4 border-[#ccff00] p-6 text-white font-mono text-sm leading-relaxed">
                 {aiResult}
               </div>
               <button onClick={clearAiSearch} className="mt-8 font-mono text-xs text-zinc-500 hover:text-white uppercase tracking-widest">[ NEW QUERY ]</button>
            </div>
          </div>
        )}

        {!isSynthesizing && !aiResult && (
          <div className="flex flex-col items-center mt-12 gap-4">
            <p className="text-zinc-500 font-mono text-[10px] font-bold tracking-[0.2em] uppercase">OR BROWSE MANUALLY</p>
            <button 
              onClick={() => navigateTo('directory')} 
              className="px-6 py-3 border-2 border-zinc-800 text-white bg-transparent font-mono text-xs font-bold uppercase tracking-widest hover:border-[#ccff00] hover:text-black hover:bg-[#ccff00] transition-colors"
            >
              [ VIEW FULL DIRECTORY ]
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
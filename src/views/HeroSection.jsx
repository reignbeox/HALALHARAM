import React, { useState } from 'react';
import { Cpu, Zap, ShieldAlert, AlertTriangle } from 'lucide-react';

/**
 * DEVELOPER NOTE:
 * These imports work in your local VS Code environment.
 * In this preview, we use fallback mock data to prevent compilation errors.
 */
// import { DATABASE as LOCAL_DB, RAMADAN_DATABASE as LOCAL_RAMADAN } from '../data/database';
// import { getStatusConfig as localGetStatusConfig } from '../utils/helpers';

// Fallback data for the preview environment only
const MOCK_DB = [
  { id: 'h1', topic: "All Seafood", status: "Halal", coreReasoning: "Game of the sea is permitted (5:96)." },
  { id: 'h2', topic: "Equity Investing", status: "Halal", coreReasoning: "Permissible with financial screening." },
  { id: 'hr9', topic: "Carnivorous Animals", status: "Haram", coreReasoning: "Animals with fangs/talons are forbidden in Sahih Hadith." }
];
const MOCK_RAMADAN = [
  { id: 'r1', topic: "Swallowing Saliva", status: "DOES NOT BREAK", coreReasoning: "Natural swallowing is permissible." }
];

// Fallback logic for compilation
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
  const [lastSubmittedQuery, setLastSubmittedQuery] = useState(""); // New state to "freeze" the question
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
    setLastSubmittedQuery(searchTerm); // Capture the question here

    try {
      const allData = [...DATABASE, ...RAMADAN_DATABASE];
      const allTopics = allData.map(d => d.topic);

      const apiKey = import.meta.env.VITE_GEMINI_API_KEY || ""; 
      
      if (!apiKey) {
        setIsSynthesizing(false);
        setError("API_KEY_MISSING");
        return;
      }

      const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
      
      const systemPrompt = `You are HalalVerify, an advanced specialist Islamic Fiqh assistant.
      
      OBJECTIVE:
      Answer the user query based on scholarly consensus. Use your internal knowledge to provide nuance.
      
      STRICT OUTPUT RULES:
      1. You MUST return a JSON object with exactly two keys: "analysis" and "sourceTopic".
      2. "analysis": A concise explanation (plain text, no markdown bolding) under 3 paragraphs.
      3. "sourceTopic": Pick the EXACT string from the provided list below that is the most relevant parent category. If none fit even remotely, return null.
      
      LIST OF VALID TOPICS (Pick one exactly as written):
      ${allTopics.join(', ')}
      
      INTERNAL DATABANK SAMPLES FOR CONTEXT: ${JSON.stringify(allData.slice(0, 10))}`;

      const response = await fetchWithRetry(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: searchTerm }] }],
          systemInstruction: { parts: [{ text: systemPrompt }] },
          generationConfig: {
            responseMimeType: "application/json"
          }
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
      } else {
        setError("AI_FAILED");
      }
    } catch (err) {
      console.error("Gemini Error:", err);
      setError("AI_FAILED");
    } finally {
      setIsSynthesizing(false);
    }
  };

  const handleOpenAiRecord = () => {
    if (!matchedRecord) return;
    const isRamadan = matchedRecord.id?.toString().startsWith('r');
    navigateTo(isRamadan ? 'ramadan' : 'directory', matchedRecord.topic);
  };

  const clearAiSearch = () => {
    setSearchTerm("");
    setLastSubmittedQuery("");
    setAiResult(null);
    setMatchedRecord(null);
    setError(null);
    setIsSynthesizing(false);
  };

  return (
    <section className="relative z-10 flex flex-col justify-center pt-24 pb-20 flex-grow px-6 text-center">
      <div className="max-w-4xl mx-auto w-full">
        {(!isSynthesizing && !aiResult && !error) && (
          <div className="mb-12">
            <div className="inline-block px-4 py-1 border border-[#ccff00] text-[#ccff00] font-mono text-[10px] uppercase tracking-[0.3em] mb-6 font-bold">
              GEMINI 2.5 SYNTHESIS ACTIVE
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
            placeholder="E.G. 'IS IT HALAL TO EAT LOBSTER?'"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            disabled={isSynthesizing}
          />
          <button 
            type="submit" 
            disabled={isSynthesizing || !searchTerm.trim()}
            className="bg-[#000000] text-[#ffffff] px-6 py-5 md:py-6 border-l-2 border-zinc-700 group-focus-within:border-[#ccff00] font-mono font-black uppercase tracking-widest hover:bg-[#222222] transition-colors disabled:opacity-50"
          >
            {isSynthesizing ? 'SCANNING...' : 'QUERY'}
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
              UPLINKING TO GEMINI 2.5 DATABANKS...
            </p>
          </div>
        )}

        {(!isSynthesizing && error === "API_KEY_MISSING") && (
          <div className="max-w-3xl mx-auto mt-12 p-8 border-2 border-[#ff8800] bg-[#ff8800]/10 text-left">
             <AlertTriangle className="w-8 h-8 text-[#ff8800] mb-4" />
             <h3 className="font-black text-xl text-white uppercase tracking-tighter mb-2">SYSTEM ERROR: API_KEY_MISSING</h3>
             <p className="font-mono text-zinc-300 text-sm uppercase tracking-widest leading-relaxed">
               Authentication failed. Please verify your <b>.env</b> file contains: <br/>
               <code className="text-[#ccff00]">VITE_GEMINI_API_KEY=your_key</code>
             </p>
             <button onClick={clearAiSearch} className="mt-6 text-[#ff8800] font-mono text-xs font-bold uppercase tracking-widest hover:text-white transition-colors">[ RESET ]</button>
          </div>
        )}

        {(!isSynthesizing && error === "AI_FAILED") && (
          <div className="max-w-3xl mx-auto mt-12 p-8 border-2 border-[#ff003c] bg-[#ff003c]/10 text-center">
            <ShieldAlert className="w-12 h-12 text-[#ff003c] mx-auto mb-4" />
            <h3 className="font-black text-2xl text-white uppercase tracking-tighter mb-2">SYNTHESIS FAILED</h3>
            <p className="font-mono text-zinc-400 text-sm uppercase tracking-widest">
              The AI uplink could not complete the request. Ensure your key is active in Google AI Studio.
            </p>
            <button onClick={clearAiSearch} className="mt-6 text-[#ff003c] font-mono text-xs font-bold uppercase tracking-widest hover:text-white transition-colors">[ CLOSE ]</button>
          </div>
        )}

        {(!isSynthesizing && aiResult) && (
          <div className="max-w-3xl mx-auto mt-12 text-left">
            <div className="border-2 border-zinc-700 bg-[#0a0a0a] p-8 md:p-10 shadow-[8px_8px_0_#ccff00]">
              <div className="flex items-center gap-3 mb-6 border-b border-zinc-800 pb-4">
                <Zap className="w-5 h-5" color="#ccff00" />
                <span className="font-mono text-[10px] font-bold text-[#ccff00] uppercase tracking-[0.3em]">SYNTHESIS COMPLETE</span>
              </div>
              
              {/* Question title now uses lastSubmittedQuery instead of searchTerm */}
              <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-6 leading-none">
                {lastSubmittedQuery}
              </h3>
              
              <div className="mb-8">
                <h3 className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest mb-3">[ AI ANALYSIS ]</h3>
                <div className="bg-zinc-900 border-l-4 border-[#ccff00] p-6 relative">
                  <span className="absolute top-0 right-0 bg-[#ccff00] text-black font-mono text-[9px] px-2 py-1 font-bold tracking-widest uppercase">GEMINI_2.5_KNOWLEDGE</span>
                  <div className="font-mono text-white leading-relaxed text-sm space-y-4">
                    {aiResult.split('\n').filter(p => p.trim() !== '').map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>

              {matchedRecord ? (
                <div className="border-t border-zinc-800 pt-6">
                   <h3 className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest mb-3">[ RELEVANT DATABANK RECORD ]</h3>
                   <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-[#050505] border border-zinc-700 p-4 gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                           <span className={`w-2 h-2 rounded-full ${getStatusConfig(matchedRecord.status).color}`}></span>
                           <span className="font-mono text-[9px] font-bold text-zinc-400 uppercase tracking-widest">CATEGORIZED AS: {matchedRecord.status}</span>
                        </div>
                        <h4 className="font-black text-lg uppercase tracking-tight text-white">{matchedRecord.topic}</h4>
                      </div>
                      <button onClick={handleOpenAiRecord} className="px-4 py-2 bg-zinc-800 text-white font-mono text-[10px] font-bold uppercase tracking-widest hover:bg-[#ccff00] hover:text-black transition-colors whitespace-nowrap">
                        OPEN SOURCE RECORD &gt;
                      </button>
                   </div>
                </div>
              ) : (
                <div className="border-t border-zinc-800 pt-6">
                  <p className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">Analysis synthesized from AI knowledge. No matching internal record found.</p>
                </div>
              )}
            </div>

            <button onClick={clearAiSearch} className="mt-8 mx-auto flex font-mono text-xs text-zinc-500 hover:text-white uppercase tracking-widest transition-colors">
              [ NEW QUERY ]
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
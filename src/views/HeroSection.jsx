import React, { useState } from 'react';
import { MoonStar, Zap, ShieldAlert, AlertTriangle } from 'lucide-react';

// Fallback logic for compilation/preview safety
const MOCK_DB = [];
const MOCK_RAMADAN = [];
const DATABASE = MOCK_DB;
const RAMADAN_DATABASE = MOCK_RAMADAN;

export default function HeroSection({ navigateTo }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [lastSubmittedQuery, setLastSubmittedQuery] = useState(""); 
  const [isSynthesizing, setIsSynthesizing] = useState(false);
  const [aiResult, setAiResult] = useState(null); 
  const [error, setError] = useState(null);

const handleAiQuerySubmit = async (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    
    setIsSynthesizing(true);
    setAiResult(null);
    setError(null);
    setLastSubmittedQuery(searchTerm);

    try {
      // 2.0 Flash currently requires the v1beta endpoint
      const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
      
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `You are an Islamic Fiqh specialist. Analyze: "${searchTerm}". 
              Provide a serious, scholarly breakdown. 
              STRICT: Return ONLY a JSON object: {"analysis": "your explanation here"}`
            }]
          }],
          generationConfig: {
            // 2.0 is great at following JSON schema instructions
            responseMimeType: "application/json"
          }
        })
      });

      const data = await response.json();

      if (!response.ok) {
        console.error("2.0_UPLINK_ERROR:", data.error);
        throw new Error("UPLINK_FAIL");
      }

      const resultText = data.candidates?.[0]?.content?.parts?.[0]?.text;
      
      if (resultText) {
        // Clean markdown if 2.0 wraps it in code blocks
        const cleanJson = resultText.replace(/```json|```/g, "").trim();
        const result = JSON.parse(cleanJson);
        setAiResult(result.analysis);
      }
    } catch (err) {
      console.error("Local 2.0 Synthesis Error:", err);
      setError("AI_FAILED");
    } finally {
      setIsSynthesizing(false);
    }
};

  const clearAiSearch = () => {
    setSearchTerm("");
    setAiResult(null);
    setError(null);
  };

  return (
    <section className="relative z-10 flex flex-col justify-center pt-24 pb-20 flex-grow px-6 text-center">
      <div className="max-w-4xl mx-auto w-full">
        
        {/* HEADER SECTION */}
        {!isSynthesizing && !aiResult && !error && (
          <div className="mb-16">
            <div className="inline-block px-3 py-1 border border-zinc-800 text-zinc-500 font-mono text-[9px] uppercase tracking-[0.4em] mb-8 font-bold">
              RELATIONAL_DATABASE // SECURE_ARCHIVE_ACCESS
            </div>
            
            <div className="flex flex-col items-center">
              <h2 className="text-6xl md:text-9xl font-black tracking-[-0.05em] text-white uppercase leading-[0.8]">
                THE DIGITAL
              </h2>
              <h2 
                className="text-6xl md:text-9xl font-black tracking-[-0.02em] uppercase leading-[0.8]"
                style={{ 
                  WebkitTextStroke: '2px #ccff00', 
                  color: 'transparent' 
                }}
              >
                ARCHIVE.
              </h2>
            </div>
            
            <div className="mt-10 max-w-xl mx-auto border-t border-zinc-900 pt-8">
              <p className="font-mono text-zinc-500 uppercase tracking-[0.25em] text-xs leading-relaxed">
                The collection of <span className="text-white">classical</span> and <br/> 
                <span className="text-white">contemporary</span> Interpretation.
              </p>
            </div>
          </div>
        )}

{/* QUERY FORM */}
<form onSubmit={handleAiQuerySubmit} className="query-form relative max-w-3xl mx-auto mb-6 group flex border-2 border-zinc-700 focus-within:border-[#ccff00] transition-all bg-[#ffffff]">
{/* Icon Container inside HeroSection.jsx */}
<div className="bg-[#ccff00] px-4 flex items-center justify-center text-[#000000] border-r-2 border-zinc-700 group-focus-within:border-r-[#ccff00] transition-colors duration-200">
  <MoonStar className="h-5 w-5 stroke-[2.5px]" /> 
</div>
  <input
    type="text"
    className="block w-full px-6 py-5 md:py-6 bg-transparent text-[#000000] text-lg font-mono placeholder-zinc-500 focus:outline-none uppercase font-bold"
    placeholder="ENTER INQUIRY..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
  <button 
    type="submit" 
    className="bg-zinc-900 text-[#ccff00] px-8 py-5 md:py-6 border-l-2 border-zinc-700 font-mono font-black uppercase tracking-widest hover:bg-[#ccff00] hover:text-black transition-all"
  >
    {isSynthesizing ? '...' : 'QUERY'}
  </button>
</form>
        {/* LOADING STATE */}
        {isSynthesizing && (
          <div className="max-w-3xl mx-auto mt-12 p-12 border-2 border-[#ccff00] bg-[#ccff00]/5 text-center">
            <span className="font-mono text-[#ccff00] animate-pulse tracking-[0.5em] text-xs font-bold uppercase">
              REPRODUCING_SCHOLARLY_CONSENSUS...
            </span>
          </div>
        )}

        {/* ERROR STATE */}
        {error && (
          <div className="max-w-3xl mx-auto mt-12 p-8 border-2 border-[#ff003c] bg-[#ff003c]/10 text-center">
            <ShieldAlert className="w-8 h-8 text-[#ff003c] mx-auto mb-4" />
            <h3 className="font-black text-white uppercase text-xl mb-2">UPLINK_FAILURE</h3>
            <p className="font-mono text-zinc-500 text-[10px] uppercase tracking-widest">Synthesis could not complete. Check API status or local connectivity.</p>
            <button onClick={clearAiSearch} className="mt-4 text-[#ff003c] font-mono text-[10px] font-bold uppercase border border-[#ff003c] px-4 py-2 hover:bg-[#ff003c] hover:text-white transition-colors">
              [ RESET_SYSTEM ]
            </button>
          </div>
        )}

        {/* RESULT STATE */}
        {aiResult && !isSynthesizing && (
          <div className="max-w-3xl mx-auto mt-12 text-left animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="border-2 border-zinc-700 bg-[#0a0a0a] p-8 md:p-10 shadow-[8px_8px_0_#ccff00]">
               <div className="flex items-center gap-3 mb-6 border-b border-zinc-800 pb-4">
                 <Zap className="w-5 h-5 text-[#ccff00]" />
                 <span className="font-mono text-[10px] font-bold text-[#ccff00] uppercase tracking-[0.3em]">SYNTHESIS_COMPLETE</span>
               </div>
               <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-6">{lastSubmittedQuery}</h3>
               <div className="bg-zinc-900 border-l-4 border-[#ccff00] p-6 text-white font-mono text-sm leading-relaxed whitespace-pre-wrap">
                 {aiResult}
               </div>
               <button onClick={clearAiSearch} className="mt-8 font-mono text-xs text-zinc-500 hover:text-white uppercase tracking-widest transition-colors">
                 [ NEW_INQUIRY ]
               </button>
            </div>
          </div>
        )}

      </div>
      {!isSynthesizing && !aiResult && ( <div className="flex flex-col items-center mt-12 gap-4"> <p className="text-zinc-500 font-mono text-[10px] font-bold tracking-[0.2em] uppercase">OR BROWSE MANUALLY</p> <button onClick={() => navigateTo('directory')} className="px-6 py-3 border-2 border-zinc-800 text-white bg-transparent font-mono text-xs font-bold uppercase tracking-widest hover:border-[#ccff00] hover:text-black hover:bg-[#ccff00] transition-colors" > [ VIEW FULL DIRECTORY ] </button> </div> )}
    </section>
  );
}
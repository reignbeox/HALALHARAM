import React, { useState } from 'react';
import { Crosshair } from 'lucide-react';

export default function Footer({ navigateTo }) {
  const [status, setStatus] = useState('IDLE'); // IDLE, SUBMITTING, SUCCESS, ERROR
  const [message, setMessage] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    setStatus('SUBMITTING');

    try {
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzFUtrsZ-FNLPkRLEcKj35ht14vl4nUgJd53uicHXMaPvMUpZgKSfsrNwE2pEVzHESV/exec'; 
      
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          message: message, 
          source: 'HalalVerify Footer' 
        })
      });

      setStatus('SUCCESS');
      setMessage("");
      
    } catch (err) {
      console.error("Submission error:", err);
      setStatus('ERROR');
    }
  };

  return (
    <footer className="bg-[#0a0a0a] border-t-2 border-zinc-800 py-8 px-6 mt-auto relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        <div className="flex flex-col gap-3 min-w-[200px]">
          <h4 className="text-[#ccff00] font-mono text-[10px] font-bold tracking-widest uppercase">[ DIRECTIVES ]</h4>
          <nav className="flex flex-col gap-2 text-xs font-mono font-bold tracking-widest text-zinc-400 uppercase">
            <button 
              onClick={() => navigateTo('about')} 
              className="text-left hover:text-[#ccff00] transition-colors flex items-center gap-2 group"
            >
              <span className="text-[#ccff00] opacity-0 group-hover:opacity-100">&gt;</span> ABOUT
            </button>
            <button 
              onClick={() => navigateTo('methodology')} 
              className="text-left hover:text-[#ccff00] transition-colors flex items-center gap-2 group"
            >
              <span className="text-[#ccff00] opacity-0 group-hover:opacity-100">&gt;</span> METHODOLOGY
            </button>
          </nav>
        </div>

        <div className="flex-grow max-w-xl">
          <h4 className="text-[#ccff00] font-mono text-[10px] font-bold tracking-widest uppercase mb-2">[ CONTACT / SUBMIT REQUEST ]</h4>
          
          {/* Changed h-[92px] to min-h-[92px] h-auto to prevent mobile clipping */}
          <div className="min-h-[92px] h-auto flex flex-col justify-center overflow-hidden">
            {status === 'SUCCESS' ? (
              <div className="bg-[#ccff00]/10 border-2 border-[#ccff00] p-4 h-full flex flex-col justify-center">
                <p className="text-[#ccff00] font-mono text-[10px] uppercase font-bold tracking-widest leading-normal">
                  [ TRANSMISSION RECEIVED ] <br/>
                  Your query has been logged to HALALHARAM Submissions.
                </p>
                <button 
                  onClick={() => setStatus('IDLE')}
                  className="mt-2 text-zinc-500 font-mono text-[9px] uppercase hover:text-white underline decoration-zinc-800 text-left w-fit"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <div className="flex flex-col justify-center h-full py-2">
                <p className="text-zinc-500 font-mono text-[10px] mb-3 uppercase tracking-widest leading-normal">
                  Can't find a topic? Submit a query for manual research review. {status === 'ERROR' && <span className="text-[#ff003c] font-bold">// UPLINK FAILED //</span>}
                </p>
                
                <form className="flex flex-col sm:flex-row gap-0" onSubmit={handleFormSubmit}>
                  <div className="flex-grow flex relative border-2 border-zinc-700 bg-[#050505] focus-within:border-zinc-500 transition-colors">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 font-mono font-black text-xs">&gt;</span>
                    <input 
                      type="text" 
                      placeholder={status === 'SUBMITTING' ? "UPLINKING..." : "ENTER TOPIC OR MESSAGE..."}
                      className="w-full pl-8 pr-3 py-2 bg-transparent text-white font-mono text-[10px] placeholder-zinc-600 focus:outline-none uppercase font-bold" 
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      disabled={status === 'SUBMITTING'}
                      required 
                    />
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={status === 'SUBMITTING'}
                    className="px-5 py-2 bg-zinc-800 text-zinc-100 font-black font-mono text-[10px] uppercase tracking-widest hover:bg-[#ccff00] hover:text-black transition-colors border-y-2 border-r-2 border-zinc-700 whitespace-nowrap disabled:opacity-50"
                  >
                    {status === 'SUBMITTING' ? '...' : 'SEND'}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto mt-8 pt-4 border-t border-zinc-800 text-[9px] font-mono text-zinc-500 font-bold uppercase tracking-[0.2em] flex flex-col md:flex-row justify-between items-center gap-3">
          <div className="flex items-center gap-2"><Crosshair className="w-3 h-3 text-[#ccff00]" /><span>HALALVERIFY PLATFORM</span></div>
          <p>© {new Date().getFullYear()} HALALVERIFY. EDUCATIONAL PURPOSES ONLY.</p>
      </div>
    </footer>
  );
}
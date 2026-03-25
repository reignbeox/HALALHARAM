import React from 'react';
import { Moon, ShieldAlert, Cpu, Globe } from 'lucide-react';

export default function AboutView({ navigateTo }) {
  return (
    <section className="px-6 py-16 relative z-10 bg-[#0a0a0a] flex-grow">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <div className="inline-block px-4 py-1 border border-[#ccff00] text-[#ccff00] font-mono text-[10px] uppercase tracking-[0.3em] mb-4 font-bold bg-[#ccff00]/10">
            PROJECT_ID: HALALVERIFY
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4">MISSION_DIRECTIVE</h2>
          <p className="font-mono text-zinc-400 uppercase tracking-widest text-sm border-l-4 border-[#ccff00] pl-4">
            Bridging classical Fiqh with modern complexities through synthesis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="border-2 border-zinc-800 p-8 bg-[#050505]">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="w-6 h-6 text-[#ccff00]" />
              <h3 className="font-black text-xl text-white uppercase">THE VISION</h3>
            </div>
            <p className="font-mono text-zinc-400 text-sm leading-relaxed uppercase">
              In an era of rapid technological advancement—Crypto, AI, and Lab-Grown alternatives—traditional jurisprudence often feels distant. HalalVerify provides a real-time synthesis engine to clarify modern dilemmas.
            </p>
          </div>

          <div className="border-2 border-zinc-800 p-8 bg-[#050505]">
            <div className="flex items-center gap-3 mb-6">
              <Cpu className="w-6 h-6 text-[#ccff00]" />
              <h3 className="font-black text-xl text-white uppercase">THE STACK</h3>
            </div>
            <p className="font-mono text-zinc-400 text-sm leading-relaxed uppercase">
              Powered by Gemini 2.5 Flash, the platform cross-references user queries against a curated databank of scholarly fatwas, ensuring responses are grounded in verified textual evidence.
            </p>
          </div>
        </div>

        <div className="border-2 border-[#ff003c] bg-[#ff003c]/5 p-8 mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-[#ff003c] text-white font-black font-mono text-[9px] px-3 py-1 uppercase tracking-widest">
            LEGAL_DISCLAIMER
          </div>
          <div className="flex items-start gap-4">
            <ShieldAlert className="w-12 h-12 text-[#ff003c] flex-shrink-0" />
            <div>
              <h3 className="font-black text-xl text-white uppercase mb-2">NOT A HOUSE OF FATWA</h3>
              <p className="font-mono text-zinc-300 text-xs leading-relaxed uppercase">
                HalalVerify is an educational synthesis tool. It does not issue binding legal rulings. For personal religious matters or complex legal questions, always consult a qualified local Imam or recognized Fiqh Council.
              </p>
            </div>
          </div>
        </div>

        <button 
          onClick={() => navigateTo('home')} 
          className="px-6 py-3 border border-zinc-700 text-zinc-500 font-mono text-xs uppercase hover:text-[#ccff00] hover:border-[#ccff00] transition-colors bg-zinc-900/50"
        >
          [ RETURN TO TERMINAL ]
        </button>
      </div>
    </section>
  );
}
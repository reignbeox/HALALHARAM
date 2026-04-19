import React from 'react';
import { ShieldAlert, Database, Info, Layers } from 'lucide-react';

export default function AboutView({ navigateTo }) {
  return (
    <section className="px-6 py-16 relative z-10 bg-[#0a0a0a] flex-grow">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-12">

          <h2 className="section-title text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4">ABOUT THE PROJECT</h2>
          <p className="font-mono text-zinc-400 uppercase tracking-widest text-sm border-l-4 border-zinc-800 pl-4 body-text">
            A centralized repository for scholarly data and rational synthesis.
          </p>
        </div>

        {/* Merged Synthesis & Data Section */}
        <div className="border-2 border-zinc-800 p-8 bg-[#050505] card-main mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Database className="w-6 h-6 text-[#ccff00]" />
            <h3 className="font-black text-xl text-white uppercase title-text">DATA SOURCES & RATIONAL SYNTHESIS</h3>
          </div>
          <div className="space-y-4">
            <p className="font-mono text-zinc-400 text-sm leading-relaxed uppercase body-text">
              HalalVerify functions as an accumulator of information derived from publicly available scholarly records. In an age where contemporary issues—ranging from lab-grown proteins to digital assets—evolve rapidly, this platform provides a structured way to view how traditional jurisprudence intersects with modern reality.
            </p>
            <p className="font-mono text-zinc-400 text-sm leading-relaxed uppercase body-text">
              By utilizing synthesis logic, the platform cross-references queries against a curated databank of verified fatwas. This is a purely informative process designed to organize complex data into a navigable, rational format.
            </p>
          </div>
        </div>

        {/* The "Proper" About Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4">
            <h4 className="font-black text-white uppercase tracking-widest text-lg flex items-center gap-2">
              <Layers className="w-5 h-5 text-zinc-500" /> OUR SCOPE
            </h4>
            <p className="font-mono text-zinc-500 text-xs leading-relaxed uppercase body-text">
              We focus on the aggregation of existing knowledge. The goal is utility—providing users with a clear starting point for their own research by displaying various madhhab perspectives side-by-side.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-black text-white uppercase tracking-widest text-lg flex items-center gap-2">
              <Info className="w-5 h-5 text-zinc-500" /> NEUTRALITY
            </h4>
            <p className="font-mono text-zinc-500 text-xs leading-relaxed uppercase body-text">
              This is a neutral, educational tool. It does not possess "religious authority" nor does it innovate new rulings. It is a logic-driven reflection of established classical and contemporary Fiqh.
            </p>
          </div>
        </div>

        {/* Legal Disclaimer Box */}
        <div className="border-2 border-[#ff003c] bg-[#ff003c]/5 p-8 mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-[#ff003c] text-white font-black font-mono text-[9px] px-3 py-1 uppercase tracking-widest">
            LEGAL_DISCLAIMER
          </div>
          <div className="flex items-start gap-4">
            <ShieldAlert className="w-12 h-12 text-[#ff003c] flex-shrink-0" />
            <div>
              <h3 className="font-black text-xl text-white uppercase mb-2">NOT A HOUSE OF FATWA</h3>
              <p className="font-mono text-zinc-500 text-xs leading-relaxed uppercase">
                HalalVerify is an educational synthesis tool based on public information. It does not issue binding legal rulings. For personal religious matters, always consult a qualified local Imam or recognized Fiqh Council.
              </p>
            </div>
          </div>
        </div>

        {/* Centered Button Container */}
        <div className="mt-16 text-center">
          <button 
            onClick={() => navigateTo('home')} 
            className="btn-dismiss px-10 py-3 border border-zinc-700 text-zinc-500 font-mono text-xs uppercase hover:text-[#ccff00] hover:border-[#ccff00] transition-colors bg-zinc-900/50"
          >
            [ RETURN TO MAIN INDEX ]
          </button>
        </div>
      </div>
    </section>
  );
}
import React, { useState } from 'react';
import { Moon, Sun, X } from 'lucide-react';

export default function Sidebar({ isSidebarOpen, setIsSidebarOpen, isLightMode, setIsLightMode, currentView, navigateTo }) {
    const [locationPermission, setLocationPermission] = useState('prompt');
    const [userLocation, setUserLocation] = useState("");
  
    const requestLocation = () => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLocationPermission('granted');
            setUserLocation(`LAT:${position.coords.latitude.toFixed(2)} // LON:${position.coords.longitude.toFixed(2)}`);
          },
          () => setLocationPermission('denied')
        );
      } else {
        setLocationPermission('denied');
      }
    };
  
    const nav = (target) => {
      navigateTo(target);
      setIsSidebarOpen(false);
    };
  
    return (
      <>
        {isSidebarOpen && (
          <div className="fixed inset-0 bg-black/80 z-[60] backdrop-blur-sm" onClick={() => setIsSidebarOpen(false)} />
        )}
        <div className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-[#050505] border-l-4 border-[#ccff00] z-[70] transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out flex flex-col`}>
          <div className="p-6 border-b-2 border-zinc-800 flex justify-between items-center bg-[#ccff00] text-black">
            <span className="font-mono font-black uppercase tracking-[0.2em] text-xs">MENU</span>
            <div className="flex items-center gap-4">
              <button onClick={() => setIsLightMode(!isLightMode)} className="hover:scale-110 transition-transform">
                {isLightMode ? <Moon className="w-5 h-5" strokeWidth={3} /> : <Sun className="w-5 h-5" strokeWidth={3} />}
              </button>
              <button onClick={() => setIsSidebarOpen(false)} className="hover:rotate-90 transition-transform">
                <X className="w-6 h-6" strokeWidth={3} />
              </button>
            </div>
          </div>
          <div className="flex-grow overflow-y-auto p-6 flex flex-col gap-6">
            
            <div>
              <h3 className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest mb-3">[ DIRECTORIES ]</h3>
              <div className="flex flex-col gap-2">
                <button onClick={() => nav('directory')} className={`w-full text-left px-4 py-3 font-black font-mono uppercase tracking-widest flex justify-between items-center group border-2 transition-colors ${currentView === 'directory' ? 'bg-[#ccff00] text-black border-[#ccff00] hover:bg-white' : 'bg-transparent border-zinc-700 text-white hover:border-[#ccff00] hover:text-[#ccff00]'}`}>
                  <span>[ FIQH DIRECTORY ]</span><span className="group-hover:translate-x-1 transition-transform font-black">&gt;</span>
                </button>
                <button onClick={() => nav('ramadan')} className={`w-full text-left px-4 py-3 font-black font-mono uppercase tracking-widest flex justify-between items-center group border-2 transition-colors ${currentView === 'ramadan' ? 'bg-[#ccff00] text-black border-[#ccff00] hover:bg-white' : 'bg-transparent border-zinc-700 text-white hover:border-[#ccff00] hover:text-[#ccff00]'}`}>
                  <span>[ RAMADAN GUIDE ]</span><span className="group-hover:translate-x-1 transition-transform font-black">&gt;</span>
                </button>
              </div>
            </div>
  
            <div>
              <h3 className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest mb-3">[ SOCIAL & TEXTS ]</h3>
              <div className="flex flex-col gap-2">
                <button onClick={() => nav('marriage')} className={`w-full text-left px-4 py-3 font-black font-mono uppercase tracking-widest flex justify-between items-center group border-2 transition-colors ${currentView === 'marriage' ? 'bg-[#ccff00] text-black border-[#ccff00] hover:bg-white' : 'bg-transparent border-zinc-700 text-white hover:border-[#ccff00] hover:text-[#ccff00]'}`}>
                  <span>[ MARRIAGE RIGHTS ]</span><span className="group-hover:translate-x-1 transition-transform font-black">&gt;</span>
                </button>
                <button onClick={() => nav('controversies')} className={`w-full text-left px-4 py-3 font-black font-mono uppercase tracking-widest flex justify-between items-center group border-2 transition-colors ${currentView === 'controversies' ? 'bg-[#ccff00] text-black border-[#ccff00] hover:bg-white' : 'bg-transparent border-zinc-700 text-white hover:border-[#ccff00] hover:text-[#ccff00]'}`}>
                  <span>[ QURANIC CONTROVERSIES ]</span><span className="group-hover:translate-x-1 transition-transform font-black">&gt;</span>
                </button>
              </div>
            </div>
  
            <div className="mt-auto border-t-2 border-zinc-800 pt-6 pb-2">
              <h3 className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest mb-4">[ PRAYER TIMES NODE ]</h3>
              {locationPermission === 'prompt' && (
                <button onClick={requestLocation} className="w-full text-left p-4 bg-[#050505] border border-zinc-800 hover:border-[#ccff00] transition-colors group">
                  <span className="block text-[#ccff00] font-mono text-[10px] uppercase tracking-widest mb-1 group-hover:animate-pulse">DETECT LOCATION</span>
                  <span className="font-bold text-xs text-zinc-400 uppercase group-hover:text-white transition-colors">Enable Local Uplink</span>
                </button>
              )}
              {locationPermission === 'denied' && (
                <div className="p-4 bg-[#ff003c]/10 border border-[#ff003c]">
                  <span className="block text-[#ff003c] font-mono text-[10px] uppercase tracking-widest font-bold mb-1">ACCESS DENIED</span>
                  <span className="text-xs text-zinc-400 font-mono">Location uplink failed or rejected.</span>
                </div>
              )}
              {locationPermission === 'granted' && (
                <div className="p-4 bg-[#ccff00]/5 border border-[#ccff00]">
                  <div className="flex justify-between items-center mb-4 border-b border-[#ccff00]/20 pb-3">
                    <span className="text-[#ccff00] font-mono text-[9px] uppercase tracking-widest font-bold">{userLocation}</span>
                    <span className="w-2 h-2 bg-[#ccff00] animate-pulse"></span>
                  </div>
                  <div className="space-y-3 font-mono text-[10px] uppercase tracking-widest">
                    <div className="flex justify-between text-zinc-400"><span>FAJR</span><span className="text-white">05:12 AM</span></div>
                    <div className="flex justify-between text-zinc-400"><span>DHUHR</span><span className="text-white">01:30 PM</span></div>
                    <div className="flex justify-between text-zinc-400"><span>ASR</span><span className="text-white">04:45 PM</span></div>
                    <div className="flex justify-between text-[#ccff00] font-bold"><span>MAGHRIB</span><span>07:55 PM</span></div>
                    <div className="flex justify-between text-zinc-400"><span>ISHA</span><span className="text-white">09:15 PM</span></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
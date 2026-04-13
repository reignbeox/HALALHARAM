import React, { useState, useEffect } from 'react';
import { Moon, Sun, X, Activity, Loader2 } from 'lucide-react';
import { getActivePrayer } from '../utils/prayerClock';

export default function Sidebar({ isSidebarOpen, setIsSidebarOpen, isLightMode, setIsLightMode, currentView, navigateTo }) {
    const [locationPermission, setLocationPermission] = useState('prompt');
    const [userLocation, setUserLocation] = useState("");
    const [prayerTimes, setPrayerTimes] = useState(null);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({ activeName: "", nextName: "", countdown: "" });

    // 1. Logic to fetch data from the API
    const fetchPrayerTimes = async (lat, lon) => {
        setLoading(true);
        try {// Change method=2 to method=3 (or whichever matches your local timing)
            const response = await fetch(`https://api.aladhan.com/v1/timings?latitude=${lat}&longitude=${lon}&method=3`);
            const data = await response.json();
            if (data.code === 200) {
                setPrayerTimes(data.data.timings);
            }
        } catch (error) {
            console.error("Uplink Error:", error);
        } finally {
            setLoading(false);
        }
    };

    // 2. Logic to update the "Next Phase" countdown every minute
    useEffect(() => {
        if (prayerTimes) {
            const updateStatus = () => {
                const s = getActivePrayer(prayerTimes);
                setStatus(s);
            };
            updateStatus();
            const interval = setInterval(updateStatus, 60000);
            return () => clearInterval(interval);
        }
    }, [prayerTimes]);

    const requestLocation = () => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setLocationPermission('granted');
            setUserLocation(`LAT:${latitude.toFixed(2)} // LON:${longitude.toFixed(2)}`);
            fetchPrayerTimes(latitude, longitude);
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
        {/* Backdrop overlay */}
        {isSidebarOpen && (
          <div className="fixed inset-0 bg-black/80 z-[60] backdrop-blur-sm" onClick={() => setIsSidebarOpen(false)} />
        )}

        {/* Sidebar Panel */}
        <div className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-[#050505] border-l-4 border-[#ccff00] z-[70] transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out flex flex-col`}>
          
          {/* HEADER (Always Lime with Black text) */}
          <div className="p-6 border-b-2 border-zinc-800 flex justify-between items-center bg-[#ccff00] text-black">
            <span className="font-mono font-black uppercase tracking-[0.2em] text-xs">COMMAND_CENTER</span>
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
            
            {/* NAVIGATION: DIRECTORIES */}
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
  
            {/* NAVIGATION: SOCIAL & TEXTS */}
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
  
            {/* ADVANCED PRAYER NODE v2.1 (Pinned Bottom) */}
            <div className="mt-auto border-t-2 border-zinc-800 pt-6 pb-2">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest">[ PRAYER_NODE_v2.1 ]</h3>
                {status.nextName && (
                    <span className="flex items-center gap-2 text-[9px] font-mono text-[#ccff00] animate-pulse">
                        <Activity className="w-3 h-3" /> LOCATION_LINKED
                    </span>
                )}
              </div>
              
              {/* Initial Action Button */}
              {locationPermission === 'prompt' && (
                <button onClick={requestLocation} className="w-full text-left p-4 bg-[#050505] border border-zinc-800 hover:border-[#ccff00] group transition-all">
                  <span className="block text-[#ccff00] font-mono text-[10px] uppercase tracking-widest mb-1 group-hover:animate-pulse">INITIALIZE_DETECTION</span>
                  <span className="font-bold text-xs text-zinc-500 uppercase group-hover:text-white transition-colors">Request Geo-Coordinates</span>
                </button>
              )}

              {/* Loading State */}
              {loading && (
                <div className="p-8 flex flex-col items-center justify-center gap-3 border border-zinc-800">
                  <Loader2 className="w-6 h-6 text-[#ccff00] animate-spin" />
                  <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">Uplinking Data...</span>
                </div>
              )}

              {/* Error State */}
              {locationPermission === 'denied' && (
                <div className="p-4 bg-[#ff003c]/10 border border-[#ff003c]">
                  <span className="block text-[#ff003c] font-mono text-[10px] uppercase tracking-widest font-bold mb-1">ACCESS DENIED</span>
                  <span className="text-xs text-zinc-500 font-mono">Location uplink failed or rejected.</span>
                </div>
              )}

              {/* Functional Display Area */}
              {prayerTimes && !loading && (
                <div className="space-y-4">
                  {/* NEXT PHASE HUD */}
                  <div className="p-4 bg-transparent border-2 border-[#ccff00] relative">
                    <div className="flex justify-between items-start mb-1">
                        <span className="font-mono text-[10px] text-[#ccff00] font-bold uppercase tracking-widest">NEXT PHASE</span>
                        <span className="font-mono text-[10px] text-zinc-500 uppercase">CURRENT: {status.activeName}</span>
                    </div>
                    <div className="flex justify-between items-end">
                        <h4 className="text-4xl font-black text-white uppercase leading-none tracking-tighter">{status.nextName}</h4>
                        <div className="text-right">
                            <span className="block font-mono text-[9px] text-[#ccff00] font-black leading-none mb-1">T-MINUS</span>
                            <span className="font-mono text-2xl text-white font-black leading-none">{status.countdown}</span>
                        </div>
                    </div>
                  </div>

                  {/* MINI LIST */}
                  <div className="p-4 bg-zinc-900/20 border border-zinc-800 font-mono text-[10px] uppercase tracking-widest">
                    {['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'].map((p) => {
                      const isNext = status.nextName === p;
                      return (
                        <div key={p} className={`flex justify-between py-2 transition-colors ${isNext ? 'text-[#ccff00] border-l-2 border-[#ccff00] pl-2' : 'text-zinc-500'}`}>
                          <div className="flex items-center gap-2">
                            {isNext && <span className="w-1 h-1 bg-[#ccff00] animate-ping"></span>}
                            <span>{p}</span>
                          </div>
                          <span className={isNext ? 'font-black' : ''}>{prayerTimes[p]}</span>
                        </div>
                      );
                    })}
                  </div>
                  
                  <div className="font-mono text-[8px] text-zinc-600 text-center uppercase tracking-[0.2em]">
                    UPLINK: {userLocation}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    );
}
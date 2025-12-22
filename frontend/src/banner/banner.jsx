import React from 'react';

export default function Banner({ currentBanner, setCurrentBanner, daftarBanner }) {
  return (
    <div className="relative group rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl mb-12 bg-[#1c1c24]">
      <div className="relative w-full aspect-[21/9] md:aspect-[25/8]">
        <img src={daftarBanner[currentBanner]} alt="Banner" className="w-full h-full object-cover transition-opacity duration-500" />
      </div>
      <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <button onClick={() => setCurrentBanner(c => c === 0 ? daftarBanner.length - 1 : c - 1)} className="w-12 h-12 bg-black/40 backdrop-blur-md rounded-xl flex items-center justify-center text-white hover:bg-[#f3f305] hover:text-black transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <button onClick={() => setCurrentBanner(c => c === daftarBanner.length - 1 ? 0 : c + 1)} className="w-12 h-12 bg-black/40 backdrop-blur-md rounded-xl flex items-center justify-center text-white hover:bg-[#f3f305] hover:text-black transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </button>
      </div>
    </div>
  );
}
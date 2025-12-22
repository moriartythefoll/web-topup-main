import React from 'react';

export default function GameGrid({ games }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-20">
      {games.map((game, index) => (
        <div key={index} className="bg-[#1c1c24] p-4 rounded-[2rem] border border-white/5 hover:border-[#f3f305]/50 transition-all group cursor-pointer shadow-lg">
          <div className="aspect-square rounded-2xl overflow-hidden mb-3 bg-[#252531]">
            <img src={game.img} alt={game.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
          </div>
          <p className="text-center font-bold text-[11px] md:text-xs uppercase tracking-tight group-hover:text-[#f3f305] line-clamp-1">{game.name}</p>
        </div>
      ))}
    </div>
  );
}
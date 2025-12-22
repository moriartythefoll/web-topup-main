import React, { useState } from "react";

export default function Home() {
  const [currentBanner, setCurrentBanner] = useState(0);

  const daftarBanner = [
    "/images/baner1.png",
    "/images/baner2.png",
    "/images/banner3.jpg"
  ];

  const games = [
    { name: "Mobile Legends", img: "/images/mobile legend.jpeg" },
    { name: "Genshin Impact", img: "/images/genshin impact.jpg" },
    { name: "Valorant", img: "/images/valorant.jpg" },
  ];

  return (
    <div className="max-w-[1400px] mx-auto px-4 pt-10">
      <img
        src={daftarBanner[currentBanner]}
        className="rounded-3xl mb-10"
      />

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {games.map((g,i)=>(
          <div key={i} className="bg-[#1c1c24] p-4 rounded-2xl">
            <img src={g.img} className="rounded-xl mb-2"/>
            <p className="text-center text-xs font-bold">{g.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

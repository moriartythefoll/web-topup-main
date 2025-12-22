import React, { useState } from 'react';
import Navbar from './navbar/navbar';
import Banner from './banner/banner';
import GameGrid from './gamegrid/gamegrid';
import CekTransaksi from './cek transaksi/cek_transaksi';
import Footer from './footer/footer';

function App() {
  const [menuAktif, setMenuAktif] = useState('topup');
  const [currentBanner, setCurrentBanner] = useState(0);

  const daftarBanner = ["/images/baner1.png", "/images/baner2.png", "/images/banner3.jpg"];
  const transactions = [
    { date: "18-12-2025 19:38:26", invoice: "TPxxxxxxxxxxxx104", phone: "*********281", price: "IDR 15xxxxx", status: "PENDING" },
    { date: "18-12-2025 19:38:22", invoice: "TPxxxxxxxxxxxx874", phone: "*********447", price: "IDR 15xxxxx", status: "PENDING" },
    { date: "18-12-2025 19:38:18", invoice: "TPxxxxxxxxxxxx646", phone: "*********696", price: "IDR 28xxxxx", status: "PENDING" },
    { date: "18-12-2025 19:38:06", invoice: "TPxxxxxxxxxxxx588", phone: "*********996", price: "IDR 11xxxxx", status: "PENDING" },
    { date: "18-12-2025 19:38:19", invoice: "TPxxxxxxxxxxxx163", phone: "*********887", price: "IDR 19xxxxx", status: "SUCCESS" },
    { date: "18-12-2025 19:37:58", invoice: "TPxxxxxxxxxxxx254", phone: "*********052", price: "IDR 30xxxxx", status: "PENDING" },
    { date: "18-12-2025 19:37:56", invoice: "TPxxxxxxxxxxxx492", phone: "*********913", price: "IDR 28xxxxx", status: "PENDING" },
    { date: "18-12-2025 19:37:56", invoice: "TPxxxxxxxxxxxx712", phone: "*********265", price: "IDR 41xxxxx", status: "PENDING" },
    { date: "18-12-2025 19:38:27", invoice: "TPxxxxxxxxxxxx297", phone: "*********725", price: "IDR 84xxxxx", status: "PROCESS" },
  ];

  const games = [
    { name: "Mobile Legends", img: "/images/mobile legend.jpeg" },
    { name: "Genshin Impact", img: "/images/genshin impact.jpg" },
    { name: "Valorant", img: "/images/valorant.jpg" },
    { name: "Free Fire", img: "/images/free fire.jpg" },
    { name: "PUBG Mobile", img: "/images/pubg.jpg" },
    { name: "Honor of Kings", img: "/images/hokcoverlong_526a50ab.jpg" },
    { name: "Call of Duty", img: "/images/call of duty.jpg" },
    { name: "Undawn", img: "/images/garena-undawn.webp" },
    { name: "Magic Chess gogo", img: "/images/magic chest gogo.png" },
    { name: "Honkai : star rail", img: "/images/honkai star rail.jpg" }
  ];


  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white font-sans overflow-x-hidden">
      <Navbar menuAktif={menuAktif} setMenuAktif={setMenuAktif} />
      
      <main className="relative">
        <div className="fixed top-[-10%] left-[-10%] w-[700px] h-[700px] bg-[#f3f305]/5 blur-[150px] rounded-full -z-10"></div>

        {menuAktif === 'topup' && (
          <div className="max-w-[1400px] mx-auto px-4 pt-10">
            <Banner currentBanner={currentBanner} setCurrentBanner={setCurrentBanner} daftarBanner={daftarBanner} />
            <GameGrid games={games} />
          </div>
        )}

        {menuAktif === 'transaksi' && <CekTransaksi transactions={transactions} />}

        {/* Gambar Banner Bawah */}
        <section className="max-w-[1200px] mx-auto px-4 mb-24 pointer-events-none">
          <div className="relative overflow-hidden" style={{ maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)', WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)' }}>
            <img src="/images/Gemini_Generated_Image_mej7fbmej7fbmej7.png" alt="Footer Banner" className="w-full h-auto object-cover opacity-80 brightness-75 contrast-125 mix-blend-lighten" />
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}

export default App;
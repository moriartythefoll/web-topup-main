import React, { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css'

import Navbar from './navbar/navbar'
import ArticleNavbar from './articles/ArticleNavbar'

import Banner from './banner/banner'
import ArticleBanner from './articles/ArticleBanner'

import GameGrid from './gamegrid/gamegrid'
import CekTransaksi from './cek transaksi/cek_transaksi'

import Footer from './footer/footer'
import ArticleFooter from './articles/ArticleFooter'

import ArticleSection from './articles/ArticleSection'
import ArticleContent from './articles/ArticleContent'
import ArticleContent1 from './articles/ArticleContent1'
import ArticleContent2 from './articles/ArticleContent2'

function App() {
  const [currentBanner, setCurrentBanner] = useState(0)
  const location = useLocation()

  const isArticlePage = location.pathname.startsWith('/artikel')
  const isArticleHome = location.pathname === '/artikel'

  const daftarBanner = [
    "/images/baner1.png",
    "/images/baner2.png",
    "/images/baaner3.png",
  ]

  const transactions = [
    { date: "18-12-2025 19:38:26", invoice: "TPxxxxxxxxxxxx104", phone: "*********281", price: "IDR 15xxxxx", status: "PENDING" },
    { date: "18-12-2025 19:38:22", invoice: "TPxxxxxxxxxxxx874", phone: "*********447", price: "IDR 15xxxxx", status: "PENDING" },
    { date: "18-12-2025 19:38:18", invoice: "TPxxxxxxxxxxxx646", phone: "*********696", price: "IDR 28xxxxx", status: "PENDING" },
    { date: "18-12-2025 19:38:19", invoice: "TPxxxxxxxxxxxx163", phone: "*********887", price: "IDR 19xxxxx", status: "SUCCESS" },
  ]

  const games = [
    { name: "Mobile Legends", img: "/images/mobilelegend.png", publisher: "Moonton" },
    { name: "Genshin Impact", img: "/images/genshinimpact.png", publisher: "HoYoverse" },
    { name: "Valorant", img: "/images/A6 TOPUP.png", publisher: "Riot Games" },
    { name: "Free Fire", img: "/images/freefire.png", publisher: "Garena" },
    { name: "PUBG Mobile", img: "/images/pubg.png", publisher: "Tencent Games" },
    { name: "Honor of Kings", img: "/images/hok.png", publisher: "TiMi Studio" },
  ]

  return (
    <>
      {/* ===== NAVBAR ===== */}
      {isArticlePage ? <ArticleNavbar /> : <Navbar />}

      <div className="app-wrapper">
        <main className="app-main">

          <Routes>

            {/* ================= HOME ================= */}
            <Route
              path="/"
              element={
                <>
                  <section className="hero-section">
                    <div className="hero-video">
                      <video autoPlay muted loop playsInline>
                        <source src="/images/background.mp4" type="video/mp4" />
                      </video>
                    </div>

                    <div className="hero-content">
                      <Banner
                        currentBanner={currentBanner}
                        setCurrentBanner={setCurrentBanner}
                        daftarBanner={daftarBanner}
                      />
                    </div>
                  </section>

                  <GameGrid games={games} />
                  <ArticleSection isPreview />
                </>
              }
            />

            {/* ================= ARTIKEL (BERANDA) ================= */}
            <Route
              path="/artikel"
              element={
                <>
                  {/* 🔥 BANNER KHUSUS ARTIKEL */}
                  <ArticleBanner />

                  <div style={{ paddingTop: 40 }}>
                    <ArticleSection />
                  </div>
                </>
              }
            />

           {/* ================= DETAIL ARTIKEL (DIHUBUNGKAN DISINI) ================= */}
            
            {/* Artikel 0 (Fredrinn) */}
            <Route path="/artikel/detail" element={<div style={{ paddingTop: 100 }}><ArticleContent /></div>} />

            {/* Artikel 1 (Badang / Artikel Lain) */}
            <Route path="/artikel/detail1" element={<div style={{ paddingTop: 100 }}><ArticleContent1 /></div>} />

            {/* Artikel 2 (Leomord / Artikel Lain) */}
            <Route path="/artikel/detail2" element={<div style={{ paddingTop: 100 }}><ArticleContent2 /></div>} />

            {/* ================= CEK TRANSAKSI ================= */}
            <Route
              path="/cek-transaksi"
              element={<CekTransaksi transactions={transactions} />}
            />

          </Routes>

        </main>

        {/* ===== FOOTER ===== */}
        {isArticlePage ? <ArticleFooter /> : <Footer />}
      </div>
    </>
  )
}

export default App

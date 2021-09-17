import React from "react";
import "./HomeStyle.css";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-title">Tasks</div>
        <h4>1. API orqali avtorizatsa qilish. (authentication with api)</h4>
        <h4>2. Avtorizatsa sahifasini tayyorlash. (login page)</h4>
        <h4>3. API orqali mahsulotlarni olish (Getting product from API)</h4>
        <h4>
          4. API’dan kelgan ma’lumot orqali mahsulotlar tablitsasini yasash.
          Tablitsa yasash uchun mahsus packega’lar ishlatish mumkin.
        </h4>
        <h4>
          5. Qidiruv sahifasi. (search page with table) Yana bir tablitsa yasab
          mahsulotlarni nomi bo’yicha qidirish amalga oshirilganda mahsulotlar
          so’rovga mos ravishda ko’rinishi va tartiblanishi (sort) kerak. (Faqat
          client-side, API ga so’rov yuborilmaydi) (Search and sort by product
          name)
        </h4>
      </div>
    </>
  );
};

export default Home;

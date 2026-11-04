"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, ExternalLink, Mail, Phone, MapPin, Sparkles, GraduationCap, Briefcase, Code, Smartphone, Video, Award, ZoomIn, ShieldCheck, HeartHandshake } from "lucide-react";
import Navbar from "../components/Navbar";

// Interface for interactive modal previews
interface ModalItem {
  title: string;
  category?: string;
  period?: string;
  desc?: string;
  img: string;
}

// Poster items
const posters = [
  { id: 1, title: "Apasih Bedanya", img: "/images/posters/p1_apasih_bedanya.png" },
  { id: 2, title: "Less Screen Time, More Real Life", img: "/images/posters/p2_detoks_digital.png" },
  { id: 3, title: "Yuk, Belajar Mengelola Uang", img: "/images/posters/p3_kelola_uang.png" },
  { id: 4, title: "Stop Cyberbullying!", img: "/images/posters/p4_cyberbullying.png" },
  { id: 5, title: "Stop Boros, Mulai Cerdas!", img: "/images/posters/p5_stop_boros.png" },
  { id: 6, title: "Jaga Bumi, Jaga Masa Depan", img: "/images/posters/p6_jaga_bumi.png" },
  { id: 7, title: "Lawan Malas, Gas Produktif!", img: "/images/posters/p7_lawan_malas.png" },
  { id: 8, title: "Poster Event", img: "/images/posters/p8_poster_event.png" },
  { id: 9, title: "Poster Lomba", img: "/images/posters/p9_poster_lomba.png" },
  { id: 10, title: "Hari Raya Idul Fitri", img: "/images/posters/p10_poster_idulfitri.png" },
  { id: 11, title: "Selamat Hari Raya Nyepi", img: "/images/posters/p11_nyepi.png" },
  { id: 12, title: "Dirgahayu Indonesia", img: "/images/posters/p12_dirgahayu.png" },
  { id: 13, title: "Selamat Hari Pahlawan", img: "/images/posters/p13_pahlawan.png" },
];

// Certificates list
const certificates = [
  {
    id: 1,
    title: "Microsoft Excel dari dasar hingga pakar",
    issuer: "Udemy",
    date: "Oktober 2026",
    img: "/images/certificates/cert_01_udemy.png",
  },
  {
    id: 2,
    title: "Intro to UI/UX - Certificate of Completion",
    issuer: "Skilvul",
    date: "Oktober 2026",
    img: "/images/certificates/cert_02_skilvul_uiux.png",
  },
  {
    id: 3,
    title: "Wireframing and Prototyping",
    issuer: "IBM SkillsBuild",
    date: "Oktober 2026",
    img: "/images/certificates/cert_03_ibm.png",
  },
  {
    id: 4,
    title: "Introduction to MS Excel",
    issuer: "Microsoft & Simplilearn SkillUp",
    date: "Oktober 2026",
    img: "/images/certificates/cert_04_microsoft.png",
  },
  {
    id: 5,
    title: "Fundamental Front-End Web Development",
    issuer: "Coding Studio",
    date: "Juni 2024",
    img: "/images/certificates/cert_05_coding_studio.png",
  },
  {
    id: 6,
    title: "Belajar Dasar Pemrograman Web",
    issuer: "Dicoding Indonesia",
    date: "Juni 2024",
    img: "/images/certificates/cert_06_dicoding.png",
  },
  {
    id: 7,
    title: "Web Development for Beginner: HTML hingga Fullstack",
    issuer: "Edspert.id",
    date: "Februari 2024",
    img: "/images/certificates/cert_09_edspert.png",
  },
  {
    id: 8,
    title: "CSS Dasar ",
    issuer: "Skilvul",
    date: "Agustus 2023",
    img: "/images/certificates/cert_07_skilvul_css.png",
  },
  {
    id: 9,
    title: "HTML Dasar",
    issuer: "Skilvul",
    date: "Agustus 2023",
    img: "/images/certificates/cert_08_skilvul_html.png",
  },
  ,
];

// Web Dev & UI/UX Projects
const webProjects: ModalItem[] = [
  {
    title: "Idspora Academy Fitur Event – Proyek Magang & Tugas Akhir",
    category: "WEB DEVELOPER • UI/UX DESIGNER & FRONT-END",
    period: "Oktober 2025 – Mei 2026",
    desc: "Mengembangkan desain antarmuka (UI/UX) dan implementasi front-end fitur Event pada LMS IdSpora berbasis web. Berfokus pada mengintegrasikan proses pendaftaran event yang sebelumnya masih tersebar melalui Google Forms, WhatsApp, dan Google Drive, sehingga proses pendaftaran dan pengelolaan data event menjadi lebih terintegrasi dalam satu platform.",
    img: "/images/projects/idspora_event_preview.png",
  },
  {
    title: "Idspora Academy Admin Fitur Event – Proyek Magang & Tugas Akhir",
    category: "WEB DEVELOPER • UI/UX DESIGNER & FRONT-END",
    period: "Oktober 2025 – Mei 2026",
    desc: "Mengembangkan desain UI/UX dan mengimplementasikan front-end fitur Event pada LMS IdSpora berbasis web. Berfokus pada digitalisasi dan integrasi proses pendaftaran serta pengelolaan event yang sebelumnya masih tersebar melalui Google Forms, WhatsApp, dan Google Drive ke dalam satu platform terintegrasi.",
    img: "/images/projects/idspora_admin_preview.png",
  },
  {
    title: "JIKU Layanan Konsultasi Psikolog Online - Mata Kuliah Proyek Tingkat 1",
    category: "WEB DEVELOPER • FRONT-END",
    period: "Oktober 2024 – Desember 2024",
    desc: "Mengimplementasikan desain UI/UX ke dalam aplikasi web JiwaKu sebagai Front-End Developer, yang berfokus pada layanan pemesanan dan penjadwalan konsultasi psikolog secara online. Mengembangkan antarmuka web yang interaktif dan responsif sesuai kebutuhan pengguna.",
    img: "/images/projects/jiku_preview.png",
  },
  {
    title: "YuBeli Order Food & Drink - Proyek Mata Kuliah Pemrograman Berbasis Objek",
    category: "WEB DEVELOPER • UI/UX DESIGNER & FRONT-END",
    period: "Desember 2023 – Januari 2024",
    desc: "Mengimplementasikan desain UI/UX ke dalam aplikasi YuBeli sebagai Front-End Developer untuk mendukung proses transaksi kasir dan pengelolaan produk secara digital dan efisien.",
    img: "/images/projects/yubeli_preview.png",
  },
  {
    title: "IbuHebat.Ai – Platform Bisnis Ibu Muda",
    category: "UI DESIGN • LOMBA INNOVILLAGE KARSA CIPTA",
    period: "November 2025",
    desc: "Merancang antarmuka pengguna untuk IbuHebat.Ai dalam kompetisi Innovillage Karsa Cipta, dengan memperhatikan penyajian informasi, kebutuhan pengguna, dan kemudahan penggunaan aplikasi. Merupakan sebuah aplikasi yang memudahkan ibu muda untuk membangun bisnis.",
    img: "/images/projects/ibuhebat_preview.png",
  },
  {
    title: "Leaundry – Laundry Delivery App",
    category: "UI DESIGN • PROYEK MATA KULIAH ALAT BANTU GAMBAR DESAIN",
    period: "Desember 2023",
    desc: "Merancang antarmuka aplikasi Leaundry sebagai bagian dari tugas proyek mata kuliah Alat Bantu Gambar Desain. Leaundry dirancang untuk memudahkan pengguna dalam memesan layanan laundry melalui platform digital mobile.",
    img: "/images/projects/leaundry_preview.png",
  },
];

// Social Media Designer Projects
const socialProjects: ModalItem[] = [
  {
    title: "Idspora – Event Organizer Internship",
    category: "INSTAGRAM FEEDS",
    period: "Agustus 2025 – Juli 2026",
    desc: "Membuat desain Instagram feeds untuk kebutuhan promosi event, konten edukasi, fun fact, peringatan hari besar, dan publikasi kegiatan dengan menyesuaikan tema serta identitas visual IdSpora.",
    img: "/images/social/idspora_feeds.png",
  },
  {
    title: "AISINDO – Social Media Graphic Designer Freelance",
    category: "INSTAGRAM FEEDS & EVENT POSTER",
    period: "Februari 2025 – Juli 2026",
    desc: "Membuat desain poster Instagram untuk publikasi kegiatan dan peringatan hari besar AISINDO (Association for Information Systems Indonesia), serta menyesuaikan desain melalui proses revisi agar selaras dengan kebutuhan publikasi organisasi.",
    img: "/images/social/aisindo_feeds.png",
  },
  {
    title: "Sajiwa Time – F&B Business Social Media Designer Freelance",
    category: "INSTAGRAM FEEDS & PRODUCT PROMOTION",
    period: "Mei 2025 – Juli 2026",
    desc: "Membuat desain Instagram feeds untuk menampilkan produk dan materi promosi bisnis F&B, dengan memperhatikan daya tarik visual, penyampaian informasi, dan identitas brand yang konsisten.",
    img: "/images/social/sajiwatime_feeds.png",
  },
  {
    title: "Bina Desa Himadira – Panitia Bina Desa",
    category: "INSTAGRAM FEEDS & EVENT CAMPAIGN",
    period: "April 2025",
    desc: "Membuat desain Instagram feeds untuk mendukung publikasi kegiatan Bina Desa HIMADIRA, mulai dari penyampaian informasi kegiatan hingga dokumentasi aktivitas kepada audiens.",
    img: "/images/social/binadesa_feeds.png",
  },
];

export default function PortfolioPage() {
  // Modal Preview States
  const [activeModal, setActiveModal] = useState<ModalItem | null>(null);

  // Poster Carousel Continuous Auto-scroll and Smooth Navigation
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const pauseTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    let animId: number;
    const speed = 1.0; // Steady gentle auto-scroll

    const scrollLoop = () => {
      if (!isPaused && el) {
        el.scrollLeft += speed;
        // Endless loop: when halfway (since list is doubled), wrap back smoothly
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }
      animId = requestAnimationFrame(scrollLoop);
    };

    animId = requestAnimationFrame(scrollLoop);
    return () => cancelAnimationFrame(animId);
  }, [isPaused]);

  // Click Left Button: shifts gallery left and pauses temporarily
  const handleScrollLeft = () => {
    if (carouselRef.current) {
      setIsPaused(true);
      carouselRef.current.scrollBy({ left: -340, behavior: "smooth" });
      if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
      pauseTimerRef.current = setTimeout(() => setIsPaused(false), 3000);
    }
  };

  // Click Right Button: shifts gallery right and pauses temporarily
  const handleScrollRight = () => {
    if (carouselRef.current) {
      setIsPaused(true);
      carouselRef.current.scrollBy({ left: 340, behavior: "smooth" });
      if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
      pauseTimerRef.current = setTimeout(() => setIsPaused(false), 3000);
    }
  };

  // Close modals on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveModal(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="relative min-h-screen text-slate-800 bg-[#EAF5FF] overflow-x-hidden font-sans">
      {/* Background Seamless Texture Overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-45 bg-repeat bg-top"
        style={{
          backgroundImage: "url('/images/bg_texture.jpg')",
          backgroundSize: "100% auto",
        }}
      />

      {/* Persistent Navigation Bar */}
      <Navbar />

      {/* Main Container - Extended to max-w-[1400px] with responsive padding to remove excess sides */}
      <main className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-5 space-y-10 sm:space-y-12">

        {/* ========================================================
            SECTION 1: COVER & IDENTITAS
            ======================================================== */}
        <section
          id="cover"
          className="relative pt-20 pb-10 sm:pt-24 sm:pb-14 text-center rounded-3xl bg-gradient-to-b from-[#06275B] via-[#0755A5] to-[#1265B3] text-white shadow-xl overflow-hidden border border-blue-400/20"
        >
          {/* Subtle decorative glow and sparklings */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
            <div className="absolute -top-16 left-1/4 w-80 h-80 bg-[#8CC6EE]/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-16 right-1/4 w-96 h-96 bg-[#1265B3]/40 rounded-full blur-3xl"></div>
            <div className="absolute top-8 left-12 text-[#8CC6EE] opacity-75 animate-bounce">
              <Sparkles size={24} />
            </div>
            <div className="absolute top-14 right-16 text-[#8CC6EE] opacity-60">
              <Sparkles size={20} />
            </div>
          </div>

          <div className="relative z-10 px-4">
            <span className="inline-block text-xs sm:text-sm tracking-widest text-[#8CC6EE] font-semibold uppercase mb-1 drop-shadow">
              PROJECT
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-wider text-white drop-shadow-[0_4px_15px_rgba(0,0,0,0.4)]">
              PORTOFOLIO
            </h1>
            <p className="font-script text-3xl sm:text-5xl lg:text-6xl text-[#8CC6EE] mt-1 sm:mt-2 tracking-wide drop-shadow-md">
              Alea Atapasya
            </p>

            {/* Role Badges */}
            <div className="mt-6 flex flex-wrap justify-center gap-2 sm:gap-3 max-w-3xl mx-auto">
              <span className="px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-[#06275B]/70 border border-[#8CC6EE]/40 backdrop-blur-md shadow-sm hover:scale-105 transition-transform">
                Front-End Developer
              </span>
              <span className="px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-[#0755A5]/80 border border-[#8CC6EE]/40 backdrop-blur-md shadow-sm hover:scale-105 transition-transform">
                Digital Design
              </span>
              <span className="px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-[#1265B3]/80 border border-[#8CC6EE]/40 backdrop-blur-md shadow-sm hover:scale-105 transition-transform">
                Video Editing
              </span>
              <span className="px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-[#06275B]/70 border border-[#8CC6EE]/40 backdrop-blur-md shadow-sm hover:scale-105 transition-transform">
                Social Media Talent
              </span>
            </div>
          </div>
        </section>

        {/* ========================================================
            SECTION 2: TENTANG SAYA, FOTO PROFIL, PENDIDIKAN & TOOLS
            ======================================================== */}
        <section
          id="tentang"
          className="relative bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-panel border border-[#8CC6EE]/30"
        >
          <div className="flex items-center gap-2 text-[#0755A5] mb-5">
            <span className="font-script text-2xl sm:text-3xl text-[#1265B3]">Hi, Everyone</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            {/* KIRI: Tentang Saya (atas) & Pendidikan (bawah) */}
            <div className="order-2 md:order-1 md:col-span-4 flex flex-col justify-between gap-4">
              {/* Tentang Saya (Atas) */}
              <div className="flex-1 bg-gradient-to-br from-[#0755A5] to-[#1265B3] text-white p-5 sm:p-6 rounded-2xl shadow-md border border-blue-400/20 flex flex-col justify-center">
                <h2 className="text-xl sm:text-2xl font-bold font-display mb-2.5 text-white">
                  Tentang Saya
                </h2>
                <p className="text-xs sm:text-[13px] leading-relaxed text-blue-50/95 text-justify">
                  Saya merupakan lulusan D3 Rekayasa Perangkat Lunak Aplikasi dari Telkom University. Saya memiliki pengalaman dalam UI/UX Design, Front-End Development, desain grafis, serta pembuatan dan pengeditan konten digital melalui pengalaman proyek, organisasi, magang, dan freelance. Saya terbiasa merancang antarmuka aplikasi dan website, membuat materi visual untuk kebutuhan promosi dan media sosial, serta mengembangkan konten foto dan video yang menarik. Selain itu, saya memiliki kemampuan dalam koordinasi tim, manajemen waktu, dan penyelesaian tugas sesuai target. Saya merupakan pribadi yang teliti, adaptif, bertanggung jawab, dan memiliki semangat belajar yang tinggi. Saya tertarik untuk terus mengembangkan kompetensi di bidang desain digital, pengembangan antarmuka, dan produksi konten kreatif.
                </p>
              </div>

              {/* Pendidikan (Bawah) */}
              <div className="bg-[#EAF5FF] p-4 sm:p-5 rounded-2xl border border-[#8CC6EE]/40 shadow-sm">
                <div className="flex items-center gap-2 text-[#06275B] font-bold text-base mb-2">
                  <GraduationCap className="text-[#1265B3]" size={20} />
                  <span>Education</span>
                </div>
                <div className="space-y-1 text-xs sm:text-sm">
                  <div className="font-bold text-[#0755A5] text-sm">Universitas Telkom</div>
                  <div className="text-slate-600">D3 Rekayasa Perangkat Lunak Aplikasi</div>
                  <div className="flex justify-between text-xs text-slate-500 pt-1.5 border-t border-[#8CC6EE]/30">
                    <span>2023 - 2026</span>
                    <span className="font-semibold text-[#0755A5] bg-white px-2.5 py-0.5 rounded-full border border-[#8CC6EE]/50">
                      IPK 3.91
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* TENGAH: Foto Profil */}
            <div className="order-1 md:order-2 md:col-span-4 flex items-center justify-center">
              <div className="relative group flex items-center justify-center w-full">
                {/* Soft ambient aura blur behind portrait */}
                <div className="absolute w-60 h-80 sm:w-72 sm:h-96 bg-gradient-to-tr from-[#1265B3]/25 via-[#8CC6EE]/35 to-transparent rounded-full blur-2xl pointer-events-none group-hover:scale-110 transition-transform duration-700"></div>

                {/* Clean cutout with artistic floating glow, no box border, no container background */}
                <div className="relative w-56 h-80 sm:w-64 sm:h-[420px] flex items-end justify-center">
                  <Image
                    src="/images/profile/alea_avatar.png"
                    alt="Alea Atapasya"
                    fill
                    sizes="(max-width: 768px) 240px, 280px"
                    className="object-contain object-bottom drop-shadow-[0_12px_24px_rgba(7,85,165,0.22)] group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* KANAN: Tools (atas) & Soft Skill (bawah) */}
            <div className="order-3 md:order-3 md:col-span-4 flex flex-col justify-between gap-4">
              {/* Tools (Atas) */}
              <div className="bg-[#EAF5FF] p-4 sm:p-5 rounded-2xl border border-[#8CC6EE]/40 shadow-sm">
                <div className="text-[#06275B] font-bold text-base mb-2.5 flex items-center gap-2">
                  <Code className="text-[#1265B3]" size={18} />
                  <span>Tools</span>
                </div>
                <div className="grid grid-cols-4 gap-2 text-center">
                  {[
                    { name: "VS Code", logo: "/images/tools/vscode.png", bg: "hover:border-sky-400" },
                    { name: "Github", logo: "/images/tools/github.png", bg: "hover:border-black" },
                    { name: "XAMPP", logo: "/images/tools/xampp.png", bg: "hover:border-orange-400" },
                    { name: "Figma", logo: "/images/tools/figma.png", bg: "hover:border-purple-400" },
                    { name: "Notion", logo: "/images/tools/notion.png", bg: "hover:border-gray-400" },
                    { name: "Trello", logo: "/images/tools/trello.jpg", bg: "hover:border-blue-400" },
                    { name: "Canva", logo: "/images/tools/canva.png", bg: "hover:border-blue-400" },
                    { name: "CapCut", logo: "/images/tools/capcut.png", bg: "hover:border-slate-400" },
                    { name: "Google Workspace", logo: "/images/tools/google_workspace.png", bg: "hover:border-emerald-400" },
                    { name: "Microsoft Excel", logo: "/images/tools/excel.jpg", bg: "hover:border-green-400" },
                    { name: "Microsoft Word", logo: "/images/tools/word.jpg", bg: "hover:border-blue-400" },
                    { name: "Microsoft PPT", logo: "/images/tools/ppt.jpg", bg: "hover:border-orange-400" },
                  ].map((tool) => (
                    <div
                      key={tool.name}
                      className={`group p-1.5 sm:p-2 rounded-xl bg-white border border-[#8CC6EE]/30 shadow-xs hover:shadow-md ${tool.bg} hover:scale-105 transition-all duration-200 flex flex-col items-center justify-center gap-1 cursor-pointer`}
                      title={tool.name}
                    >
                      <div className="relative w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center">
                        <Image
                          src={tool.logo}
                          alt={tool.name}
                          fill
                          sizes="32px"
                          className="object-contain transition-transform group-hover:scale-110"
                        />
                      </div>
                      <span className="text-[9px] sm:text-[10px] font-semibold text-slate-700 group-hover:text-[#0755A5] transition-colors leading-tight line-clamp-1">
                        {tool.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Soft Skill (Bawah) */}
              <div className="bg-[#EAF5FF] p-4 sm:p-5 rounded-2xl border border-[#8CC6EE]/40 shadow-sm flex-1 flex flex-col justify-center">
                <div className="text-[#06275B] font-bold text-base mb-2.5 flex items-center gap-2">
                  <HeartHandshake className="text-[#1265B3]" size={18} />
                  <span>Soft Skills</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-center">
                  {[
                    "Komunikasi",
                    "Penyelesaian Masalah",
                    "Kerja Sama Tim",
                    "Kepemimpinan",
                    "Manajemen Waktu",
                    "Adaptif",
                    "Disiplin",
                    "Manajemen Proyek"
                  ].map((skill) => (
                    <div
                      key={skill}
                      className="p-2 sm:p-2.5 rounded-xl bg-white border border-[#8CC6EE]/30 shadow-xs hover:shadow-md hover:border-[#1265B3]/50 hover:bg-blue-50/40 hover:scale-[1.02] transition-all duration-200 flex items-center justify-center text-center cursor-default"
                    >
                      <span className="text-[11px] sm:text-xs font-semibold text-[#0755A5]">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            SECTION 3: EXPERIENCE (SCROLLABLE CONTAINER SEJAJAR FOTO)
            ======================================================== */}
        <section
          id="pengalaman"
          className="relative bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-panel border border-[#8CC6EE]/30"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-gradient-to-tr from-[#0755A5] to-[#1265B3] text-white shadow-md">
              <Briefcase size={22} />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-[#06275B]">
                Experience
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Riwayat organisasi, kepanitiaan, dan pengabdian masyarakat
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left Column: Scrollable List to match collage height perfectly */}
            <div className="lg:col-span-7 h-[430px] sm:h-[480px] overflow-y-auto pr-2 space-y-3.5 scrollbar-thin scrollbar-thumb-[#8CC6EE] scrollbar-track-[#EAF5FF]">
              {[
                {
                  role: "Wakil Kepala Departemen Eksternal",
                  org: "Himpunan D3 RPLA",
                  period: "Februari 2025 - November 2025",
                  desc: "Menjadi wakil ketua pelaksana kunjungan industri 2025 serta mengoordinasikan kegiatan studi banding, bina desa, Dira Mengabdi, dan charity. Turut menjadi mentor Bina Desa serta berkontribusi dalam penyusunan proposal PPK Ormawa 2025.",
                },
                {
                  role: "Panitia Pengabdian Masyarakat Multicriteria DPPM 2025",
                  org: "DPPM Telkom University",
                  period: "Agustus - Desember 2025",
                  desc: "Terlibat dalam perencanaan, pelaksanaan, dokumentasi, serta pengelolaan data kegiatan Pengabdian kepada Masyarakat sebagai bahan penyusunan laporan dan paper ilmiah.",
                },
                {
                  role: "Panitia Pengabdian Masyarakat AISINDO",
                  org: "AISINDO",
                  period: "Februari 2025 - Juli 2026",
                  desc: "Bertanggung jawab atas desain dan pengeditan poster publikasi digital, pembaruan informasi kegiatan pada website AISINDO, serta koordinasi revisi dan finalisasi konten visual bersama tim media sosial.",
                },
                {
                  role: "Panitia Pengabdian Masyarakat Cibiru Wetan",
                  org: "Pengabdian Masyarakat Cibiru Wetan",
                  period: "Januari 2024 - Juni 2025",
                  desc: "Mendampingi masyarakat Desa Cibiru Wetan dalam penggunaan Google Workspace, membuat modul pelatihan serta desain banner dan sertifikat, dan mendokumentasikan serta mengedit video kegiatan.",
                },
                {
                  role: "Panitia Acara PKKMB Prodi 2024",
                  org: "PKKMB Prodi D3 RPLA",
                  period: "September 2024 – November 2024",
                  desc: "Bertanggung jawab menyusun konsep dan rundown acara PKKMB Prodi 2024, merancang dekorasi dan slogan sesuai tema, serta bertugas sebagai MC dan time keeper selama kegiatan berlangsung.",
                },
                {
                  role: "Panitia Discipline & Motivation PKKMB Universitas 2024",
                  org: "Panitia PKKMB Universitas Telkom 2024",
                  period: "Juli 2024 – September 2024",
                  desc: "Bertanggung jawab menjaga kedisiplinan peserta, mengatur ketertiban dan keamanan selama kegiatan PKKMB Universitas 2024, serta memastikan kegiatan berjalan sesuai aturan yang ditetapkan.",
                },
                {
                  role: "Staff Departemen Pengabdian Masyarakat",
                  org: "Himpunan D3 RPLA",
                  period: "April 2024 - November 2024",
                  desc: "Berkontribusi dalam penyusunan proposal POMN, memimpin pelaksanaan kegiatan charity, berpartisipasi dalam kegiatan bina desa, serta mengoordinasikan kegiatan FIT Connect melalui pembagian Jumat Berkah kepada masyarakat.",
                },
              ].map((exp, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#EAF5FF]/80 hover:bg-[#EAF5FF] border border-[#8CC6EE]/40 transition-all hover:translate-x-1 duration-200"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <h3 className="font-bold text-sm sm:text-base text-[#0755A5]">
                      {exp.org} – <span className="font-medium text-slate-800">{exp.role}</span>
                    </h3>
                    <span className="text-[11px] font-semibold text-[#1265B3] bg-white px-2.5 py-0.5 rounded-full border border-[#8CC6EE]/40 self-start sm:self-auto">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed text-justify">
                    {exp.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Right Column: Documentation Collage matching height */}
            <div className="lg:col-span-5 h-[430px] sm:h-[480px]">
              <div className="h-full rounded-2xl overflow-hidden border-2 border-[#8CC6EE]/50 shadow-md bg-white p-2.5 flex flex-col justify-between">
                <div className="relative w-full flex-1 rounded-xl overflow-hidden">
                  <Image
                    src="/images/experience/experience_collage.png"
                    alt="Dokumentasi Kegiatan dan Pengalaman Alea Atapasya"
                    fill
                    sizes="(max-width: 1024px) 100vw, 550px"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            SECTION 4: PROJECTS (WEB DEVELOPER & UI/UX DESIGN) WITH CLICK POPUP
            ======================================================== */}
        <section id="proyek" className="space-y-6">
          <div className="text-center">

            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#06275B] mt-1">
              Project Web Developer & UI/UX Design
            </h2>

          </div>

          {/* Grid Proyek */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {webProjects.map((project, idx) => (
              <div
                key={idx}
                onClick={() => setActiveModal(project)}
                className="group cursor-pointer rounded-3xl bg-white/90 backdrop-blur-md p-5 border border-[#8CC6EE]/30 shadow-panel hover:shadow-2xl hover:border-[#1265B3]/60 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 relative"
              >
                <div>
                  <div className="relative w-full h-52 sm:h-56 rounded-2xl overflow-hidden border border-[#8CC6EE]/40 bg-[#EAF5FF] mb-4">
                    <Image
                      src={project.img}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 450px"
                      className="object-contain group-hover:scale-105 transition-transform duration-500 p-2"
                    />
                    <div className="absolute top-2 right-2 p-1.5 rounded-full bg-white/80 backdrop-blur-sm text-[#0755A5] opacity-0 group-hover:opacity-100 transition-opacity">
                      <ZoomIn size={16} />
                    </div>
                  </div>
                  <div className="inline-block px-2.5 py-1 bg-[#EAF5FF] text-[#0755A5] text-[10px] sm:text-[11px] font-bold rounded-full mb-2 border border-[#8CC6EE]/40">
                    {project.category}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold font-display text-[#06275B] group-hover:text-[#0755A5] transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#1265B3] font-semibold mb-2">{project.period}</p>
                  <p className="text-xs text-slate-600 leading-relaxed text-justify line-clamp-4">
                    {project.desc}
                  </p>
                </div>

                <div className="mt-4 pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-[#1265B3] font-medium">
                  <span>Lihat Detail & Mockup</span>
                  <ExternalLink size={14} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================
            SECTION 5: POSTER & INFOGRAFIS (CAROUSEL AUTOPLAY + BUTTON NAVIGATION)
            ======================================================== */}
        <section
          id="poster"
          className="relative bg-gradient-to-r from-[#06275B] via-[#0755A5] to-[#1265B3] rounded-3xl p-6 sm:p-8 text-white shadow-xl overflow-hidden border border-blue-400/20"
        >
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#8CC6EE]/15 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-5 relative z-10">
            <div>

              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                Poster & Infografis
              </h2>
            </div>

            {/* Navigation buttons: Panah kiri & panah kanan menggeser galeri */}
            <div className="flex items-center gap-3">
              <button
                onClick={handleScrollLeft}
                aria-label="Geser ke kiri"
                className="w-11 h-11 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-white backdrop-blur-md transition-all shadow-md active:scale-90"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={handleScrollRight}
                aria-label="Geser ke kanan"
                className="w-11 h-11 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-white backdrop-blur-md transition-all shadow-md active:scale-90"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Carousel Container:
              - Berjalan perlahan sendiri (continuous animation)
              - Berhenti saat di-hover (onMouseEnter -> isPaused)
              - Sedikit membesar saat hover (scale-105)
              - Tanpa judul/deskripsi di kartu
          */}
          <div
            ref={carouselRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-none py-4 px-1 cursor-grab active:cursor-grabbing scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {[...posters, ...posters, ...posters].map((p, index) => (
              <div
                key={`${p.id}-${index}`}
                onClick={() => setActiveModal({ title: p.title, img: p.img, category: "POSTER & INFOGRAFIS" })}
                className="flex-shrink-0 w-44 sm:w-56 md:w-64 aspect-[3/4.2] rounded-2xl overflow-hidden shadow-lg border-2 border-white/25 bg-[#06275B]/60 transition-all duration-300 transform hover:scale-105 hover:border-white hover:shadow-glow relative cursor-pointer group"
              >
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  sizes="(max-width: 640px) 176px, 256px"
                  className="object-contain p-1.5 transition-transform duration-300"
                />
              </div>
            ))}
          </div>


        </section>

        {/* ========================================================
            SECTION 6: SOCIAL MEDIA DESIGNER WITH CLICK POPUP
            ======================================================== */}
        <section
          id="social-media"
          className="relative bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-panel border border-[#8CC6EE]/30"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-gradient-to-tr from-[#0755A5] to-[#1265B3] text-white shadow-md">
              <Smartphone size={22} />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-[#06275B]">
                Social Media Designer
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Desain feed Instagram, materi promosi, dan publikasi event
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {socialProjects.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setActiveModal(item)}
                className="group cursor-pointer rounded-2xl bg-[#EAF5FF]/60 hover:bg-white p-5 border border-[#8CC6EE]/30 shadow-xs hover:shadow-xl hover:border-[#1265B3]/60 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-[#8CC6EE]/40 bg-white mb-3 shadow-inner">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 600px"
                      className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 right-2 p-1.5 rounded-full bg-white/80 backdrop-blur-sm text-[#0755A5] opacity-0 group-hover:opacity-100 transition-opacity">
                      <ZoomIn size={16} />
                    </div>
                  </div>
                  <div className="inline-block px-2.5 py-0.5 bg-[#EAF5FF] text-[#0755A5] text-[10px] font-bold rounded-full mb-1 border border-[#8CC6EE]/30">
                    {item.category}
                  </div>
                  <h3 className="font-bold text-base sm:text-lg text-[#0755A5] group-hover:text-[#06275B] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#1265B3] font-semibold mb-1">{item.period}</p>
                  <p className="text-xs text-slate-600 leading-relaxed text-justify">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-200/60 flex items-center justify-between text-xs text-[#1265B3] font-medium">
                  <span>Buka Preview Mockup</span>
                  <ExternalLink size={14} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================
            SECTION 7: VIDEO EDITOR
            ======================================================== */}
        <section
          id="video"
          className="relative bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-panel border border-[#8CC6EE]/30"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-gradient-to-tr from-[#0755A5] to-[#1265B3] text-white shadow-md">
              <Video size={22} />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-[#06275B]">
                Video Editor
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Editing video edukasi, promosi, YouTube, dan konten TikTok
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Video 1: YouTube */}
            <div
              onClick={() => setActiveModal({
                title: "Idspora – Event Organizer Internship (YouTube Video)",
                category: "YOUTUBE VIDEO",
                period: "Agustus 2025 – Juli 2026",
                desc: "Berperan sebagai talent dalam video edukasi IdSpora serta melakukan editing video untuk menyampaikan materi secara jelas dan menarik melalui kanal YouTube.",
                img: "/images/video/youtube_video.png"
              })}
              className="group cursor-pointer rounded-2xl bg-[#EAF5FF]/60 hover:bg-white p-4 border border-[#8CC6EE]/30 transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-[#8CC6EE]/40 bg-white mb-3 shadow-inner">
                <Image
                  src="/images/video/youtube_video.png"
                  alt="YouTube Video Idspora"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-contain p-1 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="inline-block px-2 py-0.5 bg-red-100 text-red-700 font-bold text-[10px] rounded-full mb-1">
                YOUTUBE VIDEO
              </div>
              <h3 className="font-bold text-sm sm:text-base text-[#0755A5]">
                Idspora – Event Organizer Internship
              </h3>
              <p className="text-[11px] text-[#1265B3] font-semibold mb-1">Agustus 2025 – Juli 2026</p>
              <p className="text-xs text-slate-600 leading-relaxed text-justify">
                Berperan sebagai talent dalam video edukasi IdSpora serta melakukan editing video untuk kanal YouTube.
              </p>
            </div>

            {/* Video 2: TikTok Idspora */}
            <div
              onClick={() => setActiveModal({
                title: "Idspora – TikTok Content Editor & Talent",
                category: "TIKTOK VIDEO",
                period: "Agustus 2025 – Juli 2026",
                desc: "Berperan sebagai talent dan video editor dalam pembuatan konten TikTok IdSpora, meliputi video promosi event dan fun fact untuk menyampaikan informasi secara singkat dan menarik.",
                img: "/images/video/tiktok_idspora.png"
              })}
              className="group cursor-pointer rounded-2xl bg-[#EAF5FF]/60 hover:bg-white p-4 border border-[#8CC6EE]/30 transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-[#8CC6EE]/40 bg-white mb-3 shadow-inner">
                <Image
                  src="/images/video/tiktok_idspora.png"
                  alt="TikTok Video Idspora"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-contain p-1 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="inline-block px-2 py-0.5 bg-amber-100 text-amber-800 font-bold text-[10px] rounded-full mb-1">
                TIKTOK VIDEO
              </div>
              <h3 className="font-bold text-sm sm:text-base text-[#0755A5]">
                Idspora – TikTok Content Editor & Talent
              </h3>
              <p className="text-[11px] text-[#1265B3] font-semibold mb-1">Agustus 2025 – Juli 2026</p>
              <p className="text-xs text-slate-600 leading-relaxed text-justify">
                Berperan sebagai talent dan video editor dalam pembuatan konten TikTok IdSpora, meliputi video promosi event dan fun fact untuk menyampaikan informasi secara singkat dan menarik.
              </p>
            </div>

            {/* Video 3: TikTok Sajiwa */}
            <div
              onClick={() => setActiveModal({
                title: "Sajiwa Time – F&B Business Video Editor",
                category: "TIKTOK VIDEO",
                period: "Mei 2025 – Juli 2026",
                desc: "Berperan sebagai talent sekaligus mengedit beberapa video promosi produk Sajiwa Time untuk kebutuhan media sosial, dengan menonjolkan produk melalui visual yang menarik dan sesuai dengan kebutuhan promosi bisnis.",
                img: "/images/video/tiktok_sajiwa.png"
              })}
              className="group cursor-pointer rounded-2xl bg-[#EAF5FF]/60 hover:bg-white p-4 border border-[#8CC6EE]/30 transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-[#8CC6EE]/40 bg-white mb-3 shadow-inner">
                <Image
                  src="/images/video/tiktok_sajiwa.png"
                  alt="TikTok Video Sajiwa Time"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-contain p-1 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="inline-block px-2 py-0.5 bg-amber-100 text-amber-800 font-bold text-[10px] rounded-full mb-1">
                TIKTOK VIDEO
              </div>
              <h3 className="font-bold text-sm sm:text-base text-[#0755A5]">
                Sajiwa Time – F&B Business Video Editor
              </h3>
              <p className="text-[11px] text-[#1265B3] font-semibold mb-1">Mei 2025 – Juli 2026</p>
              <p className="text-xs text-slate-600 leading-relaxed text-justify">
                Berperan sebagai talent sekaligus mengedit beberapa video promosi produk Sajiwa Time untuk kebutuhan media sosial, dengan menonjolkan produk melalui visual yang menarik dan sesuai dengan kebutuhan promosi bisnis.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================
            SECTION 8: SERTIFIKASI
            ======================================================== */}
        <section
          id="sertifikat"
          className="relative bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-panel border border-[#8CC6EE]/30"
        >
          <div className="flex items-center justify-between gap-3 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-gradient-to-tr from-[#0755A5] to-[#1265B3] text-white shadow-md">
                <Award size={22} />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-[#06275B]">
                  Sertifikasi
                </h2>

              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {certificates
              .filter((cert): cert is NonNullable<typeof cert> => cert != null)
              .map((cert) => (
                <div
                  key={cert.id}
                  onClick={() => setActiveModal({
                    title: cert.title,
                    category: `Penerbit: ${cert.issuer}`,
                    period: cert.date,
                    img: cert.img,
                    desc: `Sertifikat resmi kompetensi ${cert.title} yang diterbitkan oleh ${cert.issuer}.`
                  })}
                  className="group cursor-pointer rounded-2xl bg-[#EAF5FF]/60 hover:bg-white p-3 border border-[#8CC6EE]/30 shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-white border border-[#8CC6EE]/40 mb-2">
                    <Image
                      src={cert.img}
                      alt={cert.title}
                      fill
                      sizes="(max-width: 640px) 150px, 300px"
                      className="object-contain p-1 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-0.5">
                    <h3 className="font-bold text-[11px] sm:text-xs text-[#06275B] line-clamp-2 group-hover:text-[#0755A5] transition-colors">
                      {cert.title}
                    </h3>
                    <div className="flex justify-between items-center text-[10px] text-slate-500">
                      <span className="font-medium text-[#1265B3]">{cert.issuer}</span>
                      <span>{cert.date}</span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* ========================================================
            SECTION: HAK KEKAYAAN INTELEKTUAL (HKI)
            ======================================================== */}
        <section
          id="hki"
          className="relative bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-panel border border-[#8CC6EE]/30"
        >
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-gradient-to-tr from-[#0755A5] to-[#1265B3] text-white shadow-md">
              <ShieldCheck size={22} />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-[#06275B]">
                Hak Kekayaan Intelektual (HKI)
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Karya cipta resmi terdaftar yang berkontribusi dalam riset dan pengembangan teknologi
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                title: "Aplikasi Berbasis Web Presensi Face Recognition Berbasis AI",
                institution: "Universitas Telkom",
                year: "2025",
                role: "Kontributor",
                type: "Hak Cipta",
                desc: "Pengembangan sistem presensi otomatis cerdas berbasis pengenalan wajah (Face Recognition) menggunakan kecerdasan buatan terintegrasi pada platform web.",
              },
              {
                title: "Decision Support System for Online Transportation Fare Comparison menggunakan AHP dan SAW",
                institution: "Universitas Telkom",
                year: "2025",
                role: "Kontributor",
                type: "Hak Cipta",
                desc: "Sistem Pendukung Keputusan (SPK) untuk perbandingan tarif transportasi online memanfaatkan algoritma Multi-Criteria Decision Making (AHP & SAW).",
              },
              {
                title: "Aplikasi Perhitungan Tarif Transportasi dengan Perhitungan Multikriteria",
                institution: "Universitas Multimedia Nusantara",
                year: "2025",
                role: "Kontributor",
                type: "Hak Cipta",
                desc: "Perancangan dan implementasi antarmuka aplikasi kalkulasi biaya transportasi dengan metodologi evaluasi multikriteria yang komprehensif.",
              },
            ].map((hki, idx) => (
              <div
                key={idx}
                className="group p-5 rounded-2xl bg-gradient-to-br from-[#EAF5FF]/80 to-white border border-[#8CC6EE]/40 hover:border-[#1265B3]/60 shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold bg-[#0755A5] text-white shadow-xs">
                      {hki.type}
                    </span>
                    <span className="text-xs font-semibold text-[#1265B3] bg-white px-2.5 py-0.5 rounded-full border border-[#8CC6EE]/40">
                      {hki.year}
                    </span>
                  </div>
                  <h3 className="font-bold text-sm sm:text-base text-[#06275B] group-hover:text-[#0755A5] transition-colors line-clamp-3 mb-2">
                    {hki.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed text-justify">
                    {hki.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#8CC6EE]/30 flex items-center justify-between text-xs">
                  <span className="font-medium text-slate-500">{hki.institution}</span>
                  <span className="font-bold text-[#0755A5] bg-[#EAF5FF] px-2 py-0.5 rounded-md border border-[#8CC6EE]/40">
                    {hki.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================
            SECTION 9: KONTAK & FOOTER
            ======================================================== */}
        <section
          id="kontak"
          className="relative bg-gradient-to-r from-[#06275B] via-[#0755A5] to-[#1265B3] rounded-3xl p-6 sm:p-10 text-white shadow-xl overflow-hidden border border-blue-400/20"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            {/* Foto Profil di Sebelah Kiri */}
            <div className="md:col-span-4 flex justify-center md:justify-start">
              <div className="relative group">
                <div className="absolute -inset-2 rounded-2xl bg-[#8CC6EE]/40 blur-lg group-hover:opacity-100 transition duration-300"></div>
                <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-2xl w-48 h-60 sm:w-52 sm:h-64 bg-white">
                  <Image
                    src="/images/profile/alea_avatar.png"
                    alt="Alea Atapasya Contact"
                    fill
                    sizes="(max-width: 768px) 192px, 208px"
                    className="object-cover object-top hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Informasi Kontak di Sebelah Kanan */}
            <div className="md:col-span-8 space-y-4 text-center md:text-left">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#8CC6EE] font-bold">
                  GET IN TOUCH
                </span>
                <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white mt-1">
                  Hubungi Saya
                </h2>
                <p className="text-xs sm:text-sm text-blue-100 max-w-xl mt-1">
                  Berikut merupakan informasi kontak yang dapat digunakan untuk keperluan komunikasi dan korespondensi profesional.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {/* Telepon */}
                <a
                  href="tel:085211681846"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all group"
                >
                  <div className="p-2 rounded-lg bg-white/20 group-hover:bg-white/30 text-[#8CC6EE]">
                    <Phone size={18} />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] text-blue-200 uppercase font-semibold">Telepon / WhatsApp</div>
                    <div className="text-xs sm:text-sm font-bold text-white">085211681846</div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:aleaatpsya@gmail.com"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all group"
                >
                  <div className="p-2 rounded-lg bg-white/20 group-hover:bg-white/30 text-[#8CC6EE]">
                    <Mail size={18} />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] text-blue-200 uppercase font-semibold">Email</div>
                    <div className="text-xs sm:text-sm font-bold text-white">aleaatpsya@gmail.com</div>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/alea-atapasya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all group"
                >
                  <div className="p-2 rounded-lg bg-white/20 group-hover:bg-white/30 text-[#8CC6EE]">
                    <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] text-blue-200 uppercase font-semibold">LinkedIn</div>
                    <div className="text-xs sm:text-sm font-bold text-white flex items-center gap-1">
                      <span>alea atapasya</span>
                      <ExternalLink size={12} className="opacity-75" />
                    </div>
                  </div>
                </a>

                {/* Lokasi */}
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md">
                  <div className="p-2 rounded-lg bg-white/20 text-[#8CC6EE]">
                    <MapPin size={18} />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] text-blue-200 uppercase font-semibold">Lokasi</div>
                    <div className="text-xs sm:text-sm font-bold text-white">Karawang, Jawa Barat</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* ========================================================
          MODAL PREVIEW UNTUK PROYEK WEB, SOCIAL MEDIA, & SERTIFIKAT
          ======================================================== */}
      {activeModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="relative bg-white rounded-3xl p-5 sm:p-7 max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border-4 border-[#8CC6EE]/60"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModal(null)}
              aria-label="Tutup preview"
              className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-100 hover:bg-red-50 text-slate-700 hover:text-red-600 transition-colors z-20 shadow-sm"
            >
              <X size={22} />
            </button>

            {/* Modal Image Preview */}
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 mb-5 shadow-inner">
              <Image
                src={activeModal.img}
                alt={activeModal.title}
                fill
                sizes="(max-width: 1200px) 95vw, 900px"
                className="object-contain p-2"
                priority
              />
            </div>

            {/* Modal Information */}
            <div className="space-y-2">
              {activeModal.category && (
                <span className="inline-block px-3 py-1 bg-[#EAF5FF] text-[#0755A5] text-xs font-bold rounded-full border border-[#8CC6EE]/40">
                  {activeModal.category}
                </span>
              )}
              <h3 className="font-bold text-xl sm:text-2xl text-[#06275B]">
                {activeModal.title}
              </h3>
              {activeModal.period && (
                <p className="text-xs sm:text-sm text-[#1265B3] font-semibold">
                  Periode: {activeModal.period}
                </p>
              )}
              {activeModal.desc && (
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify pt-1">
                  {activeModal.desc}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

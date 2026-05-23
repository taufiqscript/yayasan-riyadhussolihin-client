"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import {
    FaBars,
    FaFacebook,
    FaHandshake,
    FaInstagram,
    FaMosque,
    FaTimes,
    FaWhatsapp,
} from "react-icons/fa"
import { useEffect, useState } from "react"
import { MdSchool } from "react-icons/md"
import { IoPeople } from "react-icons/io5"
import { RiUserSettingsFill } from "react-icons/ri"
import { IoIosPlay } from "react-icons/io"
import EachUtils from "@/utils/EachUtils"
import { LIST_CONTENT } from "@/constans/listContent"
import { LIST_BERITA } from "@/constans/listBerita"
import { useNavigate } from "react-router-dom"

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
}

const fadeStagger = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
    },
}

const Landing = () => {
    const navigate = useNavigate()

    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)
    const [openContentIndex, setOpenContentIndex] = useState(null)

    const { scrollY } = useScroll()
    const y = useTransform(scrollY, [0, 500], [0, 130])

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24)
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    return (
        <div
            style={{ fontFamily: "Poppins, ui-sans-serif, system-ui" }}
            className="relative min-h-screen text-gray-800 bg-gray-50"
        >
            {/* HEADER */}
            <header
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
                    ? "bg-white/80 backdrop-blur-md shadow-md text-black"
                    : "bg-transparent text-white"
                    }`}
            >
                {/* Top Bar */}
                {!scrolled && (
                    <div className="hidden md:flex items-center justify-between max-w-7xl mx-auto px-6 md:px-10 py-3">
                        <div className="flex items-center gap-3">
                            <a
                                href="#"
                                className="bg-green-500 hover:bg-green-600 p-2 rounded-full transition-all"
                            >
                                <FaInstagram className="text-[18px] text-white" />
                            </a>
                            <a
                                href="#"
                                className="bg-green-500 hover:bg-green-600 p-2 rounded-full transition-all"
                            >
                                <FaFacebook className="text-[18px] text-white" />
                            </a>
                        </div>

                        <button className="bg-white text-green-700 font-bold px-5 py-2 rounded-xl shadow hover:bg-green-600 hover:text-white transition-all">
                            Bayar Zakat
                        </button>
                    </div>
                )}

                {/* Navbar */}
                <nav className="w-full">
                    <div className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-3">
                        <img
                            src="/logo-web.png"
                            alt="Logo"
                            loading="lazy"
                            onClick={() => location.replace("/")}
                            className="h-12 md:h-14 w-auto object-contain cursor-pointer hover:scale-105 transition-transform"
                        />

                        <div className="hidden md:flex gap-10 text-[14px] font-semibold">
                            {[
                                { name: "Home", href: "#home" },
                                { name: "Tentang Kami", href: "#about" },
                                { name: "Layanan", href: "#services" },
                                { name: "Berita", href: "#berita" },
                                { name: "Video", href: "#video" },
                                { name: "Lokasi", href: "#map" },
                            ].map((item, i) => (
                                <a
                                    key={i}
                                    href={item.href}
                                    className="hover:text-green-600 transition-colors"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>

                        <div className="flex items-center gap-3">
                            <a
                                onClick={() => window.location.href = "/donasi"}
                                className="hidden md:inline-block bg-gradient-to-r from-green-600 to-emerald-500 hover:opacity-95 transition-all text-white px-6 py-2 rounded-xl font-bold shadow-lg cursor-pointer"
                            >
                                Donasi Sekarang
                            </a>

                            <button
                                className="md:hidden p-2 rounded-xl bg-white shadow hover:bg-gray-100 transition-all text-black"
                                onClick={() => setMobileOpen((v) => !v)}
                            >
                                {mobileOpen ? <FaTimes /> : <FaBars />}
                            </button>
                        </div>
                    </div>
                </nav>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden transition-all duration-300 ${mobileOpen ? "max-h-[500px]" : "max-h-0 overflow-hidden"
                        } bg-white border-t`}
                >
                    <ul className="flex flex-col gap-2 px-6 py-5 text-base font-semibold text-gray-700">
                        {[
                            { name: "Home", href: "#home" },
                            { name: "Tentang Kami", href: "#about" },
                            { name: "Layanan", href: "#services" },
                            { name: "Berita", href: "#berita" },
                            { name: "Video", href: "#video" },
                            { name: "Lokasi", href: "#map" },
                        ].map((m, i) => (
                            <li key={i} className="border-b last:border-none py-2">
                                <a
                                    href={m.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="block hover:text-green-600 transition-colors"
                                >
                                    {m.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </header>

            {/* HERO */}
            <main id="home" className="pt-20">
                <section className="relative max-w-7xl mx-auto min-h-[92vh] flex items-center overflow-hidden rounded-b-[50px]">
                    {/* Background */}
                    <motion.div style={{ y }} className="absolute inset-0">
                        <img
                            src="/foto 1.jpg"
                            className="w-full h-full object-cover"
                            alt="Hero"
                        />
                    </motion.div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/70" />

                    {/* Floating Shape */}
                    <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-green-500/30 blur-[120px] rounded-full" />
                    <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-emerald-500/20 blur-[120px] rounded-full" />

                    {/* Content */}
                    <motion.div
                        variants={fadeStagger}
                        initial="hidden"
                        animate="visible"
                        className="relative z-10 w-full text-center px-6 md:px-16"
                    >
                        <motion.h1
                            variants={fadeUp}
                            className="text-4xl md:text-6xl font-black text-white leading-tight drop-shadow-lg"
                        >
                            Yayasan{" "}
                            <span className="text-[#4CBB17]">Riyadhussolihin</span>
                        </motion.h1>

                        <motion.p
                            variants={fadeUp}
                            className="mt-6 max-w-3xl mx-auto text-base md:text-lg text-gray-200 leading-relaxed"
                        >
                            Menjadi tempat tumbuhnya generasi yatim dan dhuafa yang beriman,
                            berilmu, serta mandiri. Saat ini yayasan sedang dalam proses
                            pembangunan untuk memberikan fasilitas yang lebih layak.
                        </motion.p>

                        <motion.div
                            variants={fadeUp}
                            className="mt-10 justify-center"
                        >
                            <a
                                href="#services"
                                className="px-7 py-3 rounded-xl border border-white/70 hover:bg-white/20 text-white font-semibold transition-all"
                            >
                                Lihat Program
                            </a>
                        </motion.div>
                    </motion.div>
                </section>

                {/* STATS */}
                <section className="max-w-6xl mx-auto px-6 -mt-14 relative z-20">
                    <div className="mt-10 bg-white rounded-3xl shadow-md border border-gray-100 p-7 text-center">
                        <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto font-medium">
                            Yayasan Riyadhussolihin sedang membangun fasilitas panti asuhan dan
                            ruang pembinaan untuk anak yatim piatu dhuafa dan majelis taklim kaum ibu. InsyaAllah setiap
                            infaq dan sedekah menjadi amal jariyah yang terus mengalir.
                        </p>
                    </div>
                </section>

                {/* ABOUT */}
                <section id="about" className="max-w-7xl mx-auto mt-20 px-6 md:px-10">
                    <div className="bg-gradient-to-r from-green-700 to-emerald-500 rounded-[40px] p-12 shadow-2xl">
                        <h3 className="text-3xl text-white font-black text-center">
                            Tentang Yayasan Riyadhussolihin
                        </h3>

                        <p className="text-center text-white/90 max-w-3xl mx-auto mt-4 leading-relaxed">
                            Yayasan Riyadhussolihin hadir sebagai wadah pembinaan anak yatim,
                            dhuafa, serta masyarakat sekitar dalam pendidikan dan keagamaan.
                        </p>

                        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                            {[
                                {
                                    icon: <MdSchool size={46} />,
                                    title: "Pendidikan",
                                    desc: "Membentuk generasi berilmu dan berakhlak mulia.",
                                },
                                {
                                    icon: <IoPeople size={46} />,
                                    title: "Pemberdayaan",
                                    desc: "Menguatkan keterampilan dan kemandirian anak asuh.",
                                },
                                {
                                    icon: <FaMosque size={46} />,
                                    title: "Keagamaan",
                                    desc: "Meningkatkan iman, ibadah, dan pembinaan islami.",
                                },
                                {
                                    icon: <FaHandshake size={46} />,
                                    title: "Sosial",
                                    desc: "Menumbuhkan kepedulian antar sesama umat.",
                                },
                                {
                                    icon: <RiUserSettingsFill size={46} />,
                                    title: "Interaktif",
                                    desc: "Kolaborasi program bersama masyarakat dan donatur.",
                                },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -8 }}
                                    className="text-center text-white bg-white/10 rounded-3xl p-6 backdrop-blur-md hover:bg-white/20 transition-all shadow-lg"
                                >
                                    <div className="flex justify-center mb-4">{item.icon}</div>
                                    <h4 className="font-bold text-lg">{item.title}</h4>
                                    <p className="text-sm mt-2 text-white/90 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CONTENT + ACCORDION */}
                <section className="max-w-7xl mx-auto px-6 md:px-10 mt-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <h3 className="text-2xl font-black text-gray-800">
                                Visi, Misi & Program Utama
                            </h3>
                            <p className="text-gray-500 mt-2 leading-relaxed">
                                Berikut adalah fokus utama kegiatan Yayasan Riyadhussolihin dalam
                                membina anak yatim dan dhuafa.
                            </p>

                            <ul className="flex flex-col mt-8 gap-2">
                                <EachUtils
                                    of={LIST_CONTENT}
                                    render={(item, index) => (
                                        <div key={index} className="rounded-2xl overflow-hidden">
                                            <button
                                                onClick={() =>
                                                    setOpenContentIndex(
                                                        openContentIndex === index ? null : index
                                                    )
                                                }
                                                className="w-full flex justify-between items-center bg-white border border-gray-200 px-6 py-5 text-green-700 font-bold hover:bg-green-50 transition-all rounded-2xl"
                                            >
                                                {item.title}
                                                <motion.span
                                                    animate={{
                                                        rotate: openContentIndex === index ? 90 : 0,
                                                    }}
                                                    className="text-green-700"
                                                >
                                                    <IoIosPlay />
                                                </motion.span>
                                            </button>

                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{
                                                    height: openContentIndex === index ? "auto" : 0,
                                                    opacity: openContentIndex === index ? 1 : 0,
                                                }}
                                                className="bg-white border border-gray-200 px-6 py-4 text-sm text-gray-600 leading-relaxed overflow-hidden rounded-b-2xl"
                                            >
                                                <ol className="list-decimal pl-5 whitespace-pre-line">
                                                    {item.desc}
                                                </ol>
                                            </motion.div>
                                        </div>
                                    )}
                                />
                            </ul>
                        </div>

                        <div className="bg-white rounded-[40px] shadow-2xl p-10 text-center border border-gray-100 relative overflow-hidden">
                            <div className="absolute -top-24 -right-24 w-60 h-60 bg-green-500/20 blur-[80px] rounded-full" />

                            <img src="/logo-web.png" className="w-28 h-28 mx-auto" />

                            <h4 className="text-2xl font-black mt-6 text-gray-800">
                                Mari Menjadi Bagian Kebaikan
                            </h4>

                            <p className="text-gray-500 mt-4 text-sm leading-relaxed">
                                Setiap bantuan anda adalah harapan untuk masa depan anak-anak
                                yatim. Renovasi ini menjadi langkah besar agar yayasan lebih
                                nyaman dan layak.
                            </p>

                            <button
                                onClick={() => navigate('/donasi')}
                                className="mt-8 block w-full bg-gradient-to-r from-green-600 to-emerald-500 hover:opacity-95 px-4 py-3 rounded-2xl text-white font-black transition-all shadow-xl"
                            >
                                Donasi Renovasi Sekarang
                            </button>
                        </div>
                    </div>
                </section>

                {/* PROGRAM DONASI - VERTICAL */}
                <section
                    id="services"
                    className="pt-28 pb-28 mt-20 bg-gradient-to-br from-emerald-50 via-white to-green-50 relative overflow-hidden"
                >
                    <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-green-400/20 blur-[120px] rounded-full" />
                    <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-emerald-400/20 blur-[120px] rounded-full" />

                    <div className="max-w-4xl mx-auto px-6 md:px-10 relative z-10">

                        {/* HEADER */}
                        <motion.h3
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            className="text-4xl md:text-5xl font-black text-gray-800 text-center"
                        >
                            Program Donasi Renovasi Yayasan
                        </motion.h3>

                        <p className="text-center text-gray-500 mt-6 text-lg leading-relaxed">
                            Mari bersama membangun ruang belajar dan musholla yang lebih layak
                            untuk anak yatim dan dhuafa Yayasan Riyadhussolihin.
                        </p>

                        {/* CARD */}
                        <motion.div
                            whileHover={{ y: -8 }}
                            className="mt-16 bg-white rounded-[40px] shadow-2xl border border-gray-100 overflow-hidden"
                        >

                            {/* IMAGE FULL */}
                            <div className="relative h-[320px] md:h-[420px] overflow-hidden">
                                <img
                                    src="/program-donasi/donasi-perbaikan.jpg"
                                    className="w-full h-full object-cover hover:scale-110 transition duration-700"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                <div className="absolute bottom-8 left-8 text-white">
                                    <p className="text-sm opacity-80">Dana Terkumpul</p>
                                    <h3 className="text-3xl md:text-4xl font-black">
                                        Rp -
                                    </h3>
                                </div>
                            </div>

                            {/* CONTENT */}
                            <div className="p-8 md:p-12">

                                <h3 className="text-2xl md:text-3xl font-black text-gray-800">
                                    Renovasi Gedung & Musholla Yayasan
                                </h3>

                                <p className="text-gray-500 mt-4 leading-relaxed">
                                    Bantuan Anda akan digunakan untuk memperbaiki ruang belajar,
                                    musholla, serta fasilitas anak yatim agar mereka dapat belajar
                                    dengan nyaman, aman, dan penuh semangat setiap hari.
                                </p>

                                {/* STATS */}
                                <div className="grid grid-cols-3 gap-6 mt-10 text-center">
                                    <div>
                                        <p className="text-2xl font-black text-emerald-600">-</p>
                                        <p className="text-sm text-gray-500">Donatur</p>
                                    </div>
                                    <div>
                                        <p className="text-2xl font-black text-emerald-600">-%</p>
                                        <p className="text-sm text-gray-500">Tercapai</p>
                                    </div>
                                    <div>
                                        <p className="text-2xl font-black text-emerald-600">-%</p>
                                        <p className="text-sm text-gray-500">Kurang</p>
                                    </div>
                                </div>

                                {/* PROGRESS */}
                                <div className="mt-10">
                                    <div className="flex justify-between text-sm font-semibold text-gray-700">
                                        <span>Rp -</span>
                                    </div>

                                    <div className="relative w-full h-4 bg-gray-200 rounded-full mt-4 overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "45%" }}
                                            transition={{ duration: 1.2 }}
                                            className="h-full bg-gradient-to-r from-green-500 via-emerald-400 to-green-600 rounded-full"
                                        />
                                    </div>
                                </div>

                                {/* CTA */}
                                <button
                                    onClick={() => navigate("/donasi")}
                                    className="mt-12 w-full py-4 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-500 text-white font-black text-lg shadow-xl hover:scale-[1.02] transition-all"
                                >
                                    💚 Donasi Sekarang
                                </button>

                            </div>
                        </motion.div>

                    </div>
                </section>

                {/* BERITA */}
                <section id="berita" className="pt-20 pb-20 bg-white">
                    <div className="max-w-7xl mx-auto px-6 md:px-10">
                        <motion.h3
                            initial="hidden"
                            whileInView="visible"
                            variants={fadeUp}
                            className="text-3xl font-black text-gray-800 text-center"
                        >
                            Berita Terkini
                        </motion.h3>

                        <p className="text-center text-gray-500 mt-3 max-w-2xl mx-auto">
                            Dokumentasi kegiatan dan program sosial Yayasan Riyadhussolihin.
                        </p>

                        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {LIST_BERITA.map((item, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -10 }}
                                    className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border border-gray-100 flex flex-col"
                                >
                                    <div className="relative w-full h-[200px] overflow-hidden">
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                                        <span className="absolute top-4 right-4 bg-green-600 text-white text-[11px] font-black px-3 py-1 rounded-full shadow">
                                            {item.category}
                                        </span>
                                    </div>

                                    <div className="p-6 flex flex-col flex-1">
                                        <h3 className="font-black text-gray-800 text-[15px] leading-snug uppercase line-clamp-3">
                                            {item.title}
                                        </h3>

                                        <p className="text-xs text-gray-400 mt-3">{item.date}</p>

                                        <div
                                            onClick={() => navigate(`/detail-berita/${item.id}`)}
                                            className="mt-5 text-green-600 font-black text-sm hover:text-green-700 transition-all cursor-pointer"
                                        >
                                            Baca Selengkapnya →
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* MAP */}
                <section id="map" className="pt-20 pb-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-6 md:px-10">
                        <motion.h3
                            initial="hidden"
                            whileInView="visible"
                            variants={fadeUp}
                            className="text-3xl font-black text-gray-800 text-center"
                        >
                            Lokasi Yayasan
                        </motion.h3>

                        <p className="text-center text-gray-500 mt-3 max-w-2xl mx-auto">
                            Silakan kunjungi Yayasan Riyadhussolihin atau hubungi kami untuk informasi lebih lanjut.
                        </p>

                        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="rounded-[40px] overflow-hidden shadow-2xl border border-gray-200"
                            >
                                <iframe
                                    className="w-full h-[340px] md:h-[460px]"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2058915340913!2d106.88906917499862!3d-6.236570261072173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3003aaa0ac1%3A0x2231579e4108f578!2sYayasan%20Riyadhussolihin!5e0!3m2!1sid!2sid!4v1770447600060!5m2!1sid!2sid"
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </motion.div>

                            <div className="bg-white rounded-[40px] shadow-xl border border-gray-100 p-10">
                                <h4 className="text-2xl font-black text-gray-800">
                                    Yayasan Riyadhussolihin
                                </h4>

                                <div className="mt-5 space-y-3 text-gray-600 text-sm leading-relaxed">
                                    <p>📍 Jl. Cipinang Bali II No.41A, Jakarta Timur</p>
                                    <p>🕒 Jam Operasional: 08:00 - 17:00 WIB</p>
                                    <p>📞 0819 0505 6908</p>
                                    <p>✉️ yayasanriyadhussolihin@gmail.com</p>
                                </div>

                                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                                    <a
                                        href="https://maps.app.goo.gl/eiVukssrrrJ26sPv6"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="bg-gradient-to-r from-green-600 to-emerald-500 hover:opacity-95 transition-all px-6 py-3 rounded-2xl text-white font-black shadow-lg text-center"
                                    >
                                        Buka di Google Maps
                                    </a>

                                    <a
                                        href="https://wa.me/6281905056908"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="border-2 border-green-600 text-green-700 hover:bg-green-600 hover:text-white transition-all px-6 py-3 rounded-2xl font-black text-center"
                                    >
                                        Chat WhatsApp
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* VIDEO */}
                <section id="video" className="pt-20 pb-20 bg-white">
                    <div className="max-w-7xl mx-auto px-6 md:px-10">
                        <motion.h3
                            initial="hidden"
                            whileInView="visible"
                            variants={fadeUp}
                            className="text-3xl font-black text-gray-800 text-center"
                        >
                            Video Proses Pembangunan Yayasan
                        </motion.h3>

                        <p className="text-center text-gray-500 mt-3 max-w-2xl mx-auto">
                            Dokumentasi renovasi dan pembangunan Yayasan Riyadhussolihin untuk menciptakan fasilitas yang lebih layak.
                        </p>

                        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="rounded-[40px] overflow-hidden shadow-2xl border border-gray-100"
                            >
                                <iframe
                                    className="w-full h-[260px] md:h-[360px]"
                                    src="https://www.youtube.com/embed/ZOrN2GW2vZY"
                                    title="Video Yayasan"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </motion.div>

                            <div className="bg-gradient-to-br from-green-50 to-white rounded-[40px] p-10 border border-green-100 shadow-xl">
                                <h4 className="text-2xl font-black text-gray-800">
                                    Renovasi & Pembangunan Yayasan Riyadhussolihin
                                </h4>

                                <p className="text-gray-600 mt-4 leading-relaxed">
                                    Saat ini Yayasan Riyadhussolihin sedang dalam proses renovasi dan pembangunan
                                    untuk menyediakan tempat yang lebih nyaman, aman, dan layak bagi anak-anak yatim dan dhuafa.
                                    Kami mengajak Bapak/Ibu untuk ikut berpartisipasi dalam amal jariyah ini.
                                </p>

                                <div className="mt-8 flex gap-4 flex-col sm:flex-row">
                                    <a
                                        href="https://wa.me/6281905056908"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="bg-gradient-to-r from-green-600 to-emerald-500 hover:opacity-95 transition-all px-6 py-3 rounded-2xl text-white font-black shadow-lg text-center"
                                    >
                                        Donasi Pembangunan
                                    </a>

                                    <a
                                        href="https://youtube.com/@riyadhussolihincipbali8715"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="px-6 py-3 rounded-2xl border-2 border-green-600 text-green-700 font-black hover:bg-green-600 hover:text-white transition-all text-center"
                                    >
                                        Lihat Channel Kami
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* FOOTER */}
            <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300 pt-16 pb-10">
                <div className="max-w-7xl mx-auto px-6 md:px-10">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                        <div>
                            <img src="/logo-web.png" alt="Logo" className="w-20 mb-4" />
                            <p className="text-sm leading-relaxed text-gray-400">
                                Yayasan Riyadhussolihin berkomitmen membantu anak yatim, dhuafa,
                                serta masyarakat melalui program pendidikan, sosial, dan keagamaan.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-white font-black text-lg mb-4">Menu Cepat</h4>
                            <ul className="flex flex-col gap-2 text-sm">
                                <li><a href="#home" className="hover:text-green-400 transition-all">Home</a></li>
                                <li><a href="#about" className="hover:text-green-400 transition-all">Tentang Kami</a></li>
                                <li><a href="#services" className="hover:text-green-400 transition-all">Program Donasi</a></li>
                                <li><a href="#berita" className="hover:text-green-400 transition-all">Berita</a></li>
                                <li><a href="#video" className="hover:text-green-400 transition-all">Video</a></li>
                                <li><a href="#map" className="hover:text-green-400 transition-all">Lokasi</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-black text-lg mb-4">Kontak</h4>
                            <div className="text-sm text-gray-400 flex flex-col gap-3 leading-relaxed">
                                <p>📍 Cipinang Bali II No.41A, Jakarta Timur</p>
                                <p>🕒 08:00 - 17:00 WIB</p>
                                <p>📞 0819 0505 6908</p>
                                <p>✉️ yayasanriyadhussolihin@gmail.com</p>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-white font-black text-lg mb-4">Ikuti Kami</h4>

                            <div className="flex gap-4">
                                <a
                                    href="#"
                                    className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-600 transition-all"
                                >
                                    <FaInstagram className="text-white text-lg" />
                                </a>

                                <a
                                    href="#"
                                    className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-600 transition-all"
                                >
                                    <FaFacebook className="text-white text-lg" />
                                </a>

                                <a
                                    href="https://wa.me/6281905056908"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-600 transition-all"
                                >
                                    <FaWhatsapp className="text-white text-lg" />
                                </a>
                            </div>

                            <a
                                href="https://wa.me/6281905056908"
                                target="_blank"
                                rel="noreferrer"
                                className="mt-6 block w-full bg-gradient-to-r from-green-600 to-emerald-500 hover:opacity-95 text-white font-black py-3 rounded-2xl shadow-xl transition-all text-center"
                            >
                                Donasi Sekarang
                            </a>
                        </div>
                    </div>

                    <div className="border-t border-white/10 mt-12 pt-6 text-center text-sm text-gray-500">
                        © {new Date().getFullYear()} Yayasan Riyadhussolihin. All rights reserved.
                    </div>
                </div>
            </footer>

            {/* FLOATING WHATSAPP */}
            <a
                href="https://wa.me/6281905056908"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50"
            >
                <motion.div
                    whileHover={{ scale: 1.12 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-tr from-green-600 to-emerald-400 shadow-2xl flex items-center justify-center text-white text-2xl"
                >
                    <FaWhatsapp />
                </motion.div>
            </a>
        </div>
    )
}

export default Landing

import { LIST_BERITA } from "@/constans/listBerita"
import EachUtils from "@/utils/EachUtils"
import React, { useEffect, useState } from "react"
import { BsCalendar2Date } from "react-icons/bs"
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa"
import { HiArrowNarrowLeft } from "react-icons/hi"
import { MdOutlineAccountCircle } from "react-icons/md"
import { useParams, useNavigate } from "react-router-dom"

const DetailBerita = () => {
    const { id } = useParams()

    const navigate = useNavigate()

    const [berita, setBerita] = useState(null)

    useEffect(() => {
        if (LIST_BERITA && id) {
            const found = LIST_BERITA.find((item) => item.id == id)
            setBerita(found)
        }
    }, [id])

    if (!berita) {
        return (
            <div className="min-h-screen flex justify-center items-center text-gray-500">
                Loading...
            </div>
        )
    }

    return (
        <div className="relative min-h-screen w-full bg-gray-50">

            {/* HERO IMAGE */}
            <section className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden">
                <img
                    src={berita.img}
                    alt={berita.title}
                    className={`w-full h-full object-cover ${id == 5 || id == 1 ? 'object-bottom' : id == 7 ? 'object-center' : 'object-top'}`}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-gray-50" />

                <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-6 md:px-10 pb-10">
                    <p className="inline-block bg-green-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                        {berita.category || "BERITA"}
                    </p>

                    <h1 className="mt-4 text-2xl md:text-5xl font-black text-white leading-tight drop-shadow-lg">
                        {berita.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-4 mt-5 text-gray-200 text-sm md:text-base pb-2">
                        <p className="flex items-center gap-2 text-black">
                            <MdOutlineAccountCircle className="text-lg" />
                            Yayasan Riyadhussolihin
                        </p>

                        <span className="text-black hidden sm:block">|</span>

                        <p className="flex items-center gap-2 text-black">
                            <BsCalendar2Date className="text-lg" />
                            {berita.date}
                        </p>
                    </div>
                </div>
            </section>

            {/* MAIN CONTENT */}
            <main className="max-w-7xl mx-auto px-6 md:px-10 pb-20 -mt-10 relative z-10">

                {/* BACK BUTTON */}
                <div
                    onClick={() => navigate('/')}
                    className="inline-flex items-center gap-2 bg-white px-5 py-3 rounded-xl shadow hover:shadow-md transition-all text-gray-700 font-semibold hover:text-green-600 cursor-pointer"
                >
                    <HiArrowNarrowLeft className="text-xl" />
                    Kembali ke beranda
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">

                    {/* CONTENT */}
                    <article className="lg:col-span-2 bg-white rounded-3xl shadow-lg border border-gray-100 p-7 md:p-10">

                        {/* EXTRA IMAGE / VIDEO */}
                        {berita.id == 3 ? (
                            <div className="space-y-6">
                                <img
                                    src={berita.img}
                                    className="w-full max-h-[80vh] object-cover rounded-2xl shadow"
                                />
                                <img
                                    src="/berita-terkini/santunan-anak-yatim2.jpeg"
                                    className="w-full max-h-[80vh] object-cover rounded-2xl shadow"
                                />
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    controls
                                    className="w-full rounded-2xl shadow-lg max-h-[80vh]"
                                >
                                    <source
                                        src="/berita-terkini/video/santunan-anak-yatim.mp4" />
                                </video>
                            </div>
                        ) : berita.id == 5 ? (
                            <div className="space-y-6">
                                    <img
                                    src={berita.img}
                                    className="w-full max-h-[80vh] object-cover rounded-2xl shadow"
                                    />
                                    <img
                                        src="/berita-terkini/pengajian-rutin-3.jpeg"
                                        className="w-full max-h-[80vh] object-cover rounded-2xl shadow"
                                    />
                                    <img
                                        src="/berita-terkini/pengajian-rutin.jpg"
                                        className="w-full max-h-[80vh] object-cover rounded-2xl shadow"
                                    />
                                    <video
                                        autoPlay
                                        loop
                                        muted
                                        controls
                                        className="w-full rounded-2xl shadow-lg max-h-[80vh]"
                                    >
                                        <source
                                            src="/berita-terkini/video/pengajian-kaum-ibu.mp4"
                                        />
                                    </video>
                            </div>
                        ) : (
                            <img
                                src={berita.img}
                                className="w-full max-h-[80vh] object-cover rounded-2xl shadow"
                            />
                        )}

                        {/* DESCRIPTION */}
                        <div className="mt-8 text-gray-700 leading-relaxed text-[15px] md:text-[16px] whitespace-pre-line">
                            {berita.desc?.replace(/\\n/g, "\n")}
                        </div>

                        {/* SHARE BUTTONS */}
                        <div className="mt-10 pt-6 border-t border-gray-100">
                            <h4 className="font-bold text-gray-800 text-lg">
                                Bagikan Berita Ini
                            </h4>

                            <div className="flex gap-4 mt-4 flex-wrap">
                                <a
                                    href={`https://wa.me/?text=${encodeURIComponent(
                                        berita.title + " - " + window.location.href
                                    )}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 bg-green-600 hover:bg-green-700 transition-all text-white px-5 py-3 rounded-xl font-bold shadow-md"
                                >
                                    <FaWhatsapp />
                                    WhatsApp
                                </a>

                                <a
                                    href="https://facebook.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition-all text-white px-5 py-3 rounded-xl font-bold shadow-md"
                                >
                                    <FaFacebook />
                                    Facebook
                                </a>
                            </div>
                        </div>
                    </article>

                    {/* SIDEBAR */}
                    <aside className="space-y-8">

                        {/* DAFTAR ISI */}
                        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6">
                            <h3 className="font-black text-xl text-gray-800 mb-4">
                                Daftar Berita
                            </h3>

                            <div className="space-y-3 text-sm text-gray-600">
                                <EachUtils
                                    of={LIST_BERITA}
                                    render={(item, index) => (
                                        <a
                                            key={index}
                                            onClick={() => navigate(`/detail-berita/${item.id}`)}
                                            className={`block p-3 rounded-xl transition-all border cursor-pointer ${item.id == berita.id
                                                ? "bg-green-50 border-green-300 text-green-700 font-bold"
                                                : "hover:bg-gray-50 border-gray-100"
                                                }`}
                                        >
                                            {index + 1}. {item.title}
                                        </a>
                                    )}
                                />
                            </div>
                        </div>

                        {/* DONASI CARD */}
                        <div className="bg-gradient-to-br from-green-600 to-emerald-500 rounded-3xl shadow-xl p-7 text-white sticky">
                            <h3 className="text-xl font-black">
                                Mari Dukung Pembangunan Yayasan
                            </h3>
                            <p className="mt-3 text-white/90 text-sm leading-relaxed">
                                Bantuan Anda sangat berarti untuk renovasi, pendidikan anak yatim,
                                dan kegiatan sosial Yayasan Riyadhussolihin.
                            </p>

                            <a
                                href="https://wa.me/6281905056908"
                                target="_blank"
                                rel="noreferrer"
                                className="mt-6 block text-center bg-white text-green-700 font-black py-3 rounded-xl hover:bg-gray-100 transition-all shadow-lg"
                            >
                                Donasi Sekarang
                            </a>
                        </div>

                        {/* SOSMED */}
                        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6">
                            <h3 className="font-black text-xl text-gray-800 mb-4">
                                Ikuti Kami
                            </h3>

                            <div className="flex gap-4">
                                <a
                                    href="#"
                                    className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-green-600 hover:text-white transition-all"
                                >
                                    <FaInstagram className="text-xl" />
                                </a>

                                <a
                                    href="#"
                                    className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-green-600 hover:text-white transition-all"
                                >
                                    <FaFacebook className="text-xl" />
                                </a>

                                <a
                                    href="https://wa.me/6281905056908"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-green-600 hover:text-white transition-all"
                                >
                                    <FaWhatsapp className="text-xl" />
                                </a>
                            </div>
                        </div>
                    </aside>
                </div>
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
        </div>
    )
}

export default DetailBerita

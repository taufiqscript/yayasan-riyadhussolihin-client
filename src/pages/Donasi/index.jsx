import Modal from '@/components/Modal'
import { dataAtom } from '@/jotai/atoms'
import CarouselLayout from '@/layouts/CarouselLayout'
import EachUtils from '@/utils/EachUtils'
import { getMessage } from '@/utils/getMessage'
import { getTotalByPaymentType } from '@/utils/getTotalByPaymentType'
import { useAtom } from 'jotai'
import React, { useEffect, useState } from 'react'
import { FaCopy, FaDownload, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'

const Donasi = () => {
    const navigate = useNavigate()

    const [select, setSelect] = useState("keterangan")
    const [openPayment, setOpenPayment] = useState(false)
    const [nominal, setNominal] = useState(0)
    const [totalDonation, setTotalDonation] = useState([])
    const [message, setMessage] = useState([])

    const [nama, setNama] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [pesan, setPesan] = useState('')

    const [showQRIS, setShowQRIS] = useState(false);
    const [copied, setCopied] = useState(false);

    const [data, setData] = useAtom(dataAtom)

    const formatCurrency = (num) => {
        if (num) {
            let formatted = Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
                minimumFractionDigits: 0
            }).format(num)

            return formatted
        }
    }

    const fetchMyMessage = async () => {
        try {
            const result = await getMessage()

            setMessage(result)
        } catch (error) {
            console.log(error)
        }
    }

    const rekening = "7776644228"

    const handleCopyRekening = async () => {
        try {
            await navigator.clipboard.writeText(rekening);

            setCopied(true);

            setTimeout(() => {
                setCopied(false);
            }, 2000);

        } catch (err) {
            console.log(err);
        }
    };

    const downloadQRIS = () => {
        const link = document.createElement("a");

        link.href = "/program-donasi/qris.jpg";
        link.download = "qris-yayasan-riyadhussolihin.jpg";

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);
    };

    useEffect(() => {
        if (select === "donatur") {
            fetchMyMessage()
        }
    }, [select])

    useEffect(() => {
        getTotalByPaymentType().then(result => setTotalDonation(result))
    }, [])


    return (

        <div className="relative min-h-screen w-full bg-gray-50">

            {/* HERO SECTION */}
            <section className="relative bg-gradient-to-br from-green-700 via-emerald-600 to-green-500 text-white">
                <div className="absolute inset-0 bg-black/20"></div>

                <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-16">
                    <div
                        onClick={() => {
                            setData(null)
                            navigate('/')
                        }}
                        className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-5 py-3 rounded-xl shadow hover:bg-white/25 transition-all cursor-pointer font-semibold"
                    >
                        <HiArrowNarrowLeft className="text-xl" />
                        Kembali ke beranda
                    </div>

                    <div className="mt-10 max-w-3xl">
                        <h1 className="text-3xl md:text-5xl font-black leading-tight">
                            Mari Dukung Renovasi & Pembangunan Yayasan Riyadhussolihin
                        </h1>

                        <p className="mt-5 text-white/90 text-base md:text-lg leading-relaxed">
                            Donasi Anda akan digunakan untuk pembangunan fasilitas yayasan, ruang belajar,
                            perbaikan sarana ibadah, dan kebutuhan anak-anak yatim serta dhuafa.
                        </p>
                    </div>
                </div>
            </section>

            {/* MAIN CONTENT */}
            <main className="max-w-7xl mx-auto px-6 md:px-10 pb-20 relative z-10 -mt-10">

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                    {/* CONTENT */}
                    <article className="lg:col-span-2 bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">

                        {/* IMAGE */}
                        <div className="relative">
                            <img
                                src="/program-donasi/donasi-perbaikan.jpg"
                                className="w-full h-[320px] md:h-[430px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                            <div className="absolute bottom-0 left-0 p-6">
                                <h2 className="text-white text-2xl md:text-4xl font-black drop-shadow-lg">
                                    Program Donasi Renovasi Yayasan
                                </h2>
                                <p className="text-white/80 mt-2 text-sm md:text-base">
                                    Mari bersama membangun ruang belajar dan musholla yang lebih layak
                                    untuk anak yatim dan dhuafa Yayasan Riyadhussolihin.
                                </p>
                            </div>
                        </div>

                        {/* TAB MENU */}
                        <div className="grid grid-cols-3 border-b border-gray-200">
                            <button
                                onClick={() => setSelect("keterangan")}
                                className={`py-4 font-bold transition-all ${select === "keterangan"
                                    ? "bg-green-600 text-white"
                                    : "bg-white text-gray-700 hover:bg-gray-100"
                                    }`}
                            >
                                Keterangan
                            </button>

                            <button
                                onClick={() => setSelect("kabar")}
                                className={`py-4 font-bold transition-all ${select === "kabar"
                                    ? "bg-green-600 text-white"
                                    : "bg-white text-gray-700 hover:bg-gray-100"
                                    }`}
                            >
                                Kabar Terbaru
                            </button>

                            <button
                                onClick={() => setSelect("donatur")}
                                className={`py-4 font-bold transition-all ${select === "donatur"
                                    ? "bg-green-600 text-white"
                                    : "bg-white text-gray-700 hover:bg-gray-100"
                                    }`}
                            >
                                Donatur
                            </button>
                        </div>

                        {/* TAB CONTENT */}
                        <div className="p-7 md:p-10">

                            {/* KETERANGAN */}
                            {select === "keterangan" && (
                                <div>
                                    <h3 className="text-2xl font-black text-gray-800">
                                        Tentang Program Donasi Ini
                                    </h3>

                                    <p className="mt-4 text-gray-600 leading-relaxed text-[15px] md:text-base">
                                        Yayasan Riyadhussolihin saat ini sedang dalam tahap renovasi dan pembangunan fasilitas.
                                        Tujuannya agar anak-anak yatim dan dhuafa memiliki tempat yang lebih nyaman untuk belajar,
                                        mengaji, serta mendapatkan pembinaan agama dan pendidikan.
                                    </p>

                                    <div className="mt-8 bg-green-50 border border-green-100 rounded-2xl p-6">
                                        <h4 className="font-black text-lg text-gray-800">
                                            Kebutuhan Renovasi / Pembangunan
                                        </h4>

                                        <ul className="mt-4 space-y-2 text-gray-700 text-sm md:text-base">
                                            <li>✅ Renovasi ruang belajar & aula kegiatan</li>
                                            <li>✅ Perbaikan fasilitas toilet & sanitasi</li>
                                            <li>✅ Perbaikan atap, plafon, dan cat bangunan</li>
                                            <li>✅ Pengadaan meja belajar, karpet, dan perlengkapan ibadah</li>
                                            <li>✅ Pengadaan Al-Qur’an & buku pendidikan</li>
                                            <li>✅ Bantuan kebutuhan anak yatim dan dhuafa</li>
                                        </ul>
                                    </div>

                                    <div className="mt-8 bg-gray-50 border border-gray-200 rounded-2xl p-6">
                                        <h4 className="font-black text-lg text-gray-800">
                                            Mengapa Donasi Anda Sangat Penting?
                                        </h4>

                                        <p className="mt-3 text-gray-600 leading-relaxed text-sm md:text-base">
                                            Karena dengan donasi ini, Yayasan dapat memberikan lingkungan yang lebih layak,
                                            aman, dan nyaman untuk kegiatan pendidikan serta pembinaan anak-anak yatim.
                                            Setiap rupiah yang Anda berikan menjadi amal jariyah yang terus mengalir.
                                        </p>
                                    </div>
                                </div>
                            )}

                            {/* KABAR TERBARU */}
                            {select === "kabar" && (
                                <div>
                                    <h3 className="text-2xl font-black text-gray-800">
                                        Kabar Terbaru Pembangunan
                                    </h3>

                                    <p className="mt-4 text-gray-600 leading-relaxed text-sm md:text-base">
                                        Berikut adalah update terbaru dari proses renovasi dan pembangunan yayasan.
                                    </p>

                                    {/* FOTO UPDATE */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">

                                        <div className="overflow-hidden rounded-3xl shadow-lg border border-gray-100">
                                            <img
                                                src="/program-donasi/kabar-1.jpeg"
                                                className="w-full h-[260px] object-cover hover:scale-105 transition duration-500"
                                            />

                                            <div className="p-5">
                                                <h4 className="font-black text-gray-800">
                                                    🏗️ Progres Renovasi Atap Yayasan
                                                </h4>

                                                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                                                    Pemasangan atap baru untuk bangunan yayasan telah selesai dilakukan
                                                    agar kegiatan belajar lebih aman dan nyaman.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="overflow-hidden rounded-3xl shadow-lg border border-gray-100">
                                            <img
                                                src="/program-donasi/kabar-2.jpeg"
                                                className="w-full h-[260px] object-cover hover:scale-105 transition duration-500"
                                            />

                                            <div className="p-5">
                                                <h4 className="font-black text-gray-800">
                                                    🕌 Area Musholla & Rooftop
                                                </h4>

                                                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                                                    Area musholla dan bagian rooftop sedang dalam tahap perapihan
                                                    untuk menunjang kegiatan ibadah anak-anak yatim.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="overflow-hidden rounded-3xl shadow-lg border border-gray-100 md:col-span-2">
                                            <img
                                                src="/program-donasi/kabar-3.jpeg"
                                                className="w-full h-[340px] object-cover hover:scale-105 transition duration-500"
                                            />

                                            <div className="p-5">
                                                <h4 className="font-black text-gray-800">
                                                    ✨ Tampilan Terbaru Bangunan Yayasan
                                                </h4>

                                                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                                                    Alhamdulillah proses pembangunan terus berjalan dengan baik.
                                                    Terima kasih kepada seluruh donatur yang telah membantu renovasi yayasan.
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            )}

                            {/* DONATUR */}
                            {select === "donatur" && (
                                <div>
                                    {/* HEADER */}
                                    <div className="mb-8">
                                        <h3 className="text-2xl md:text-3xl font-black text-gray-800">
                                            Daftar Donatur ❤️
                                        </h3>

                                        <p className="mt-3 text-gray-600 leading-relaxed text-sm md:text-base">
                                            Terima kasih kepada seluruh donatur yang telah membantu
                                            pembangunan Yayasan Riyadhussolihin.
                                            Semoga menjadi amal jariyah yang terus mengalir.
                                        </p>
                                    </div>

                                    {/* LIST DONATUR */}
                                    <div className="space-y-5">

                                        <EachUtils
                                            of={message}
                                            render={(item, index) => (

                                                <div
                                                    key={index}
                                                    className="group bg-white border border-gray-100 rounded-3xl p-5 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                                                >

                                                    {/* TOP */}
                                                    <div className="flex items-start justify-between gap-4">

                                                        {/* LEFT */}
                                                        <div className="flex items-center gap-4">

                                                            {/* AVATAR */}
                                                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-emerald-400 flex items-center justify-center text-white font-black text-xl shadow-lg">
                                                                {item?.name?.charAt(0)?.toUpperCase() || "H"}
                                                            </div>

                                                            {/* INFO */}
                                                            <div>
                                                                <h4 className="font-black text-gray-800 text-lg">
                                                                    {item.name || "Hamba Allah"}
                                                                </h4>

                                                                <p className="text-sm text-gray-400">
                                                                    Donatur Baik
                                                                </p>
                                                            </div>
                                                        </div>

                                                        {/* BADGE */}
                                                        <div className="bg-green-50 text-green-700 border border-green-100 px-3 py-1 rounded-full text-xs font-bold">
                                                            💚 Berdonasi
                                                        </div>

                                                    </div>

                                                    {/* PESAN */}
                                                    {item.pesan && (
                                                        <div className="mt-5 bg-gray-50 border border-gray-100 rounded-2xl p-4">
                                                            <p className="text-gray-600 italic leading-relaxed text-sm md:text-base">
                                                                "
                                                                {item.pesan}
                                                                "
                                                            </p>
                                                        </div>
                                                    )}

                                                </div>
                                            )}
                                        />

                                    </div>
                                </div>
                            )}

                        </div>
                    </article>

                    {/* SIDEBAR */}
                    <aside className="space-y-8">

                        {/* TOTAL DONASI */}
                        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-7">

                            <div className="flex items-center justify-between">

                                <div>
                                    <p className="text-sm text-gray-500 font-medium">
                                        Dana Terkumpul
                                    </p>

                                    {totalDonation[0] ? (
                                        <h3 className="text-2xl md:text-3xl font-black text-green-700 mt-1">
                                            {formatCurrency(totalDonation[0]?.totalAmount)}
                                        </h3>
                                    ) : (
                                        <span className="loading loading-dots loading-md text-green-600" />
                                    )}
                                </div>

                                <div className="text-right">
                                    <p className="text-sm text-gray-500 font-medium">
                                        Total Donatur
                                    </p>

                                    {totalDonation[0] ? (
                                        <h3 className="text-2xl font-black text-gray-800 mt-1">
                                            {totalDonation[0]?.totalTransaksi}
                                        </h3>
                                    ) : (
                                        <span className="loading loading-dots loading-md text-green-600" />
                                    )}
                                </div>

                            </div>

                            <button
                                onClick={() => setOpenPayment(true)}
                                className="mt-7 bg-gradient-to-r from-green-600 to-emerald-500 hover:scale-[1.02] transition-all duration-300 py-4 w-full text-white font-black rounded-2xl shadow-lg"
                            >
                                💚 Donasi Sekarang
                            </button>

                        </div>

                        {/* QRIS CARD */}
                        <div className="relative overflow-hidden bg-white dark:bg-gray-900 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 p-6 transition-all duration-500">

                            {/* BADGE */}
                            <div className="absolute top-4 right-4 bg-gradient-to-r from-green-600 to-emerald-500 text-white text-xs px-4 py-1 rounded-full font-bold shadow animate-pulse">
                                QRIS
                            </div>

                            {/* HEADER */}
                            <div className="text-center">

                                <h3 className="text-2xl font-black text-gray-800 dark:text-white">
                                    Scan & Donasi
                                </h3>

                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">
                                    Mendukung pembangunan yayasan menjadi lebih mudah
                                    melalui QRIS semua pembayaran.
                                </p>

                            </div>

                            {/* QR IMAGE */}
                            <div className="mt-6 flex justify-center">

                                <div
                                    onClick={() => setShowQRIS(true)}
                                    className="
                group
                cursor-pointer
                relative
                bg-gradient-to-br
                from-gray-50
                to-gray-100
                dark:from-gray-800
                dark:to-gray-900
                border
                border-gray-200
                dark:border-gray-700
                rounded-[2rem]
                p-4
                shadow-inner
                hover:scale-[1.05]
                hover:-translate-y-1
                transition-all
                duration-500
            "
                                >

                                    {/* Glow Hover */}
                                    <div className="absolute inset-0 rounded-[2rem] bg-green-500/0 group-hover:bg-green-500/10 blur-2xl transition-all duration-500" />

                                    <img
                                        src="/program-donasi/qris.jpg"
                                        alt="QRIS"
                                        className="relative z-10 w-full max-w-[260px] rounded-2xl object-cover group-hover:rotate-1 transition-all duration-500"
                                    />

                                </div>

                            </div>

                            {/* ACTION BUTTON */}
                            <div className="mt-5 grid grid-cols-2 gap-3">

                                <button
                                    onClick={downloadQRIS}
                                    className="flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-800 hover:bg-green-600 hover:text-white transition-all duration-300 py-3 rounded-2xl font-bold"
                                >
                                    <FaDownload />
                                    Download
                                </button>

                                <button
                                    onClick={() => setShowQRIS(true)}
                                    className="flex items-center justify-center gap-2 bg-green-600 text-white hover:scale-[1.03] transition-all duration-300 py-3 rounded-2xl font-bold"
                                >
                                    Fullscreen
                                </button>

                            </div>

                            {/* INFO */}
                            <div className="mt-6 space-y-3">

                                <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-800 rounded-2xl px-4 py-3">
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Penerima
                                    </p>

                                    <p className="font-black text-gray-800 dark:text-white text-sm text-right">
                                        Yayasan Riyadhussolihin
                                    </p>
                                </div>

                                <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-800 rounded-2xl px-4 py-3">
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Metode
                                    </p>

                                    <p className="font-bold text-green-700 text-sm">
                                        QRIS All Payment
                                    </p>
                                </div>

                            </div>

                            {/* CTA */}
                            <a
                                href="https://wa.me/6281905056908"
                                target="_blank"
                                rel="noreferrer"
                                className="mt-6 block text-center bg-gradient-to-r from-green-600 to-emerald-500 hover:scale-[1.02] transition-all duration-300 py-4 text-white font-black rounded-2xl shadow-lg"
                            >
                                Konfirmasi Donasi
                            </a>

                        </div>

                        {/* REKENING */}
                        <div className="mt-5">

                            <p className="text-sm">
                                Nomor Rekening
                            </p>

                            <div className="flex items-center justify-between gap-3 mt-2">

                                <h4 className="font-black text-2xl tracking-wide">
                                    {rekening}
                                </h4>

                                <button
                                    onClick={handleCopyRekening}
                                    className="
                flex items-center gap-2
                bg-white text-green-700
                hover:scale-105
                transition-all duration-300
                px-4 py-2 rounded-xl
                font-bold text-sm
            "
                                >
                                    <FaCopy />

                                    {copied ? "Copied!" : "Copy"}
                                </button>

                            </div>

                        </div>

                        {/* SOSMED */}
                        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6">

                            <h3 className="font-black text-xl text-gray-800 mb-5">
                                Ikuti Kami
                            </h3>

                            <div className="flex gap-4">

                                <a
                                    href="#"
                                    className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#C13584] hover:text-white transition-all"
                                >
                                    <FaInstagram className="text-xl" />
                                </a>

                                <a
                                    href="#"
                                    className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"
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

            {
                showQRIS && (
                    <div
                        onClick={() => setShowQRIS(false)}
                        className="
                fixed inset-0 z-[999]
                bg-black/90
                backdrop-blur-md
                flex items-center justify-center
                p-5
                animate-fadeIn
            "
                    >

                        <div
                            className="relative"
                            onClick={(e) => e.stopPropagation()}
                        >

                            <img
                                src="/program-donasi/qris.jpg"
                                alt="QRIS"
                                className="
                        max-w-full
                        md:max-w-[500px]
                        rounded-3xl
                        shadow-2xl
                        animate-scaleIn
                    "
                            />

                            <button
                                onClick={() => setShowQRIS(false)}
                                className="
                        absolute sm:top-6 -top-4 sm:-right-2.5 -right-4
                        w-12 h-12
                        rounded-full
                        bg-white hover:bg-gray-50 text-black
                        font-black
                        shadow-lg 
                    "
                            >
                                ✕
                            </button>

                        </div>

                    </div>
                )
            }

            <Modal
                data={data}
                nominal={nominal}
                nama={nama}
                setNama={setNama}
                phone={phone}
                setPhone={setPhone}
                email={email}
                setEmail={setEmail}
                pesan={pesan}
                setPesan={setPesan}
                openPayment={openPayment}
                setOpenPayment={setOpenPayment}
                setNominal={setNominal}
                setTotalDonation={setTotalDonation}
            />

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
                                    className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C13584] transition-all"
                                >
                                    <FaInstagram className="text-white text-lg" />
                                </a>

                                <a
                                    href="#"
                                    className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 transition-all"
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

                            <button
                                onClick={() => location.replace('/donasi')}
                                target="_blank"
                                rel="noreferrer"
                                className="mt-6 block w-full bg-gradient-to-r from-green-600 to-emerald-500 hover:opacity-95 text-white font-black py-3 rounded-2xl shadow-xl transition-all text-center"
                            >
                                Donasi Sekarang
                            </button>
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

export default Donasi

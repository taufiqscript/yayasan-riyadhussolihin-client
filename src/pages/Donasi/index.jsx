import Modal from '@/components/Modal'
import { dataAtom } from '@/jotai/atoms'
import { getTotalByPaymentType } from '@/utils/getTotalByPaymentType'
import { useAtom } from 'jotai'
import React, { useEffect, useState } from 'react'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'

const Donasi = () => {
    const navigate = useNavigate()

    const [select, setSelect] = useState("keterangan")
    const [openPayment, setOpenPayment] = useState(false)
    const [nominal, setNominal] = useState(0)
    const [totalDonation, setTotalDonation] = useState([])

    const [nama, setNama] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [pesan, setPesan] = useState('')

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

                                    <div className="mt-8 space-y-6 border-l-4 border-green-600 pl-6">
                                        <div>
                                            <h4 className="font-black text-gray-800">
                                                🔨 Tahap 1 - Perbaikan Struktur Bangunan
                                            </h4>
                                            <p className="text-gray-600 mt-2 text-sm">
                                                Proses perbaikan struktur utama sudah dimulai untuk memastikan bangunan lebih kokoh dan aman.
                                            </p>
                                        </div>

                                        <div>
                                            <h4 className="font-black text-gray-800">
                                                🧱 Tahap 2 - Renovasi Ruang Belajar
                                            </h4>
                                            <p className="text-gray-600 mt-2 text-sm">
                                                Renovasi ruang belajar dilakukan agar anak-anak bisa belajar dengan lebih nyaman dan rapi.
                                            </p>
                                        </div>

                                        <div>
                                            <h4 className="font-black text-gray-800">
                                                🕌 Tahap 3 - Perbaikan Musholla
                                            </h4>
                                            <p className="text-gray-600 mt-2 text-sm">
                                                Musholla sedang dalam tahap penataan ulang, termasuk pengadaan karpet dan perlengkapan ibadah.
                                            </p>
                                        </div>

                                        <div>
                                            <h4 className="font-black text-gray-800">
                                                📌 Tahap 4 - Pengadaan Sarana Anak Yatim
                                            </h4>
                                            <p className="text-gray-600 mt-2 text-sm">
                                                Pengadaan meja belajar, kitab, Al-Qur’an, dan kebutuhan harian anak-anak yatim terus berjalan.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* DONATUR */}
                            {select === "donatur" && (
                                <div>
                                    <h3 className="text-2xl font-black text-gray-800">
                                        Daftar Donatur (Terima Kasih ❤️)
                                    </h3>

                                    <p className="mt-4 text-gray-600 leading-relaxed text-sm md:text-base">
                                        Berikut sebagian donatur yang telah membantu program pembangunan yayasan.
                                        Semoga Allah membalas dengan keberkahan yang berlipat.
                                    </p>

                                    <div className="mt-8 space-y-4">
                                        <div
                                            className="flex justify-between items-center bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4"
                                        >
                                            <p className="font-bold text-gray-800">
                                                Hamba Allah
                                            </p>
                                            <p className="font-black text-green-700">
                                                -
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}

                        </div>
                    </article>

                    {/* SIDEBAR */}
                    <aside className="space-y-8">

                        {/* DAFTAR DONASI / BERITA */}
                        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6">
                            <div className="space-y-4 font-semibold text-[16px] text-gray-600">
                                <div className='flex items-center gap-2'>
                                    <p>
                                        {formatCurrency(totalDonation[0]?.totalAmount)}
                                    </p>
                                    <p className='text-[11px] font-normal'>
                                        terkumpul
                                    </p>
                                </div>

                                <div className='bg-gray-300/30 mt-1 w-full h-3 rounded-full'>
                                    <div className='bg-[#4CBB17] w-[10%] h-full rounded-full' />
                                </div>
                                <p className='text-[12px]'>
                                    {totalDonation[0]?.totalTransaksi} Donasi</p>

                                <button
                                    onClick={() => setOpenPayment(true)}
                                    className='bg-green-600 hover:bg-green-700 cursor-pointer transition-all py-3 w-full text-white font-semibold rounded-lg'
                                >
                                    Donasi Sekarang
                                </button>
                            </div>
                        </div>

                        {/* DONASI CARD */}
                        <div className="bg-gradient-to-br from-green-700 to-emerald-500 rounded-3xl shadow-xl p-7 text-white">
                            <h3 className="text-xl font-black">
                                Salurkan Donasi Anda
                            </h3>

                            <p className="mt-3 text-white/90 text-sm leading-relaxed">
                                Donasi Anda membantu pembangunan yayasan, pendidikan anak yatim,
                                dan kegiatan sosial Yayasan Riyadhussolihin.
                            </p>

                            <div className="mt-6 bg-white/15 rounded-2xl p-4 backdrop-blur-md">
                                <p className="text-sm font-bold">📌 Rekening Donasi</p>
                                <p className="mt-2 text-sm text-white/90">
                                    Bank: <span className="font-black">BSI</span>
                                </p>
                                <p className="text-sm text-white/90">
                                    No Rekening: <span className="font-black">7776644228</span>
                                </p>
                                <p className="text-sm text-white/90">
                                    A/N: <span className="font-black">Yayasan Riyadhussolihin</span>
                                </p>
                            </div>

                            <a
                                href="https://wa.me/6281905056908"
                                target="_blank"
                                rel="noreferrer"
                                className="mt-6 block text-center bg-white text-green-700 font-black py-3 rounded-2xl hover:bg-gray-100 transition-all shadow-lg"
                            >
                                Konfirmasi Donasi via WhatsApp
                            </a>

                            <p className="text-xs mt-4 text-white/80 text-center leading-relaxed">
                                * Setelah transfer, silakan konfirmasi melalui WhatsApp agar donasi tercatat.
                            </p>
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

export default Donasi

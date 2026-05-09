import { lastDonationNameAtom, notifMidtransAtomStorage } from '@/jotai/atoms'
import { handlePayment } from '@/utils/handlePayment'
import { useAtom } from 'jotai'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Modal = ({ openPayment, data, nama, setNama, phone, setPhone, email, setEmail, pesan, setPesan, setOpenPayment, setNominal, nominal, setTotalDonation }) => {

    const navigate = useNavigate()

    const [, setNotifMidtransStorage] = useAtom(notifMidtransAtomStorage)
    const [, setLastDonationName] = useAtom(lastDonationNameAtom)

    return (
        openPayment && (
            <div className="fixed inset-0 bg-black/60 flex justify-center items-start z-50 px-4 overflow-y-scroll">
                <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden">

                    {/* HEADER */}
                    <div className="p-5 border-b flex items-center justify-between">
                        <div>
                            <h2 className="text-lg font-black text-gray-800">
                                {data?.title}
                            </h2>
                            <p className="text-xs text-gray-500 mt-1">
                                Anda akan berdonasi dalam program:
                            </p>
                        </div>

                        <button
                            onClick={() => setOpenPayment(false)}
                            className="text-gray-500 hover:text-red-500 font-bold text-xl"
                        >
                            ✕
                        </button>
                    </div>

                    {/* BODY */}
                    <div className="p-6 space-y-6">

                        {/* PILIH NOMINAL */}
                        <div>
                            <h3 className="font-bold text-gray-700 mb-3">
                                Donasi Terbaik Anda
                            </h3>

                            <div className="grid grid-cols-2 gap-4">
                                {[10000, 25000, 50000, 100000].map((item) => (
                                    <button
                                        key={item}
                                        onClick={() => setNominal(item)}
                                        className={`py-4 rounded-2xl shadow border font-bold transition-all
                                ${nominal === item
                                                ? "bg-green-600 text-white border-green-600"
                                                : "bg-white text-gray-800 hover:bg-gray-100"
                                            }`}
                                    >
                                        Rp {item.toLocaleString("id-ID")}
                                    </button>
                                ))}

                                <button
                                    onClick={() => setNominal(0)}
                                    className={`py-4 rounded-2xl shadow border font-bold transition-all
                            ${nominal === 0
                                            ? "bg-green-600 text-white border-green-600"
                                            : "bg-white text-gray-800 hover:bg-gray-100"
                                        }`}
                                >
                                    Nominal Lainnya
                                </button>
                            </div>
                        </div>

                        {/* INPUT NOMINAL */}
                        <div className="border rounded-2xl px-4 py-3 flex items-center justify-between">
                            <p className="text-gray-500 font-bold">Rp</p>
                            <input
                                type="number"
                                value={nominal}
                                onChange={(e) => setNominal(Number(e.target.value))}
                                className="w-full text-right outline-none font-black text-lg"
                                placeholder="0"
                            />
                        </div>

                        {/* FORM DONATUR */}
                        <div className="space-y-4">
                            <input
                                type="text"
                                value={nama}
                                onChange={(e) => {
                                    setNama(e.target.value)
                                    // setMessage()
                                }}
                                placeholder="Nama Lengkap"
                                className="w-full border rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
                            />

                            <input
                                type="text"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="No Whatsapp atau Handphone"
                                className="w-full border rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
                            />

                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email (optional)"
                                className="w-full border rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
                            />

                            <textarea
                                placeholder="Tuliskan pesan atau doa disini (optional)"
                                rows={3}
                                value={pesan}
                                onChange={(e) => setPesan(e.target.value)}
                                className="w-full border rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        {/* BUTTON BAYAR */}
                        <button
                            onClick={() => handlePayment({
                                nama,
                                nominal,
                                phone,
                                email,
                                setTotalDonation,
                                navigate,
                                setNotifMidtransStorage,
                                setLastDonationName
                            })}
                            className="w-full bg-green-600 hover:bg-green-700 transition-all py-4 rounded-2xl font-black text-white shadow-xl"
                        >
                            Lanjutkan Pembayaran
                        </button>

                        <p className="text-center text-xs text-gray-400">
                            Powered by Yayasan Riyadhussolihin
                        </p>
                    </div>
                </div>
            </div>
        )
    )
}

export default Modal
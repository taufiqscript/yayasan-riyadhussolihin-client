import { lastDonationNameAtom, notifMidtransAtomStorage } from "@/jotai/atoms"
import { useAtom } from "jotai"
import React from "react"
import { useNavigate } from "react-router-dom"

const DonationSuccess = () => {
    const navigate = useNavigate()

    const [notifMidtransStorage] = useAtom(notifMidtransAtomStorage)
    const [lastDonationName] = useAtom(lastDonationNameAtom)

    const formatCurrency = (num) => {
        if (num) {
            let formatted = Intl.NumberFormat('id-ID', {
                style: "currency",
                currency: "IDR",
                minimumFractionDigits: 0
            }).format(num)

            return formatted
        }
    }

    const bank = notifMidtransStorage?.va_numbers
    console.log(bank.map(item => item.bank))

    return (
        <div className="min-h-screen bg-green-50 flex items-center justify-center px-4">
            <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-8 text-center">

                {/* ICON */}
                <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                        <span className="text-4xl text-green-600">✓</span>
                    </div>
                </div>

                {/* TITLE */}
                <h1 className="text-2xl font-black text-green-600 mb-2">
                    Donasi Berhasil 🎉
                </h1>

                <p className="text-gray-600 mb-6">
                    Terima kasih atas kebaikan Anda.
                    Semoga menjadi amal jariyah.
                </p>

                {/* DETAIL BOX */}
                <div className="bg-gray-50 rounded-2xl p-5 text-left space-y-3 mb-6">
                    <div className="flex justify-between">
                        <span className="text-gray-500">Nama Donatur</span>
                        <span className="font-bold">{lastDonationName}</span>
                    </div>

                    <div className="flex justify-between">
                        <span className="text-gray-500">Total Donasi</span>
                        <span className="font-bold text-green-600">
                            {formatCurrency(notifMidtransStorage?.gross_amount)}
                        </span>
                    </div>

                    <div className="flex justify-between">
                        <span className="text-gray-500">Metode</span>
                        <div className="flex flex-col">
                            <span className="font-bold capitalize">
                                {
                                    notifMidtransStorage?.payment_type == "bank_transfer" && "Transfer Bank"
                                }
                            </span>
                            <span className="upercase">
                                {/* {
                                    notifMidtransStorage?.payment_type == "bank_transfer" && bank.map(item => {
                                        item.bank.join("")
                                    })
                                } */}
                            </span>
                        </div>
                    </div>

                    <div className="flex justify-between">
                        <span className="text-gray-500">Status</span>
                        <span className="font-bold text-green-600 capitalize">
                            {notifMidtransStorage?.transaction_status}
                        </span>
                    </div>
                </div>

                {/* BUTTON */}
                <button
                    onClick={() => navigate("/")}
                    className="w-full bg-green-600 hover:bg-green-700 transition-all py-3 rounded-2xl font-bold text-white shadow-lg"
                >
                    Kembali ke Beranda
                </button>

            </div>
        </div>
    )
}

export default DonationSuccess
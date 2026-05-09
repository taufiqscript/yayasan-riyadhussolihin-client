import { apiInstanceExpress } from "./apiInstance"
import { handleNotification } from "./handleNotification"

export const handlePayment = async ({ nama, phone, nominal, email, navigate, setNotifMidtransStorage, setLastDonationName }) => {
    if (!nama || !phone || !email || nominal < 1000) {
        alert('Mohon isi nama, no WA, dan nominal donasi minimal Rp. 1.000')
        return
    }

    const donate_id = `Donasi-${Date.now()}`

    try {
        const response = await apiInstanceExpress.post(`/create-transaction`, {
            donate_id,
            gross_amount: nominal,
            name: nama,
            phone,
            email,
        })
        setLastDonationName(response.data.data.name)
        const token = response.data.data.token

        if (token) {
            window.snap.pay(token, {
                onSuccess: (result) => {
                    alert('Pembayaran Berhasil')
                    console.log(result)
                    setNotifMidtransStorage(result)
                    handleNotification({
                        order_id: donate_id,
                        payment_type: result.payment_type,
                        transaction_status: result.transaction_status,
                        transaction_id: result.transaction_id
                    })
                    navigate('/donasi-success')
                },
                onPending: (result) => {
                    alert('Menunggu Pembayaran..')
                    console.log(result)
                },
                onError: (result) => {
                    alert('Pembayaran Gagal!')
                    console.log(result)
                },
                onClose: () => {
                    alert('Kamu menutup pop up pembayaran')
                }
            })
        }
    } catch (error) {
        console.log(error.message)
        alert('Terjadi error saat proses pembayaran.')
    }
}
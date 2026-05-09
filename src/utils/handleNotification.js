import { apiInstanceExpress } from "./apiInstance"

export const handleNotification = async ({ order_id, payment_type, transaction_status, transaction_id }) => {
    try {
        let notif = await apiInstanceExpress.post('/notification', {
            order_id,
            payment_type,
            transaction_status,
            transaction_id
        })
        return notif
    } catch (error) {
        console.log(error.message)
    }
}
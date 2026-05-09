import { apiInstanceExpress } from "./apiInstance"

export const getTotalByPaymentType = async () => {
    try {
        const total = await apiInstanceExpress.get("/donation/total")

        console.log(total.data.data)
        return total.data.data
    } catch (error) {
        console.log(error)
    }
}
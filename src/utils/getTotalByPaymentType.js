import { apiInstanceExpress } from "./apiInstance"

export const getTotalByPaymentType = async () => {
    try {
        const total = await apiInstanceExpress.get("/donation/total")

        return total.data.data
    } catch (error) {
        console.log(error)
    }
}
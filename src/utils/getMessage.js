import { apiInstanceExpress } from "./apiInstance"

export const getMessage = async () => {
    try {

        const response = await apiInstanceExpress.get(`/donation/message`)

        return response.data.data
    } catch (error) {
        console.log(error)
    }
}


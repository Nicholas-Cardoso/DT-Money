import { api } from "../lib/axios"

export const deleteTransactions = async (id: number) => {
    const response = await api.delete(`transactions/${id}`);
    return response;
}
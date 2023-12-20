import { NewTransactionFormInputs } from "../components/NewTransactionModal";

interface Transaction {
    description: string,
    price: number,
    category: string,
    type: 'input' | 'output',
    createdAt: string,
}

export const dateFormat = Intl.DateTimeFormat('pt-BR');

export const priceFormat = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
});
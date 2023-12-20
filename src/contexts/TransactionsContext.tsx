import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface Transaction {
    id: number,
    description: string,
    type: 'input' | 'output',
    category: string,
    price: number,
    createdAt: string,
}

interface CreateTransaction {
    description: string,
    price: number,
    category: string,
    type: 'input' | 'output',
}

interface TransactionContextType {
    transactions: Transaction[];
    fetchTransactions: (query?: string) => Promise<void>;
    createTransaction: (data: CreateTransaction) => Promise<void>;
}

interface TransactionsProviderProps {
    children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionContextType);

export const TransactionsProvider = ({ children }: TransactionsProviderProps) => {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    const fetchTransactions = async (query?: string) => {
        const response = await api.get('transactions', {
            params: {
                _sort: 'createdAt',
                _order: 'desc',
                q: query,
            }
        })

        setTransactions(response.data);
    }

    const createTransaction = async (data: CreateTransaction) => {
        const { description, category, price, type } = data;

        const response = await api.post('transactions', {
            description,
            category,
            price,
            type,
            createdAt: new Date(),
        });

        setTransactions(state => [response.data, ...state]);
    }

    useEffect(() => {
        fetchTransactions();
    }, [])

    return (
        <TransactionsContext.Provider value={{ transactions, fetchTransactions, createTransaction }}>
            {children}
        </TransactionsContext.Provider>
    );
}
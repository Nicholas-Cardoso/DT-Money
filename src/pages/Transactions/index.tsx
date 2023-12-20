import { useContext } from "react";
import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import { ButtonRemove, PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { dateFormat, priceFormat } from "../../utils/formatter";
import { X } from "phosphor-react";
import { deleteTransactions } from "../../services/RemoveTransaction";

export const Transactions = () => {
    const { transactions, fetchTransactions } = useContext(TransactionsContext);

    const removeTransaction = async (id: number) => {
        const response = await deleteTransactions(id);

        if (!response) {
            console.log('Erro ao remover registro!');
            console.trace();
        }

        await fetchTransactions();
    }

    return (
        <div>
            <Header />
            <Summary />

            <TransactionsContainer>
                <SearchForm />
                <TransactionsTable>
                    <tbody>
                        {transactions.map(transactions => {
                            return (
                                <tr key={transactions.id}>
                                    <td width="50%">{transactions.description}</td>
                                    <td>
                                        <PriceHighlight variant={transactions.type}>
                                            {priceFormat.format(transactions.price)}
                                        </PriceHighlight>
                                    </td>
                                    <td>{transactions.category}</td>
                                    <td>{dateFormat.format(new Date(transactions.createdAt))}</td>
                                    <td>
                                        <ButtonRemove onClick={() => removeTransaction(transactions.id)}>
                                            <X size={15} />
                                        </ButtonRemove>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    );
}
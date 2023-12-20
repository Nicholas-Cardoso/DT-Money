import { useForm } from "react-hook-form";
import { ButtonFetchProps, SearchFormContainer } from "./styles";
import { MagnifyingGlass } from 'phosphor-react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";

const searchFormSchema = z.object({
    query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export const SearchForm = () => {
    const { fetchTransactions } = useContext(TransactionsContext)

    const {
        register,
        handleSubmit,
        formState: {
            isSubmitting,
        }
    } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema),
    });

    const handleSearchTransactions = async (data: SearchFormInputs) => {
        await fetchTransactions(data.query);
    }

    return (
        <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
            <input
                type="text"
                placeholder="Busque por transações"
                {...register('query')}
            />

            <ButtonFetchProps type="submit" disabled={isSubmitting}>
                <MagnifyingGlass size={20} />
                Buscar
            </ButtonFetchProps>
        </SearchFormContainer>
    );
}
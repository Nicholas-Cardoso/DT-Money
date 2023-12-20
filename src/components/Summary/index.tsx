import { SummaryCard, SummaryCardTotal, SummaryContainer } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react';
import { priceFormat } from "../../utils/formatter";
import { useSummary } from "../../hooks/useSummary";

export const Summary = () => {
    const summary = useSummary();

    return(
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} color="#00b37e" />
                </header>
                <strong>{priceFormat.format(summary.input)}</strong>
            </SummaryCard>
            
            <SummaryCard>
                <header>
                    <span>Saídas</span>
                    <ArrowCircleDown size={32} color="#f75a68" />
                </header>
                <strong>{priceFormat.format(summary.output)}</strong>
            </SummaryCard>

            <SummaryCardTotal variant={summary.total >= 0 ? "green" : "red"}>
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} color="#fff" />
                </header>
                <strong>{priceFormat.format(summary.total)}</strong>
            </SummaryCardTotal>
        </SummaryContainer>
    );
}
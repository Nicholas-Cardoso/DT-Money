import styled, { css } from "styled-components";

interface IProps {
  variant?: "green" | "red";
}

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -5rem;
`;

export const SummaryCard = styled.div<IProps>`
  background: ${(props) => props.theme["gray-600"]};
  border-radius: 6px;
  padding: 2rem;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${(props) => props.theme["gray-300"]};
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 1.5rem;
  }
`;

export const SummaryCardTotal = styled.div<IProps>`
  ${(props) =>
    props.variant === "red"
      ? css`background: ${props.theme["red-500"]};`
      : css`background: ${props.theme["green-500"]};`}

  border-radius: 6px;
  padding: 2rem;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${(props) => props.theme["gray-300"]};
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 1.5rem;
  }
`;

'use client';
import styled from 'styled-components';

const CardContainer = styled.div`
  border: 1px solid var(--color-primary);
  border-radius: ${8 / 16}rem;

  padding: ${16 / 16}rem;
`;

const Card = ({ children }: { children: React.ReactNode }) => {
  return <CardContainer>{children}</CardContainer>;
};

export default Card;

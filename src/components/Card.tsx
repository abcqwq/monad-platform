'use client';
import styled from 'styled-components';

const CardContainer = styled.div``;

const Card = ({ children }: { children: React.ReactNode }) => {
  return <CardContainer>{children}</CardContainer>;
};

export default Card;

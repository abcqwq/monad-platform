'use client';
import styled from 'styled-components';
import { ChevronRight } from 'lucide-react';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: ${48 / 16}rem;

  /* border: 2px solid var(--color-primary); */
  padding: ${8 / 16}rem ${12 / 16}rem;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  gap: ${8 / 16}rem;
`;

const Img = styled.img`
  display: block;
  height: ${22 / 16}rem;
`;

export type ItemProps = {
  children: React.ReactNode;
  img?: string;
  nested?: boolean;
};

const Item = ({ children, img, nested = false }: ItemProps) => {
  return (
    <Container>
      <Content>
        <Img src={img} />
        {children}
      </Content>

      {nested && <ChevronRight size={22} />}
    </Container>
  );
};

export default Item;

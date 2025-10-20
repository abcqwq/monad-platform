'use client';
import styled from 'styled-components';
import { BREAKPOINTS } from '@/consts/BREAKPOINTS';

const OutterContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-inline: ${24 / 16}rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${16 / 16}rem;

  max-width: ${BREAKPOINTS.largeDesktop / 16}rem;
  width: 100%;
`;

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <OutterContainer>
      <Container>{children}</Container>
    </OutterContainer>
  );
};

export default Layout;

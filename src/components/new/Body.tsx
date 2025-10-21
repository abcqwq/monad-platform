'use client';
import styled from 'styled-components';
import SearchBar from '@/components/SearchBar';

import { BREAKPOINTS } from '@/consts/BREAKPOINTS';

const Layout = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SearchBarContainer = styled.div`
  width: ${BREAKPOINTS['mobile-m'] / 16}rem;
`;

const Body = () => {
  return (
    <Layout>
      <SearchBarContainer>
        <SearchBar placeholder="What would you like to deploy?" />
      </SearchBarContainer>
    </Layout>
  );
};

export default Body;

'use client';
import styled from 'styled-components';
import SearchBar from '@/components/SearchBar';

import { BREAKPOINTS } from '@/consts/BREAKPOINTS';
import { useDeployables } from '@/providers/DeployablesProvider';

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
  const { deployables } = useDeployables();

  return (
    <Layout>
      <SearchBarContainer>
        <SearchBar
          deployables={deployables}
          placeholder="What would you like to deploy?"
        />
      </SearchBarContainer>
    </Layout>
  );
};

export default Body;

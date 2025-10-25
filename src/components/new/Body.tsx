'use client';
import styled from 'styled-components';
import SearchBar from '@/components/SearchBar';
import Item from '@/components/Item';

import { BREAKPOINTS } from '@/consts/BREAKPOINTS';
import { useDeployables } from '@/providers/DeployablesProvider';
import { Deployable } from '@/network/schemas/deployable';

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
          items={deployables}
          placeholder="What would you like to deploy?"
          itemConstructor={(deployable: Deployable) => {
            return (
              <Item key={deployable.id} nested={deployable.isParent}>
                {deployable.name}
              </Item>
            );
          }}
        />
      </SearchBarContainer>
    </Layout>
  );
};

export default Body;

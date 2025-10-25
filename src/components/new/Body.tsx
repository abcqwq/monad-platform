'use client';
import styled from 'styled-components';
import SearchBar from '@/components/SearchBar';
import Item from '@/components/Item';

import { BREAKPOINTS } from '@/consts/BREAKPOINTS';
import { useDeployables } from '@/providers/DeployablesProvider';
import type { Deployable } from '@/network/schemas/deployable';
import React from 'react';

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

const filterByParent = (items: Deployable[], isParent: boolean) => {
  return items.filter((item) => item.isParent === isParent);
};

const EMPTY_PROJECT: Deployable = {
  id: 'empty-project',
  name: 'Empty Project',
  icon: '/illustration/cmd.svg',
  category: 'project',
  isParent: false
};

const Body = () => {
  const { deployables: completeDeployables } = useDeployables();

  const [deployables, setDeployables] = React.useState<Deployable[]>(
    filterByParent(completeDeployables, true).concat([EMPTY_PROJECT])
  );

  return (
    <Layout>
      <SearchBarContainer>
        <SearchBar
          items={deployables}
          placeholder="What would you like to deploy?"
          itemConstructor={(deployable: Deployable) => {
            return (
              <Item
                img={deployable.icon}
                key={deployable.id}
                nested={deployable.isParent}
              >
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

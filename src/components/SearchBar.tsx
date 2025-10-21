'use client';
import styled from 'styled-components';
import Card from '@/components/Card';
import Item from '@/components/Item';
import type { GetDeployablesV1 } from '@/network/api/get-deployables-v1';

const Bar = styled.section``;

const ItemsContainer = styled.div``;

const Input = styled.input`
  border: none;

  width: 100%;
  padding: 0;

  &:focus {
    outline: none;
  }

  *:has(> &:focus) {
    outline: 2px dashed var(--color-outline);
    outline-offset: 1px;
  }
`;

type Props = {
  placeholder?: string;

  // bad practice, this makes SearchBar no longer context agnostic
  // TODO: fix
  deployables: GetDeployablesV1;
};

const SearchBar = ({ placeholder, deployables }: Props) => {
  return (
    <Card>
      <Bar>
        <Input placeholder={placeholder || 'Search...'} />
      </Bar>

      <ItemsContainer>
        {deployables.highlighted.map((deployable) => {
          return (
            <Item key={deployable.id} nested={deployable.isParent}>
              {deployable.name}
            </Item>
          );
        })}
      </ItemsContainer>
    </Card>
  );
};

export default SearchBar;

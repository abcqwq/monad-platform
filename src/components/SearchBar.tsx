'use client';
import styled from 'styled-components';
import Card from '@/components/Card';

import type { ItemProps } from '@/components/Item';

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

interface Props<T> {
  placeholder?: string;
  items: T[];
  itemConstructor: (item: T) => React.ReactElement<ItemProps>;
}

const SearchBar = <T,>({ placeholder, items, itemConstructor }: Props<T>) => {
  return (
    <Card>
      <Bar>
        <Input placeholder={placeholder || 'Search...'} />
      </Bar>

      <ItemsContainer>
        {items.map((item) => itemConstructor(item))}
      </ItemsContainer>
    </Card>
  );
};

export default SearchBar;

'use client';
import styled from 'styled-components';
import Card from '@/components/Card';
import Item from '@/components/Item';

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
};

const SearchBar = ({ placeholder }: Props) => {
  return (
    <Card>
      <Bar>
        <Input placeholder={placeholder || 'Search...'} />
      </Bar>

      <ItemsContainer>
        <Item nested={true}>GitHub Repository</Item>
        <Item nested={true}>Database</Item>
        <Item>Empty Project</Item>
      </ItemsContainer>
    </Card>
  );
};

export default SearchBar;

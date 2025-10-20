'use client';
import styled from 'styled-components';

export const Container = styled.button`
  // reset button default style
  border: none;
  background: none;
  margin: 0;
  padding: 0;
  color: inherit;
  text-align: inherit;

  &:hover {
    cursor: pointer;
  }
`;

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
};

function Interactable({ children, onClick }: Props) {
  return <Container onClick={onClick}>{children}</Container>;
}

export default Interactable;

'use client';
import styled from 'styled-components';

export const Container = styled.button`
  // reset button default style
  display: contents;

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

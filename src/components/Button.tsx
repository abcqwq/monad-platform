'use client';
import styled from 'styled-components';

export const Container = styled.button`
  background-color: var(--background-color);
  color: var(--text-color);

  border: none;
  border-radius: 4px;

  padding: ${4 / 16}rem ${6 / 16}rem;
  font-size: ${14 / 16}rem;

  &:hover {
    cursor: pointer;
  }
`;

const INTENT_BACKGROUND_MAPPER = {
  primary: 'var(--color-primary)',
  secondary: 'var(--color-secondary, var(--color-primary))',
  danger: 'var(--color-danger, #d9534f)',
  warn: 'var(--color-warn, #f0ad4e)',
  success: 'var(--color-success, #5cb85c)'
};

const INTENT_TEXT_MAPPER = {
  primary: 'var(--color-white, white)',
  secondary: 'var(--color-white, white)',
  danger: 'var(--color-white, white)',
  warn: 'var(--color-dark, black)',
  success: 'var(--color-white, white)'
};

type Props = {
  children: React.ReactNode;
  onClick: () => void;

  intent: 'primary' | 'secondary' | 'danger' | 'warn' | 'success';
};

function Button({ children, onClick, intent }: Props) {
  return (
    <Container
      style={
        {
          '--background-color': INTENT_BACKGROUND_MAPPER[intent],
          '--text-color': INTENT_TEXT_MAPPER[intent]
        } as React.CSSProperties
      }
      onClick={onClick}
    >
      {children}
    </Container>
  );
}

export default Button;

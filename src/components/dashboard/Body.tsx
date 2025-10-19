'use client';
import styled from 'styled-components';

const Container = styled.header`
  margin-block: ${16 / 16}rem;
  width: 100%;
  padding: ${8 / 16}rem ${16 / 16}rem;

  border: 1px solid #ccc;
`;

const Body = () => {
  return <Container>test</Container>;
};

export default Body;

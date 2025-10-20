'use client';
import styled from 'styled-components';

const Container = styled.header`
  margin-block: ${16 / 16}rem;
  width: 100%;
  padding: ${8 / 16}rem ${16 / 16}rem;

  border: 2px dotted #ccc;
  border-radius: ${8 / 16}rem;
  height: ${240 / 16}rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Body = () => {
  return <Container>Create a New Project</Container>;
};

export default Body;

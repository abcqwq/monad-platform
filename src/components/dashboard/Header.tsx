'use client';
import styled from 'styled-components';
import Avatar from '@/components/avatar/Avatar';

const Container = styled.header`
  margin-block: ${16 / 16}rem;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RightSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${16 / 16}rem;
`;

const Header = () => {
  return (
    <Container>
      <h3>Monad</h3>

      <RightSection>
        <p>Docs</p>
        <Avatar
          src="https://avatars.githubusercontent.com/u/57083494?v=4"
          fallback="ab"
          size="small"
        />
      </RightSection>
    </Container>
  );
};

export default Header;

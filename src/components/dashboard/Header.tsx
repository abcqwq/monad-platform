'use client';
import styled from 'styled-components';
import Avatar from '@/components/Avatar';

import { useUserProfile } from '@/providers/UserProfileProvider';

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
  const { user: profile } = useUserProfile();

  return (
    <Container>
      <h3>Monad</h3>

      <RightSection>
        <p>Docs</p>
        <Avatar
          src={profile.avatar}
          fallback={profile.displayName}
          size="small"
        />
      </RightSection>
    </Container>
  );
};

export default Header;

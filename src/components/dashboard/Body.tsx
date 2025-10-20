'use client';
import styled from 'styled-components';
import Avatar from '@/components/avatar/Avatar';
import Button from '@/components/Button';

import { useUserProfile } from '@/providers/UserProfileProvider';

const Container = styled.div`
  width: 100%;
`;

const NewProjectNavigation = styled.div`
  display: flex;
  align-items: center;

  justify-content: space-between;
`;

const LeftSectionNavigation = styled.div`
  display: flex;
  align-items: center;
  gap: ${6 / 16}rem;
`;

const NewProjectContainer = styled.div`
  margin-block: ${16 / 16}rem;
  padding: ${8 / 16}rem ${16 / 16}rem;

  border: 2px dotted #ccc;
  border-radius: ${8 / 16}rem;
  height: ${240 / 16}rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Body = () => {
  const { user: profile } = useUserProfile();

  return (
    <Container>
      <NewProjectNavigation>
        <LeftSectionNavigation>
          <Avatar
            src={profile.avatar}
            fallback={profile.displayName}
            size="super-small"
          />
          <p>{profile.displayName}'s project</p>
        </LeftSectionNavigation>

        <Button intent="primary" onClick={() => {}}>
          New Project
        </Button>
      </NewProjectNavigation>

      <NewProjectContainer>Create a New Project</NewProjectContainer>
    </Container>
  );
};

export default Body;

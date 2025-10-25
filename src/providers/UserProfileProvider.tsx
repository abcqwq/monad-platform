'use client';
import { createContext, useContext, useState } from 'react';
import type { UserProfile } from '@/network/schemas/user-profile';

type UserProfileContextType = { user: UserProfile };

const UserProfileContext = createContext<UserProfileContextType>({
  user: {} as UserProfile
});

export const useUserProfile = () => {
  return useContext(UserProfileContext);
};

export const UserProfileProvider = ({
  children,
  data
}: {
  children: React.ReactNode;
  data: UserProfile;
}) => {
  const [user] = useState(data);
  return (
    <UserProfileContext.Provider value={{ user }}>
      {children}
    </UserProfileContext.Provider>
  );
};

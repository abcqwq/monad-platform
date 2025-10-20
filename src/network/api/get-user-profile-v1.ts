import client from '@/network/http-client/monad-client';

import { type UserProfile, UserProfileSchema } from '@/entity/user-profile';

export const query = async (userId: string): Promise<UserProfile> => {
  const res = await client.get(`/v1/${userId}/profile`);

  const parsed = UserProfileSchema.safeParse(res.data);
  if (!parsed.success) {
    throw new Error(`Invalid user profile response: ${parsed.error.message}`);
  }

  return parsed.data;
};

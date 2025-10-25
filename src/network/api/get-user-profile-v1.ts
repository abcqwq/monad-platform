import client from '@/network/http-client/monad-client';

import {
  UserProfileSchema,
  type UserProfile
} from '@/network/schemas/user-profile';
import { BaseResponseSchema } from '@/network/api/base';

export const query = async (userId: string): Promise<UserProfile> => {
  const res = await client.get(`/api/v1/${userId}/profile`);

  const responseSchema = BaseResponseSchema(UserProfileSchema);
  const parsed = responseSchema.safeParse(res.data);
  if (!parsed.success) {
    throw new Error(`Invalid user profile response: ${parsed.error.message}`);
  }

  return parsed.data.data as UserProfile;
};

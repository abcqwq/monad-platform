import { z } from 'zod';

export const UserProfileSchema = z
  .object({
    id: z.string(),
    display_name: z.string(),
    avatar: z.string()
  })
  .transform((data) => ({
    id: data.id,
    displayName: data.display_name,
    avatar: data.avatar
  }));

export type UserProfile = z.infer<typeof UserProfileSchema>;

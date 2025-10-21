import { z } from 'zod';

export const DeployableSchema = z.object({
  id: z.string(),
  name: z.string(),
  illust: z.string()
});

export type Deployable = z.infer<typeof DeployableSchema>;

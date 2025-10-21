import { z } from 'zod';

export const DeployableSchema = z
  .object({
    id: z.string(),
    name: z.string(),
    illust: z.string(),
    category: z.string(),
    is_parent: z.boolean(),
  })
  .transform((data) => ({
    id: data.id,
    name: data.name,
    illust: data.illust,
    category: data.category,
    isParent: data.is_parent,
  }));

export type Deployable = z.infer<typeof DeployableSchema>;

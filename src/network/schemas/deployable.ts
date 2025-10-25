import { z } from 'zod';

const DeployableSchema = z
  .object({
    id: z.string(),
    name: z.string(),
    icon: z.string(),
    category: z.string(),
    is_parent: z.boolean()
  })
  .transform((data) => ({
    id: data.id,
    name: data.name,
    icon: data.icon,
    category: data.category,
    isParent: data.is_parent
  }));

export const GetDeployablesV1Schema = z.array(DeployableSchema);

export type Deployable = z.infer<typeof DeployableSchema>;
export type GetDeployablesV1 = z.infer<typeof GetDeployablesV1Schema>;

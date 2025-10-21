import client from '@/network/http-client/monad-client';

import { z } from "zod";
import { DeployableSchema } from "@/entity/deployable";

const GetDeployablesV1Schema = z.object({
  highlighted: z.array(DeployableSchema),
  complete: z.array(DeployableSchema),
});

export type GetDeployablesV1 = z.infer<typeof GetDeployablesV1Schema>;

export const query = async (): Promise<GetDeployablesV1> => {
    const res = await client.get(`/v1/deployables`);
  
    const parsed = GetDeployablesV1Schema.safeParse(res.data);
    if (!parsed.success) {
      throw new Error(`Invalid deployables response: ${parsed.error.message}`);
    }
  
    return parsed.data;
  };
  

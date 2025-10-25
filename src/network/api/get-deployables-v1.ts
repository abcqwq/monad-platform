import client from '@/network/http-client/monad-client';

import {
  type GetDeployablesV1,
  GetDeployablesV1Schema
} from '@/network/schemas/deployable';
import { BaseResponseSchema } from '@/network/api/base';

export const query = async (): Promise<GetDeployablesV1> => {
  const res = await client.get(`/api/v1/deployables`);

  const responseSchema = BaseResponseSchema(GetDeployablesV1Schema);
  const parsed = responseSchema.safeParse(res.data);
  if (!parsed.success) {
    throw new Error(`Invalid deployables response: ${parsed.error.message}`);
  }

  return parsed.data.data as GetDeployablesV1;
};

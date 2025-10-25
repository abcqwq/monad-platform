import { z } from 'zod';

export const BaseResponseSchema = <T extends z.ZodTypeAny>(dataSchema: T) =>
  z.object({
    success: z.boolean(),
    data: dataSchema.optional(),
    error: z.string().optional()
  });

export type BaseResponse<T extends z.ZodTypeAny> = z.infer<
  ReturnType<typeof BaseResponseSchema<T>>
>;

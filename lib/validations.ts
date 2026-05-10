import { z } from "zod";

export const bugSchema = z.object({
  title: z.string().min(3),
  description: z.string().min(10),
});
import * as z from 'zod';

const envSchema = z.object({
	VITE_APP_NAME: z.string(),
});

const { success, error, data } = z.safeParse(envSchema, import.meta.env);

if (!success) throw new Error(z.prettifyError(error));

export const env = data;

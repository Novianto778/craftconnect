import { z } from 'zod';

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp'];

export const RegisterSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    username: z.string().min(6),
    role: z.enum(['umkm', 'customer']).optional(),
    avatar: z.string().optional(),
});

export type RegisterType = z.infer<typeof RegisterSchema>;

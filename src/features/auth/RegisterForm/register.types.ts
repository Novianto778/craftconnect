import { z } from 'zod';

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp'];

export const RegisterSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    username: z.string().min(6),
    role: z.enum(['umkm', 'customer']),
    avatar: z
        .any()
        .refine((files) => files?.length == 1, 'Image is required.')
        .refine(
            (files) => files?.[0]?.size <= MAX_FILE_SIZE,
            `Max file size is 5MB.`
        )
        .refine(
            (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
            '.jpg, .jpeg, .png and .webp files are accepted.'
        ),
});

export type RegisterType = z.infer<typeof RegisterSchema>;

export const FormSchema = RegisterSchema.omit({
    role: true,
}).merge(
    z.object({
        role: z.object({
            value: z.string(),
            label: z.string(),
        }),
    })
);

export type FormType = z.infer<typeof FormSchema>;

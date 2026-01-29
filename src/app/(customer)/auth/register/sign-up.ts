import { z } from "zod"


export const signupSchema = z
    .object({
        fullname: z
            .string()
            .min(5, "Full name must be at least 5 characters.")
            .max(32, "Full name must be at most 32 characters."),
        email: z.string().email("Invalid email address."),
        password: z
            .string()
            .min(8, "Password must be at least 8 characters."),
        confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords don't match",
        path: ["confirmPassword"],
    })

export type SignupData = z.infer<typeof signupSchema>


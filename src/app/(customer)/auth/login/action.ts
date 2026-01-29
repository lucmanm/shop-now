"use server";

import { signIn } from "@/lib/auth-client";
import { TLogin, zloginSchema } from "./zod-schema";


export async function loginAction(data: TLogin) {
    try {
        const parsed = zloginSchema.safeParse(data)

        if (!parsed.success) {
            return { error: "Invalid form data" }
        }

        const result = await signIn.email({
            email: parsed.data.email,
            password: parsed.data.password,
        })

        if (result.error) {
            return { error: result.error.message }
        }

    } catch (error) {
        return { error: error instanceof Error ? error.message : "An error occurred during signup" }
    }
}
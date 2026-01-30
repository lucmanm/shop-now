"use server";

import { signUp } from "@/lib/auth-client";
import { signupSchema, TSignup } from "./signup-form";


export async function signupAction(data: TSignup) {
    try {

        const parsed = signupSchema.safeParse(data)

        if (!parsed.success) {
            return { error: "Invalid form data" }
        }

        const result = await signUp.email({
            name: parsed.data.fullname,
            email: parsed.data.email,
            password: parsed.data.password,
        })

        if (result.error) {
            return { error: result.error.message }
        }

        return { success: true }

    } catch (error) {
        return { error: error instanceof Error ? error.message : "An error occurred during signup" }
    }
}
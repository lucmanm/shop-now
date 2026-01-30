"use server";

import { signUp } from "@/lib/auth-client";
import { TSignup } from "./signup-form";


export async function signupAction(data: TSignup) {
    try {

        const result = await signUp.email({
            name: data.fullname,
            email: data.email,
            password: data.password,
        })

        if (result.error) {
            return { error: result.error.message }
        }

        return { success: true }

    } catch (error) {
        return { error: error instanceof Error ? error.message : "An error occurred during signup" }
    }
}
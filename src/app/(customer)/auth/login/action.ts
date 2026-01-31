
import { signIn } from "@/lib/auth-client";
import { TLogin, zloginSchema } from "./login-form";


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

        return { success: true }

    } catch (error) {
        return { error: error instanceof Error ? error.message : "An error occurred during login" }
    }
}
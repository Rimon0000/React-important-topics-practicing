import {z} from "zod"

export const signUpSchema = z.object({
    name: z.string().min(1, {message: "Name is Required"}),
    email: z.string().min(1, {message: "Email is Required"}),
    password: z.string().min(8, "Password is Too Short"),
})

export type TNormalForm = z.infer<typeof signUpSchema>
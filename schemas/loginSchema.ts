import * as z from 'zod'

export const loginSchema = z.object({
  email: z.string().email({ message: 'Digite o email, por favor!' }),
  password: z
    .string()
    .min(4, { message: 'Digite a senha corretamente, por favor!' }),
})

export type Login = z.infer<typeof loginSchema>

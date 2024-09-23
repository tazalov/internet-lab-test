import { z } from 'zod'

export const SendUserDataValidator = z.object({
  name: z
    .string()
    .min(2, 'Имя должно быть не менее 2 символов')
    .max(30, 'Имя должно быть не более 30 символов'),
  phone: z.string().min(10, 'Телефон должен быть не менее 10 символов'),
  agreement: z.boolean(),
})

export type SendUserDataFormValues = z.input<typeof SendUserDataValidator>

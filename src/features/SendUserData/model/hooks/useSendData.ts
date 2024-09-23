import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { SendUserDataFormValues, SendUserDataValidator } from '../validators/sendUserData'

export const useSendData = () => {
  return useForm<SendUserDataFormValues>({
    defaultValues: {
      agreement: false,
      name: '',
      phone: '',
    },
    resolver: zodResolver(SendUserDataValidator),
    mode: 'onChange',
  })
}

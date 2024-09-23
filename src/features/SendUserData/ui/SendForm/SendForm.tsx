import { Button } from '@/shared/ui/Button'
import { ControlledCheckbox } from '@/shared/ui/Checkbox'
import { TextField } from '@/shared/ui/TextField'

import { useSendData } from '../../model/hooks/useSendData'
import { SendUserDataFormValues } from '../../model/validators/sendUserData'
import s from './SendForm.module.scss'

export const SendForm = () => {
  const {
    handleSubmit,
    formState: { errors, dirtyFields },
    register,
    control,
  } = useSendData()

  const onSubmit = (data: SendUserDataFormValues) => {
    alert(JSON.stringify(data))
  }

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <TextField
        placeholder='Имя'
        {...register('name')}
        isError={!!errors?.name?.message}
        isSuccess={dirtyFields.name && !errors?.name?.message}
        helperText={errors?.name?.message}
      />
      <TextField
        placeholder='Телефон'
        {...register('phone')}
        isError={!!errors?.phone?.message}
        isSuccess={dirtyFields.phone && !errors?.phone?.message}
        helperText={errors?.phone?.message}
      />
      <ControlledCheckbox control={control} name='agreement' label='Согласен, отказываюсь' />
      <Button variant='primary' type='submit'>
        Отправить
      </Button>
    </form>
  )
}

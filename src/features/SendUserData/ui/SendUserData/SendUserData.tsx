import { Typography } from '@/shared/ui/Typography'

import { SendForm } from '../SendForm/SendForm'
import s from './SendUserData.module.scss'

export const SendUserData = () => {
  return (
    <section className={s.sendUserData} id='form'>
      <div className='main-container'>
        <Typography variant='headline2' className={s.title}>
          Отправь форму
        </Typography>
        <SendForm />
      </div>
    </section>
  )
}

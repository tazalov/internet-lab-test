import { Typography } from '@/shared/ui/Typography'

import { Slider } from '../Slider/Slider'
import s from './Reviews.module.scss'

export const Reviews = () => {
  return (
    <section className={s.root}>
      <Typography variant='headline2' asComponent='h2' className={s.title}>
        Отзывы
      </Typography>
      <div className='main-container'>
        <Slider />
      </div>
    </section>
  )
}

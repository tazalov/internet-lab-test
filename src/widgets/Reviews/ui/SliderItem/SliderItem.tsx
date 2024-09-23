import { Card } from '@/shared/ui/Card'
import { Typography } from '@/shared/ui/Typography'

import { ReviewItem } from '../../model/types'
import s from './SliderItem.module.scss'

type Props = {
  item: ReviewItem
}

export const SliderItem = ({ item }: Props) => {
  const {
    user: { avatar, name, city },
    review,
  } = item

  return (
    <Card className={s.root}>
      <div className={s.user}>
        <img src={avatar} alt={`${name}_avatar_review`} className={s.avatar} />
        <div className={s.info}>
          <Typography variant='headline6' className={s.name}>
            {name}
          </Typography>
          <Typography variant='body12' className={s.city}>
            {city}
          </Typography>
        </div>
      </div>
      <Typography variant='body14'>{review}</Typography>
    </Card>
  )
}

import { Typography } from '@/shared/ui/Typography'

import { StepItem } from '../../model/types'
import s from './StepsListItem.module.scss'

type Props = {
  item: StepItem
}

export const StepsListItem = ({ item }: Props) => {
  const { icon, title, text } = item

  return (
    <li className={s.listItem}>
      {icon}
      <div>
        <Typography variant='headline6' className={s.title}>
          {title}
        </Typography>
        <Typography variant='body14' className={s.text}>
          {text}
        </Typography>
      </div>
    </li>
  )
}

import { Typography } from '@/shared/ui/Typography'

import s from './StatisticItem.module.scss'

type Props = {
  title: string
  content: string
}

export const StatisticItem = ({ content, title }: Props) => {
  return (
    <div className={s.item}>
      <Typography variant='body18' bold>
        {title}
      </Typography>
      <Typography variant='body16'>{content}</Typography>
    </div>
  )
}

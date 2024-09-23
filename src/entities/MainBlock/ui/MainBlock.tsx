import { Button } from '@/shared/ui/Button'
import { Typography } from '@/shared/ui/Typography'

import s from './MainBlock.module.scss'

export const MainBlock = () => {
  return (
    <div className={s.main}>
      <div className={s.content}>
        <Typography variant='headline1' asComponent='h1' className={s.title}>
          Говорят, никогда не поздно сменить профессию
        </Typography>
        <Typography variant='body18' asComponent='h3' className={s.subtitle}>
          Сделай круто тестовое задание и у тебя получится
        </Typography>
        <Button variant='secondary'>Проще простого!</Button>
      </div>
    </div>
  )
}

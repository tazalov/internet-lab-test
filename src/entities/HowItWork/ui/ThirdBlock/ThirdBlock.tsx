import ThirdBlockImg from '@/shared/assets/img/third-block.png'
import { Typography } from '@/shared/ui/Typography'

import s from './ThirdBlock.module.scss'

export const ThirdBlock = () => {
  return (
    <div className={s.thirdBlock} id='third'>
      <div className={s.content}>
        <Typography variant='headline3' asComponent='h3' className={s.title}>
          Круто ты дошел до третьего блока
        </Typography>
        <Typography className={s.text1}>
          63% опрошенных пользовались кредитами из-за того, что не могли покрыть непредвиденные
          расходы свыше 15 000 ₽.
        </Typography>
        <Typography className={s.text2}>
          Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на
          процентах и штрафах.
        </Typography>
      </div>
      <img src={ThirdBlockImg} alt='third-block' className={s.image} />
    </div>
  )
}

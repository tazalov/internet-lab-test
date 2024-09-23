import { Typography } from '@/shared/ui/Typography'

import { StepsList } from '../StepsList/StepsList'
import { ThirdBlock } from '../ThirdBlock/ThirdBlock'
import s from './HowItWork.module.scss'

export const HowItWork = () => {
  return (
    <div className={s.howItWork}>
      <div className='main-container'>
        <Typography variant='headline2' asComponent='h2' bold className={s.title} id='how-it-work'>
          Как это работает
        </Typography>
        <StepsList />
        <ThirdBlock />
      </div>
    </div>
  )
}

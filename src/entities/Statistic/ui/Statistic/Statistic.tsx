import { STATISTIC_ITEMS } from '../../model/const/statisticItems'
import { StatisticItem } from '../StatisticItem/StatisticItem'
import s from './Statistic.module.scss'

export const Statistic = () => {
  return (
    <div className={s.statistic}>
      <div className='main-container'>
        <div className={s.content}>
          {STATISTIC_ITEMS.map((el, i) => (
            <StatisticItem key={i} content={el.content} title={el.title} />
          ))}
        </div>
      </div>
    </div>
  )
}

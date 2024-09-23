import { HOW_IT_WORK_ITEMS } from '../../model/const/items'
import { StepsListItem } from '../StepsListItem/StepsListItem'
import s from './StepsList.module.scss'

export const StepsList = () => {
  return (
    <ul className={s.list}>
      {HOW_IT_WORK_ITEMS.map((el, i) => (
        <StepsListItem key={i} item={el} />
      ))}
    </ul>
  )
}

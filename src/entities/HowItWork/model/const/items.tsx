import Arrow from '@/shared/assets/icons/how-it-work1.svg?react'
import Car from '@/shared/assets/icons/how-it-work2.svg?react'
import Trending from '@/shared/assets/icons/how-it-work3.svg?react'
import Money from '@/shared/assets/icons/how-it-work4.svg?react'

import { StepItem } from '../types'

export const HOW_IT_WORK_ITEMS: StepItem[] = [
  {
    icon: <Arrow />,
    title: 'Прочитай задание внимательно',
    text: 'Думаю у тебя не займет это больше двух-трех минут',
  },
  {
    icon: <Car />,
    title: 'Изучи весь макет заранее',
    text: 'Подумай как это будет работать на разных разрешениях и при скролле',
  },
  {
    icon: <Trending />,
    title: 'Сделай хорошо',
    text: 'Чтобы мы могли тебе доверить подобные задачи в будущем',
  },
  {
    icon: <Money />,
    title: 'Получи предложение',
    text: 'Ну тут все просто, не я придумал правила, но думаю так и будет)))',
  },
]

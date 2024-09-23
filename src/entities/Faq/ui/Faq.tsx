import { Accordion } from '@/shared/ui/Accordion'
import { Typography } from '@/shared/ui/Typography'

import { FAQ_ITEMS } from '../model/const/faqItems'
import s from './Faq.module.scss'

export const Faq = () => {
  return (
    <section className={s.faq} id='faq'>
      <div className='main-container'>
        <Typography variant='headline2' className={s.title}>
          Вопросы и ответы
        </Typography>
        <Accordion.Root>
          {FAQ_ITEMS.map((el, i) => (
            <Accordion.Item value={`faq-item-${i}`} key={`faq-item-${i}`}>
              <Accordion.Trigger>{el.title}</Accordion.Trigger>
              <Accordion.Content>{el.content}</Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  )
}

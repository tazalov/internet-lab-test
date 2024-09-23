import * as AccordionRadix from '@radix-ui/react-accordion'
import {
  AccordionContentProps,
  AccordionItemProps,
  AccordionSingleProps,
  AccordionTriggerProps,
} from '@radix-ui/react-accordion'
import clsx from 'clsx'

import AccordionIcon from '@/shared/assets/icons/accordion.svg?react'
import { Typography } from '@/shared/ui/Typography'

import s from './Accordion.module.scss'

type RootProps = Omit<AccordionSingleProps, 'type' | 'collapsible'>

const Root = ({ children, className, ...props }: RootProps) => {
  return (
    <AccordionRadix.Root type='single' collapsible className={clsx(s.root, className)} {...props}>
      {children}
    </AccordionRadix.Root>
  )
}

const Item = ({ children, ...props }: AccordionItemProps) => {
  return <AccordionRadix.Item {...props}>{children}</AccordionRadix.Item>
}

const Trigger = ({ children, className, ...props }: AccordionTriggerProps) => {
  return (
    <AccordionRadix.Header>
      <AccordionRadix.Trigger className={clsx(s.trigger, className)} {...props}>
        <Typography variant='body18' bold>
          {children}
        </Typography>
        <AccordionIcon className={s.icon} />
      </AccordionRadix.Trigger>
    </AccordionRadix.Header>
  )
}

const Content = ({ children, className, ...props }: AccordionContentProps) => {
  return (
    <AccordionRadix.Content className={clsx(s.content, className)} {...props}>
      <Typography variant='body18' className={s.text}>
        {children}
      </Typography>
    </AccordionRadix.Content>
  )
}

export const Accordion = { Content, Item, Root, Trigger }

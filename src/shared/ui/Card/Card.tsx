import { ComponentPropsWithoutRef } from 'react'
import clsx from 'clsx'

import s from './Card.module.scss'

type Props = ComponentPropsWithoutRef<'div'>

export const Card = ({ className, children, ...divProps }: Props) => {
  return (
    <div className={clsx(s.root, className)} {...divProps}>
      {children}
    </div>
  )
}

import clsx from 'clsx'
import { ComponentPropsWithoutRef } from 'react'

import { Typography } from '@/shared/ui/Typography'

import s from './Button.module.scss'

type Props = {
  variant?: 'primary' | 'secondary'
} & ComponentPropsWithoutRef<'button'>

export const Button = ({ variant = 'primary', className, children, ...buttonProps }: Props) => {
  return (
    <button className={clsx(s.button, s[variant], className)} {...buttonProps}>
      <Typography variant='headline5'>{children}</Typography>
    </button>
  )
}

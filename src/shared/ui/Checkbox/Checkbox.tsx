import * as CheckboxRadix from '@radix-ui/react-checkbox'
import clsx from 'clsx'
import { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactNode } from 'react'

import CheckIcon from '@/shared/assets/icons/check-icon.svg?react'
import { Typography } from '@/shared/ui/Typography'

import s from './Checkbox.module.scss'

export type CheckboxProps = {
  label?: ReactNode | string
} & Omit<ComponentPropsWithoutRef<typeof CheckboxRadix.Root>, 'asChild'>

// eslint-disable-next-line react/display-name
export const Checkbox = forwardRef<ElementRef<typeof CheckboxRadix.Root>, CheckboxProps>(
  ({ className, label, ...rest }, ref) => {
    return (
      <Typography variant='body16' className={clsx(s.label, className)}>
        <CheckboxRadix.Root className={s.checkbox} ref={ref} {...rest}>
          <CheckboxRadix.Indicator className={s.indicator}>
            <CheckIcon />
          </CheckboxRadix.Indicator>
        </CheckboxRadix.Root>
        {label}
      </Typography>
    )
  },
)

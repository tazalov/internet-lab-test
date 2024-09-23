import clsx from 'clsx'
import { ComponentPropsWithoutRef, forwardRef } from 'react'

import ErrorIcon from '@/shared/assets/icons/error.svg?react'
import SuccessIcon from '@/shared/assets/icons/success.svg?react'
import { Typography } from '@/shared/ui/Typography'

import s from './TextField.module.scss'

type Props = {
  label?: string
  isError?: boolean
  isSuccess?: boolean
  helperText?: string
} & ComponentPropsWithoutRef<'input'>

// eslint-disable-next-line react/display-name
export const TextField = forwardRef<HTMLInputElement, Props>(
  ({ label, name, isError, helperText, isSuccess, className, ...inputProps }, ref) => {
    const isShowIcon = isError || isSuccess

    return (
      <div className={clsx(s.rootWrapper, className)}>
        <div className={clsx(s.root, isError && s.error, isShowIcon && s.showIcon)}>
          {label && (
            <Typography variant='body14' asComponent='label' htmlFor={name} className={s.label}>
              {label}
            </Typography>
          )}
          <input type='text' className={s.input} name={name} id={name} ref={ref} {...inputProps} />
          {isError && <ErrorIcon className={s.icon} />}
          {isSuccess && <SuccessIcon className={s.icon} />}
        </div>
        {helperText && (
          <Typography
            variant='body12'
            className={clsx(s.helperText, isError && s.error, isSuccess && s.success)}
          >
            {helperText}
          </Typography>
        )}
      </div>
    )
  },
)

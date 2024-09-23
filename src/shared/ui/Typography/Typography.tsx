import clsx from 'clsx'
import { ElementType, ReactNode } from 'react'

import { PolymorphComponentProps } from '@/app/types/polymorph'

import s from './Typography.module.scss'

type CustomProps = {
  variant?:
    | 'headline1'
    | 'headline2'
    | 'headline3'
    | 'headline4'
    | 'headline5'
    | 'headline6'
    | 'caption'
    | 'body18'
    | 'body16'
    | 'body14'
    | 'body12'
  bold?: boolean
}

type Props<T extends ElementType> = PolymorphComponentProps<T, CustomProps>

type TypographyComponent = <T extends ElementType = 'p'>(props: Props<T>) => ReactNode

export const Typography: TypographyComponent = <T extends ElementType = 'p'>({
  asComponent,
  children,
  className,
  variant = 'body16',
  bold = false,
  ...rest
}: Props<T>) => {
  const Component = asComponent || 'p'
  const finishClassName = clsx(s.typography, s[variant], bold && s.bold, className)

  return (
    <Component className={finishClassName} {...rest}>
      {children}
    </Component>
  )
}

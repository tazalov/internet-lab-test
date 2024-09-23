import {
  ComponentPropsWithoutRef,
  ElementType,
  PropsWithChildren,
} from 'react'

interface AsComponentProp<T extends ElementType> {
  asComponent?: T
}

export type PolymorphComponentProps<T extends ElementType, P = object> = PropsWithChildren<
  P & AsComponentProp<T>
> &
  Omit<ComponentPropsWithoutRef<T>, keyof (AsComponentProp<T> & P)>

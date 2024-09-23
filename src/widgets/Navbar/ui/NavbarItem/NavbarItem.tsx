import { PropsWithChildren } from 'react'
import { Link } from 'react-scroll'

import { Typography } from '@/shared/ui/Typography'

import s from './NavbarItem.module.scss'

type Props = {
  anchor: string
} & PropsWithChildren

export const NavbarItem = ({ children, anchor }: Props) => {
  return (
    <Typography variant='body16' asComponent={Link} to={anchor} smooth className={s.root}>
      {children}
    </Typography>
  )
}

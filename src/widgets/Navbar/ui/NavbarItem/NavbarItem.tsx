import { PropsWithChildren } from 'react'
import { Link } from 'react-scroll'

import { Typography } from '@/shared/ui/Typography'

import s from './NavbarItem.module.scss'

type Props = {
  anchor: string
} & PropsWithChildren

export const NavbarItem = ({ children, anchor }: Props) => {
  return (
    <Link to={anchor} smooth>
      <Typography variant='body16' asComponent='li' className={s.root}>
        {children}
      </Typography>
    </Link>
  )
}

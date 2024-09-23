import { PropsWithChildren } from 'react'
import { Link } from 'react-scroll'

import ArrowIcon from '@/shared/assets/icons/arrow-right.svg?react'
import { Typography } from '@/shared/ui/Typography'

import s from './MobileMenuItem.module.scss'

type Props = {
  anchor: string
  onClose?: () => void
} & PropsWithChildren

export const MobileMenuItem = ({ children, anchor, onClose }: Props) => {
  return (
    <Typography
      asComponent={Link}
      variant='body18'
      className={s.item}
      onClick={onClose}
      to={anchor}
      smooth
    >
      {children}
      <ArrowIcon width={8} />
    </Typography>
  )
}

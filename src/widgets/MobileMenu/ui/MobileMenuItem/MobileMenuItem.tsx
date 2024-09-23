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
    <Link to={anchor} smooth className={s.link}>
      <Typography variant='body18' className={s.item} onClick={onClose}>
        {children}
        <ArrowIcon width={8} />
      </Typography>
    </Link>
  )
}

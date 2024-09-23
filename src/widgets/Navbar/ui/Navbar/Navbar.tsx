import clsx from 'clsx'

import Logo from '@/shared/assets/icons/logo.svg?react'
import { MobileMenu } from '@/widgets/MobileMenu'

import { NavbarItem } from '../NavbarItem/NavbarItem'
import s from './Navbar.module.scss'

type MenuItem = {
  label: string
  anchor: string
}

type Props = {
  items: MenuItem[]
}

export const Navbar = ({ items }: Props) => {
  return (
    <header className={clsx(s.root)}>
      <div className='main-container'>
        <div className={s.wrapper}>
          <Logo />
          <nav className={s.list}>
            {items.map((item, i) => (
              <NavbarItem key={i} anchor={item.anchor}>
                {item.label}
              </NavbarItem>
            ))}
          </nav>
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}

import clsx from 'clsx'
import { useEffect, useState } from 'react'

import Logo from '@/shared/assets/icons/logo_m.svg?react'
import { routes } from '@/shared/const/routes'

import { MobileMenuItem } from '../MobileMenuItem/MobileMenuItem'
import s from './MobileMenu.module.scss'

export const MobileMenu = () => {
  const [open, setOpen] = useState(false)

  const handleToggleOpen = () => setOpen((prev) => !prev)

  const handleClose = () => setOpen(false)

  useEffect(() => {
    if (open) {
      document.body.classList.add('fix-scroll')
    } else {
      document.body.classList.remove('fix-scroll')
    }
  }, [open])

  return (
    <div className={s.menuContainer}>
      <button onClick={handleToggleOpen} className={clsx(s.trigger, { [s.open]: open })} />
      <div className={clsx(s.menu, { [s.open]: open })}>
        <div className={s.logo}>
          <Logo />
        </div>
        {routes.map((el) => (
          <MobileMenuItem key={el.label + '_mobile'} anchor={el.anchor} onClose={handleClose}>
            {el.label}
          </MobileMenuItem>
        ))}
      </div>
    </div>
  )
}

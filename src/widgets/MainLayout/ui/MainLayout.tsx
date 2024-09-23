import { PropsWithChildren } from 'react'

import { routes } from '@/shared/const/routes'
import { Typography } from '@/shared/ui/Typography'
import { Navbar } from '@/widgets/Navbar'

import s from './MainLayout.module.scss'

export const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar items={routes} />
      {children}
      <footer className={s.footer}>
        <Typography variant='body18' className={s.copy}>
          © 2021 Лаборатория интернет
        </Typography>
      </footer>
    </>
  )
}

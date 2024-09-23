import { PropsWithChildren } from 'react'

import { routes } from '@/shared/const/routes'
import { Navbar } from '@/widgets/Navbar'

export const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar items={routes} />
      {children}
    </>
  )
}

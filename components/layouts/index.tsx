
import { ReactNode } from 'react'
import Header, { HeaderProps } from './header'

interface LayoutProps {
  children: ReactNode
  header: HeaderProps
  footer: ReactNode
}

const Layout = ({ children, header, footer }: LayoutProps) => {
  return (
    <>
      <Header {...header} />
      <main>
        {children}
      </main>
      {footer}
    </>
  )
}

export default Layout
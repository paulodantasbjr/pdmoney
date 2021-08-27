import { LayoutContainer } from './styled'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

export const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
      {children}
      <Footer />
    </LayoutContainer>
  )
}

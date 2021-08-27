import { HeaderContainer } from './styled'

import { Title } from '../Title'
import { Button } from '../Button'

export const Header = () => {
  return (
    <HeaderContainer>
      <div className='header-content'>
        <Title icon={'/logo.svg'} title={'dt money'} />

        <Button>Nova transação</Button>
      </div>
    </HeaderContainer>
  )
}

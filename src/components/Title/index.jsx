import { TitleContainer } from './styled'

export const Title = ({ icon, title }) => {
  return (
    <TitleContainer>
      <img src={icon} alt={title} />
      <h2>{title}</h2>
    </TitleContainer>
  )
}

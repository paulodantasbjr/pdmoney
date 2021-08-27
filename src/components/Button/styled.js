import styled from 'styled-components'

export const ButtonContainer = styled.button`
  background: #6933ff;
  border-radius: 5px;
  border: none;

  font-weight: 600;

  padding: 0.8rem 2rem;

  color: #ffffff;

  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    filter: brightness(0.9);
  }
`

import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 12rem;

  background: ${({ theme }) => theme.colors.blue};

  .header-content {
    width: 100%;
    max-width: 1120px;

    height: 100%;

    margin: 0 auto;
    padding: 2rem 0;

    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
`

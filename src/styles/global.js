import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html{
    @media screen and (max-width: 780px){
      font-size: 93.75%;
    }
    @media screen and (max-width: 380px){
      font-size: 87.5%;
    }
  }
  body{
    font-family: 'Poppins',sans-serif;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem;
  }
  body{
    background-color: ${({ theme }) => theme.colors.background};
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }
  body::-webkit-scrollbar{
    width: 0.5rem;
    background-color: ${({ theme }) => theme.colors.scrollbar.background};
  }
  body::-webkit-scrollbar-thumb{
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.colors.scrollbar.thump};
  }
  body::-webkit-scrollbar-track{
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.colors.scrollbar.track};
  }
  button{
    cursor: pointer;
  }
`

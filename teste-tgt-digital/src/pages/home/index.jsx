import React from "react"
import { useHistory } from "react-router-dom"
import {
  HomeContainer
} from './style'

export function Home() {
  const history = useHistory()

  const switchPageHandle = (idPage) => {
    history.push(`${idPage}`)
  }

  return (
    <HomeContainer>
      <p onClick={() => switchPageHandle('/login')}>Login</p>
      <div />
      <p onClick={() => switchPageHandle('/cadastro')}>Cadastro</p>
    </HomeContainer>
  );
}

export default Home
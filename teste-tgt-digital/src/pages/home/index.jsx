import React from "react"
import { useHistory } from "react-router-dom"

export function Home() {
  const history = useHistory()

  const switchPageHandle = (idPage) => {
    history.push(`${idPage}`)
  }

  return (
    <div>
      <h1>HOME</h1>
      <div>
        <button onClick={() => switchPageHandle('/login')}>Login</button>
        <button onClick={() => switchPageHandle('/cadastro')}>Cadastro</button>
      </div>
    </div>
  );
}

export default Home
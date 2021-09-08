import React from "react"
import { useHistory } from "react-router-dom"

export function SignUp() {
  const history = useHistory()

  return (
    <div>
      <h1>Cadastro</h1>
      <button onClick={history.goBack}>Voltar</button>
      <div>
        <p>Nome</p>
        <p>Email</p>
        <p>Senha</p>
      </div>
    </div>
  );
}

export default SignUp
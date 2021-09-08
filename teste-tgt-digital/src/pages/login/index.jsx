import React from "react"
import { useHistory } from "react-router-dom"

export function Login() {
  const history = useHistory()

  return (
    <div>
      <h1>Login</h1>
      <button onClick={history.goBack}>Voltar</button>
      <div>
        <p>Email</p>
        <p>Senha</p>
      </div>
    </div>
  );
}

export default Login
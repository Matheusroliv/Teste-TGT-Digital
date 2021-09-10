import React from "react"
import { useHistory } from "react-router-dom"
import useForm from "../../hooks/useForm"
import {
  LoginPageContainer,
  BackButtonContainer,
  LoginButton
} from './style'

export function Login() {
  const history = useHistory()
  const { form, onChange } = useForm({ email: '', password: '' })

  const submitLogin = (event) => {
    event.preventDefault()
    const email = window.localStorage.getItem('email')
    const password = window.localStorage.getItem('password')

    if (email === form.email && password === form.password) {
      alert("login feito com sucesso!")
      history.push(`/profile`)
    } else {
      alert("Senha ou email incorretos")
    }
  }

  return (
    <LoginPageContainer>
      <BackButtonContainer>
        <p onClick={history.goBack}>Voltar</p>
      </BackButtonContainer>
      <h1>Login</h1>
      <form onSubmit={submitLogin}>
        <div>
          <input
            name="email"
            value={form.email}
            onChange={onChange}
            placeholder={"email@email.com"}
            required
            type="email"
          />
        </div>
        <div>
          <input
            name="password"
            id="senha"
            placeholder="Senha"
            type="password"
            value={form.password}
            onChange={onChange}
          />
        </div>
        <div>
          <LoginButton>
            <button>Entrar</button>
          </LoginButton>
        </div>
      </form>
    </LoginPageContainer>
  );
}

export default Login
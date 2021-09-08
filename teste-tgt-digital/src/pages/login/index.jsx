import React, { useEffect } from "react"
import { useHistory } from "react-router-dom"
import useForm from "../../hooks/useForm"

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
    <div>
      <h1>Login</h1>
      <button onClick={history.goBack}>Voltar</button>
      <div>
        <form onSubmit={submitLogin}>
          <input
            name="email"
            value={form.email}
            onChange={onChange}
            placeholder={"email@email.com"}
            required
            type="email"
          />
          <input
            name="password"
            id="senha"
            placeholder="Senha"
            type="password"
            value={form.password}
            onChange={onChange}
          />
          <div>
            <div>
              <button>Entrar</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login
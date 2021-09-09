import React from "react"
import { useHistory } from "react-router-dom"
import useForm from "../../hooks/useForm"

export function SignUp() {
  const history = useHistory()
  const { form, onChange, cleanFields } =
    useForm({
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    })

  const signup = () => {
    alert("Conta criada com sucesso!")
    window.localStorage.setItem('name', form.name)
    window.localStorage.setItem('email', form.email)
    window.localStorage.setItem('password', form.password)
    cleanFields()
  }

  const submitSignup = (event) => {
    event.preventDefault()
    if (form.password === form.confirmPassword) {
      signup()
    } else {
      window.alert("Confirme sua senha")
    }
  }

  return (
    <div>
      <h1>Cadastro</h1>
      <button onClick={history.goBack}>Voltar</button>
      <div>
        <form onSubmit={submitSignup}>
          <input
            name="name"
            value={form.name}
            onChange={onChange}
            placeholder={"Nome"}
            required
            type="name"
          />
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
            placeholder="Mínimo 6 caracteres"
            type="password"
            value={form.password}
            onChange={onChange}
            inputProps={{
              pattern: "[A-Za-z0-9]{6,}",
              title: "A senha deve conter pelo menos 6 caracteres"
            }}
          />
          <input
            name="confirmPassword"
            id="confirmar-senha"
            placeholder="Confirme a senha anterior"
            type="password"
            value={form.confirmPassword}
            onChange={onChange}
            inputProps={{
              pattern: "[A-Za-z0-9]{6,}",
              title: "A senha deve conter pelo menos 6 caracteres"
            }}
          />
          <div>
            <div>
              <button>Criar</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp
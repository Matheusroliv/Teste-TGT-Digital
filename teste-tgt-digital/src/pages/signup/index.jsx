import React from "react"
import { useHistory } from "react-router-dom"
import useForm from "../../hooks/useForm"
import {
  SignupPageContainer,
  BackButtonContainer,
  CreateAccountButton
} from './style'

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
    <SignupPageContainer>
      <h1>Cadastro</h1>
      <BackButtonContainer>
        <p onClick={history.goBack}>Voltar</p>
      </BackButtonContainer>
      <div>
        <form onSubmit={submitSignup}>
          <div>
            <input
              name="name"
              value={form.name}
              onChange={onChange}
              placeholder={"Nome"}
              required
              type="name"
            />
          </div>
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
              placeholder="Mínimo 6 caracteres"
              type="password"
              value={form.password}
              onChange={onChange}
              inputProps={{
                pattern: "[A-Za-z0-9]{6,}",
                title: "A senha deve conter pelo menos 6 caracteres"
              }}
            />
          </div>
          <div>
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
          </div>
          <div>
            <CreateAccountButton>
              <button>Criar</button>
            </CreateAccountButton>
          </div>
        </form>
      </div>
    </SignupPageContainer>
  );
}

export default SignUp
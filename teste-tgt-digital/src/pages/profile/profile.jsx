import React from "react"
import { useHistory } from "react-router-dom"

export function Profile() {
  const history = useHistory()
  const name = window.localStorage.getItem('name')

  const switchPageHandle = (idPage) => {
    history.push(`${idPage}`)
  }

  return (
    <div>
      <h1>Bem vindo, {name}</h1>
    </div>
  );
}

export default Profile
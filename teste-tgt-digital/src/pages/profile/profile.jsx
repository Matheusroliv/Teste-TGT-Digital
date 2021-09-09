import React, { useState } from "react"
import { useHistory } from "react-router-dom"

export function Profile() {
  const [post, setPost] = useState(
    [
      {
        title: 'Meu novo site!',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        author: 'mario',
        id: 1
      },
      {
        title: 'Bem vindos a festa dev',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        author: 'yoshi',
        id: 2
      },
      {
        title: 'Dicas para Desenvolvedores Web',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...',
        author: 'mario',
        id: 3
      }
    ])

  const history = useHistory()
  const name = window.localStorage.getItem('name')

  return (
    <div>
      <h1>Bem vindo ao seu Blog, {name}</h1>
      <div>
        {post.map((posts) => {
          return (
            <div key={posts.id}>
              <h3>{posts.title}</h3>
              <p>{posts.content}</p>
              <p>Escrito por {posts.author}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Profile
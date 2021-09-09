import React, { useState } from "react"
import PostList from "../../components/postList";

export function Profile() {
  const name = window.localStorage.getItem('name')
  const [post, setPost] = useState(
    [
      {
        title: 'Meu novo site!',
        content: 'lorem ipsum...',
        author: 'mario',
        id: 1
      },
      {
        title: 'Bem vindos a festa dev',
        content: 'lorem ipsum...',
        author: 'yoshi',
        id: 2
      },
      {
        title: 'Dicas para Desenvolvedores Web',
        content: 'lorem ipsum...',
        author: 'mario',
        id: 3
      }
    ])

  return (
    <div>
      <h1>Bem vindo ao seu Blog, {name}</h1>
      <PostList post={post}/>
    </div>
  );
}

export default Profile
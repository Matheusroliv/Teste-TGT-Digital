import React, { useState } from "react"
import Router from "./router"
import GlobalStyle from "./themes/globalStyle"

export const GlobalContext = React.createContext()

function App() {
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
      },
    ])

  const handleDelete = (id) => {
    const newPosts = post.filter(posts => posts.id !== id)
    setPost(newPosts)
  }

  const context = {
    post,
    setPost,
    handleDelete
  }

  return (
    <>
      <GlobalContext.Provider value={context}>
        <GlobalStyle />
        <Router />
      </GlobalContext.Provider>
    </>
  );
}

export default App

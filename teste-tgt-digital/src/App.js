import React, { useState } from "react"
import Router from "./router"
import GlobalStyle from "./themes/globalStyle"

export const GlobalContext = React.createContext()

function App() {
  const [post, setPost] = useState(
    [
      {
        title: 'Meu novo site!',
        content: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident...',
        author: 'mario',
        id: 1
      },
      {
        title: 'Bem vindos a festa dev',
        content: 'et quas molestias excepturi sint occaecati cupiditate non provident ipsa quae ab illo invento reipsa quae ab illo inventore...',
        author: 'yoshi',
        id: 2
      },
      {
        title: 'Dicas para Desenvolvedores Web',
        content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit...',
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

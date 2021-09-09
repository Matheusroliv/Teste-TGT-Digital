import React, { useState, useContext } from "react"
import BlogNavigator from "../../components/blogNavigator"
import { GlobalContext } from '../../App'

export function NewPost() {
  const postContext = useContext(GlobalContext)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [author, setAuthor] = useState('mario')

  const handleSubmit = (event) => {
    event.preventDefault()
    const id = postContext.post.length + 1
    const submitNewPost = { title, content, author, id }
    postContext.post.push(submitNewPost)
  }

  return (
    <div>
      <BlogNavigator />
      <h1>Adicionar um novo Post</h1>
      <form onSubmit={handleSubmit}>
        <label>Título do Post:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <label>Conteúdo:</label>
        <textarea
          required
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
        <label>Autor:</label>
        <select
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        <button>Postar</button>
        <p>Post preview</p>
        <p>{title}</p>
        <p>{content}</p>
        <p>Escrito por {author}</p>
      </form>
    </div>
  );
}

export default NewPost
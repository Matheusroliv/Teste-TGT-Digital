import React, { useState, useContext } from "react"
import BlogNavigator from "../../components/blogNavigator"
import { GlobalContext } from '../../App'
import { useProtectedPage } from "../../services/protectPage"
import {
  CreateContainer,
  PreviewContainer,
  PreviewContent,
  PreviewPost,
  PreviewTitle
} from './style'

export function NewPost() {
  useProtectedPage()
  const postContext = useContext(GlobalContext)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [author, setAuthor] = useState('mario')

  const handleSubmit = (event) => {
    event.preventDefault()
    const id = postContext.post.length + 1
    const submitNewPost = { title, content, author, id }
    postContext.post.push(submitNewPost)
    alert("Post enviado!")
  }

  return (
    <>
      <BlogNavigator />
      <CreateContainer>
        <h3>Adicionar um novo Post</h3>
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
        </form>
      </CreateContainer>
      <PreviewTitle>
        <p>Preview do Post</p>
      </PreviewTitle>
      <PreviewContainer>
        <PreviewPost>
          <h3>{title}</h3>
          <PreviewContent>
            <b>{content}</b>
          </PreviewContent>
          {title === "" || content === "" ? <div></div> : (
            <>
              <p>Escrito por {author}</p>
            </>
          )}
        </PreviewPost>
      </PreviewContainer>
    </>
  );
}

export default NewPost
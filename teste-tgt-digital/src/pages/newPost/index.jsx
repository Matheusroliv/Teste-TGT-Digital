import React, { useState } from "react"
import BlogNavigator from "../../components/blogNavigator";

export function NewPost() {
  const [title, setTitle] = useState('')
  const [textContent, setTextContent] = useState('')
  const [author, setAuthor] = useState('mario')

  return (
    <div>
      <BlogNavigator />
      <h1>Adicionar um novo Post</h1>
      <form>
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
          value={textContent}
          onChange={(event) => setTextContent(event.target.value)}
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
        <p>{textContent}</p>
        <p>Escrito por {author}</p>
      </form>
    </div>
  );
}

export default NewPost
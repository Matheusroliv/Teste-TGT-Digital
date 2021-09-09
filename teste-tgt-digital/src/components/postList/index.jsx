import React, { useContext } from "react"
import { GlobalContext } from '../../App'

export function PostList({ title }) {
  const postContext = useContext(GlobalContext)

  return (
    <div>
      <h2>{title}</h2>
      {postContext.post.map((posts) => {
        return (
          <div key={posts.id}>
            <h3>{posts.title}</h3>
            <p>{posts.content}</p>
            <p>Escrito por {posts.author}</p>
            <button
              onClick={() => postContext.handleDelete(posts.id)}>
              delete
            </button>
          </div>
        )
      })}
    </div>
  );
}

export default PostList
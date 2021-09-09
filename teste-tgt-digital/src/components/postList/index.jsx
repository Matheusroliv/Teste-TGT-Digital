import React from "react";

export function PostList(props) {
  return (
      <div>
        <h2>Todos os Posts!</h2>
        {props.post.map((posts) => {
          return (
            <div key={posts.id}>
              <h3>{posts.title}</h3>
              <p>{posts.content}</p>
              <p>Escrito por {posts.author}</p>
            </div>
          )
        })}
      </div>
  );
}

export default PostList
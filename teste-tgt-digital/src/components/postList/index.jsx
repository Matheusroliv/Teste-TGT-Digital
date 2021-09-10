import React, { useContext } from "react"
import { GlobalContext } from '../../App'
import {
  PostsContainer,
  ContentContainer,
  ButtonContainer
} from './style'

export function PostList({ title }) {
  const postContext = useContext(GlobalContext)

  return (
    <>
      <h2>{title}</h2>
      {postContext.post.map((posts) => {
        return (
          <PostsContainer key={posts.id}>
            <h3>{posts.title}</h3>
            <ContentContainer>
              <b>{posts.content}</b>
            </ContentContainer>
            <p>Escrito por {posts.author}</p>
            <ButtonContainer>
              <button
                onClick={() => postContext.handleDelete(posts.id)}>
                delete
              </button>
            </ButtonContainer>
          </PostsContainer>
        )
      })}
    </>
  );
}

export default PostList
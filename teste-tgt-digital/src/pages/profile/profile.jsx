import React, { useContext } from "react"
import PostList from "../../components/postList"
import { GlobalContext } from '../../App'
import BlogNavigator from "../../components/blogNavigator"
import {
  WelcomeContainer,
  MenuContainer
} from './style'

export function Profile() {
  const postContext = useContext(GlobalContext)
  const name = window.localStorage.getItem('name')

  return (
    <div>
      <BlogNavigator />
      <WelcomeContainer>
        <h1>Bem vindo, {name}</h1>
      </WelcomeContainer>
      <PostList
        title={"Todos os Posts!"}
      />
      <PostList
        post={postContext.post.filter((post) => post.author === 'mario')}
        title={"Posts de Mario"}
      />
      <PostList
        post={postContext.post.filter((post) => post.author === 'yoshi')}
        title={"Posts de Yoshi"}
      />
    </div>
  );
}

export default Profile
import React from "react"
import PostList from "../../components/postList"
import BlogNavigator from "../../components/blogNavigator"
import { useProtectedPage } from "../../services/protectPage"
import {
  WelcomeContainer,
  AllPostsContainer,
} from './style'

export function Profile() {
  useProtectedPage()
  const name = window.localStorage.getItem('name')

  return (
    <div>
      <BlogNavigator />
      <WelcomeContainer>
        <h1>Bem vindo, {name}</h1>
      </WelcomeContainer>
      <AllPostsContainer>
        <PostList
          title={"Todos os Posts!"}
        />
      </AllPostsContainer>
    </div>
  );
}

export default Profile
import React from "react"
import { useHistory } from "react-router-dom"
import {
  HeaderContainer,
  MenuContainer
} from './style'

export function BlogNavigator() {
  const history = useHistory()

  const handleNavMenu = (page) => {
    history.push(`${page}`)
  }

  return (
    <HeaderContainer>
      <h1>Blog Legal  </h1>
      <MenuContainer>
        <p onClick={() => handleNavMenu('/profile')}>Home</p>
        <p onClick={() => handleNavMenu('/newpost')}>Novo Post</p>
      </MenuContainer>
    </HeaderContainer>
  );
}

export default BlogNavigator
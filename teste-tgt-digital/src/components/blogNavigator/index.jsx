import React from "react"
import { useHistory } from "react-router-dom"

export function BlogNavigator() {
  const history = useHistory()

  const handleNavMenu = (page) => {
    history.push(`${page}`)
  }

  return (
    <div>
      <h1>Title Blog</h1>
      <div>
        <p onClick={() => handleNavMenu('/profile')}>Home</p>
        <p onClick={() => handleNavMenu('/newpost')}>New Post</p>
      </div>
    </div>
  );
}

export default BlogNavigator
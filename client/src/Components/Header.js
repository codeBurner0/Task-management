import React from 'react'
import {Link} from 'react-router-dom'
import "./Header.css"
function Header() {
  return (
    <header>
      <div className='app-name'><Link to="/">Blog App</Link></div>
      <div className='create-blog'><Link to="/AddBlog">Create Blog</Link></div>
    </header>
  )
}

export default Header

import React from 'react'
import '../styles/navbar.css'

const Navbar = () => {
  return (
    <React.Fragment>
    <nav class="navbar navbar-expand">
      <div class="container-fluid">
        <a class="navbar-brand company-name" href="#">Lorem</a>
        <ul class="navbar-nav">
          <a href="" class="navbar-brand"><i class="fa-solid fa-cart-arrow-down"></i></a>
          <a href="" class="navbar-brand"><i class="fa-solid fa-user"></i></a>
        </ul>
      </div>
    </nav>
    </React.Fragment>
  )
}

export default Navbar
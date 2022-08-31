import React from 'react'
import '../styles/navbar.css'
import {Navbar , Nav , Container } from 'react-bootstrap'
import {Link} from 'react-router-dom'

const HomeNavbar = () => {
  return (
    <React.Fragment>
    <Navbar className='navbar'>
      <Container fluid>
        <Navbar.Brand className="company-name" href="#">Lorem</Navbar.Brand>
        <Nav>
          <Navbar.Brand ><i className="fa-solid fa-cart-arrow-down"></i></Navbar.Brand>
          <Navbar.Brand ><Link to='/login'><i className="fa-solid fa-user"></i></Link></Navbar.Brand>
        </Nav>
      </Container>
    </Navbar>
    </React.Fragment>
  )
}

export default HomeNavbar
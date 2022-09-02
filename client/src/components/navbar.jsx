import React , {useState} from 'react'
import '../styles/navbar.css'
import {Navbar , Nav , Container } from 'react-bootstrap'
import {Link} from 'react-router-dom'

const HomeNavbar = () => {
  const [count,setCount] = useState(0)
  return (
    <React.Fragment>
    <Navbar className='navbar'>
      <Container fluid>
        <Navbar.Brand className="company-name" href="#">FreePatch</Navbar.Brand>
        <Nav>
          <Navbar.Brand ><Link to='/cart'>
          {count ?
           <div class='nav-cart-size'>
            <span style={count>=10?{fontSize: '0.7rem'}:{fontSize: '0.9rem'}}>{count}</span>
           </div> : ''}
					<i className='fas fa-shopping-cart navbar-icons' />
          </Link>
          </Navbar.Brand>

          <Navbar.Brand >
            <Link to='/login'><i className="fa-solid fa-user"></i></Link>
          </Navbar.Brand>
        </Nav>
      </Container>
    </Navbar>
    </React.Fragment>
  )
}


export default HomeNavbar
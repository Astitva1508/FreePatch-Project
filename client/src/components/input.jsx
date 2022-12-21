import React from 'react'
import {InputGroup} from 'react-bootstrap'
import '../styles/input.css'
import { Link } from 'react-router-dom'

const Input = () => {
  return (
    <React.Fragment>
        <section class="input">
            <InputGroup size='lg'>
                <input type="text" class="form-control" placeholder="Place product link" />
            </InputGroup>
            <InputGroup className="order-btn">
                <Link to='/productInfo'><button type="submit" class="link-btn fw-bold" style={{width:'100px'}}>GO</button></Link>
            </InputGroup>
        </section>
    </React.Fragment>
  )
}

export default Input
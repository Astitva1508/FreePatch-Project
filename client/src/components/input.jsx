import React from 'react'
import {InputGroup} from 'react-bootstrap'
import '../styles/input.css'

const Input = () => {
  return (
    <React.Fragment>
        <section class="input">
            <InputGroup size='lg'>
                <input type="text" class="form-control" placeholder="Place product link" />
            </InputGroup>
            <InputGroup className="order-btn">
                <button type="submit" class="link-btn">LOREM IPSUM</button>
                <button type="submit" class="link-btn">LOREM CONSECTETUR</button>
            </InputGroup>
        </section>
    </React.Fragment>
  )
}

export default Input
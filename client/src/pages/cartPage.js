import React from 'react'
import { useState } from 'react'
import { Container,Row,Col,Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../styles/cart.css'
import axios from 'axios'
import { useEffect } from 'react'

const Cart = () => {
    const [count,setCount] = useState(1)
    const [isHeadingEdit,setIsHeadingEdit] = useState(false)

  return (
    <div>
            <Row className='m-2 p-2 shopping-cart'>
                <Col md={7} lg={8} className='product-cart p-2 m-1' >
                    <h2 class='fw-bold py-2'>Shopping Cart</h2>
                    <a href="#" class="alert-link">Deselect All Items</a>
                    <section class='product-section mt-2 p-1'>
                        <Row  class='product m-5'>
        <Col xs={2} className='checkbox'>
            <input class="form-check-input" type="checkbox" value=""/>
        </Col>
        <Col xs={10} sm={8}>
            <article>
                <Col className='header mb-3'>
                    <h2 className="main-icon">A</h2>
                    <div class="info">
                        <div class="input-heading">
        <h5>AB:The Autobiography</h5>
        <span class="info-heading-edit-icon"><i class="fa-solid fa-pencil fa-sm"></i></span>
                        </div>
                        <p>By Amazon</p>
                    </div>
                </Col>
                <Col className='content'>
                    <div class="link content-item mb-2">
                        <span class="link-icon"><i class="fa-solid fa-link"></i></span>
                        <span class="link-text">localhost:3000</span>
                    </div>
                    
                    <div class="date content-item mb-2">
                        <span class="date-icon"><i class="fa-solid fa-calendar-days"></i></span>
                        <span class="date-text">August 30,2022</span>
                    </div>

                    <div class="category content-item mb-2">
                        <span class="category-icon"><i class="fa-solid fa-table"></i></span>
                        <span class="date-text">In Books</span>
                    </div>
                    
                </Col>
                <Col className='buttons'>
                    <button className='delete'></button>
                </Col>
            </article>
        </Col>
        <Col xs={2}></Col>
                        </Row>
                    </section>
                </Col>
                <Col md={4} lg={3} className='checkout m-1' >
                    <div>
                        <Col className='checkout-heading'>
                        <h4 class='p-3'>SubTotal:{count + ''}Item(s)</h4>
                    </Col>
                    <Col className='checkout-button'>
                        <div className="p-3">
                            <button class='btn btn-primary'>Place Order</button>
                        </div>
                    </Col>
                    </div>
                </Col>
            </Row>
    </div>
  )
}

export default Cart

// <Alert variant={'primary'}>
//     Your Shopping Cart is Empty {'  '}
//     <Alert.Link href="/">Go Back</Alert.Link>
//                     </Alert>
import React, { useEffect, useRef, useState } from 'react';
import '../styles/login.css'
import {Navbar,Container, Col,Row, InputGroup,Form} from 'react-bootstrap'
import{Link} from 'react-router-dom'
// import {githubLogo , googleLogo , linkedinLogo , twitterLogo} from '../assets/'
import GoogleButton from 'react-google-button';

function LoginPage() {
    const [showPassword , setShowPassword] = useState(false)
    const inputReference = useRef()
    const passwordVisibility=()=>{
        setShowPassword(!showPassword)
    }

    useEffect(()=>{inputReference.current.type=showPassword?'text':'password'})
    
  return (
<div>
    <Navbar className='navbar'>
      <Container fluid style={{justifyContent:'center', letterSpacing:'2px'}}>
        <Navbar.Brand className="company-name" href="/">FreePatch</Navbar.Brand>
      </Container>
    </Navbar>
    <Container fluid className='login-container my-5 '>
        <Col>
            <h1 class='fw-bold py-3'>Sign-In</h1>
            <Form>
                <Form.Group className="my-3" controlId="">
                    <Form.Label htmlFor="" className='fw-semibold'>Email address</Form.Label>
                    <Form.Control type="email" />
                </Form.Group>
                <Form.Group className="my-3" controlId="">
                    <Form.Label htmlFor="" className='fw-semibold'>Password</Form.Label>
                    <InputGroup className="mb-1 password-input">
                        <Form.Control type="password" className='password-input-box' ref={inputReference}/>
                        <span onClick={passwordVisibility} class="input-group-text">
                        {!showPassword?<i class="fa-solid fa-eye"></i>:<i class="fa-solid fa-eye-slash"></i>}
                        </span>
                    </InputGroup>
                    <a href="/forgot">Forgot Password?</a>
                </Form.Group>
            </Form>
            <div class="my-3 text-center d-grid">
                <button type="submit" class="link-btn fw-bold">Login</button>
            </div>
            <div class="my-4">
                <Form.Check id='check-api-checkbox'>
                    <Form.Check.Input type='checkbox' />
                    <Form.Check.Label>Keep me Signed In</Form.Check.Label>
                </Form.Check>
            </div>
        </Col>
    </Container>
    <Container>
        <Row style={{justifyContent:'center'}}>
            {/* <div class="col col-md-6 signup">
             */}
            <Col md={6} className='signup'>
                <Col class="line col col-2 col-md-4 " xs={2} className='line' md={4} />
                <Col xs={8} md={4} style={{
                    padding:'0',
                    textAlign:'center',
                    fontWeight: '900',
                    letterSpacing:'1px',
                    fontSize: '.9rem',}}>
                    New to FreePatch ?
                </Col>
                <Col class="line col col-2 col-md-4 " xs={2} className='line' md={4} />
            </Col>
        </Row>
        <Row className='mt-1 mb-4' style={{justifyContent:'center'}}>
            <Col md={6}>
                <div class="my-1 text-center d-grid">
                <Link to='/register'>
                    <button type="submit" class="link-btn signup-btn fw-bold">Create your FreePatch Account</button>
                </Link>
                </div>
            </Col>
        </Row>

        <Row style={{justifyContent:'center'}} className='mb-3'>
            <Col md={6} className='social-login'>
            <Col xs={2} className='line' md={4} />
            <Col xs={8} md={4} style={{
                    padding:'0',
                    textAlign:'center',
                    fontWeight: '900',
                    letterSpacing:'1px',
                    fontSize: '.9rem',}}>
                    OR
                </Col>
            <Col xs={2} className='line' md={4} />
            </Col>
        </Row>

        <Row style={{justifyContent:'center'}}>
            <Col md={6} className='social-login-icons'>
                    <GoogleButton />
            </Col>
        </Row> 


        {/* <Row style={{justifyContent:'center'}}>
            <Col md={6} className='social-login'>
                <Col xs={2} className='line' md={4} />
                <Col xs={8} md={4} style={{
                    padding:'0',
                    textAlign:'center',
                    fontWeight: '900',
                    letterSpacing:'1px',
                    fontSize: '.9rem',}}>
                    Or Sign-In using
                </Col>
                <Col xs={2} className='line' md={4} />
            </Col>
        </Row>
        <Row style={{justifyContent:'center'}}>
            <Col md={6} className='social-login-icons'>
                    <Col xs={2}><img src={googleLogo} alt=''/></Col>
                    <Col xs={2}><img src={githubLogo} alt=''/></Col>
                    <Col xs={2}><img src={twitterLogo} alt=''/></Col>
                    <Col xs={2} ><img src={linkedinLogo} alt=''/></Col>
            </Col>
        </Row> */}
        
    </Container>
</div>
  );
}

export default LoginPage;


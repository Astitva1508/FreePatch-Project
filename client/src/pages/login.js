import React, { useEffect, useRef, useState } from 'react';
import '../styles/login.css'
import {Navbar, Nav,Container} from 'react-bootstrap'
import{Link} from 'react-router-dom'

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
        <Navbar.Brand className="company-name" href="#">FreePatch</Navbar.Brand>
      </Container>
    </Navbar>
    <div class='container login-container my-5 '>
        <div class='row' style={{justifyContent:'center'}}>
            <div class="col col-md-6 ">
                <h1 class='fw-bold py-3'>Sign-In</h1>
                <div class="my-3">
                    <label for="" class="form-label fw-semibold">Email or Phone Number</label>
                    <input type="email" class="form-control" id="" />
                </div>
                <div class="my-3">
                    <label for="" class="form-label fw-semibold">Password</label>
                    <div class="input-group password-input mb-1">   
                        <input type="password" ref={inputReference} class="form-control" id=""/>
                        <span onClick={passwordVisibility} class="input-group-text">
                        {!showPassword?<i class="far fa-eye"></i>:<i class="far fa-eye-slash"></i>}
                        </span>
                    </div>
                    <a href="" >Forgot Password?</a>
                </div>
                <div class="my-3 text-center d-grid">
                    <button type="submit" class="link-btn login-signup-btn fw-bold">Login</button>
                </div>
                <div class="my-4">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault">
                            Keep me Signed In
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row" style={{justifyContent:'center'}}>
            <div class="col col-md-6 signup">
                <div class="line col col-2 col-md-4 "></div>
                <div class='col col-8 col-md-4' style={{
                    padding:'0',
                    textAlign:'center',
                    fontWeight: '900',
                    letterSpacing:'1px',
                    fontSize: '.9rem'}}>
                    New to FreePatch ?
                </div>
                <div class='line col col-2 col-md-4'></div>
            </div>
        </div>
        <div class='row my-3' style={{justifyContent:'center'}}>
            <div class="col-md-6">
                <div class="my-3 text-center d-grid">
                <Link to='/register'>
                    <button type="submit" class="link-btn login-signup-btn fw-bold" style={{width:'100%'}}>Create your FreePatch Account</button>
                </Link>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}

export default LoginPage;


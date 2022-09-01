import React from 'react';
import '../styles/login.css'
import '../styles/register.css'
import {Navbar,Container, Col,Row,Form} from 'react-bootstrap'
import {githubLogo , googleLogo , linkedinLogo , twitterLogo} from '../assets/'

function RegisterPage() {

  return (
<div>
    <Navbar className='navbar'>
      <Container fluid style={{justifyContent:'center', letterSpacing:'2px'}}>
        <Navbar.Brand className="company-name" href="/">FreePatch</Navbar.Brand>
      </Container>
    </Navbar>
    <Container fluid className='login-container my-5 '>
        <Col>
            <h1 class='fw-bold py-3'>Create Account</h1>
            <Form>
                <Form.Group className="mt-3 mb-2" controlId="">
                    <Form.Label htmlFor="" className='fw-semibold'>Your Name</Form.Label>
                    <Form.Control type="text" placeholder='First and Last Name'/>
                </Form.Group>
                <Form.Group className="my-2" controlId="">
                    <Form.Label htmlFor="" className='fw-semibold'>Email</Form.Label>
                    <Form.Control type="email" />
                </Form.Group>
                <Form.Group className="my-2" controlId="">
                    <Form.Label htmlFor="" className='fw-semibold'>Password</Form.Label>
                    <Form.Control type="password" />
                    <Form.Text>
                        <i class="fa-solid fa-info fa-sm"/>Password must be at least 6 characters 
                    </Form.Text>
                </Form.Group>
                <Form.Group className="my-2" controlId="">
                    <Form.Label htmlFor="" className='fw-semibold'>Re-Enter Password</Form.Label>
                    <Form.Control type="password" />
                </Form.Group>
                <p class='mt-4'>We will send you an OTP on your email to verify you.
                </p>
            </Form>
            <div class="my-3 text-center d-grid">
                <button type="submit" class="link-btn fw-bold">Continue</button>
            </div>
        </Col>
    </Container>
    <Container>
        <Row className='mb-3' style={{justifyContent:'center'}}>
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
                    Or Connect With
                </Col>
                <Col class="line col col-2 col-md-4 " xs={2} className='line' md={4} />
            </Col>
        </Row>
        <Row style={{justifyContent:'center'}}>
            <Col md={6} className='social-login-icons'>
                    <Col xs={2}><img src={googleLogo} alt=''/></Col>
                    <Col xs={2}><img src={githubLogo} alt=''/></Col>
                    <Col xs={2}><img src={twitterLogo} alt=''/></Col>
                    <Col xs={2} ><img src={linkedinLogo} alt=''/></Col>
            </Col>
        </Row>
    </Container>
</div>
  );
}

export default RegisterPage;


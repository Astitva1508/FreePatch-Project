import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom' 
import {ThemeProvider} from 'react-bootstrap'
import Home from './pages/homepage'
import Login from './pages/login'
import Register from './pages/register'
import ProductInfo from './pages/productInfo.js'
import Cart from './pages/cartPage'
import HomeNavbar from './components/navbar'
function App() {
  return (

    <ThemeProvider breakpoints={['lg', 'md', 'sm', 'xs']}>
      
      <Router>
        <HomeNavbar/>
        <main>
          <Routes>
            <Route exact path='/' element={<Home/>} ></Route>
            <Route exact path='/login' element={<Login />} ></Route>
            <Route exact path='/register' element={<Register />} ></Route>
            <Route exact path='/productInfo' element={<ProductInfo />} ></Route>
            <Route exact path='/cart' element={<Cart />} ></Route>
          </Routes>
        </main>
      </Router>
    </ThemeProvider>
  );
}

export default App;

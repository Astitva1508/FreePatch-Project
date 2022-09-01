import {BrowserRouter as Router, Route, Routes} from 'react-router-dom' 
import {ThemeProvider} from 'react-bootstrap'
import Home from './pages/homepage'
import Login from './pages/login'
import Register from './pages/register'

function App() {
  return (
    <ThemeProvider breakpoints={['lg', 'md', 'sm', 'xs']}>
      <Router>
        <main>
          <Routes>
            <Route exact path='/' element={<Home/>} ></Route>
            <Route exact path='/login' element={<Login />} ></Route>
            <Route exact path='/register' element={<Register />} ></Route>
          </Routes>
        </main>
      </Router>
    </ThemeProvider>
  );
}

export default App;

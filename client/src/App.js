import {BrowserRouter as Router, Route, Routes} from 'react-router-dom' 
import Home from './pages/homepage'
import Login from './pages/login'

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route exact path='/' element={<Home/>} ></Route>
          <Route exact path='/login' element={<Login />} ></Route>
        </Routes>
      </main>
    </Router>
  );
}

export default App;

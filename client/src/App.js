import {BrowserRouter as Router, Route, Routes} from 'react-router-dom' 
import Home from './pages/homepage'

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route exact path='/' element={<Home/>} ></Route>
        </Routes>
      </main>
    </Router>
  );
}

export default App;

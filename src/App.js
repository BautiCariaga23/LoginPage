import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { Route, Routes } from 'react-router-dom';
import Register from './components/Register';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element = {<Login></Login>}></Route>
        <Route path='/Register' element = {<Register></Register>}></Route>
      </Routes>
    </div>
  );
}

export default App;

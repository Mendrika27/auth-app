import React from 'react';
import './App.css';
import Form from './components/form';
import { Home } from './components/Home';
import { BrowserRouter as Router , Routes , Route , Navigate} from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/Login' element ={<Form/>}/>
        <Route path='/' element ={<Navigate to='/Login'/>} />
        <Route path='/Home' element={<Home />} />
      </Routes> 
    </Router>   
  );
}

export default App;

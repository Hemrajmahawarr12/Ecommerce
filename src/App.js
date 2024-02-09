import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Nav from './Component/nav';
import Routs from './Component/routs';
import Home from './Component/Home';

function App() {
  return (
   
    <BrowserRouter>
  <div className="App">
   <Nav />
   <Routs />
    </div>
      
    </BrowserRouter>
  );
}

export default App;

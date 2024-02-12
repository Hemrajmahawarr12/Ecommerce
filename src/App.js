import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Nav from './Component/nav';
import Routs from './Component/routs';
import './Component/nav.css';
import Footer from './Component/footer';

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
      <div className="App">
        {!isLoginPage && <Nav />}
          <Routs />
        {!isLoginPage && <Footer />}
      </div>
  )
}

export default App;
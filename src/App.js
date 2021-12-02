import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';
function App() {
  return (
    <>
    <Router>
      
    <Navbar />
    {/* <Home/>/     */}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/services' element={<Services/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>

      </Routes>
      <Footer/>
    </Router>

  </>
  );
}

export default App;

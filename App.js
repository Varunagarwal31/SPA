import './App.css';
import React from 'react';
import Header1 from './Components/Header/Header1';
import Header2 from './Components/Header/Header2';
import Main from './Components/Main/Main';
import Welcome from './Components/welcome/welcome';
import Product from './Components/product/product';
// import Header from './Components/Header/Header';
// import Footer from './Components/Footer/Footer';
import Counter from './Components/Counter/Counter';
import Product2 from './Components/product/product2';
import Login from './Components/Login/Login';
import Parent from './Components/Parent/Parent';
import Son from './Components/Son/Son';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './dymamic/About/About'
import Footer from './dymamic/Footer/Footer';
import Header from './dymamic/Header/Header';
import Home from './dymamic/Home/Home';
import Contact from './dymamic/Contact/Contact';
import Courses from './dymamic/Courses/Courses'
import Logout from './dymamic/Logout/Logout'
import CG from './context/CG/CG';
import Movie from './Hooks';

export const cgContext = React.createContext();
export const wbContext = React.createContext("Funds not avaliable");

// const cgFunds = {
//   money: 2000000,
//   lands: 333344
// }

// const wbFunds = {
//   loans : 6000000,
//   interestRate : "11.2%"
// }

//value can be anything, like string, number etc...

function App() {
  return (
    <div id='App'>
      {/* <Movie></Movie> */}
      {/* <cgContext.Provider value={cgFunds}>
        <wbContext.Provider>
            <CG></CG>
        </wbContext.Provider>
      </cgContext.Provider> */}



      {/* <Counter></Counter> */}
      {/* <Header></Header>  */}
      {/* <Header1></Header1>
      <Header2></Header2>
      <Main></Main> */}
      {/* <product1></product1> */}
      {/* <Product2></Product2> */}
      {/* <Login></Login> */}
      {/* <Parent></Parent> */}
      {/* <Son></Son> */}
      {/* <Welcome message="Hello" date="01/01/0001"></Welcome> */}
      {/* <Product pid={1111} pName="IPhone13" pPrice={70000} pRating={4.5}></Product>
      <Product pid={1112} pName="Samsung galaxy" pPrice={50000} pRating={4.5}></Product>
      <Product pid={1113} pName="oppo" pPrice={40000} pRating={4.5}></Product> */}
      {/* <Footer></Footer> */}
      {/* <Header></Header> */}
      <Router>
         <nav className="navbar navbar-expand-lg bg-dark">
         <div className="row">
          <ul className='col-md-12 col-sm-12 col-lg-12 linkpages'>
            <li className='col-md-2 col-sm-1 col-lg-2 ps-4'><Link to="/home">Home</Link></li>
            <li className='col-md-2 col-sm-1 col-lg-2'><Link to="/about">About Us</Link></li>
            <li className='col-md-2 col-sm-1 col-lg-2'><Link to="/contact">Contact Us</Link></li>
            <li className='col-md-2 col-sm-1 col-lg-2'><Link to="/courses">Courses</Link></li>
            <li className='col-md-2 col-sm-1 col-lg-4 text-end'><Link to="/logout">Logout</Link></li>
          </ul>
          </div>
          </nav>
          <Routes>
                 <Route exact path='/home' element={
                 <div>
                  <Header></Header>
                  < Home />
                 <Footer></Footer> 
                 </div>
                 }></Route>
                 <Route exact path='/about' element={< About />}></Route>
                 <Route exact path='/contact' element={< Contact />}></Route>
                 <Route exact path='/courses' element={<  Courses/>}></Route>
                 <Route exact path='/logout' element={<  Logout/>}></Route>
          </Routes>
      </Router>
      
      <Footer></Footer>  
    </div>
  )
}

export default App;

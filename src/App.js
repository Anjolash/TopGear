import { BrowserRouter as Router, matchPath, Route, Routes, useLocation } from 'react-router-dom';

import { cars } from "./data"
import Footer from './components/Footer';
import Nav from './components/Nav';
import logo from './logo.svg';
import Home from './pages/Home';
import Vehicles from './pages/Vehicles';
import VehicleInfo from './pages/VehicleInfo';
import { useEffect, useState } from 'react';
import Cart from './pages/Cart';


const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]" )
const App=() => {
  const location = useLocation(); 
  const { pathname, hash, key } = useLocation();
  const [cart, setCart] = useState(cartFromLocalStorage);

  useEffect(() =>{
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  function addToCart(car) {
    setCart([...cart,{...car, quantity: 1}])
  } 

  function changeQuantity(book, quantity){
    setCart(cart.map(item => 
       item.id === book.id
        ? {
          ...item,
          quantity: +quantity,
        }
      
      : item
      
    ))
    

  }

  function removeItem(item) {
    setCart(cart.filter(book => book.id !== item.id))
  }


  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === '') {
      window.scrollTo(0, 0);
    }
    // else scroll to id
    else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [pathname, hash, key]); // do this on route change
 
  const match = matchPath(
    { path: "/vehicles/:id" },
    location.pathname,
  );

  function numberOfItems() {
    let counter = 0;
    cart.forEach(item => {
      counter += item.quantity
    })
    return counter
  }


  

  
  return (
    
      <div className="App">
        
        <Nav numberOfItems={numberOfItems()} />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/vehicles" exact element={<Vehicles cars={cars} cart={cart} addToCart={addToCart}/>} />
          <Route path="/vehicles/:id" exact element={ <VehicleInfo cars={cars} cart={cart} addToCart={addToCart} /> } />
          <Route path="/cart" element={<Cart cars={cars} cart={cart} changeQuantity={changeQuantity} removeItem={removeItem}  />} />
        </Routes>
          
          {!match &&  <Footer />}
       
      </div>
    
  );
}

export default App;

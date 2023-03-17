import './App.css';
import Home     from './component/Home';
import Navbar   from './component/Navbar';
import Footer   from './component/Footer';
import Product  from './component/Product';
import Product2 from './component/Product2';
import About    from './component/About';
import Contact  from './component/Contact';
import { Route,Routes } from 'react-router-dom';
import Cart from './component/Cart';
import Checkout from './component/Checkout';
import Login from './component/Login'
import Register from './component/Register';
import Wishlist from './component/Wishlist';
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/'             element={ <Home/> }/>
        <Route path='/about'        element={ <About/> }/>
        <Route path='/product'      element={ <Product/> }/>
        <Route path='/product2/:id' element={ <Product2/> }/>
        <Route path='/contact'      element={ <Contact/> }/>
        <Route path='/cart'         element={ <Cart/> }/>
        <Route path='/checkout'     element={ <Checkout/> }/>
        <Route path='/login'        element={ <Login/> }/>
        <Route path='/register'     element={ <Register/> }/>
        <Route path='/wishlist'     element={ <Wishlist/> }/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

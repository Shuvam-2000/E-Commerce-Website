import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { ShoppingContextProvider } from './context/ContextShop';
import Home from './pages/Home';
import Collection from './pages/Collection';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css'; 


function App() {
  return (
    <>
    <ShoppingContextProvider>
      <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
        <ToastContainer/>
        <BrowserRouter>
            <Navbar/>
            <SearchBar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/collection' element={<Collection/>}/>
                <Route path='/aboutus' element={<AboutUs/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/products/:productId' element={<Products/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/place-order' element={<PlaceOrder/>}/>
                <Route path='/orders' element={<Orders/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
      </div> 
      </ShoppingContextProvider> 
    </>
  );
}

export default App;

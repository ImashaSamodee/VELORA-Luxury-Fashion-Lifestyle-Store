import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import NewIn from './Pages/NewIn';
import Sale from './Pages/Sale';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens_new.jpg';
import women_banner from './Components/Assets/banner_women_new.jpg';
import kid_banner from './Components/Assets/banner_kids_new.jpg';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar /> 
        <div className="main-content">
          <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" />} />
            <Route path='/womens' element={<ShopCategory banner={women_banner} category="women" />} />
            <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid" />} />
            <Route path='/new-in' element={<NewIn />} />
            <Route path='/sale' element={<Sale />} />
            <Route path='/product' element={<Product />}>
              <Route path=':productId' element={<Product />} />
            </Route>
            <Route path='/cart' element={<Cart />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter> 
    </div>
  );
}

export default App;

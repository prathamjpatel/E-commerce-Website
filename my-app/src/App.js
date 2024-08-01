
import './App.css';
import Navbar from './Components/Navbar/Navbar';
// import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import Login from './Pages/Login';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import ShopCategory from './Pages/ShopCategory';
import { BrowserRouter, Route , Routes } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kid_banner from './Components/Assets/banner_kids.png';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Shop/>}/>
        <Route path='/Men' element = {<ShopCategory banner={men_banner} category="men" />}/>
        <Route path='/Women' element = {<ShopCategory banner={women_banner} category="women"/>}/>
        <Route path='/Kids' element = {<ShopCategory banner={kid_banner} category="kid"/>}/>
        <Route path='Product' element={<Product/>}>
           <Route path=':productId' element = {<Product/>}/>
        </Route>
        <Route path='/Cart' element = {<Cart/>}/>
        <Route path='/Login' element = {<Login/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;

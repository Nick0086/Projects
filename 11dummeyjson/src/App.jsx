import './App.css';
import Header from './Components/Header';
import HomePage from './Pages/HomePage';
import { Outlet, Route, Routes } from 'react-router-dom';
import ProductDetailPage from './Pages/ProductDetailPage';
import CartPage from './Pages/CartPage';

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products/category/:categoryname' element={<HomePage />} />
        <Route path='/productdetail/:id' element={<ProductDetailPage />} />
        <Route path='/cart' element={<CartPage />} />
      </Routes>
    </>
  );
}

export default App;

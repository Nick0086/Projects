import './App.css';
import Header from './Components/Header';
import HomePage from './Pages/HomePage';
import { Outlet, Route, Routes } from 'react-router-dom';
import ProductDetailPage from './Pages/ProductDetailPage';

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products/category/:categoryname' element={<HomePage />} />
        <Route path='/search/:keyword' element={<HomePage />} />
        <Route path='/productdetail' element={<ProductDetailPage />} />
      </Routes>
    </>
  );
}

export default App;

import { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header';
import HomePage from './Pages/HomePage';
import axios from 'axios';
import { Outlet, Route, Routes } from 'react-router-dom';
import ProductDetailPage from './Pages/ProductDetailPage';

function App() {

  const [products, setProducts] = useState(null);
  const [limit, setLimite] = useState(0);
  const [category, setCategorys] = useState();
  // const [serch, setSerch] = useState();
  

  const categoryHandler = (catego) => {
    setCategorys(catego);
  }

  // const serchHandler = (serchValue) => {
  //   setSerch(serchValue);
  // }

  useEffect(() => {
    let url = 'https://dummyjson.com/products'
    if (category) {
      url = `https://dummyjson.com/products/category/${category}`;
    }
    axios.get(`${url}?skip=${limit}&limit=30`)
      .then((res) => setProducts(res.data))
      .catch(error => console.log("error in fetch products : ", error));
  }, [limit, category])

  console.log(products)

  return (
    <>
      {
        !products ? <div className="loader" /> :
          <>
            <Header />
            <Outlet />

            <Routes>
              <Route path='/' element={<HomePage products={products} limit={limit} setLimite={setLimite} setCategory={categoryHandler} />} />
              <Route path='/products/category/:category' element={<HomePage products={products} limit={limit} setCategory={categoryHandler} setLimite={setLimite} />} />
              <Route path='/products/searchsearch?q=:keyword' element={<HomePage products={products} limit={limit} setLimite={setLimite}  />} />
              <Route path='/productdetail' element={<ProductDetailPage/>} />
            </Routes>
          </>
      }
    </>
  );
}

export default App;

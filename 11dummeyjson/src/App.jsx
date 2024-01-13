import { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header';
import HomePage from './Pages/HomePage';
import axios from 'axios';
import { Outlet, Route, Routes} from 'react-router-dom';

function App() {

  const [products, setProducts] = useState(null);
  const [limit, setLimite] = useState(0);
  const [category,setCategory] = useState();
  let url  =  'https://dummyjson.com/products'

  const categoryHandler = (catego) => {
    setCategory(catego);
  }

  useEffect(() => {

    if(category){
       url = `https://dummyjson.com/products/category/${category}`;
    }
    axios.get(`${url}?skip=${limit}&limit=${(limit + 30) < 100 ? limit + 30 : 100}`)
      .then((res) => setProducts(res.data))
      .catch(error => console.log("error in fetch products : ", error));

  }, [limit,category])

  console.log(products)

  return (
    <>
      {
        !products ? <div className="loader" /> :
          <>
            <Header />
            <Outlet />


            <Routes>
              <Route path='/' element={<HomePage products={products} limit={limit} setLimite={setLimite} setCategory={categoryHandler}/>} />
              <Route path='/products/category/:category' element={<HomePage products={products} limit={limit} setCategory={categoryHandler} setLimite={setLimite}/>} />
            </Routes>
          </>
      }
    </>
  );
}

export default App;

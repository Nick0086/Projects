import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import Colllectionpage from './pages/Collectionpage';
import Blogpage from './pages/Blogpage';
import Contact from './pages/Contactpage';
import { Route, Routes } from 'react-router-dom';
import Headers from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Headers />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<Aboutus />} />
        <Route path='/collection' element={<Colllectionpage />} />
        <Route path='/blog' element={<Blogpage />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

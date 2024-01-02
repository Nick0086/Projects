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


const header = [
  {
    page:"Home",
    link:"/"
  },
  {
    page: "About",
    link: "/about"
  },
  {
    page:"Collection",
    link:"/collection"
  },
  {
    page: "Blog",
    link: "/blog"
  },

  {
    page: "Contact",
    link: "/contact"
  }

]

const collection = [
  {
    scr:require('./assets/gallery-1.jpg'),
    title:"Business Finance Consulting",
    md:3,
  },
  {
    scr:require('./assets/gallery-2.jpg'),
    title:"Business Finance Consulting",
    md:3,
  },
  {
    scr:require('./assets/gallery-3.jpg'),
    title:"Business Finance Consulting",
    md:6,
  },
  {
    scr:require('./assets/gallery-4.jpg'),
    title:"Business Finance Consulting",
    md:5,
  },
  {
    scr:require('./assets/gallery-5.jpg'),
    title:"Business Finance Consulting",
    md:3,
  },
  {
    scr:require('./assets/gallery-6.jpg'),
    title:"Business Finance Consulting",
    md:4,
  },
]

const fullcollection = [
  {
    scr:require('./assets/gallery-1.jpg'),
    title:"Business Finance Consulting",
    md:3,
  },
  {
    scr:require('./assets/gallery-2.jpg'),
    title:"Business Finance Consulting",
    md:3,
  },
  {
    scr:require('./assets/gallery-3.jpg'),
    title:"Business Finance Consulting",
    md:6,
  },
  {
    scr:require('./assets/gallery-4.jpg'),
    title:"Business Finance Consulting",
    md:5,
  },
  {
    scr:require('./assets/gallery-5.jpg'),
    title:"Business Finance Consulting",
    md:3,
  },
  {
    scr:require('./assets/gallery-6.jpg'),
    title:"Business Finance Consulting",
    md:4,
  },
  {
    scr:require('./assets/image_1.jpg'),
    title:"Business Finance Consulting",
    md:4,
  },
  {
    scr:require('./assets/image_2.jpg'),
    title:"Business Finance Consulting",
    md:4,
  },
  {
    scr:require('./assets/image_3.jpg'),
    title:"Business Finance Consulting",
    md:4,
  },
]


function App() {
  return (
    <>
      <Headers headerData={header} />
      <Routes>
        <Route path='/' element={<Home collectionData={collection} />} />
        <Route path='/about' element={<Aboutus />} />
        <Route path='/collection' element={<Colllectionpage fullcollectionDatat={fullcollection} />} />
        <Route path='/blog' element={<Blogpage />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

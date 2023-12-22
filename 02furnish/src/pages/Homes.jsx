import Header from "../components/Header"
import Slider from "../components/Slider"
import About from "../components/About"
import Service from "../components/Service"
import Colllection from "../components/Collection"
import Statistics from "../components/Statistics"
import Testimonial from "../components/Testimonial"
import Blog from "../components/Blog"
import Footer from "../components/Footer"

const Home = () => {
    return(
        <>
            <Header/>
            <Slider/>
            <About/>
            <Service/>
            <Colllection/>
            <Statistics/>
            <Testimonial/>
            <Blog/>
            <Footer/>
        </>
    )
}

export default Home;
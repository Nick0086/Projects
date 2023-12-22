import About from "../components/About";
import Blogs from "../components/Blogs";
import Colllection from "../components/Colllection";
import Services from "../components/Services";
import Slider from "../components/Slider";
import Statistics from "../components/Statistics";
import Testimonial from "../components/Testimonial";

function Home() {
    return(
        <>
            <Slider/>
            <Services/>
            <About/>
            <Colllection/>
            <Statistics/>
            <Testimonial/>
            <Blogs/>
        </>
    )
}

export default Home;
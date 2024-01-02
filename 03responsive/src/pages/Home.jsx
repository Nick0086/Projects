import About from "../components/About";
import Blogs from "../components/Blogs";
import Colllection from "../components/Colllection";
import Services from "../components/Services";
import Slider from "../components/Slider"; 
import Statistics from "../components/Statistics";
import Testimonial from "../components/Testimonial";

function Home({collectionData,serviceData,statisticsData}) {
    return(
        <>
            <Slider/>
            <Services serviceData={serviceData}/>
            <About/>
            <Colllection collectionData={collectionData}/>
            <Statistics statisticsData={statisticsData}/>
            <Testimonial/>
            <Blogs/>
        </>
    )
}

export default Home;
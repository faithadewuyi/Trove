
import Banner from '../../components/banner/Banner'
import CounterSection from './homePageComponents/CounterSection';
import Marquee from './homePageComponents/Marquee'
import Auction from './homePageComponents/Auction'
import MenSection from './homePageComponents/MenViewSection'
import Sales from './homePageComponents/Sales'
import WomenSection from './homePageComponents/WomenViewSection'
import BlogSection from './homePageComponents/BlogSection'
import AssuranceSection from './homePageComponents/AssuranceSection'
import AboutSection from './homePageComponents/AboutSection'
import TestySection from './homePageComponents/TestySection'
import BrandsSection from './homePageComponents/BrandsSection'
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
const Home = () => {
  return (
    <>  <Navbar/>
        <Banner />
        <Marquee text="ITEMS LISTED ON OUR SITE ARE THOROUGHLY AUTHENTICATED BY INDUSTRY EXPERTS || ITEMS LISTED ON OUR SITE ARE THOROUGHLY AUTHENTICATED BY INDUSTRY EXPERTS || ITEMS LISTED ON OUR SITE ARE THOROUGHLY AUTHENTICATED BY INDUSTRY EXPERTS || ITEMS LISTED ON OUR SITE ARE THOROUGHLY AUTHENTICATED BY INDUSTRY EXPERTS || ITEMS LISTED ON OUR SITE ARE THOROUGHLY AUTHENTICATED BY INDUSTRY EXPERTS ||" />
        <CounterSection />
        <Auction />
        <h2 className="text-3xl  text-center font-bold text-gray-600 mt-28 mb-12">Luxe Trove Product Collection</h2>
        <MenSection />
        <Sales />
        <WomenSection />
        <BlogSection />
        <AssuranceSection />
        <AboutSection />
        <TestySection />
        <BrandsSection />
        <Footer/>

    </>
  )
}

export default Home
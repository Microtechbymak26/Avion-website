import BrandDetails from "./components/BrandDetail";
import Club from "./components/club";
import Footer from "./components/Footer";
import GetInTouch from "./components/GetInTouch";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import NewCeramics from "./components/NewCeramics";
import OurProduct from "./components/OurProduct";

const Home: React.FC = () => {
  return (
    <>
        <NavBar />
        <Hero />
        <BrandDetails />
        <NewCeramics  />
        <OurProduct />
        <Club/>
        <GetInTouch/>
        <Footer/>
    </>
  );
};

export default Home;
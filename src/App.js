import Comments from "./components/body/Comments";
import Cooperation from "./components/body/Cooperation";
import Description from "./components/body/Description";
import FunFacts from "./components/body/FunFacts";
import LeaderShip from "./components/body/LeaderShip";
import Footer from "./components/footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import SwiperContainer from "./components/swiper/SwiperContainer";

function App() {
  return (
    <div>
      <Navbar/>
      <SwiperContainer/>
      <Description/>
      <FunFacts/>
      <LeaderShip/>
      <Comments/>
      <Cooperation/>
      <Footer/>
    </div>
  );
}
export default App;

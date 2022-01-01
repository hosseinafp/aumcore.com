import Comments from "./components/body/Comments";
import Cooperation from "./components/body/Cooperation";
import FunFacts from "./components/body/FunFacts";
import LeaderShip from "./components/body/LeaderShip";
import Footer from "./components/footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Slider from "./components/body/Slider";

function App() {
  return (
    <div>
      <Navbar/>
      <Slider/>
      <FunFacts/>
      <LeaderShip/>
      <Comments/>
      <Cooperation/>
      <Footer/>
    </div>
  );
}
export default App;

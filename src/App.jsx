import logo from './logo.svg';
//import './App.css';
import Card from './components/Card';
import sedans from './images/icon-sedans.svg'
import suvs from './images/icon-suvs.svg'
import luxury from './images/icon-luxury.svg'

function App() {
  return (
    <div className="cardContainer">
      <Card icons = {sedans} title="SEDANS" body="Choose a sedan for its affordability and excelent fuel economy. Ideal for cruising in the city or on your next road trip.." bgColor="color1" textColor="color1"/>
      <Card icons = {suvs} title="SUVS" body="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures." bgColor="color2" textColor="color2"/>
      <Card icons = {luxury} title="LUXURY " body="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style." bgColor="color3" textColor="color3"/>
    </div>
  );
}

export default App;

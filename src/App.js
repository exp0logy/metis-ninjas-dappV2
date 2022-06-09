import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/custom.css'

import Header from './views/Header';
import Hero from './views/Hero';
import Slider from './views/Slider';
import About from './views/About';
import Minter from './views/Mint';
import Footer from './views/Footer';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Slider />
      <About />
      <Minter />
      <Footer />
    </div>
  );
}

export default App;

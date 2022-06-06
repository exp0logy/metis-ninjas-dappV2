import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/custom.css'

import Header from './views/Header';
import Hero from './views/Hero';
import Slider from './views/Slider';
import Partners from './views/Partners';
import About from './views/About';
import Roadmap from './views/Roadmap';
import Minter from './views/Mint';
import Footer from './views/Footer';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Slider />
      <Partners />
      <About />
      <Roadmap />
      <Minter />
      <Footer />
    </div>
  );
}

export default App;

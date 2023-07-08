import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Values from './Components/Values';
import Features from './Components/Features';
import Portfolio from './Components/Portfolio';
import Team from './Components/Team';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Values />
      <Features />
      <Portfolio />
      <Team />
      <Footer />
    </div>
  );
}

export default App;

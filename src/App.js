
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Appheader from './Components/Appheader';
import Hero from './Components/Hero';
import About from './Components/About';
import Services from './Components/Services';
import Works from './Components/Works';
import Teams from './Components/Teams';
import Testimonial from './Components/Testimonial';
import Pricing from './Components/Pricing';

function App() {
  return (
    <div className="App">
    <header id="header">
    <Appheader/>
    </header>
    <main>
    <Hero/>
    <About/>
    <Services/>
    <Works/>
    <Teams/>
    <Testimonial/>
    <Pricing/>
    </main>
      
    </div>
  );
}

export default App;

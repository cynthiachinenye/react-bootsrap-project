
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
import Blogs from './Components/Blogs';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

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
    <Blogs/>
    <Contact/>
    </main>
    <footer id='footer'>
    <Footer/>
    </footer>
      
    </div>
  );
}

export default App;

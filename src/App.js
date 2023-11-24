
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Appheader from './Components/Appheader';
import Hero from './Components/Hero';

function App() {
  return (
    <div className="App">
    <header id="header">
    <Appheader/>
    </header>
    <main>
    <Hero/>
    </main>
      
    </div>
  );
}

export default App;

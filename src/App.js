
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import Home from './Pages/Home';
import About from './Pages/AboutMe';
import Navbar from './components/Navbar';
import Projects from './Pages/Projects';
import New from './Pages/New';

function App() {
  return (
    <div className="App">
     < Navbar />
     <div id='home'>
     <Home />
     </div>
     <div id='about'>
     <About />
     </div>
     <Projects />
     <New />
    </div>
  );
}

export default App;


import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Navbar from './components/Navbar';
import Projects from './Pages/Projects';
import Skills from './components/Skills';
import 'font-awesome/css/font-awesome.min.css';
import Contact from './Pages/Contact';
function App() {
    return (
        <div className="App">
            < Navbar />
            <div id='home'>
                <Home />
            </div>
            <div id='about'>
                <About />
            <Projects />
            </div>
                <Skills />
            <Contact />
        </div>
    );
}

export default App;

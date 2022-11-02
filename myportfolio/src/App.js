import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Social from './components/Home/Social';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <About />
        <Skills />
      </main>
    </div>
  );
}

export default App;

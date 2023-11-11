import Hero from '../components/hero.js';
import About from '../components/aboutUS.js';
import LargeIMG from '../components/largeIMG.js';
import Footer from '../components/footer.js';
import '../styles/app.css';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <LargeIMG />
    </div>
  );
}

export default App;

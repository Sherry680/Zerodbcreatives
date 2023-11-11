<<<<<<< HEAD
import Hero from './components/hero';
import About from './components/aboutUS';
import LargeIMG from './components/largeIMG';
import Footer from './components/footer';
=======
import Hero from '../components/hero.js';
import About from '../components/aboutUS.js';
import LargeIMG from '../components/largeIMG.js';
import Footer from '../components/footer.js';
>>>>>>> 1b8863337a5c9667a5084b35e2ba9fc2300b225c
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

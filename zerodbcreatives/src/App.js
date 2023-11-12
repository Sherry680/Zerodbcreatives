import Hero from './components/hero';
import About from './components/aboutUs';
import LargeIMG from './components/largeIMG';
import Footer from './components/footer';
import './styles/app.css';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <LargeIMG />
      <Footer />
    </div>
  );
}

export default App;

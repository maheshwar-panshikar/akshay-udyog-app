import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import BestSeller from './components/BestSeller/BestSeller';
import Review from './components/Review/Review';
import WeAre from './components/WeAre/WeAre';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <BestSeller/>
      <Review />
      <WeAre/>
      <Footer/>
    </div>
  );
}

export default App;
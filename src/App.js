import HeaderBox from './components/HeaderBox';
import HeroBox from './components/HeroBox';
import ImageSlider from './components/ImageSlider';
import { SliderData } from './components/SliderData';
import './App.css'


function App() {
  return (
    <div>
      <header>
        <HeaderBox />
      </header>
      <body>

        <HeroBox />
        <ImageSlider slides={SliderData} />
      </body>
    </div>
  );
}

export default App;

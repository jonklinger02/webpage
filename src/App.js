import React, {Component} from 'react';
import HeaderBox from './components/HeaderBox';
import HeroBox from './components/HeroBox';
import ImageSlider from './components/ImageSlider';
import { SliderData } from './components/SliderData';
import './App.css'


class App extends Component {

  state = {
    active: false
  }

  render() {
    return(
      <div>
          <HeaderBox />
          <HeroBox />
          { this.state.active ? <ImageSlider slides={SliderData} /> : null }
          <div>
            <button onClick={()=> this.setState({active:!this.state.active})}>Portfolio</button>
          </div>
      </div>
    )
  }
}

export default App;

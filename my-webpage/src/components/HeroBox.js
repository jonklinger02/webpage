import React from 'react' 
import { Component } from 'react'
import old from "../pics/profpic5.jpg"
import mid from "../pics/profpic4.jpg"
import newest from "../pics/profpic3.jpg"

class HeroBox extends Component {
      
    render() {

        return(   
          <section className="hero"> 
            <div className="hero-banner">
              #imagine
            </div>
            <div className='highlight'>
              <img src={old}  alt="old" className='pic' />
            </div>
            <div className='highlight'>
              <img src={mid} className="photo2 pic" alt="mid" />
            </div>
            <div className='highlight'>
              <img src={newest} className="photo3 pic" alt="new" />
            </div>
          </section>
        )
    }    
}

export default HeroBox
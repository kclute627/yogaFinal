import React, { Component } from "react";
import AliceCarousel from "react-alice-carousel";
import today from "../assets/today3.png";
import cbs from "../assets/cbs.png";
import trib from '../assets/trib2.png';
import cosmo from '../assets/Cosmo.png';
import forbes from '../assets/forbes.png';
import windy from '../assets/windy.png';
import kelly from '../assets/kelly.png';
import time from '../assets/time.png';
import elle from '../assets/elle.png';

class Home extends Component {
  render() {
    

    return (
      <div className="Home">
        <h1>Home page</h1>

        <div className="Home__media">
          <div className="Home__media-header">
            {" "}
           <div className="Home__media-header-text">Amy In The Media</div>
          </div>
          
          

          
        </div>
        <div className="Home__media-images">
            <AliceCarousel
              items={[today, cbs, forbes, trib, time, cosmo, kelly, forbes, elle, windy].map((cur, i) => (
                <div className="image">
                  <img className={`image-${i}`} src={cur} alt="" />
                </div>
              ))}
              duration={1800}
              
              autoPlay={true}
              dotsDisabled={true}
              buttonsDisabled={true}
              responsive={{
                0: {
                  items: 1
                },
                1024: {
                  items: 7
                }
              }}
            />
          </div>
      </div>
    );
  }
}

export default Home;

import React, { Component } from "react";
import AliceCarousel from "react-alice-carousel";
import {ReactSVG} from 'react-svg';
import Fade from 'react-reveal/Fade';
import facebook from '../assets/icons/facebook.svg';
import today from "../assets/today3.png";
import twitter from '../assets/icons/twitter.svg';
import instagram from '../assets/icons/instagram.svg';
import pinterest from '../assets/icons/pinterest.svg';

import spotify from '../assets/icons/spotify.svg';
import envelope from '../assets/icons/envelope.svg';
import snapchat from '../assets/icons/snapchat-ghost.svg';

import skype from '../assets/icons/skype.svg';


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


        <div className="background">

        </div>



        <div className="Home-follow">
          <div className="Home-follow-text">
            Follow
          </div>
         
           <div className="Home-follow-icon">
             <Fade right>

               
            <div className="Home-follow-icon-box facebook">
              <ReactSVG src={facebook}/>
            </div>
           
           
              <div className="Home-follow-icon-box twitter">
              <ReactSVG src={twitter}/>
            </div>
           
            
              <div className="Home-follow-icon-box insta">
              <ReactSVG src={instagram}/>
            </div>
            <div className="Home-follow-icon-box spot">
              <ReactSVG src={spotify}/>
            </div>
            <div className="Home-follow-icon-box pin">
              <ReactSVG src={pinterest}/>
            </div>
            <div className="Home-follow-icon-box snap">
              <ReactSVG src={snapchat}/>
            </div>
            <div className="Home-follow-icon-box mail">
              <ReactSVG src={envelope}/>
            </div>
            <div className="Home-follow-icon-box skype">
              <ReactSVG src={skype}/>
            </div>
           
           
             </Fade>
           
            
            
          </div>
         
          
          
          
        </div>

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
                900: {
                  items: 5
                },
                1024: {
                  items: 5
                },
                1524: {
                  items: 5
                },
                1900: {
                  items: 7
                },

              }}
            />
          </div>


      </div>
    );
  }
}

export default Home;

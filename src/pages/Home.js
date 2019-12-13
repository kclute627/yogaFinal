import React, {Component} from 'react';
import AliceCarousel from 'react-alice-carousel';
import today from '../assets/today.png';
import cbs from '../assets/cbs.png';


class Home extends Component {
  

  render(){

    let items =  [[today, cbs, today], [today, cbs, today], [today, cbs, today]].map((cur, i) =>(
      <div className="image">
        <img className="image-1" src={cur[0]} alt=""/>
        <img className="image-2" src={cur[1]} alt=""/>
        <img src={cur[2]} alt=""/>
      </div>
  
    ))

    
    
    
   

    return (
      <div className="Home">
        <h1>Home page</h1>



        <div className="Home__media">
          <div className="Home__media-header"> <div className="Home__media-header-text">Amy In The Media</div></div>
          
          <div className="Home__media-images">
            <AliceCarousel 
            items={[today, cbs, today, cbs].map( ( cur, i) =>  (
              <div className="image">
                <img className={`image-${i}`} src={cur} alt=""/>
              </div>
            ))}
            duration={1600}
            autoPlay={true}
            responsive={{
              0: {
                  items: 1,
              },
              1024: {
                  items: 4,
              }
          }}
            
            
            />
            
          </div>
          
        </div>
        
      </div>
    )
  }
  
}

export default Home;

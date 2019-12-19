import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';



class Mainpage extends Component {


    render(){

        const home = (
            <div className="mainpage__home">
                <div className="mainpage__home-header">
                    <div className="mainpage__home-header-1">
                        At Home Yoga With Amy
                    </div>
                    <div className="mainpage__home-header-2">
                    Schedule a home yoga session  
                    </div>


                    
                    <button className="mainpage__home-btn">Schedule a Session</button>
                    
                </div>

            </div>
        )

        const about = (
            <div className="mainpage__about">

            </div>
        )
        const contact = (
            <div className="mainpage__contact">

            </div>
        )
        const photos= (
            <div className="mainpage__photos">

            </div>
        )


        return(
            <div className="mainpage__container">
                <Fade right>
                 {home}   
                </Fade>

               
            </div>
        )
    }
} 


export default Mainpage;
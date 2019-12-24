import React, { Component } from 'react';
import {connect} from "react-redux";
import Fade from 'react-reveal/Fade';



class Mainpage extends Component {


    render(){

        const home = (
            <Fade right>


            
          
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
            </Fade>
           
        )

        const about = (
            <Fade right>

            
        
            <div className="about">
               
                    ABOUT ABOUT 
                
                

            </div>
            </Fade>
          
        )
        const contact = (
         
            <Fade right>          
            
            <div className="contact">
                <div className="contact-header">
                    <div className="contact-header-1">Contact Amy</div>
                    <div className="contact-header-2">Schedule a Home Yoga Session</div>
                    <input type="email" placeholder='EMAIL' className="contact-header-email"/>
                    <input type="submit" value='Submit' className="contact-btn"/>
                </div>
            </div>
            </Fade>
            
        )
        const photos= (
            

            <Fade right>

           
            <div className="mainpage__photos">
                PHOTOS
            </div>

            </Fade>
            
        )


        return(
        

           
           

            
      
            <div className="mainpage__container">
                

            
                     {this.props.menu === 'home' ? home : this.props.menu === 'contact' ? 
               contact : this.props.menu === 'about' ? about : this.props.menu === 'photos' ? photos : home }
                
                
            </div>
          
            
           
        )
    }
} 

const mapStateToProps = state => {

    return {
        menu: state.menu
    }
}


export default connect(mapStateToProps)(Mainpage);
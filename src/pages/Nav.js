import React, { Component } from "react";
import {connect} from 'react-redux';
import { setPage } from '../store/taskActions.js';
import Fade from 'react-reveal/Fade';
class Nav extends Component {
  state = {
    clicked: false,
    listClick: false
  }

  menu = () => {
    this.setState({
      clicked: !this.state.clicked
    });
  };
  
  pageClick = (p)=> {
    
    this.setState({
      clicked: !this.state.clicked
    });

    this.props.page(p)
  }
  

  render() {
    const { clicked } = this.state;

    return (
      <Fade left>

      
      <div className={!clicked ? "nav" : "nav-big"} >
        <div className={!clicked ? "nav-box" : "nav-box-1"} onClick={this.menu}>
          <div className={!clicked ? "nav-1" : "nav-1 nav-6"}></div>
          <div className={!clicked ? "nav-2" : " nav-2 nav-5"}></div>
          <div className={!clicked ? "nav-3" : " nav-3 nav-4"}></div>
          <div className={clicked ? "none" : "nav-7"}>Menu</div>
          <div className={clicked ? "nav-8" : "none"}>Exit</div>
        </div>
        <div className={clicked ? "nav__menu" : "none"}>
            <ul>

                <li className="nav__menu-item" onClick={()=>this.pageClick('home')}>Home</li>
                <li className="nav__menu-item" onClick={()=>this.pageClick('about')}>About Amy</li>
                <li className="nav__menu-item" onClick={()=>this.pageClick('photos')}>Photos</li>
                <li className="nav__menu-item" onClick={()=>this.pageClick('contact')}>Contact Amy</li>
            </ul>
        </div>
      </div>
      </Fade>
    );
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    page: (page)=>dispatch(setPage(page))
  }
}

export default connect(null, mapDispatchToProps)(Nav);

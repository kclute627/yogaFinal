import React, { Component } from "react";

class Nav extends Component {
  state = {
    clicked: false
  };

  menu = () => {
    this.setState({
      clicked: !this.state.clicked
    });
  };

  render() {
    const { clicked } = this.state;

    return (
      <div className={!clicked ? "nav" : "nav-big"} onClick={this.menu}>
        <div className={!clicked ? "nav-box" : "nav-box-1"}>
          <div className={!clicked ? "nav-1" : "nav-1 nav-6"}></div>
          <div className={!clicked ? "nav-2" : " nav-2 nav-5"}></div>
          <div className={!clicked ? "nav-3" : " nav-3 nav-4"}></div>
          <div className={clicked ? "none" : "nav-7"}>Menu</div>
          <div className={clicked ? "nav-8" : "none"}>Exit</div>
        </div>
      </div>
    );
  }
}

export default Nav;

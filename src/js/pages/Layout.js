import React from "react";
import { Link } from "react-router";

import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";

export default class Layout extends React.Component {
  navigate() {
    console.log("this.props", this.props);
    this.props.history.replaceState(null, "/");
  }
  render(){
    return (
        <div>
          <h1>KillerNews.net</h1>
          {this.props.children}
          <Link to="archives"><button class="btn btn-primary">archives</button></Link>
          <Link to="settings"><button class="btn btn-primary">settings</button></Link>
          <button onClick={this.navigate.bind(this)}>featured</button>
          </div>
      );
  }
}
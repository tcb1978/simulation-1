//simulation - 1 37E-1 import
import React, { Component } from 'react';
// import logo from './logo.png';
import './App.css';
import axios from 'axios';
import routes from './routes';
import { Link } from "react-router-dom";
import Header from "./headerComponent";
import Shelves from "./Home";

class App extends Component {

  constructor() {
    super()
    //simulation - 1 36C state
    this.state ={
      picture: ''
    }
  }

  //simulation - 1 39C componentDidMount
  componentDidMount() {
    axios.get('http://localhost:3333/api/test')
      .then(response => {
        //simulation - 1 36D setState
        this.setState({
          picture: response.data
        })
      })
  }
//simulation - 1 36F render
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <Shelves/>
        {routes}
      </div>
    );
  }
}

export default App;

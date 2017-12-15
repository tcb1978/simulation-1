import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';


class Header extends Component {
//simulation - 1 38D- render only
    render() {
        return (
            <nav className="shelfie-header">
                <Link to="/" className="links" ><img src={logo} className="App-logo" alt="logo" /></Link>
                <h1 className="App-title">SHELFIE</h1>
            </nav>
        )
    }
}

export default Header;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Shelves extends Component {

    render() {
        return (
            <section className="">
                <div className="ShelvesDisplay">
                    <Link to='/bins/A'><button className='shelve-btn'>Shelf A</button></Link>
                    <Link to='/bins/B'><button className='shelve-btn'>Shelf B</button></Link>
                    <Link to='/bins/C'><button className='shelve-btn'>Shelf C</button></Link>
                    <Link to='/bins/D'><button className='shelve-btn'>Shelf D</button></Link>
                </div>
            </section>
        );
    }
}

export default Shelves;
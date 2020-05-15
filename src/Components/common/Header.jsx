import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Social } from '../common/Social';

export class Header extends Component {
    
    render() {
        return(
            <div className='header'>
                <div className='title'><p>Ricky & Morty <span>database</span></p></div>
                    <input
                        placeholder='Search...'
                        onChange={this.handleInputChange}
                    />
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Characters</Link>
                            </li>
                            <li>
                                <Link to="/locations/">Locations</Link>
                            </li>
                            <li>
                                <Link to="/episodes/">Episodes</Link>
                            </li>
                        </ul>
                    </nav>
                    <Social/>
            </div>
        );
    }
}

export default Header;
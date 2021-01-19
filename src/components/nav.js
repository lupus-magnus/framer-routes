import React, { Component } from 'react';
import styles from './nav.module.css';
import { Link } from 'react-router-dom';

const linkStyle = {
    color: 'white',
    textDecoration: 'none'
}
class Nav extends Component {
    state = {  }
    render() { 
        return ( 
            <nav className={styles.nav}>
                <Link style={linkStyle} to='/'><h3>Logo</h3></Link>
                <ul className={styles.navlinks}>
                    <Link style={linkStyle} to='/about'> <li>About</li> </Link>
                    <Link style={linkStyle} to='/shop'> <li>Shop</li> </Link>
                </ul>
                
            </nav>
         );
    }
}
 
export default Nav;
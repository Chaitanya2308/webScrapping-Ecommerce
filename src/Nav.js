import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';

function Nav() {

    const navStyle={
        color: 'white'
    }
  return (
 <nav>
     <h3>Web Scrapping</h3>
     <ul className="nav-links">
         <Link style={navStyle} to='/amazon'><li>Amazon</li></Link>
         <Link style={navStyle} to='/flipkart'><li>Flipkart</li></Link>  
         <Link style={navStyle} to='/snapdeal'><li>SnapDeal</li></Link>    
     </ul>
 </nav>
  );
}

export default Nav;

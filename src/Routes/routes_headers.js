import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'

function Header(){
  
return(
    
   <div>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/description'>Description</Link></li>
      </ul>
    </nav>
  </div>

)
}

export default Header;
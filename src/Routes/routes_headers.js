import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'

function Header(){
  
return(
    
   <div className = "_mg">
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/description'>Description</Link></li>
        <li><Link to='/picture'>Profile Picture</Link></li>
      </ul>
    </nav>
  </div>

)
}

export default Header;
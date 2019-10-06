import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/logo.svg';

export default function Navbar(){

    return(
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark' >
       <Link to='/' className='navbar-brand text-heading text-capitalize'> <h3><span className='mini-text'>github</span>Stats</h3> </Link>
       <div className='collapse navbar-collapse show ml-sm-2'>
        <ul className='navbar-nav ml-3'>
         <li className='navbar-item'>
          <Link to='/' className='nav-link'>
           Home
          </Link>
         </li>
         <li className='navbar-item'>
          <Link to='/Users' className='nav-link '>
           Users
          </Link>
         </li>

        </ul>
       </div>
      </nav>
    );

}

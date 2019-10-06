import React,{Component} from 'react';
import Header from '../Components/Header';
import {Link} from 'react-router-dom';

export default class Default extends Component{
  render(){
    return(
      <Header title={404} styleClass='default-hero'>
       <h2 className='text-uppercase'>You are in wrong page</h2>
       <Link to='/' className='mt-2 btn btn-dark btn-lg text-upperclass '>
       Return to home
       </Link>
      </Header>
    );
  }
}

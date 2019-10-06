import React,{Component} from 'react';
import Header from '../Components/Header';
import {Link} from 'react-router-dom';

export default class Home extends Component{
  render(){
    return(
      <>
       <Header title='github users stats'>
       <Link to='Users' className='btn btn-dark btn-lg text-uppercase mt-Z'>
        Search Users
       </Link>
       </Header>
      </>
    );
  }
}

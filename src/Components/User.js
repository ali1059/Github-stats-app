import React,{Component} from 'react';
import {Link} from 'react-router-dom';

export default class User extends Component{
  render(){
    const {login,avatar_url,url,html_url} = this.props.user;
    return(
      <div className='col-10 mx-auto col-md-6 col-lg-4 my-4'>
       <div className='card w-66' style={{height:'100%'}}>
        <img src={avatar_url}
             style={{height:'18rem'}}
             className='img-card-top'
             alt='user image'
         />
         <div className='card-body text-capitalize text-center'>
          <h6 style={{fontSize:'1.25rem'}} className='text-heading font-weight-bold'>{login}</h6>
         </div>
         <div className='card-footer'>
          <Link to={`/users/${login}`}
          className='btn btn-dark mx-2 text-capitalize'>
              details
          </Link>

           <a href={html_url}
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-danger mx-2 text-capitalize'>
              profile url
              </a>

         </div>
       </div>

      </div>
    );
  }
}

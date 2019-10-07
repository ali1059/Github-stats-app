import React,{Component} from 'react';
import {userDetails} from '../Data/details.js';
import {Link} from 'react-router-dom';

export default class singleUser extends Component{
  constructor(props){
    super(props);
    const username = this.props.match.params.username;
    this.state ={
      details:{},
      username,
      loading:true
    };
  }

  async componentDidMount(){
//const url = 'https://api.github.com/search/users?q=repos:>100+followers:>10000';
const url = `https://api.github.com/users/${this.state.username}`;
    try{
      const response = await fetch(url);
      const responseData = await response.json();
      console.log(responseData);
      this.setState({
        details:responseData,
        loading:false
      });
    }
    catch(error){
      console.log(error);
    }
  }

  render(){
    const {login, avatar_url,html_url,repos_url,name,company,blog,location,public_repos,public_gists,
    followers,following,created_at,updated_at } = this.state.details;

    if(this.state.loading){
      return(
        <div className='container'>
         <div className='row'>
          <div className='col-10 mx-auto col-md-6 my-5'>
           <h1 className='text-uppercase text-center'>Loading User....</h1>
          </div>
         </div>
        </div>
      );
    }
    return(
      <div className='container my-3'>
       <div className='row'>
        <div className='col-10 mx-auto col-md-6 mt-5'>
         <Link to='/' className='btn btn-dark text-capitalize mb-5'>back to users</Link>
         <img src={avatar_url} alt='profile_img' className='w-50 d-block mx-auto' style={{maxHeight:'20rem',borderRadius:'50%'}} />
         <a href={html_url}
            target='_blank'
            rel='noopener noreferrer'
            className='btn btn-danger my-3 ml-cus '
         >Profile Url</a>
         <a href={html_url}
            target='_blank'
            rel='noopener noreferrer'
            className='btn btn-danger my-3 ml-4'
         >Check Repos</a>
        </div>
        <div className='col-10 mx-auto col-md-6 mt-5'>
         <ul className='list-group '>
          <h2 className='mb-3 text-heading'>Information</h2>
          <li className='list-group-item text-heading'><span className='text-capitalize font-weight-bold mr-3'>Name: </span> {name}</li>
          <li className='list-group-item text-heading'><span className='text-capitalize font-weight-bold mr-3'>Location: </span>{location}</li>
          <li className='list-group-item text-heading'><span className='text-capitalize font-weight-bold mr-3'>company: </span>{company}</li>
          <li className='list-group-item text-heading'><span className='text-capitalize font-weight-bold mr-3'>username: </span>{login}</li>
          <li className='list-group-item text-heading'><span className='text-capitalize font-weight-bold mr-3'>Profile created at: </span>{created_at}</li>
          <li className='list-group-item text-heading'><span className='text-capitalize font-weight-bold mr-3'>Last updated at: </span>{updated_at}</li>
          <li className='list-group-item text-heading'><span className='text-capitalize font-weight-bold mr-3'>repositories: </span>{public_repos}</li>
          <li className='list-group-item text-heading'><span className='text-capitalize font-weight-bold mr-3'>following: </span>{following}</li>
          <li className='list-group-item text-heading'><span className='text-capitalize font-weight-bold mr-3'>followers: </span>{followers}</li>
         </ul>
        </div>
       </div>
      </div>
    );
  }
}

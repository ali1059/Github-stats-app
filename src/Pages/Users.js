import React,{Component} from 'react';
import Search from '../Components/Search';
import UsersList from '../Components/UsersList';
import {usersData} from '../Data/usersData';

export default class Users extends Component{
  state=({
    users:usersData,
    search:''
  });

  handleChange = (e)=>{
    this.setState({
    search:e.target.value
    });
  };

  handleSubmit = (e)=>{
    e.preventDefault();
    console.log('I am clicked');
  }
  render(){
    return(
      <>
       <Search search={this.state.search} handleChange={this.handleChange}
        handleSubmit= {this.handleSubmit}
        />
       <UsersList Users={this.state.users} />
      </>
    );
  }
}

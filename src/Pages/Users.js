import React,{Component} from 'react';
import Search from '../Components/Search';
import UsersList from '../Components/UsersList';
import {usersData} from '../Data/usersData';

export default class Users extends Component{
  constructor(props){
    super(props);
    this.getData=this.getData.bind(this);

}

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

async getData(){
  const url = 'https://api.github.com/search/users?q=repos:>100+followers:>10000';
  try{
    const response = await fetch(url);
    const responseData = await response.json();
    console.log(responseData);
    this.setState({
      users:responseData.items
    });
  }
  catch(error){
    console.log("error = "+error);
  }
}

componentDidMount(){
 this.getData();
}

  render(){
    console.log(this.state.users);
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

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
  users:[],
  search:'',
  url:'https://api.github.com/search/users?q=repos:>100+followers:>10000',
  error:''
});

  handleChange = (e)=>{
    this.setState({
    search:e.target.value
    });
  };

  handleSubmit = (e)=>{
    e.preventDefault();
    this.setState({
      url: `https://api.github.com/users/${this.state.search}`,
      search:'',
      users:[]
    },
  ()=>this.getData()
);
  }

async getData(){
  const url = this.state.url;
  try{
    const response = await fetch(url);
    const responseData = await response.json();
    // console.log(Object.keys(responseData).length);
    if((Object.keys(responseData).length === 3)){
    this.setState({
      users:responseData.items,
      search:'',
      error:''
    });
  }
  else if((Object.keys(responseData).length === 2)){
     this.setState({
       error:'sorry but your search did not return any result,please try again'
     });
  }
  else{
    this.setState({
      users:[responseData],
      search:'',
      error:''
    });
  }
}
  catch(error){
    console.log("error = "+error);
  }
}

componentDidMount(){
 this.getData();
}

  render(){
    return(
      <>
       <Search search={this.state.search} handleChange={this.handleChange}
        handleSubmit= {this.handleSubmit}
        />
        {this.state.error ? (
         <section>
          <div className='row'>
           <div className='col-10 mx-auto'>
           <h1 className='text-center text-uppercase mt-5 text-heading' style={{color:'#c70d3a'}}>{this.state.error}</h1>
           </div>
          </div>
         </section>
        ): (<UsersList Users={this.state.users} />  )}

      </>
    );
  }
}

import React,{Component} from 'react';
import User from './User';
export default class UsersList extends Component{

  render(){
    const {Users} = this.props;
    return(
      <>
      <div className='container py-5'>
      
        <div className='row'>
         <div className='col-10 mx-auto col-md-8 mb-3 text-center text-capitalize'>
          <h1 className='text-heading'>Users with most followers and repositories </h1>
         </div>
        </div>
        <div className='row'>
        {Users.map(user=>(
          <User key={user.id} user={user} />
        ))}
        </div>
      </div>

      </>
   );
  }
}

import React,{Component} from 'react';

export default class Search extends Component{
  render(){
    const {search,handleChange,handleSubmit} = this.props;
    return(
      <div className='container'>
       <div className='row'>
        <div className='col-10 col-md-8 text-center mt-5 mx-auto'>
         <h1 className='text-capitalize text-heading'>search Github users</h1>
         <form className='mt-4'>
          <label htmlFor='search' className='text-capitalize'>type username of user </label>
          <div className='input-group'>
           <input type='text' name='search' className='form-control' placeholder='Username' value={search} onChange={handleChange} />
           <div className='input-group-append'>
            <button type='submit' className='input-group-text bg-dark text-white'
            onClick={handleSubmit} > <i className='fa fa-search' /></button>
           </div>
          </div>
         </form>
        </div>
       </div>
      </div>
    );
  }
}

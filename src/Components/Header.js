import React,{Component} from 'react';

export default function Header({children,title,styleClass}){
  return(
    <header>
     <div className='container-fluid'>
      <div className={`row  ${styleClass}`}>
       <div className='col text-center'>
        <h1 className='text-uppercase text-heading letter-spacing margin display-4'>{title}</h1>
        {children}
       </div>
      </div>
     </div>
    </header>
  );
}

Header.defaultProps = {
  title:'Default Title',
  styleClass:'header-hero'
};

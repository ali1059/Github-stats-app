import React from 'react';
import './App.css';
import Home from  './Pages/Home';
import Users from './Pages/Users';
import SingleUser from './Pages/singleUser';
import Default from './Pages/Default';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

function App() {
  return (
    <Router>
     <main>
     <Navbar />
      <Switch>
       <Route path='/' exact component={Home} />
       <Route path='/Users' exact component={Users} />
       <Route path='/Users/:id' component={SingleUser} />
       <Route component={Default} />
      </Switch>
    </main>
    </Router>

  );
}

export default App;

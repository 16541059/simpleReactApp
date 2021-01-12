import React from 'react';

import './App.css';

import Navbar from  "./companent/Navbar/Navbar"
import Login from "./companent/Login/Login"

import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faCoffee, faCartPlus,faCircleNotch, faTrashAlt, 
  faUserAlt, faUserCircle, faUser, faSignOutAlt, faEnvelope, 
  faUnlockAlt, faSignInAlt, faInfo, faPlus, faMinus, faEye} from '@fortawesome/free-solid-svg-icons'
import Foter from './companent/Fotter/Foter';
import { Switch, Route } from 'react-router-dom';
import Home from './companent/Home/Home';
import Cart from './companent/Cart/Cart';
  
library.add(fab, faCheckSquare, faCoffee,faCartPlus,faCircleNotch,
  faTrashAlt,faUserAlt,faUserCircle,faUser,
  faSignOutAlt,faEnvelope,faUnlockAlt,faSignInAlt,faInfo,faPlus,faMinus,
  faEye
  )
function App() {
  return (
    <div  >
     
      <Navbar />

    <Switch>
    <Route path="/" exact component={""}/>
    <Route path="/login" component={Login} />
    <Route path="/home" component={Home} />
    <Route path="/cart" component={Cart}/>
    </Switch>
     
     <Foter/>
     
    </div>
  );
}

export default App;

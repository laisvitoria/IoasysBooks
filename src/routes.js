import React, {useContext} from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';

import Login from './pages/Login';

import history from './history'
import { Context } from './hooks/AuthContext'

function CustomRoute({ isPrivate, isSoPublic, ...rest }) {
    const { authenticated } = useContext(Context)
    
    if (isPrivate) {
      let token
      if(localStorage.length > 1){
        token = localStorage.getItem('token')
      }else{
        token = sessionStorage.getItem('token')
      }
      if(!token){
        return <Redirect to='/' />
      }
    }
  
    if (authenticated === true && isSoPublic) {
      return <Redirect to='/' />
    }
  
    return <Route {...rest} />
  }
  
  const Routes = () => (
    <Router history={history}>
        <Switch>
            <CustomRoute exact isSoPublic path='/' component={Login} />
        </Switch>
    </Router>
  );
  
  export default Routes;
  
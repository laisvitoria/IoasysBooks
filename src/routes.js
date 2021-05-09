import React, {useContext} from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';

import Login from './pages/Login';
import Books from './pages/Books';

import history from './history'
import { Context } from './hooks/AuthContext'

function CustomRoute({ isPrivate, isSoPublic, ...rest }) {
    const { authenticated } = useContext(Context)
    
    if (isPrivate && authenticated===false) {
        return <Redirect to='/' />
    }
  
    if (authenticated === true && isSoPublic) {
      return <Redirect to='/home' />
    }
  
    return <Route {...rest} />
  }
  
  const Routes = () => (
    <Router history={history}>
        <Switch>
            <CustomRoute exact isSoPublic path='/' component={Login} />
            <CustomRoute exact isPrivate path='/home' component={Books} />
        </Switch>
    </Router>
  );
  
  export default Routes;
  
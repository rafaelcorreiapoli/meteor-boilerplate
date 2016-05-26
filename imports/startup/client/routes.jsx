import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// route components
import AppContainer from '/imports/ui/containers/AppContainer';
import Contacts from '/imports/ui/pages/contacts/Contacts';
import Requests from '/imports/ui/pages/requests/Requests';
import Home from '/imports/ui/pages/home/Home';
import SignIn from '/imports/ui/pages/accounts/sign_in/SignIn';
import Guest from '/imports/ui/layouts/Guest';

function requireAuth(nextState, replace) {
  if (!Meteor.userId()) {
    replace({
      pathname: '/sign-in',
      state: { nextPathname: nextState.location.pathname }
    });
  }
}

export default renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={AppContainer}>
    	<IndexRoute component={ Home } />
    	<Route path="/sign-in" component={ SignIn } />
      <Route path="/contacts" component={ Contacts } onEnter={requireAuth} />
      <Route path="/requests" component={ Requests } onEnter={requireAuth} />
    </Route>
  </Router>
);

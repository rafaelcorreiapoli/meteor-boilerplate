import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// route components
import AppContainer from '/imports/ui/containers/AppContainer';
import Contacts from '/imports/ui/pages/contacts/Contacts';
import Requests from '/imports/ui/pages/requests/Requests';
import Home from '/imports/ui/pages/home/Home';

export default renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={AppContainer}>
    	<IndexRoute component={ Home } />
      <Route path="/contacts" component={ Contacts } />
      <Route path="/requests" component={ Requests } />
    </Route>
  </Router>
);

import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

/**
 * Routes Security
 */
 FlowRouter.triggers.enter([AccountsTemplates.ensureSignedIn]);


/**
 * Contacts Routes
 *
 * @type       {<type>}
 */
let contactsRoutes = FlowRouter.group({
  prefix: '/contacts',
  name: 'contacts',
});

contactsRoutes.route('/', {
	name: 'contacts.index',
	action() {
		BlazeLayout.render('mainLayout', {main: 'contactsPage'});
	}
});

/**
 * Requests Routes
 *
 * @type       {<type>}
 */
let requestsRoutes = FlowRouter.group({
  prefix: '/requests',
  name: 'requests',
});

requestsRoutes.route('/', {
	name: 'requests.index',
	action() {
		BlazeLayout.render('mainLayout', {main: 'requestsPage'});
	}
});

/**
 * Initial Route
 */
FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render('mainLayout', { main: 'homePage' });
  }
});


/**
 * Accounts Routes
 */
AccountsTemplates.configureRoute('signIn', {
  name: 'signIn',
  path: '/sign-in',
  template: 'signIn',
  layoutTemplate: 'guestLayout',
  contentRegion: 'main'
});

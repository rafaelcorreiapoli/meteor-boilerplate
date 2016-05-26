import { Template } from 'meteor/templating';

import './menu.html';

Template.menu.events({
	'click [data-action="logout"]'(e, t) {
		e.preventDefault();

		AccountsTemplates.logout();
	}
});

	
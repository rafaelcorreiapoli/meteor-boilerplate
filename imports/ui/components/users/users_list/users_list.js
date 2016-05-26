import './users_list.html';
import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

Template.usersList.helpers({
	users() {
		return Meteor.users.find({}, {
			sort: {
				_id: 1
			}
		});
	}
});

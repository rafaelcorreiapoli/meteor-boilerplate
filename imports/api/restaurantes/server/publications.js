import { Meteor } from 'meteor/meteor';
import { Restaurantes } from '../restaurantes';

Meteor.publish('restaurantes', function() {
	return Restaurantes.find();
});

import { Meteor } from 'meteor/meteor';
import { Questionarios } from '../questionarios';
import { check } from 'meteor/check';

Meteor.publish('questionarios.porRestaurante', function({restauranteId}) {
	check(restauranteId, String);
	return Questionarios.find({
		restauranteId
	});
});


Meteor.publish('questionarios.single', function({ id }) {
	check(id, String);
	return Questionarios.find({
		_id: id
	});
});

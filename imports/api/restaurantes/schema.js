import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const RestauranteSchema = new SimpleSchema({
	name: {
		type: String
	},
	category: {
		type: String
	},
	rating: {
		type: Number,
		decimal: true
	},
	lat: {
		type: Number,
		decimal: true,
		optional: true
	},
	lng: {
		type: Number,
		decimal: true,
		optional: true
	},
	minTime: {
		type: Number
	},
	maxTime: {
		type: Number
	},
	logoUrl: {
		type: String
	}
});


import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const RestauranteSchema = new SimpleSchema({
	nome: {
		type: String
	},
	cnpj: {
		type: String
	},
	lat: {
		type: Number,
		decimal: true
	},
	lng: {
		type: Number,
		decimal: true
	},
	logoUrl: {
		type: String
	}
});


import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const PromocaoSchema = new SimpleSchema({
	restauranteId: {
		type: String
	},
	nome: {
		type: String
	},
	validoAte: {
		type: Date
	},
	descricao: {
		type: String
	}
});


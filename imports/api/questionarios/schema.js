import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const QuestionarioSchema = new SimpleSchema({
	nome: {
		type: String
	},
	restauranteId: {
		type: String
	},
	tempoMedio: {
		type: Number
	}
});


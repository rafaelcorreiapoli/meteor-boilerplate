import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const QuestionarioRespondidoSchema = new SimpleSchema({
	userId: {
		type: String
	},
	promocaoId: {
		type: String
	},
	data: {
		type: String
	}
});

export const QuestionarioSchema = new SimpleSchema({
	nome: {
		type: String
	},
	restauranteId: {
		type: String
	},
	responderam: {
		type: [QuestionarioRespondidoSchema]
	},
	tempoMedio: {
		type: Number
	}
});


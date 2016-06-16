import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const RespostaSchema = new SimpleSchema({
	questionarioId: {
		type: String
	},
	perguntaId: {
		type: String
	},
	tipo: {
		type: Number
	},
	conteudo: {
		type: Object,
		blackbox: true
	}
});


import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { RestauranteSchema } from './schema';
import { Restaurantes } from './restaurantes';

export const insert = new ValidatedMethod({
	name: 'restaurantes.insert',
	validate: RestauranteSchema.validator(),
	run({nome, cnpj, lat, lng, logoUrl}) {
		let newRestaurante = {
			nome,
			cnpj,
			lat,
			lng,
			logoUrl
		};

		return Restaurantes.insert(newRestaurante);
	}
});

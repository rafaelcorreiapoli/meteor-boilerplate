import { Meteor } from 'meteor/meteor';
import { Promocoes } from '../promocoes';
import { Questionarios } from '../../questionarios/questionarios';
import { Perguntas } from '../../perguntas/perguntas';
import { check } from 'meteor/check';

Meteor.publish('promocoes', function() {
  return Promocoes.find();
});

Meteor.publish('promocoes.porRestaurante', function({ restauranteId }) {
  Meteor._sleepForMs(1000);
  console.log(restauranteId);
  check(restauranteId, String);
  return Promocoes.find({
    restauranteId
  });
});


Meteor.publishComposite('promocoes.single', function({ id }) {
	check(id, String);
  return {
    find() {
      // Find top ten highest scoring posts
      return Promocoes.find({
        _id: id
      });
    },
    children: [{
      find(promocao) {
        const { questionarioId } = promocao;
        return Questionarios.find({
          _id: questionarioId
        });
      },
      children: [{
      	find(questionario) {
      		const { _id } = questionario;
      		return Perguntas.find({
      			questionarioId: _id
      		});
      	}
      }]
    }]
  };
});

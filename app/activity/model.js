import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr('string'),
  category: DS.attr('string'),
  value: DS.attr('string')
});

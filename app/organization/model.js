import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  contact: DS.attr('string'),
  goal: DS.attr('string'),
  activities: DS.attr(),
});

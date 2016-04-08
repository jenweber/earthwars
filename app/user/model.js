import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  organization_id: DS.attr('number'),
  name: DS.attr('string'),

  organization: DS.belongsTo('organization'),
  activities: DS.hasMany('activities')
});

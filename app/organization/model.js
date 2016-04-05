import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr('string'),
  contact: DS.attr('string'),
  goal: DS.attr('string'),
  activities: DS.attr(),
  activityTotal: Ember.computed('activities',function() {
    let activities = this.get('activities');
    return activities.get('length');
    // return 5;
  }),
});

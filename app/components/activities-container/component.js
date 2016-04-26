import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'table',
  classNames: ['activities-container'],
  // sortedActivities: Ember.computed({})
  actions: {
  updateActivity: function(){
    console.log('Component Action : updateActivity');
    this.sendAction('routeUpdateActivity', this.get('activity'));
  },
  destroyActivity: function(activity){
    console.log('parent Component Action : destroyActivity');
    console.log(this.get('activity'));
    this.sendAction('routeDestroyActivity', activity);
  }
}

});

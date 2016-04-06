import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    console.log('organization model called');
    return {
      activities: this.store.findAll('activity'),
    };
  }

});

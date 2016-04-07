// Rows in the table of a user's past activities
import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
  updateActivity: function(){
    console.log('Component Action : updateActivity');
    this.sendAction('routeUpdateActivity', this.get('activity'));
  },
  destroyActivity: function(){
    console.log('Component Action : destroyActivity');
    this.sendAction('routeDestroyActivity', this.get('activity'));
  }
}
});

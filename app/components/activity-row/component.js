// Rows in the table of a user's past activities
import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',
  actions: {
  updateActivity: function(){
    console.log('Component Action : updateActivity');
    this.sendAction('routeUpdateActivity', this.get('activity'));
  },
  destroyActivity: function(){
    console.log('Component Action : destroyActivity');
    console.log(this.get('activity'));
    this.sendAction('destroyActivity', this.get('activity'));
  }
}
});

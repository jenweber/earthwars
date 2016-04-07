// passes up actions for the navbar
import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),

  user: Ember.computed.alias('auth.credentials.email'),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),

  actions: {
    signOut: function () {
      this.sendAction('signOut');
      console.log("component action: sign out");
    },
    createActivity: function () {
      console.log("my application component create activity");
      this.sendAction('createActivity');
    }
  }
});

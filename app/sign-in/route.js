import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  flashMessages: Ember.inject.service(),
  credentials: storageFor('auth'),
  isAdmin: Ember.computed.bool('credentials.admin'),

  actions: {
    signIn (credentials) {
      return this.get('auth').signIn(credentials)
      .then(() => this.get('isAdmin') ? this.transitionTo('admin-dashboard') : this.transitionTo('activities'))
      // .then(() => this.get('flashMessages').success('Thanks for signing in!'))
      .catch(() => {
        this.get('flashMessages')
        .danger('There was a problem. Please try again.');
      });
    },
  },
});

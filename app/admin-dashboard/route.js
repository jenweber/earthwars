import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Route.extend({
  credentials: storageFor('auth'),
  form: {},
  model: function() {
    console.log('organization model called');
    let orgId = this.get('credentials.organization_id');

    return {
      activities: this.store.findAll('activity'),
      organization: this.store.findRecord('organization', orgId),
    };
  },
});

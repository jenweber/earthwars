// Organization form component - actions must be defined here AND in the organization/route

import Ember from 'ember';

export default Ember.Component.extend({
  form: {},
  actions: {
    createOrganization: function(){
      console.log('Component Action : createOrganization');
      this.sendAction('routeCreateOrganization', this.get('form'));
      this.set('form', {});
    }
  }
});

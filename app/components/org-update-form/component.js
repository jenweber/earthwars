// Passes up the update organization form actions
import Ember from 'ember';

export default Ember.Component.extend({
  form: {},
  actions: {
    updateOrganization: function(){
      console.log('Component Action : updateOrganization');
      this.sendAction('updateOrganization', this.get('organization'));
      this.set('form', {});
    }
  }
});

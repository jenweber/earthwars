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

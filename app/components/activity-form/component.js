import Ember from 'ember';

export default Ember.Component.extend({
  form: {},
  actions: {
    createActivity: function(){
      console.log('Component Action : createActivity');
      this.sendAction('createActivity', this.get('form'));
      this.set('form', {});
    }
  }
});

import Ember from 'ember';

export default Ember.Component.extend({
  form: {},
  actions: {
    createActivity: function(){
      console.log('Component Action : createActivity');
      this.sendAction('createActivity', this.get('form'));
      this.set('form', {});
    },
    selectBike () {
      this.set('form.name', 'Rode a bike to and from work');
      this.set('form.category', 'Transportation');
      this.set('form.value', '10');
      console.log('selectBike fired');
    },
  }
});

import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  classNames: ['form-horizontal'],

  credentials: {},

// model: function() {
//   console.log("model called for organizations");
//   return this.store.findAll('organization');
//   },

  actions: {
    submit () {
      this.sendAction('submit', this.get('credentials'));
    },
    reset () {
      this.set('credentials', {});
    },
  },
});

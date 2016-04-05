import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  classNames: ['form-horizontal'],
  organizationid: null,

  credentials: {},

  actions: {
    selectValue () {
      // this.set('organizationid', Ember.$('select').val());
      this.set('credentials.organization_id', Ember.$('select').val());
    },
    submit () {
      this.sendAction('submit', this.get('credentials'));
    },
    reset () {
      this.set('credentials', {});
    },
  },
});

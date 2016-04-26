import Ember from 'ember';

export default Ember.Component.extend({
  form: {},
  actions: {
    createActivity: function(){
      console.log('Component Action : createActivity');
      if (this.get('form.value') > 0) {
      this.sendAction('createActivity', this.get('form'));
      this.set('form', {});
      }
    },
    selectBicycle () {
      this.set('form.name', 'Rode a bike to and from work');
      this.set('form.category', 'Transportation');
      this.set('form.value', '5');
    },
    selectWalk () {
      this.set('form.name', 'Walked to and from work');
      this.set('form.category', 'Transportation');
      this.set('form.value', '5');
    },
    selectPublicTransport () {
      this.set('form.name', 'Took public transportation to and from work');
      this.set('form.category', 'Transportation');
      this.set('form.value', '5');
    },
    selectCoffee () {
      this.set('form.name', 'Used my own cup or water bottle instead of disposables');
      this.set('form.category', 'Reduce Waste');
      this.set('form.value', '4');
    },
    selectCutlery () {
      this.set('form.name', 'Used my own cutlery instead of disposables');
      this.set('form.category', 'Reduce Waste');
      this.set('form.value', '4');
    },
    selectTelevision () {
      this.set('form.name', 'Turned off a projector or TV');
      this.set('form.category', 'Electricity');
      this.set('form.value', '3');
    },
    selectDoubleLightbulb () {
      this.set('form.name', 'Turned off multiple lights left on');
      this.set('form.category', 'Electricity');
      this.set('form.value', '3');
    },
    selectPlug () {
      this.set('form.name', 'Unplugged my computer at the end of the day');
      this.set('form.category', 'Electricity');
      this.set('form.value', '3');
    },
    selectCompost () {
      this.set('form.name', 'Rode a bike to and from work');
      this.set('form.category', 'Recycling');
      this.set('form.value', '2');
    },
    selectRecycle () {
      this.set('form.name', 'Made one trip to a recycling bin');
      this.set('form.category', 'Recycling');
      this.set('form.value', '2');
    },
  }
});

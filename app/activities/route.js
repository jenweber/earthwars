import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
  return this.store.findAll('activity');
  },
  actions: {
      createActivity: function(properties){
        console.log('Route Action : createActivity');
        this.store.createRecord('activity', properties)
          .save().then(()=>console.log('record created'));
      },
      updateActivity: function(activity) {
        console.log('Route Action : updateActivity');
        activity.save();
      },
      destroyActivity: function(activity){
        console.log('Route Action : destroyActivity');
          activity.destroyRecord();
      }
    }
});

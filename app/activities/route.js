import Ember from 'ember';

export default Ember.Route.extend({
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
      destroyActivity: function(id){
        console.log('Route Action : destroyActivity');
        this.store.findRecord('activity', id).then((activity) => {
          this.store.deleteRecord(activity);
          console.log(`record ${id} destroyed`);
        });
      }
    }
});

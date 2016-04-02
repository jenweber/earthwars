import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
      createOrganization: function(properties){
        console.log('Route Action : createOrganization');
        this.store.createRecord('organization', properties)
          .save().then(()=>console.log('record created'));
      },
      updateOrganization: function(organization) {
        console.log('Route Action : updateOrganization');
        organization.save();
      },
      destroyOrganization: function(id){
        console.log('Route Action : destroyOrganization');
        this.store.findRecord('organization', id).then((organization) => {
          this.store.deleteRecord(organization);
          console.log(`record ${id} destroyed`);
        });
      }
    }
});

// updateOrganization:  function() {console.log('Route Action: Update Organization');},
// destroyOrganization:  function() {console.log('Route Action: Destroy Organization');},
